// script.js

// Function to move to the next page
function moveToPage(pageNumber) {
    // Hide the current page
    document.getElementById('page' + pageNumber).style.display = 'none';

    // Show the next page
    pageNumber++;
    document.getElementById('page' + pageNumber).style.display = 'block';
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
document.getElementById('page1').style.display = 'block';
document.getElementById('page2').style.display = 'none';
document.getElementById('page3').style.display = 'none';
document.getElementById('page4').style.display = 'none';

function showNextPage(currentPage) {
    // Determine the next page
    const nextPage = currentPage + 1;
            // Hide all pages
            for (let i = 1; i <= 4; i++) {
   
            // Show the specified page
            document.getElementById('page' + i).style.display = 'block';
}              
     document.getElementById('page' + i).style.display = 'n';
            }  
