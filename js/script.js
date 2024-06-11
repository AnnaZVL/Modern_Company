// Бургер меню
const $burger = document.getElementById('burger'),
$nav = document.getElementById('nav');

$burger.addEventListener('click', () => {
    $burger.classList.toggle('open');
    $nav.classList.toggle('open')
})

// Иконки контактов
const $btnSocial = document.getElementById('social'),
$icons = document.getElementById('icons');

$btnSocial.addEventListener('click', () => {
    $btnSocial.classList.toggle('open');
    $icons.classList.toggle('open');
})