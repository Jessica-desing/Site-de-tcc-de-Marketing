let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    if ((window.scrollY + 800) > document.body.offsetHeight) return;

    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';

    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;

    if (scrollPos > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// const chk = document.getElementById('chk')

// chk.addEventListener('change', () => {
//    document.body.classList.toggle('dark')
// })