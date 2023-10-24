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

var uiConfig = {
    signInSuccessUrl: 'studio.html',
    signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
};

var ui = new firebaseui.auth.AuthUI(firebase.auth());

function transformToEmailForm() {
    const button = document.getElementById('startButton');
    button.innerText = '';  // Clear 'START' text
    button.classList.add('transformed');
    document.getElementById('authEmail').focus();
}

function authenticateUser() {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value; // Get password here

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log("User signed in: ", user);
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error signing in: ", errorMessage);
    });
}

let currentPage = 1;

function showNextPage(nextPageId) {
    // Hide all page sections
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the next page section
    const nextPage = document.getElementById(`page${nextPageId}`);
    if (nextPage) {
        nextPage.style.display = 'block';
    }
}

function showPreviousPage(prevPageId) {
    showNextPage(prevPageId);  // Use the same function to show the previous page
}

function exportToPDF() {
    alert('Exporting to PDF...');
}

function exportToDOCX() {
    alert('Exporting to DOCX...');
}

// Wait for DOM to load before setting up event listeners and initial display
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', transformToEmailForm);
    document.getElementById('emailForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevents default form submission which refreshes the page
        authenticateUser();
    });

    // Simplified page initialization
    //for (let i = 1; i <= 10; i++) {
      //  document.getElementById('page' + i).style.display = (i === 1) ? 'block' : 'none';
    //}

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
});
