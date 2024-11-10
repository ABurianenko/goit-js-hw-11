/* empty css                      */import{S as g,a as L,i as S}from"./assets/vendor-Qob_5Ba8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function u(a){return document.querySelector(".gallery-markup"),a.map(({webformatURL:r,largeImageURL:s,tags:i,likes:e,views:t,comments:o,downloads:l})=>`
        <li class= "gallery-item" >
            <a class="gallery-item-link" href="${s}">
                <img
                class="item-img"
                src="${r}" 
                data-source="${s}" 
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
                    <p class="item-stat-amount">${l}</p>
                </li>
            </ul>
        </li>
    `).join("")}const w="https://pixabay.com/api/",b="46816604-07077c66f94f9cd22bbea8735";let P=new g(".gallery-markup a",{captionsData:"alt",captionDelay:250});function $(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}y.addEventListener("click",M);let m=33,d=15;async function h(a=""){const r=new URLSearchParams({key:b,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:m,per_page:d}),{data:s}=await L(`${w}?${r}`);return s}function q(a){a.preventDefault();const r=a.currentTarget.elements.title.value.toLowerCase().trim();r!==""&&(v(),$(),h(r).then(s=>{if(s.hits.length===0){S.error({position:"center",message:"Sorry, there are no images matching your search query. Please try again!"}),c();return}console.log("then",s),n.innerHTML=u(s.hits),s.hits.length!==0&&m*d<=s.totalHits&&y.classList.replace("load-more-hidden","load-more");const i=n.querySelectorAll("img"),e=Array.from(i).map(t=>new Promise((o,l)=>{t.onload=o,t.onerror=l}));return Promise.all(e).then(()=>{P.refresh("show.simplelightbox"),c()})}).catch(s=>{console.log("catch",s)}).finally(()=>{c(),p.reset()}))}async function M(a){m+=1;try{const r=await h();n.insertAdjacentHTML("beforeend",u(r.hits))}catch(r){console.log(r.message)}}function v(){n.innerHTML=""}const p=document.querySelector(".form-search"),n=document.querySelector(".gallery-markup"),f=document.querySelector(".loader"),y=document.querySelector(".js-load-more");p.addEventListener("submit",q);
//# sourceMappingURL=index.js.map
