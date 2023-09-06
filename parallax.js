const parallax = document.querySelector('.parallax')
const parallaxLayers = parallax.querySelectorAll('.parallax__layer')

window.addEventListener('scroll', (e) => {
    let scrollValue = window.scrollY
    parallaxLayers.forEach(layer => {
        layer.style.top = (scrollValue * layer.dataset.parallaxrate * (-1)) + 'px'
    })
})

window.addEventListener('mousemove', (e) => {
    parallaxLayers.forEach(layer => {
        const direction = layer.hasAttribute('data-inverse') ? 1 : -1
        if (!layer.dataset.mousemove) {
            layer.style.transform = `translate(
            ${((window.innerWidth / 2 - e.clientX) * layer.dataset.parallaxrate / 20)*direction}px, 
            ${((window.innerHeight / 2 - e.clientY) * layer.dataset.parallaxrate / 20)*direction}px
        )`
        }
    })
})





