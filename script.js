const navBar = document.getElementsByTagName('nav')[0]

let lastScroll = 0;

window.addEventListener('scroll',()=>{
    const currentScroll = window.scrollY

    if(currentScroll > lastScroll){
        navBar.style.display = 'none'
    }else{
        navBar.style.display = 'unset'
    }

    lastScroll = currentScroll;

})