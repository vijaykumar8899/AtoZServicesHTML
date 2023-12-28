document.addEventListener('DOMContentLoaded', function() {
    const pdfButton = document.getElementById('pdfButton');
    pdfButton.addEventListener('click', function() {
      const pdfURL = 'assets/pdf1.pdf';
      window.open(pdfURL, '_blank');
    });
  });
  