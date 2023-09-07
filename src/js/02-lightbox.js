import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(el => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
     <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
  </a>
</li>`
}).join('\n')

galleryList.innerHTML = markup;

let lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});
