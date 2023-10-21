// Define the current page using a variable
let currentPage = 1;

// Function to move to the next page
function showNextPage() {
    // Hide the current page
    document.getElementById('page' + currentPage).style.display = 'none';

    // Determine the next page
    currentPage++;

    if (currentPage > 4) {
        currentPage = 1; // If it exceeds the number of pages, reset to the first page
    }

    // Show the next page
    document.getElementById('page' + currentPage).style.display = 'block';
}

// Function to export results to PDF
function exportToPDF() {
    // Implement PDF export logic here
    alert('Exporting to PDF...');
}

// Function to export results to DOCX
function exportToDOCX() {
    // Implement DOCX export logic here
    alert('Exporting to DOCX...');
}

// Initially, show the first page and hide the others
showNextPage(); // This will show the first page initially
