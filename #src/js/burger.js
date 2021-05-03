function toggle() {
    const toggle = document.querySelector('.header__toggle');
    toggle.classList.toggle('active');
    const  banner= document.querySelector('.banner');
    banner.classList.toggle('active');
}