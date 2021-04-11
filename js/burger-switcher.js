export const burgerSwitcher = () => {
    if ($('.js-burger-menu').length > 0) {
        const buttonOpenBurgerMenu = document.querySelector(".js-btn-open-burger-menu");
        const buttonCloseBurgerMenu = document.querySelector(".js-btn-close-burger-menu");
        const burgerMenu = document.querySelector(".js-burger-menu");

        const openBurgerMenu = (e) => {
            e.preventDefault();
            burgerMenu.classList.remove("hide");
            buttonCloseBurgerMenu.addEventListener("click", closeBurgerMenu);
        };
        const closeBurgerMenu = (e) => {
            e.preventDefault();
            burgerMenu.classList.add("hide");
            buttonCloseBurgerMenu.removeEventListener("click", closeBurgerMenu);
        };
        buttonOpenBurgerMenu.addEventListener("click", openBurgerMenu)
        //
        // $(document).on('scroll', function () {
        //     burgerMenu.classList.add("hide");
        // })
    }
};