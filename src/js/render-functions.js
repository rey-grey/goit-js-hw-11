import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
// createGallery(images). Ця функція повинна приймати масив images, створювати HTML-розмітку для галереї, додавати її в контейнер галереї та викликати метод екземпляра SimpleLightbox refresh(). Нічого не повертає.
// clearGallery(). Ця функція нічого не приймає та повинна очищати вміст контейнера галереї. Нічого не повертає.
// showLoader(). Ця функція нічого не приймає, повинна додавати клас для відображення лоадера. Нічого не повертає.
// hideLoader(). Ця функція нічого не приймає, повинна прибирати клас для відображення лоадера. Нічого не повертає.
// У відповіді буде об’єкт із декількома властивостями, в одному з яких (hits) буде масив об’єктів із зображеннями, що задовольнили критерії параметрів запиту.

const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
function createGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
        <img class="img-item" src="${webformatURL}" alt="${tags}"/>
        </a>
        <div class="about-img">
        <p>${likes}</p>
        <p>${views}</p>
        <p>${comments}</p>
        <p>${downloads}</p>
        </div>
        </li>
        `;
    }).join('');
   gallery.insertAdjacentHTML('beforeend', markup);
lightbox.refresh(); 
};

function clearGallery(){
    galleryContainer.innerHTML = '';
};
function showLoader() {
    document.querySelector('.loader').classList.remove('hidden');
}
function hideLoader() {
    document.querySelector('.loader').classList.add('hidden');
  }