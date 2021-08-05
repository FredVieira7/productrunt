/* Menu mobile contato */
let botao = document.getElementById('botao');
botao.addEventListener("click", () => {
    let menuMobile = document.getElementById('menu-mobile');
    if(menuMobile.classList.contains('displayNone')){
        menuMobile.classList.remove('displayNone');
        menuMobile.classList.add('displayBlock')
    }else {
        menuMobile.classList.remove('displayblock');
        menuMobile.classList.add('displayNone')
    }  
});


