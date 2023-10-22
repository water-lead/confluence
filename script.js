
let currentPage = 1;

function showNextPage(nextPage) {
    document.getElementById('page' + currentPage).style.display = 'none';
    currentPage = nextPage;
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
document.getElementById('page0').style.display = 'show';
document.getElementById('page1').style.display = 'block';
document.getElementById('page2').style.display = 'none';
document.getElementById('page3').style.display = 'none';
document.getElementById('page4').style.display = 'none';

