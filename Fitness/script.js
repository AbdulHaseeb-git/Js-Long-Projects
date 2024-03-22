const header = document.querySelector('header');
window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
        header.classList.add('full');
    }else{
        header.classList.remove('full');
    }
})