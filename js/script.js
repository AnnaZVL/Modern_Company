document.addEventListener("DOMContentLoaded", () => {
    // Бургер меню
    const $burger = document.getElementById('burger'),
    $nav = document.getElementById('nav'),
    $menuItems = document.querySelectorAll('.menu__item'),
    $socialLinks = document.querySelectorAll('.header__link');

    $burger.addEventListener('click', () => {
        $burger.classList.toggle('open');
        $nav.classList.toggle('open')
    })

    $menuItems.forEach(item => {
        item.addEventListener('click', (event) => {
            const target = event.target;

            if (target.closest('.menu__item')) {
                $burger.classList.remove('open');
                $nav.classList.remove('open');
            }
        })
    })

    
    // Иконки контактов
    const $btnSocial = document.getElementById('social'),
    $icons = document.getElementById('icons');

    $btnSocial.addEventListener('click', () => {
        $btnSocial.classList.toggle('open');
        $icons.classList.toggle('open');
    })

    $socialLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            const target = event.target;

            if (target.closest('.header__link')) {
                $btnSocial.classList.remove('open');
                $icons.classList.remove('open');
            }
        })
    })

    // Закрытие по эск
    window.addEventListener('keydown', () => {
        $burger.classList.remove('open');
        $nav.classList.remove('open');
        $btnSocial.classList.remove('open');
        $icons.classList.remove('open');
    })

 
    const starContainer = document.querySelector('.star-container');

    const createStar = () => {
        const star = document.createElement('div');
        star.classList.add('star');

        const size = Math.random() * 3 + 1 + 'px';

        star.style.width = size;
        star.style.height = size;
        star.style.left = Math.random() * 100 + 'vw';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.setProperty('--direction', (Math.random() - 0.5) * 2); // направление по горизонтали

        starContainer.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, 5000); 
    };

    setInterval(createStar, 200); // Создание новой звезды каждые 200 мс

})