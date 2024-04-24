const eyeballs = document.querySelectorAll('.eye img')
const eye = document.querySelectorAll('.eye')
const cursoricon = document.querySelector('.cursoricon')

document.onmousemove = function (e) {

    for (let i = 0; i < 2; i++) {

        let x = e.clientX * 100 / window.innerWidth + '%'
        let y = e.clientY * 100 / window.innerHeight + '%'

        eyeballs[i].style.left = x
        eyeballs[i].style.top = y
        eyeballs[i].style.transform = 'translate(-50%, -50%);'
    }
}

document.addEventListener('mousemove', (e) => {
    cursoricon.style.left = `${e.clientX}px`
    cursoricon.style.top = `${e.clientY}px`
    cursoricon.style.transform = `translate(-50%, -50%)`
})