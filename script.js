window.addEventListener('load', () => {
    // GSAP animations for products
    gsap.from('.product', {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        ease: 'power2.out',
    });

    // Animation on hover for products
    document.querySelectorAll('.product').forEach(product => {
        product.addEventListener('mouseenter', () => {
            gsap.to(product, {
                duration: 0.5,
                scale: 1.05, 
                ease: 'elastic.out(1, 0.3)',
            });
            gsap.to(product.querySelector('img'), {
                duration: 0.5,
                rotation: 5, 
                ease: 'power1.out',
            });
        });

        product.addEventListener('mouseleave', () => {
            gsap.to(product, {
                duration: 0.5,
                scale: 1,
                ease: 'elastic.out(1, 0.3)',
            });
            gsap.to(product.querySelector('img'), {
                duration: 0.5,
                rotation: 0,
                ease: 'power1.out',
            });
        });
    });

    // GSAP animation for navbar links
    gsap.from('.nav-links li', {
        duration: 1,
        opacity: 0,
        y: -20,
        stagger: 0.1,
        ease: 'back.out(1.7)',
    });

    // Dropdown animation on hover
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.addEventListener('mouseenter', () => {
            gsap.fromTo(dropdown.querySelector('.dropdown-menu'), {
                opacity: 0,
                y: -10
            }, {
                opacity: 1,
                y: 0,
                duration: 0.3,
                ease: 'power1.out'
            });
        });

        dropdown.addEventListener('mouseleave', () => {
            gsap.to(dropdown.querySelector('.dropdown-menu'), {
                opacity: 0,
                y: -10,
                duration: 0.3,
                ease: 'power1.out'
            });
        });
    });

    function filterProducts() {
        var input, filter, container, images, description, i, txtValue;
        input = document.getElementById("search");
        filter = input.value.toUpperCase();
        container = document.getElementsByClassName("product")[0];
        images = container.getElementsByClassName("h2");
      
        for (i = 0; i < images.length; i++) {
          description = images[i].getElementsByClassName("p")[0];
          txtValue = description.textContent || description.innerText;
      
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            images[i].style.display = "";
          } else {
            images[i].style.display = "none";
          }
        }
      }

    // Event listeners for search functionality
    searchButton.addEventListener('click', () => {
        const searchTerm = searchInput.value.toLowerCase();
        filterProducts(searchTerm);
    });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        filterProducts(searchTerm);
    });
});
