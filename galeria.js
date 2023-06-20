
let moreImagesList = document.querySelectorAll('.more-images')
moreImagesList.forEach(function(moreImages) {
  moreImages.addEventListener('click', function() {
    let hideDiv = this.nextElementSibling;
    let isVisible = hideDiv.classList.contains('show');
    if (isVisible) {
      hideDiv.classList.remove('show');
      this.textContent = 'Mais Imagens';
    } else {
      hideDiv.classList.add('show');
      this.textContent = 'Menos Imagens';
    }
  });
});

let spans = Array.from(document.querySelectorAll('#conteiner span'));
let contents = spans.map(element => element.getAttribute('id') + '-content');


spans.forEach((span,index) => { // o segundo parametro indica a posição do elemento na lista
  span.addEventListener('click', () => {
    for(let i = 0; i<contents.length; i++){
      document.getElementById(contents[i]).classList.add('hide');
    }
    document.getElementById(contents[index]).classList.remove('hide');
  });
});
