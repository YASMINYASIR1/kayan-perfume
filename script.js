// =====================
// TRANSLATIONS
// =====================

const translations = {

ar: {
home:"الرئيسية",
perfumes:"العطور",
reviews:"آراء العملاء",
about:"عن كيان",
aboutText:"كيان عطر فاخر يجمع بين الهيبة والندرة ليصنع حضورًا لا ينسى.",
productsTitle:"العطور",
reviewsTitle:"آراء العملاء"
},

en: {
home:"Home",
perfumes:"Perfumes",
reviews:"Customer Reviews",
about:"About Kayan",
aboutText:"Kayan is a luxurious fragrance combining prestige and rarity to create an unforgettable presence.",
productsTitle:"Perfumes",
reviewsTitle:"Customer Reviews"
},

tr: {
home:"Ana Sayfa",
perfumes:"Parfümler",
reviews:"Müşteri Yorumları",
about:"Kayan Hakkında",
aboutText:"Kayan, prestij ve nadirliği birleştiren lüks bir koku deneyimidir.",
productsTitle:"Parfümler",
reviewsTitle:"Müşteri Yorumları"
}

};


// =====================
// LANGUAGE SWITCH
// =====================

function setLang(lang){

document.documentElement.lang = lang;

const elements = document.querySelectorAll("[data-key]");

elements.forEach(el=>{
const key = el.getAttribute("data-key");
el.textContent = translations[lang][key];
});

if(lang==="ar"){
document.body.style.direction="rtl";
}else{
document.body.style.direction="ltr";
}

}


// =====================
// SWIPER HERO SLIDER
// =====================

// document.addEventListener("DOMContentLoaded", function(){

// const swiper = new Swiper(".heroSwiper", {

// loop:false,

// navigation:{
// nextEl:".swiper-button-next",
// prevEl:".swiper-button-prev"
// }

// });

// });