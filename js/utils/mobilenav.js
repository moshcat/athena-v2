const mobileNav = () => {
  const headerBtn = document.querySelector('.header__bars');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');
  const headerBg = document.querySelector('.header-home'); // header-home hanya dicari jika ada

  // State
  let isMobileNavOpen = false;

  headerBtn.addEventListener('click', () => {
    isMobileNavOpen = !isMobileNavOpen;
    if (isMobileNavOpen) {
      if (headerBg) {
        headerBg.style.backgroundColor = 'transparent';
      }
      mobileNav.style.display = 'flex';
      document.body.style.overflowY = 'hidden';
    } else {
      if (headerBg) {
        headerBg.style.backgroundColor = '#000';
      }
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    }
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      isMobileNavOpen = false;
      mobileNav.style.display = 'none';
      document.body.style.overflowY = 'auto';
    });
  });
};

export default mobileNav;
