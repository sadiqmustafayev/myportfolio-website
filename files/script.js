
var typed = new Typed(".text", {
    strings: ["Programming" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

document.getElementById('mobileMenuIcon').addEventListener('click', function() {
    var menuItems = document.querySelector('.menu-items');
    if (menuItems.style.display === 'block') {
        menuItems.style.display = 'none';
    } else {
        menuItems.style.display = 'block';
    }
});

function openEncodedLink(encodedUrl) {
    let url = atob(encodedUrl); 
    window.location.href = url;
}

function openEncodedLink(encodedUrl) {
    let url = atob(encodedUrl); 
    window.open(url, "_blank");
}

