import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(el => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</li>`
}).join('\n')

galleryList.innerHTML = markup;



const onGalleryListClick = event => {
  event.preventDefault();
  if(event.target === event.currentTarget) {
    return;
  }
  const onModalClose = event => {
    console.log('click');
    if(event.code === 'Escape') {
      instance.close();
    }
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`
, {
	onShow: (instance) => {
    document.addEventListener('keydown', onModalClose);
    console.log('dodav');
  },
	
	onClose: (instance) => {
    document.removeEventListener('keydown', onModalClose);
    console.log('znyav')
  }
})

console.log(event.target.dataset.source);
instance.show();


}

galleryList.addEventListener('click', onGalleryListClick);