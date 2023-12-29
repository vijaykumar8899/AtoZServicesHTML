document.addEventListener('DOMContentLoaded', function() {
    const pdfButton = document.getElementById('pdfButton');
    pdfButton.addEventListener('click', function() {
      const pdfURL = 'assets/pdf1.pdf';
      window.open(pdfURL, '_blank');
    });
  });
  



  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 500;
  
    if (scrolled) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  