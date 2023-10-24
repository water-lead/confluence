<body>

<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-auth-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore-compat.js"></script>


<script>
const firebaseConfig = {
    apiKey: "AIzaSyD_pNw4ZIfdKNWunsCxMuHAotCBVPITa3I",
    authDomain: "confluence-auth-8d9d6.firebaseapp.com",
    projectId: "confluence-auth-8d9d6",
    storageBucket: "confluence-auth-8d9d6.appspot.com",
    messagingSenderId: "240489843371",
    appId: "1:240489843371:web:758608b4ab14c536b745ee",
    measurementId: "G-0F4C8M353B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const analytics = getAnalytics(app);

let currentPage = 1;

function authentication(step){
    if (step === 1) {
        const email = prompt("Please enter your email for verification:");

        // Check if email is in the invitations collection in Firestore
        const docRef = doc(db, "invitations", email);
        getDoc(docRef).then((docSnapshot) => {
            if (docSnapshot.exists()) {
                // Email exists in the invitation collection
                // Redirect or show a registration form here
                window.location.href = "studio.html";
            } else {
                alert("Sorry, you do not have an invitation.");
            }
        });
    }
}

function showNextPage(nextPage) {
    document.getElementById('page' + currentPage).style.display = 'none';
    currentPage = nextPage;
    document.getElementById('page' + currentPage).style.display = 'block';
}

function showPreviousPage(previousPage) {
    document.getElementById('page' - currentPage).style.display = 'none';
    currentPage = previousPage;
    document.getElementById('page' - currentPage).style.display = 'block';
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
</script>
  </body>
