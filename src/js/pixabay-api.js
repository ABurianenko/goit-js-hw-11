`use strict`

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



import { createMarkup } from "./render-functions";
import { form, list, loader } from "../main";


const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "46816604-07077c66f94f9cd22bbea8735"

let instanse = new SimpleLightbox('.gallery-markup a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function showLoader() {
  loader.classList.remove('hidden');
}

function hideLoader() {
  loader.classList.add('hidden');
}

export function handleSearch(event) {
    event.preventDefault();
    
    const nameSearch = event.currentTarget.elements.title.value.toLowerCase().trim();
    // console.log(nameSearch);

    if (nameSearch==="") {
       return
    }
    
    resetMarkup();
    showLoader();
    

    fetchData(nameSearch)
        .then((data) => {
            if (data.hits.length === 0) {
                iziToast.error({
                    position: 'center',
                    message: `Sorry, there are no images matching your search query. Please try again!`,
                });
                hideLoader();
                return;
            }
            // console.log("then", data);
            list.innerHTML = createMarkup(data.hits);
            
            const images = list.querySelectorAll("img");
            const promises = Array.from(images).map(img => {
                return new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                });
            });

            return Promise.all(promises).then(() => {
                instanse.refresh('show.simplelightbox'); 
                hideLoader(); 
            });

        })
        .catch(error => {
        console.log("catch", error);
        })
        .finally(() => {
            hideLoader();
            form.reset();
        })
        
      
}

function fetchData (nameSearch="") {
    const params = new URLSearchParams({
        key: API_KEY,
        q: nameSearch,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true
    })

    // console.log(`${BASE_URL}?${params}`);
    

    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }

            return response.json();
        })
}

function resetMarkup() {
  list.innerHTML = '';
}
