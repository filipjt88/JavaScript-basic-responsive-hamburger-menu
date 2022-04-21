// Selektovani elementi
let hamburger  = document.querySelector(".hamburger");
let navigation = document.querySelector("nav");


// Eventlistener na klik za prikaz navigacije za uredjaje do 767px
hamburger.addEventListener("click",function() {
    if(navigation.style.display === 'block') {
        navigation.style.display = 'none';  
    } else {
        navigation.style.display = 'block'; 
    }
});



function navigationMediaQuery(nav) {
    if(nav.matches) {
        navigation.style.display = 'none'; 
    } else {
        navigation.style.display = 'block'; 
    }
}

var nav = window.matchMedia("(max-width:767px)");
navigationMediaQuery(nav);
nav.addListener(navigationMediaQuery);





 


