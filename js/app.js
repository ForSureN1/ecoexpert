document.addEventListener('DOMContentLoaded', () => {

    $('.hero__slider-1').slick({
        autoplay: false,
        infinite: false,
        speed: 3000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        focusOnSelect: false,
        pauseOnHover: false,
        draggable: false,
        pauseOnFocus: false,
    })

    $('.hero__slider-2').slick({
        autoplay: false,
        infinite: false,
        speed: 3000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        focusOnSelect: false,
        pauseOnHover: false,
        draggable: false,
        pauseOnFocus: false,
    })

    $('.hero__slider-3').slick({
        autoplay: false,
        infinite: false,
        speed: 3000,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        focusOnSelect: false,
        pauseOnHover: false,
        draggable: false,
        pauseOnFocus: false,
    })

    $('.hero__slider-1').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $('.hero__slider-1').find('.slick-current').prev('.slick-slide').prev('.slick-slide').removeClass('current-animate');
        $('.hero__slider-1').find('.slick-current').prev('.slick-slide').removeClass('current-animate');
    });
    $('.hero__slider-1').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.hero__slider-1').find('.slick-current').addClass('current-animate')
    });

    $('.hero__slider-2').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $('.hero__slider-2').find('.slick-current').prev('.slick-slide').prev('.slick-slide').removeClass('current-animate');
        $('.hero__slider-2').find('.slick-current').prev('.slick-slide').removeClass('current-animate');
    });
    $('.hero__slider-2').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.hero__slider-2').find('.slick-current').addClass('current-animate')
    });

    $('.hero__slider-3').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        $('.hero__slider-3').find('.slick-current').prev('.slick-slide').prev('.slick-slide').removeClass('current-animate');
        $('.hero__slider-3').find('.slick-current').prev('.slick-slide').removeClass('current-animate');
    });
    $('.hero__slider-3').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        $('.hero__slider-3').find('.slick-current').addClass('current-animate')
    });

    $('.prev-arrow').click(function() {
        $('.hero__slider-1').slick('slickPrev');
        $('.hero__slider-2').slick('slickPrev');
        $('.hero__slider-3').slick('slickPrev');
    });

    $('.next-arrow').click(function() {
        $('.hero__slider-1').slick('slickNext');
        $('.hero__slider-2').slick('slickNext');
        $('.hero__slider-3').slick('slickNext');
    });

    $('.hero__nav-swap').click(function() {
        $('.hero__slider-1').slick('slickNext');
        $('.hero__slider-2').slick('slickNext');
        $('.hero__slider-3').slick('slickNext');
    });

    let burger = document.querySelector('.burger')
    let burgerNav = document.querySelector('#nav-icon2')
    let nav = document.querySelector('.header__nav')
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active')
            burgerNav.classList.toggle('open')
        })
    }

    let aboutLink = document.querySelector('.js-link-company');
    let infoLink = document.querySelector('.js-link-info');
    let contactsLink = document.querySelector('.js-link-contact');
    let headerMenu = document.querySelector('.header__menu-list');
    let navCompany = document.querySelector('.js-nav-company');
    let navInfo = document.querySelector('.js-nav-info');
    let navMap = document.querySelector('.js-nav-map');
    if (aboutLink) {
        aboutLink.addEventListener('click', () => {
            headerMenu.classList.remove(headerMenu.className.split(' ')[1]);
            headerMenu.classList.add('about-page');
            navCompany.classList.add('active');
            navInfo.classList.remove('active');
            navMap.classList.remove('active');
            navCompany.animate([
                { opacity: '0' },
                { opacity: '1' }
            ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
        })
    }
    if (infoLink) {
        infoLink.addEventListener('click', () => {
            headerMenu.classList.remove(headerMenu.className.split(' ')[1]);
            headerMenu.classList.add('info-page');
            navCompany.classList.remove('active');
            navInfo.classList.add('active');
            navMap.classList.remove('active');
            navInfo.animate([
                { opacity: '0' },
                { opacity: '1' }
            ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
        })
    }
    if (contactsLink) {
        contactsLink.addEventListener('click', () => {
            headerMenu.classList.remove(headerMenu.className.split(' ')[1]);
            headerMenu.classList.add('contacts-page');
            navCompany.classList.remove('active');
            navInfo.classList.remove('active');
            navMap.classList.add('active');
            navMap.animate([
                { opacity: '0' },
                { opacity: '1' }
            ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
        })
    }

    let svgPathOne = document.querySelectorAll('.who__img-svg-js path');
    if (svgPathOne.length) {
        svgPathOne.forEach((path, i) => {
            path.classList.add('way');
            // path.style.fill = 'transparent';
            // path.style.transition = '.2s ease-in-out';
        });
    }

    $('.way').waypoint({
        handler: function() {
            $(this.element).addClass('way--active')
        },
        offset: '80%',
    })

})

function submitForm() {
    $('#form_loader').show();
}
//Alert form
let alertt = document.querySelector(".alert--fixed");
let alertClose = document.querySelectorAll(".alert--close")
for (let item of alertClose) {
    item.addEventListener('click', function(event) {
        alertt.classList.remove("alert--active")
        alertt.classList.remove("alert--warning")
        alertt.classList.remove("alert--error")
    })
}
// $.fn.setCursorPosition = function(pos) {
//     if ($(this).get(0).setSelectionRange) {
//         $(this).get(0).setSelectionRange(pos, pos)
//     } else if ($(this).get(0).createTextRange) {
//         var range = $(this).get(0).createTextRange()
//         range.collapse(true)
//         range.moveEnd('character', pos)
//         range.moveStart('character', pos)
//         range.select()
//     }
// }
// $('input[type="tel"]').click(function() {
//     $(this).setCursorPosition(3)
// }).mask('+7 (999) 999 99 99')