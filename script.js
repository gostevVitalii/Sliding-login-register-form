const signinBtn = document.querySelector('.signinBtn')
const signupBtn = document.querySelector('.signupBtn')
const formBx = document.querySelector('.formBx')
const body = document.querySelector('body')

signupBtn.onclick = signUp
signinBtn.onclick = signIn
function signUp() {
    formBx.classList.add('active')
    body.classList.add('active')
}
function signIn() {
    formBx.classList.remove('active')
    body.classList.remove('active')
}

let x = window.matchMedia("(min-width: 991px)")
function arrowToggle(x) {
    if (x.matches) {
        document.addEventListener('keyup', (event) => {
            if (event.key === 'ArrowLeft') {
                signIn()
            } else if (event.key === 'ArrowRight') {
                signUp()
            }
        })
    }
}
arrowToggle(x)
window.addEventListener('resize', () => {
    arrowToggle()
})