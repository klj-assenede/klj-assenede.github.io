const fotodiv = document.querySelector('#fotolijst')
const fotopreview = document.querySelector('#fotoPreview')
const fotoCount = 12;

html = `<center>`
for (i=0; i<fotoCount; i++)
    html += `<img src='./fotos/foto${i}.jpg'>`
html += `</center`

fotodiv.addEventListener('click', (event) => {
    if (event.target.tagName == 'IMG'){
        fotopreview.querySelector('img').src = event.target.getAttribute('src')
        fotopreview.style.display = 'block'
        fotopreview.style.transform = `translateY(${window.pageYOffset}px)`
        document.querySelector('body').style.overflow = 'hidden'
    }
})


fotodiv.innerHTML = html;

fotopreview.addEventListener('click', (event) => {
    if (event.target.getAttribute('id') == 'fotoPreview'){
        fotopreview.style.display = 'none'
        document.querySelector('body').style.overflow = ''
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key == 'Escape'){
        fotopreview.style.display = 'none'
        document.querySelector('body').style.overflow = ''
    }
})