import '../css/app.css';

const uppyPhotos = document.querySelector('[data-s3-uppy-photo]');
if (uppyPhotos) {
  import(/* webpackChunkName: "photo-upload" */ './photo-upload.js').then(() => {
    console.log('Image upload module loaded.');
  });
}

const gallery = document.querySelector('.glider');
if (gallery) {
  import(/* webpackChunkName: "gallery" */ './gallery.js').then(() => {
    console.log('Gallery module loaded.');
  });
}
