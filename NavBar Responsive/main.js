const hamburger = document.querySelector('.menu-hamburger');
const linksContainer = document.querySelector('.link-container');

hamburger.addEventListener('click', () => {
    linksContainer.classList.toggle('active')
})
