/* empty css                      */import{S as f,i as h}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function d(a){return document.querySelector(".gallery-markup"),a.map(({webformatURL:s,largeImageURL:r,tags:i,likes:e,views:t,comments:o,downloads:n})=>`
        <li class= "gallery-item" >
            <a class="gallery-item-link" href="${r}">
                <img
                class="item-img"
                src="${s}" 
                data-source="${r}" 
                alt="${i}" />
            </a>
            <ul class="item-stat-list">
                <li class="item-stat">
                    <h2 class="item-stat-name">Likes</h2>
                    <p class="item-stat-amount">${e}</p>
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Views</h2>
                    <p class="item-stat-amount">${t}</p>
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Comments</h2>
                    <p class="item-stat-amount">${o}</p>        
                </li>
                <li class="item-stat">
                    <h2 class="item-stat-name">Downloads</h2>
                    <p class="item-stat-amount">${n}</p>
                </li>
            </ul>
        </li>
    `).join("")}const p="https://pixabay.com/api/",y="46816604-07077c66f94f9cd22bbea8735";let g=new f(".gallery-markup a",{captionsData:"alt",captionDelay:250});function L(){u.classList.remove("hidden")}function l(){u.classList.add("hidden")}function S(a){a.preventDefault();const s=a.currentTarget.elements.title.value.toLowerCase().trim();s!==""&&($(),L(),w(s).then(r=>{if(r.hits.length===0){h.error({position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}),l();return}c.innerHTML=d(r.hits);const i=c.querySelectorAll("img"),e=Array.from(i).map(t=>new Promise((o,n)=>{t.onload=o,t.onerror=n}));return Promise.all(e).then(()=>{g.refresh("show.simplelightbox"),l()})}).catch(r=>{console.log("catch",r)}).finally(()=>{l(),m.reset()}))}function w(a=""){const s=new URLSearchParams({key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${p}?${s}`).then(r=>{if(!r.ok)throw new Error(r.statusText);return r.json()})}function $(){c.innerHTML=""}const m=document.querySelector(".form-search"),c=document.querySelector(".gallery-markup"),u=document.querySelector(".loader");m.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
