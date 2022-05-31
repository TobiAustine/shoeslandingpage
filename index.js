let openMenu = document.querySelector('.uis-list-ui-alt')
let closeMenu = document.querySelector('.uis-multiply')
let menu = document.querySelector('header .nav-menu ul')

openMenu.addEventListener('click', function(){
menu.style.transform = 'translateX(0)';
openMenu.style.display = 'none';

})

closeMenu.addEventListener('click', function(){
    menu.style.transform = 'translateX(100%)';
    openMenu.style.display = 'block';
    
    })