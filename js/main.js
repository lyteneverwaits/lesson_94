
(function () { 
    const burgerButton = document.querySelector('.burger-icon'); 
    const burgerNav = document.querySelectorAll('.nav__link'); 
    burgerButton.addEventListener('click', burgerInit); 
    burgerNav.forEach(item => item.addEventListener('click', burgerInit2));

    function burgerInit(e) { 
        const burgerIcon = e.target.closest('.burger-icon'); 
        if (!burgerIcon) return;

        if (document.documentElement.clientWidth > 900) return;

        if (!document.body.classList.contains('body--opened-menu')) { 
            document.body.classList.add('body--opened-menu'); 
        } else { 
            document.body.classList.remove('body--opened-menu'); 
        } 
    } 

    function burgerInit2(e) { 
        const burgerNavLink = e.target.closest('.nav__link'); 
        if (!burgerNavLink) return;

        if (document.documentElement.clientWidth > 900) return;

        if (!document.body.classList.contains('body--opened-menu')) { 
            document.body.classList.add('body--opened-menu'); 
        } else { 
            document.body.classList.remove('body--opened-menu'); 
        } 
    } 
})();