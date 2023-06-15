window.addEventListener("scroll", function(){
    let top = document.getElementById('top')
    top.classList.toggle('scrolled',window.scrollY > 200)
})




//DARK MODE
let body = document.getElementById('body')
let alterarTema = document.getElementById('toggle-mode')
const darkModeStorage = localStorage.getItem('gmtDarkMode')

if(darkModeStorage){
    body.classList.add('dark-mode')
    alterarTema.checked = true
}
alterarTema.addEventListener("click",function(){
    body.classList.toggle('dark-mode')
    if (body.classList.contains('dark-mode')){
        localStorage.setItem('gmtDarkMode',true)
        return
    }
    localStorage.removeItem('gmtDarkMode')
})


