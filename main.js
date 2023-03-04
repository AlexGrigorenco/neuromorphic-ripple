


window.addEventListener('click', e => {

    let ripple = document.createElement('div')
    ripple.classList.add('ripple')
    ripple.style.top = e.clientY + 'px'
    ripple.style.left = e.clientX + 'px'
    document.body.appendChild(ripple)
    ripple.addEventListener('animationend', () => ripple.remove())

})