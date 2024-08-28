const openBtn = document.querySelector('.header__menuBtn')
const closeBtn = document.querySelector('.header__closeBtn')
const header = document.querySelector('.header')
openBtn.addEventListener('click', () => {
    header.classList.add('active')
})
closeBtn.addEventListener('click', () => {
    header.classList.remove('active')
})