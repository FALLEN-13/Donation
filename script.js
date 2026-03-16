// ================================
// AUTO DETECT BAHASA BROWSER
// ================================

let browserLangs = navigator.languages || [navigator.language];

let detectedLang = "en";

for(let lang of browserLangs){

lang = lang.toLowerCase();

if(lang.includes("id")){
detectedLang = "id";
break;
}

if(lang.includes("ms")){
detectedLang = "ms";
break;
}

if(lang.includes("ja")){
detectedLang = "jp";
break;
}

if(lang.includes("ko")){
detectedLang = "kr";
break;
}

if(lang.includes("es")){
detectedLang = "es";
break;
}

if(lang.includes("en")){
detectedLang = "en";
break;
}

}



// ================================
// DATA SEMUA BAHASA
// ================================

const language = {

id:{
navTitle:"Creator Support",
title:"Support My Video ❤️",
desc:"Dengan dukungan dari kalian semua membuat saya semakin bersemangat dalam membuat lebih banyak video-video menarik lainnya 🚀",
donateBtn:"💸 Donasi Di Saweria",
card1Title:"Dukung Kreator",
card1Desc:"Berdonasi membantu creator membuat lebih banyak video-video menarik untuk kalian semua.",
card2Title:"Terima Kasih",
card2Desc:"Setiap donasi sangat berarti dan menjadi dukungan besar untuk perkembangan channel atau video 🙏",
footerText:"© 2026 Donation Page"
},

en:{
navTitle:"Creator Support",
title:"Support My Video ❤️",
desc:"Your support makes me more excited to create more interesting videos 🚀",
donateBtn:"💸 Donate on Saweria",
card1Title:"Support Creator",
card1Desc:"Donations help creators produce more interesting videos for everyone.",
card2Title:"Thank You",
card2Desc:"Every donation means a lot and supports the growth of the channel 🙏",
footerText:"© 2026 Donation Page"
},

ms:{
navTitle:"Sokong Pencipta",
title:"Support My Video ❤️",
desc:"Sokongan anda membuat saya lebih bersemangat untuk menghasilkan lebih banyak video menarik 🚀",
donateBtn:"💸 Derma Di Saweria",
card1Title:"Sokong Pencipta",
card1Desc:"Derma membantu pencipta menghasilkan lebih banyak video menarik untuk semua.",
card2Title:"Terima Kasih",
card2Desc:"Setiap derma sangat bermakna dan menyokong perkembangan channel 🙏",
footerText:"© 2026 Donation Page"
},

jp:{
navTitle:"クリエイターサポート",
title:"私の動画をサポート ❤️",
desc:"あなたのサポートは、より多くの面白い動画を作る大きな励みになります 🚀",
donateBtn:"💸 Saweriaで寄付",
card1Title:"クリエイターをサポート",
card1Desc:"寄付はクリエイターがより多くの動画を作る助けになります。",
card2Title:"ありがとう",
card2Desc:"すべての寄付は大きな意味を持ちます 🙏",
footerText:"© 2026 Donation Page"
},

kr:{
navTitle:"크리에이터 지원",
title:"내 비디오를 지원해주세요 ❤️",
desc:"여러분의 지원은 더 많은 흥미로운 영상을 만드는 큰 힘이 됩니다 🚀",
donateBtn:"💸 Saweria에서 후원",
card1Title:"크리에이터 지원",
card1Desc:"후원은 더 많은 콘텐츠 제작에 도움이 됩니다.",
card2Title:"감사합니다",
card2Desc:"모든 후원은 큰 의미가 있습니다 🙏",
footerText:"© 2026 Donation Page"
},

es:{
navTitle:"Apoyo al Creador",
title:"Apoya mi video ❤️",
desc:"Tu apoyo me motiva a crear más videos interesantes 🚀",
donateBtn:"💸 Donar en Saweria",
card1Title:"Apoyar al Creador",
card1Desc:"Las donaciones ayudan a los creadores a producir más contenido.",
card2Title:"Gracias",
card2Desc:"Cada donación significa mucho 🙏",
footerText:"© 2026 Donation Page"
}

};



// ================================
// FUNGSI GANTI BAHASA
// ================================

function setLang(lang){

localStorage.setItem("lang", lang);

applyLang(lang);

}



// ================================
// TERAPKAN BAHASA
// ================================

function applyLang(lang){

if(!language[lang]){
lang="en";
}

document.getElementById("navTitle").innerText = language[lang].navTitle;
document.getElementById("title").innerText = language[lang].title;
document.getElementById("desc").innerText = language[lang].desc;
document.getElementById("donateBtn").innerText = language[lang].donateBtn;
document.getElementById("card1Title").innerText = language[lang].card1Title;
document.getElementById("card1Desc").innerText = language[lang].card1Desc;
document.getElementById("card2Title").innerText = language[lang].card2Title;
document.getElementById("card2Desc").innerText = language[lang].card2Desc;
document.getElementById("footerText").innerText = language[lang].footerText;

}



// ================================
// SAAT WEBSITE DIBUKA
// ================================

document.addEventListener("DOMContentLoaded", function(){

let savedLang = localStorage.getItem("lang");

if(savedLang){

applyLang(savedLang);

}else{

applyLang(detectedLang);

}

});



// ================================
// POPUP DONASI
// ================================

function donateAlert(){

alert("Terimakasih atas donasi yang kamu berikan ❤️");

  }
