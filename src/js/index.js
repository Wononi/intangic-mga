import './animate-block'
import '../style/style.scss'

if (window.location.href === 'https://www.intangicmga.co/press' || window.location.href === 'https://www.intangicmga.com/press') {
    location.replace("https://www.intangicmga.co/resources/press/031623");
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            document.querySelector('.scroll__nav').classList.add('scroll__nav-show')
        } else {
            document.querySelector('.scroll__nav').classList.remove('scroll__nav-show')
        }
    });
});

observer.observe(document.querySelector('.navigation'))
