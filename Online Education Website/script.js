    const hdr = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const lis = document.querySelectorAll('nav ul li');
    const firstAnchor = lis[0].querySelector('a');

    // Function to set the first list item as active by default
    // function unsetFirstItemActive(){
    //     firstAnchor.classList.remove('active');
    //     firstAnchor.removeEventListener('mouseleave',unsetFirstItemActive);
    // }

    // function setFirstItemActive() {
    //   firstAnchor.classList.add('active');
    //   firstAnchor.addEventListener('mouseleave',unsetFirstItemActive)
    // }

    // Function to handle scroll event
    function handleScroll() {
      if (window.scrollY > 0) {
        hdr.classList.add('full');
      } else {
        hdr.classList.remove('full');
      }
    }

    // Function to handle mouseenter event for sections and header
    // function handleMouseEnter(e) {
    //   let loc = e.target.id;
    //   lis.forEach(li => {
    //     const anchor = li.querySelector('a');
    //     const isMatchingSection = anchor.getAttribute('href') === `#${loc}`;

    //     if (isMatchingSection) {
    //       anchor.classList.add('active');
    //     }
    //   });
    // }

    // // Function to handle mouseleave event
    // function handleMouseLeave(e) {
    //     {
    //         let loc = e.target.id;
    //         lis.forEach(li => {
    //           const anchor = li.querySelector('a');
    //           const isMatchingSection = anchor.getAttribute('href') === `#${loc}`;
      
    //           if (isMatchingSection) {
    //             anchor.classList.remove('active');
    //           }
    //         });
      
    //     }
    // }
    // // Attach event listeners
    // window.addEventListener('scroll', handleScroll);
    // sections.forEach(section => {
    //   section.addEventListener('mouseenter', handleMouseEnter);
    //   section.addEventListener('mouseleave', handleMouseLeave);
    // });

    // setFirstItemActive();