const eyeballs = document.querySelectorAll('.eye img')
const eye = document.querySelectorAll('.eye')

document.onmousemove = function (e) {



    for (let i = 0; i < 2; i++) {

        let x = e.clientX * 100 / window.innerWidth + '%'
        let y = e.clientY * 100 / window.innerHeight + '%'

        eyeballs[i].style.left = x
        eyeballs[i].style.top = y
        eyeballs[i].style.transform = 'translate(-50%, -50%);'
    }
}
console.log(eye[0].clientWidth);