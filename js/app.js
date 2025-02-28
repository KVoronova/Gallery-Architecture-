window.onload = function() {

setTimeout(function() {

    document.body.classList.add('loaded')

    if(window.matchMedia('(min-width:992px)').matches) {

    Draggable.create('.gallery', {
        bounds: 'body',
        inertia: true
        });

       }

    }, 200);
}

import PhotoSwipeLightbox from "../libs/PhotoSwipe/photoswipe-lightbox.esm.min.js"
const lightbox = new PhotoSwipeLightbox({
    gallery: '.gallery',
    children: '.gallery__item',
    pswpModule: () => import('../libs/PhotoSwipe/photoswipe.esm.min.js')
})

lightbox.init();



