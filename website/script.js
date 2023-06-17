function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScroll() {
    var fadeInSection = document.querySelectorAll('.fade-in-section');
  
    for (var i = 0; i < fadeInSection.length; i++) {
      if (isElementInViewport(fadeInSection[i])) {
        fadeInSection[i].classList.add('fade-in');
      }
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);