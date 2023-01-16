const main = document.getElementById('main')
setTimeout(() => main.classList.add('show-width'), 500)
setTimeout(() => main.classList.add('show-height'), 1500)

const about = document.getElementById('about-icon')
about.addEventListener('click', () => {
    let description = document.getElementById('about-description')
    if (description.classList.contains('show__description')) {
        main.style.height = '780px'
        description.classList.remove('show__description')
    } else {
        main.style.height = '1010px'
        description.classList.add('show__description')
    }
})