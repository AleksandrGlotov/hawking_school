document.body.style.background = localStorage.getItem('theme')

let lightThemeBtn = document.querySelector(".light-theme")
let darkThemeBtn = document.querySelector(".dark-theme")

lightThemeBtn.addEventListener("click", () => {
    localStorage.setItem('theme','#f2f7f5')
    document.body.style.background = localStorage.getItem('theme')
})

darkThemeBtn.addEventListener("click", () => {
    localStorage.setItem('theme','#16161a')
    document.body.style.background = localStorage.getItem('theme')
})