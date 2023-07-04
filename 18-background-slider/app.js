const body = document.body
const slide = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

let activeSlide = 0

rightBtn.addEventListener('click', () => {
    activeSlide++

    if(activeSlide > slide.length -1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slide.length -1
    }

    setBgToBody()
    setActiveSlide()
})

setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slide[activeSlide].style.backgroundImage
}

function setActiveSlide() {
    slide.forEach(slide => {
        slide.classList.remove('active')
    })

    slide[activeSlide].classList.add('active')
}