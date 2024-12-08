const sidemenu = document.querySelector('#sidemenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");

function openmenu(){
    sidemenu.style.transform = 'translateX(-16rem)';
}
function closemenu(){
    sidemenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', ()=>{
    if (scrollY > 50){
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
        navLinks.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50')
    }else{
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm')
        navLinks.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50')
    }
})