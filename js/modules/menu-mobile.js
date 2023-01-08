export default function initMenuMobile() {
    const menuBottom = document.querySelector(".header__menu")
    const menu = document.querySelector(".side__menu")
    
    menuBottom.addEventListener('click', ()=>{        
        menu.classList.toggle('side__menu--active')
    })
}