const artwork = document.getElementById('artwork')
const fashion = document.getElementById('fashion')
const project = document.getElementById('project')
const design = document.getElementById('design')
const architecture = document.getElementById('architecture')
const exhibition = document.getElementById('exhibition')


let hide_div = document.querySelector('.hide')
let moreImages = document.querySelector('.more-images')

moreImages.addEventListener('click',function(){
    let isVisible = hide_div.classList.contains('show')

    if (isVisible){
        hide_div.classList.remove('show')
        moreImages.textContent = 'Mostrar Imagens'
    } else {
        hide_div.classList.add('show')
        moreImages.textContent = 'Ocultar Imagens'
    }
})