 function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Change this value to trigger the animation sooner
      // Now it will trigger when the element is 20% into view
      return rect.top <= windowHeight * 0.8;
    }

    function handleScroll() {
      const items = document.querySelectorAll('.portfolio-item');
      items.forEach(item => {
        if (isElementInViewport(item) && !item.classList.contains('visible')) {
          item.classList.add('visible');
        }
      });
    }

    // Initial check
    window.addEventListener('load', handleScroll);

    // Add scroll event listener with throttling
    let isScrolling = false;
    window.addEventListener('scroll', () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          handleScroll();
          isScrolling = false;
        });
        isScrolling = true;
      }
    });


    document.querySelector('#f').checked = true;
