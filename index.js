const main = document.querySelector('.main-content');

function checkOverflow() {
  if (main.scrollWidth > main.clientWidth) {
    document.body.classList.add('mobile-layout');
  } else {
    document.body.classList.remove('mobile-layout');
  }
}

// Run on load
checkOverflow();

// Run on resize
window.addEventListener('resize', checkOverflow);