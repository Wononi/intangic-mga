const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      window.requestAnimationFrame(() => {showAnim(entry)})
    }
  });
});

let animateBlock = document.querySelectorAll('.animate__block')

function showAnim (element) {
  element.target.classList.add('element__show')
}

animateBlock.forEach(e => observer.observe(e))
