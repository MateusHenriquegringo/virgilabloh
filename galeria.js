
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

/*
// Retrieve references to all the spans
var spans = document.getElementsByTagName('span');
// Loop through each span
for (var i = 0; i < spans.length; i++) {
  // Attach click event listener to each span
  spans[i].addEventListener('click', function() {
    // Retrieve the corresponding content element
    var contentId = this.id + '-content';
    var content = document.getElementById(contentId);
    
    // Remove the 'hide' class from the content element
    content.classList.remove('hide');
  });
}
*/
let architecture = document.getElementById('architecture')
let artwork = document.getElementById('artwork')
let design = document.getElementById('design')
let exhibition = document.getElementById('exhibition')
let exhibitionContent = document.getElementById('exhibition-content')
let designContent = document.getElementById('design-content')
let artworkContent = document.getElementById('artwork-content')
let architectureContent = document.getElementById('architecture-content')

artwork.addEventListener('click',function(){
    artworkContent.classList.remove('hide')
    designContent.classList.add('hide')
    architectureContent.classList.add('hide')
    exhibitionContent.classList.add('hide')

})
design.addEventListener('click',function(){
    artworkContent.classList.add('hide')
    exhibitionContent.classList.add('hide')
    architectureContent.classList.add('hide')
    designContent.classList.remove('hide')
})
architecture.addEventListener('click',function(){
    artworkContent.classList.add('hide')
    designContent.classList.add('hide')
    architectureContent.classList.remove('hide')
    exhibitionContent.classList.add('hide')
})
exhibition.addEventListener('click',function(){
    artworkContent.classList.add('hide')
    designContent.classList.add('hide')
    architectureContent.classList.add('hide')
    exhibitionContent.classList.remove('hide')
})

