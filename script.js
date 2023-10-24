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

function authenticateUser() {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;

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
    showNextPage(prevPageId);
}

function exportToPDF() {
    alert('Exporting to PDF...');
}

function exportToDOCX() {
    alert('Exporting to DOCX...');
}

document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const emailForm = document.getElementById('email');
    const passwordForm = document.getElementById('password');
    
    startButton.onclick = function() {
        this.style.display = 'none'; // Hide the start button
        emailForm.style.display = 'block'; // Show email form
    }

    emailForm.oninput = function() {
        this.style.display = 'none'; // Hide email form
        passwordForm.style.display = 'block'; // Show password form
    }

    passwordForm.onsubmit = function(event) {
        event.preventDefault();
        authenticateUser();
    }

    // Simplified page initialization
    for (let i = 1; i <= 10; i++) {
        document.getElementById('page' + i).style.display = (i === 1) ? 'block' : 'none';
    }
});
