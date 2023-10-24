const firebaseConfig = {
    apiKey: "AIzaSyD_pNw4ZIfdKNWunsCxMuHAotCBVPITa3I",
    authDomain: "confluence-auth-8d9d6.firebaseapp.com",
    projectId: "confluence-auth-8d9d6",
    storageBucket: "confluence-auth-8d9d6.appspot.com",
    messagingSenderId: "240489843371",
    appId: "1:240489843371:web:758608b4ab14c536b745ee",
    measurementId: "G-0F4C8M353B"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const analytics = firebase.analytics();

// FirebaseUI config
var uiConfig = {
    signInSuccessUrl: 'studio.html',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};

// Initialize the FirebaseUI Widget using Firebase
var ui = new firebaseui.auth.AuthUI(firebase.auth());

function transformToEmailForm() {
    const button = document.getElementById('startButton');
    button.innerText = '';  /* Clear 'START' text */
    button.classList.add('transformed');
    document.getElementById('authEmail').focus();
}

function authentication(step) {
    if (step === 1) {
        const email = document.getElementById('authEmail').value;
        
        // Check if email is in the invitations collection in Firestore
        const docRef = db.collection("invitations").doc(email);
        docRef.get().then((docSnapshot) => {
            if (docSnapshot.exists) {
                // Email exists in the invitation collection
                // Redirect or show a registration form here
                window.location.href = "studio.html";
            } else {
                alert("Sorry, you do not have an invitation.");
            }
        });
    }
}
       
let currentPage = 1;

function showNextPage(nextPage) {
    document.getElementById('page' + currentPage).style.display = 'none';
    currentPage = nextPage;
    document.getElementById('page' + currentPage).style.display = 'block';
}

function showPreviousPage(previousPage) {
    document.getElementById('page' + currentPage).style.display = 'none';
    currentPage = previousPage;
    document.getElementById('page' + currentPage).style.display = 'block';
}

function exportToPDF() {
    // Implement PDF export logic here
    alert('Exporting to PDF...');
}

function exportToDOCX() {
    // Implement DOCX export logic here
    alert('Exporting to DOCX...');
}

// Initially, show the first page and hide the others
document.getElementById('page1').style.display = 'block';
document.getElementById('page2').style.display = 'none';
document.getElementById('page3').style.display = 'none';
document.getElementById('page4').style.display = 'none';
document.getElementById('page5').style.display = 'none';
document.getElementById('page6').style.display = 'none';
document.getElementById('page7').style.display = 'none';
document.getElementById('page8').style.display = 'none';
document.getElementById('page9').style.display = 'none';
document.getElementById('page10').style.display = 'none';

