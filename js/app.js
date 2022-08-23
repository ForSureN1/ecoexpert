document.addEventListener('DOMContentLoaded', () => {

    $('.hero__slider-1').slick({
        autoplay: false,
        infinite: true,
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
    });

    $('.hero__slider-2').slick({
        autoplay: false,
        infinite: true,
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
    });

    $('.hero__slider-3').slick({
        autoplay: false,
        infinite: true,
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
    });

    $('.partners__items').slick({
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: '<button type="button" class="slick_arrow slick_next js-remove-request-btn"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#289C39"/><g clip-path="url(#clip0_449_1542)"><path d="M28.9999 18.2759L24.1237 13.3997C23.1741 12.4488 21.6259 12.4488 20.6763 13.3997C20.2155 13.8592 19.9619 14.4724 19.9619 15.1234C19.9619 15.7744 20.2155 16.3876 20.6763 16.8471L23.8287 19.9996L20.6763 23.152C20.2155 23.6128 19.9619 24.2248 19.9619 24.8758C19.9619 25.5268 20.2155 26.1387 20.6763 26.5995C21.1371 27.0603 21.749 27.3139 22.4 27.3139C23.051 27.3139 23.6629 27.0603 24.1237 26.5995L28.9999 21.7233C29.4607 21.2637 29.7143 20.6506 29.7143 19.9996C29.7143 19.3486 29.4607 18.7354 28.9999 18.2759ZM28.1381 20.8615L23.2619 25.7376C22.7999 26.1984 22.0002 26.1984 21.5381 25.7376C21.0627 25.2622 21.0627 24.4893 21.5381 24.0139L25.5525 19.9996L21.5381 15.9853C21.3077 15.7549 21.181 15.4489 21.181 15.1234C21.181 14.7979 21.3077 14.4919 21.5381 14.2615C21.7759 14.0238 22.0879 13.9044 22.4 13.9044C22.7121 13.9044 23.0242 14.0238 23.2619 14.2603L28.1381 19.1365C28.3685 19.3681 28.4952 19.6741 28.4952 19.9996C28.4952 20.3251 28.3685 20.6311 28.1381 20.8615Z" fill="white"/><path d="M20.4667 18.2759L15.5905 13.3997C14.6409 12.4488 13.0927 12.4488 12.1431 13.3997C11.6823 13.8592 11.4287 14.4724 11.4287 15.1234C11.4287 15.7744 11.6823 16.3876 12.1431 16.8471L15.2955 19.9996L12.1431 23.152C11.6823 23.6128 11.4287 24.2248 11.4287 24.8758C11.4287 25.5268 11.6823 26.1387 12.1431 26.5995C12.6039 27.0603 13.2158 27.3139 13.8668 27.3139C14.5178 27.3139 15.1297 27.0603 15.5905 26.5995L20.4667 21.7233C20.9275 21.2637 21.1811 20.6506 21.1811 19.9996C21.1811 19.3486 20.9275 18.7354 20.4667 18.2759ZM19.6049 20.8615L14.7287 25.7376C14.2667 26.1984 13.467 26.1984 13.0049 25.7376C12.5295 25.2622 12.5295 24.4893 13.0049 24.0139L17.0193 19.9996L13.0049 15.9853C12.7745 15.7549 12.6478 15.4489 12.6478 15.1234C12.6478 14.7979 12.7745 14.4919 13.0049 14.2615C13.2427 14.0238 13.5547 13.9044 13.8668 13.9044C14.1789 13.9044 14.491 14.0238 14.7287 14.2603L19.6049 19.1365C19.8353 19.3681 19.962 19.6741 19.962 19.9996C19.962 20.3251 19.8353 20.6311 19.6049 20.8615Z" fill="white"/></g><defs><clipPath id="clip0_449_1542"><rect width="18.2857" height="18.2857" fill="white" transform="translate(11.4287 10.8574)"/></clipPath></defs></svg></button>',
        prevArrow: '<button type="button" class="slick_arrow slick_prev js-remove-request-btn"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="#289C39"/><g clip-path="url(#clip0_450_1684)"><path d="M11.0006 18.2759L15.8767 13.3997C16.8264 12.4488 18.3746 12.4488 19.3242 13.3997C19.785 13.8592 20.0386 14.4724 20.0386 15.1234C20.0386 15.7744 19.785 16.3876 19.3242 16.8471L16.1718 19.9996L19.3242 23.152C19.785 23.6128 20.0386 24.2248 20.0386 24.8758C20.0386 25.5268 19.785 26.1387 19.3242 26.5995C18.8634 27.0603 18.2515 27.3139 17.6005 27.3139C16.9495 27.3139 16.3375 27.0603 15.8767 26.5995L11.0006 21.7233C10.5398 21.2637 10.2862 20.6506 10.2862 19.9996C10.2862 19.3486 10.5398 18.7354 11.0006 18.2759ZM11.8624 20.8615L16.7386 25.7376C17.2006 26.1984 18.0003 26.1984 18.4623 25.7376C18.9378 25.2622 18.9378 24.4893 18.4623 24.0139L14.448 19.9996L18.4623 15.9853C18.6927 15.7549 18.8195 15.4489 18.8195 15.1234C18.8195 14.7979 18.6927 14.4919 18.4623 14.2615C18.2246 14.0238 17.9126 13.9044 17.6005 13.9044C17.2884 13.9044 16.9763 14.0238 16.7386 14.2603L11.8624 19.1365C11.632 19.3681 11.5052 19.6741 11.5052 19.9996C11.5052 20.3251 11.632 20.6311 11.8624 20.8615Z" fill="white"/><path d="M19.5338 18.2759L24.4099 13.3997C25.3596 12.4488 26.9078 12.4488 27.8574 13.3997C28.3182 13.8592 28.5718 14.4724 28.5718 15.1234C28.5718 15.7744 28.3182 16.3876 27.8574 16.8471L24.705 19.9996L27.8574 23.152C28.3182 23.6128 28.5718 24.2248 28.5718 24.8758C28.5718 25.5268 28.3182 26.1387 27.8574 26.5995C27.3966 27.0603 26.7847 27.3139 26.1337 27.3139C25.4827 27.3139 24.8707 27.0603 24.4099 26.5995L19.5338 21.7233C19.073 21.2637 18.8194 20.6506 18.8194 19.9996C18.8194 19.3486 19.073 18.7354 19.5338 18.2759ZM20.3956 20.8615L25.2718 25.7376C25.7338 26.1984 26.5335 26.1984 26.9955 25.7376C27.471 25.2622 27.471 24.4893 26.9955 24.0139L22.9812 19.9996L26.9955 15.9853C27.2259 15.7549 27.3527 15.4489 27.3527 15.1234C27.3527 14.7979 27.2259 14.4919 26.9955 14.2615C26.7578 14.0238 26.4458 13.9044 26.1337 13.9044C25.8216 13.9044 25.5095 14.0238 25.2718 14.2603L20.3956 19.1365C20.1652 19.3681 20.0384 19.6741 20.0384 19.9996C20.0384 20.3251 20.1652 20.6311 20.3956 20.8615Z" fill="white"/></g><defs><clipPath id="clip0_450_1684"><rect width="18.2857" height="18.2857" fill="white" transform="matrix(-1 0 0 1 28.5718 10.8574)"/></clipPath></defs></svg></button>',
        responsive: [{
                breakpoint: 1450,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })

    // $('.documents__items').slick({
    //     autoplay: false,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    // })


    var swiper = new Swiper(".documents__items", {
        slidesPerView: 3,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            500: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            850: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 2,
            },
            1450: {
                slidesPerView: 3,
            }
        }
    });

    let partnersSwiper = new Swiper('.pairs__slider', {
        autoplay: true,
        slidesPerView: 3,
        loop: true,
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            0: {
                slidesPerView: 1,
            }
        }
    })

    $('.preview__reviews').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
        nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#289C39"/><g clip-path="url(#clip0_449_1542)"><path d="M28.9999 18.2759L24.1237 13.3997C23.1741 12.4488 21.6259 12.4488 20.6763 13.3997C20.2155 13.8592 19.9619 14.4724 19.9619 15.1234C19.9619 15.7744 20.2155 16.3876 20.6763 16.8471L23.8287 19.9996L20.6763 23.152C20.2155 23.6128 19.9619 24.2248 19.9619 24.8758C19.9619 25.5268 20.2155 26.1387 20.6763 26.5995C21.1371 27.0603 21.749 27.3139 22.4 27.3139C23.051 27.3139 23.6629 27.0603 24.1237 26.5995L28.9999 21.7233C29.4607 21.2637 29.7143 20.6506 29.7143 19.9996C29.7143 19.3486 29.4607 18.7354 28.9999 18.2759ZM28.1381 20.8615L23.2619 25.7376C22.7999 26.1984 22.0002 26.1984 21.5381 25.7376C21.0627 25.2622 21.0627 24.4893 21.5381 24.0139L25.5525 19.9996L21.5381 15.9853C21.3077 15.7549 21.181 15.4489 21.181 15.1234C21.181 14.7979 21.3077 14.4919 21.5381 14.2615C21.7759 14.0238 22.0879 13.9044 22.4 13.9044C22.7121 13.9044 23.0242 14.0238 23.2619 14.2603L28.1381 19.1365C28.3685 19.3681 28.4952 19.6741 28.4952 19.9996C28.4952 20.3251 28.3685 20.6311 28.1381 20.8615Z" fill="white"/><path d="M20.4667 18.2759L15.5905 13.3997C14.6409 12.4488 13.0927 12.4488 12.1431 13.3997C11.6823 13.8592 11.4287 14.4724 11.4287 15.1234C11.4287 15.7744 11.6823 16.3876 12.1431 16.8471L15.2955 19.9996L12.1431 23.152C11.6823 23.6128 11.4287 24.2248 11.4287 24.8758C11.4287 25.5268 11.6823 26.1387 12.1431 26.5995C12.6039 27.0603 13.2158 27.3139 13.8668 27.3139C14.5178 27.3139 15.1297 27.0603 15.5905 26.5995L20.4667 21.7233C20.9275 21.2637 21.1811 20.6506 21.1811 19.9996C21.1811 19.3486 20.9275 18.7354 20.4667 18.2759ZM19.6049 20.8615L14.7287 25.7376C14.2667 26.1984 13.467 26.1984 13.0049 25.7376C12.5295 25.2622 12.5295 24.4893 13.0049 24.0139L17.0193 19.9996L13.0049 15.9853C12.7745 15.7549 12.6478 15.4489 12.6478 15.1234C12.6478 14.7979 12.7745 14.4919 13.0049 14.2615C13.2427 14.0238 13.5547 13.9044 13.8668 13.9044C14.1789 13.9044 14.491 14.0238 14.7287 14.2603L19.6049 19.1365C19.8353 19.3681 19.962 19.6741 19.962 19.9996C19.962 20.3251 19.8353 20.6311 19.6049 20.8615Z" fill="white"/></g><defs><clipPath id="clip0_449_1542"><rect width="18.2857" height="18.2857" fill="white" transform="translate(11.4287 10.8574)"/></clipPath></defs></svg></button>',
        prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="#289C39"/><g clip-path="url(#clip0_450_1684)"><path d="M11.0006 18.2759L15.8767 13.3997C16.8264 12.4488 18.3746 12.4488 19.3242 13.3997C19.785 13.8592 20.0386 14.4724 20.0386 15.1234C20.0386 15.7744 19.785 16.3876 19.3242 16.8471L16.1718 19.9996L19.3242 23.152C19.785 23.6128 20.0386 24.2248 20.0386 24.8758C20.0386 25.5268 19.785 26.1387 19.3242 26.5995C18.8634 27.0603 18.2515 27.3139 17.6005 27.3139C16.9495 27.3139 16.3375 27.0603 15.8767 26.5995L11.0006 21.7233C10.5398 21.2637 10.2862 20.6506 10.2862 19.9996C10.2862 19.3486 10.5398 18.7354 11.0006 18.2759ZM11.8624 20.8615L16.7386 25.7376C17.2006 26.1984 18.0003 26.1984 18.4623 25.7376C18.9378 25.2622 18.9378 24.4893 18.4623 24.0139L14.448 19.9996L18.4623 15.9853C18.6927 15.7549 18.8195 15.4489 18.8195 15.1234C18.8195 14.7979 18.6927 14.4919 18.4623 14.2615C18.2246 14.0238 17.9126 13.9044 17.6005 13.9044C17.2884 13.9044 16.9763 14.0238 16.7386 14.2603L11.8624 19.1365C11.632 19.3681 11.5052 19.6741 11.5052 19.9996C11.5052 20.3251 11.632 20.6311 11.8624 20.8615Z" fill="white"/><path d="M19.5338 18.2759L24.4099 13.3997C25.3596 12.4488 26.9078 12.4488 27.8574 13.3997C28.3182 13.8592 28.5718 14.4724 28.5718 15.1234C28.5718 15.7744 28.3182 16.3876 27.8574 16.8471L24.705 19.9996L27.8574 23.152C28.3182 23.6128 28.5718 24.2248 28.5718 24.8758C28.5718 25.5268 28.3182 26.1387 27.8574 26.5995C27.3966 27.0603 26.7847 27.3139 26.1337 27.3139C25.4827 27.3139 24.8707 27.0603 24.4099 26.5995L19.5338 21.7233C19.073 21.2637 18.8194 20.6506 18.8194 19.9996C18.8194 19.3486 19.073 18.7354 19.5338 18.2759ZM20.3956 20.8615L25.2718 25.7376C25.7338 26.1984 26.5335 26.1984 26.9955 25.7376C27.471 25.2622 27.471 24.4893 26.9955 24.0139L22.9812 19.9996L26.9955 15.9853C27.2259 15.7549 27.3527 15.4489 27.3527 15.1234C27.3527 14.7979 27.2259 14.4919 26.9955 14.2615C26.7578 14.0238 26.4458 13.9044 26.1337 13.9044C25.8216 13.9044 25.5095 14.0238 25.2718 14.2603L20.3956 19.1365C20.1652 19.3681 20.0384 19.6741 20.0384 19.9996C20.0384 20.3251 20.1652 20.6311 20.3956 20.8615Z" fill="white"/></g><defs><clipPath id="clip0_450_1684"><rect width="18.2857" height="18.2857" fill="white" transform="matrix(-1 0 0 1 28.5718 10.8574)"/></clipPath></defs></svg></button>',
    })

    $('.photo__gallery').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true,
        nextArrow: '<button type="button" class="slick_arrow slick_next"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#289C39"/><g clip-path="url(#clip0_449_1542)"><path d="M28.9999 18.2759L24.1237 13.3997C23.1741 12.4488 21.6259 12.4488 20.6763 13.3997C20.2155 13.8592 19.9619 14.4724 19.9619 15.1234C19.9619 15.7744 20.2155 16.3876 20.6763 16.8471L23.8287 19.9996L20.6763 23.152C20.2155 23.6128 19.9619 24.2248 19.9619 24.8758C19.9619 25.5268 20.2155 26.1387 20.6763 26.5995C21.1371 27.0603 21.749 27.3139 22.4 27.3139C23.051 27.3139 23.6629 27.0603 24.1237 26.5995L28.9999 21.7233C29.4607 21.2637 29.7143 20.6506 29.7143 19.9996C29.7143 19.3486 29.4607 18.7354 28.9999 18.2759ZM28.1381 20.8615L23.2619 25.7376C22.7999 26.1984 22.0002 26.1984 21.5381 25.7376C21.0627 25.2622 21.0627 24.4893 21.5381 24.0139L25.5525 19.9996L21.5381 15.9853C21.3077 15.7549 21.181 15.4489 21.181 15.1234C21.181 14.7979 21.3077 14.4919 21.5381 14.2615C21.7759 14.0238 22.0879 13.9044 22.4 13.9044C22.7121 13.9044 23.0242 14.0238 23.2619 14.2603L28.1381 19.1365C28.3685 19.3681 28.4952 19.6741 28.4952 19.9996C28.4952 20.3251 28.3685 20.6311 28.1381 20.8615Z" fill="white"/><path d="M20.4667 18.2759L15.5905 13.3997C14.6409 12.4488 13.0927 12.4488 12.1431 13.3997C11.6823 13.8592 11.4287 14.4724 11.4287 15.1234C11.4287 15.7744 11.6823 16.3876 12.1431 16.8471L15.2955 19.9996L12.1431 23.152C11.6823 23.6128 11.4287 24.2248 11.4287 24.8758C11.4287 25.5268 11.6823 26.1387 12.1431 26.5995C12.6039 27.0603 13.2158 27.3139 13.8668 27.3139C14.5178 27.3139 15.1297 27.0603 15.5905 26.5995L20.4667 21.7233C20.9275 21.2637 21.1811 20.6506 21.1811 19.9996C21.1811 19.3486 20.9275 18.7354 20.4667 18.2759ZM19.6049 20.8615L14.7287 25.7376C14.2667 26.1984 13.467 26.1984 13.0049 25.7376C12.5295 25.2622 12.5295 24.4893 13.0049 24.0139L17.0193 19.9996L13.0049 15.9853C12.7745 15.7549 12.6478 15.4489 12.6478 15.1234C12.6478 14.7979 12.7745 14.4919 13.0049 14.2615C13.2427 14.0238 13.5547 13.9044 13.8668 13.9044C14.1789 13.9044 14.491 14.0238 14.7287 14.2603L19.6049 19.1365C19.8353 19.3681 19.962 19.6741 19.962 19.9996C19.962 20.3251 19.8353 20.6311 19.6049 20.8615Z" fill="white"/></g><defs><clipPath id="clip0_449_1542"><rect width="18.2857" height="18.2857" fill="white" transform="translate(11.4287 10.8574)"/></clipPath></defs></svg></button>',
        prevArrow: '<button type="button" class="slick_arrow slick_prev"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="20" transform="matrix(-1 0 0 1 20 20)" fill="#289C39"/><g clip-path="url(#clip0_450_1684)"><path d="M11.0006 18.2759L15.8767 13.3997C16.8264 12.4488 18.3746 12.4488 19.3242 13.3997C19.785 13.8592 20.0386 14.4724 20.0386 15.1234C20.0386 15.7744 19.785 16.3876 19.3242 16.8471L16.1718 19.9996L19.3242 23.152C19.785 23.6128 20.0386 24.2248 20.0386 24.8758C20.0386 25.5268 19.785 26.1387 19.3242 26.5995C18.8634 27.0603 18.2515 27.3139 17.6005 27.3139C16.9495 27.3139 16.3375 27.0603 15.8767 26.5995L11.0006 21.7233C10.5398 21.2637 10.2862 20.6506 10.2862 19.9996C10.2862 19.3486 10.5398 18.7354 11.0006 18.2759ZM11.8624 20.8615L16.7386 25.7376C17.2006 26.1984 18.0003 26.1984 18.4623 25.7376C18.9378 25.2622 18.9378 24.4893 18.4623 24.0139L14.448 19.9996L18.4623 15.9853C18.6927 15.7549 18.8195 15.4489 18.8195 15.1234C18.8195 14.7979 18.6927 14.4919 18.4623 14.2615C18.2246 14.0238 17.9126 13.9044 17.6005 13.9044C17.2884 13.9044 16.9763 14.0238 16.7386 14.2603L11.8624 19.1365C11.632 19.3681 11.5052 19.6741 11.5052 19.9996C11.5052 20.3251 11.632 20.6311 11.8624 20.8615Z" fill="white"/><path d="M19.5338 18.2759L24.4099 13.3997C25.3596 12.4488 26.9078 12.4488 27.8574 13.3997C28.3182 13.8592 28.5718 14.4724 28.5718 15.1234C28.5718 15.7744 28.3182 16.3876 27.8574 16.8471L24.705 19.9996L27.8574 23.152C28.3182 23.6128 28.5718 24.2248 28.5718 24.8758C28.5718 25.5268 28.3182 26.1387 27.8574 26.5995C27.3966 27.0603 26.7847 27.3139 26.1337 27.3139C25.4827 27.3139 24.8707 27.0603 24.4099 26.5995L19.5338 21.7233C19.073 21.2637 18.8194 20.6506 18.8194 19.9996C18.8194 19.3486 19.073 18.7354 19.5338 18.2759ZM20.3956 20.8615L25.2718 25.7376C25.7338 26.1984 26.5335 26.1984 26.9955 25.7376C27.471 25.2622 27.471 24.4893 26.9955 24.0139L22.9812 19.9996L26.9955 15.9853C27.2259 15.7549 27.3527 15.4489 27.3527 15.1234C27.3527 14.7979 27.2259 14.4919 26.9955 14.2615C26.7578 14.0238 26.4458 13.9044 26.1337 13.9044C25.8216 13.9044 25.5095 14.0238 25.2718 14.2603L20.3956 19.1365C20.1652 19.3681 20.0384 19.6741 20.0384 19.9996C20.0384 20.3251 20.1652 20.6311 20.3956 20.8615Z" fill="white"/></g><defs><clipPath id="clip0_450_1684"><rect width="18.2857" height="18.2857" fill="white" transform="matrix(-1 0 0 1 28.5718 10.8574)"/></clipPath></defs></svg></button>',
        breakpoint: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }]
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

    // add class svg path
    let svgPathOne = document.querySelectorAll('.who__img-svg-js path');
    if (svgPathOne.length) {
        svgPathOne.forEach((path, i) => {
            path.classList.add('way');
            let delay = i * 0.005;
            path.style.transitionDelay = `${delay}s`
                // path.style.fill = 'transparent';
                // path.style.transition = '.2s ease-in-out';
        });
    }

    // way points
    $('.way').waypoint({
        handler: function() {
            $(this.element).addClass('way--active')
        },
        offset: '90%',
    })

    // main page competence block
    let competenceBlock = document.querySelector('.competence');
    if (competenceBlock) {
        let competenceItems = document.querySelector('.competence__items');
        competenceBlock.addEventListener('mouseover', e => {
            const target = e.target;
            if (target.classList.contains('js-hover-block-left')) {
                competenceItems.style.marginLeft = `${competenceItems.clientWidth - window.innerWidth}px`;
            }
            if (target.classList.contains('js-hover-block-right')) {
                competenceItems.style.marginRight = `${competenceItems.clientWidth - window.innerWidth}px`;
            }
        });
        competenceBlock.addEventListener('mouseout', e => {
            const target = e.target;
            if (!target.classList.contains('js-hover-block-left')) {
                competenceItems.style.marginLeft = `0px`;
            }
            if (!target.classList.contains('js-hover-block-right')) {
                competenceItems.style.marginRight = `0px`;
            }
        })
    }

    // Бегущая строка главная страница
    $('.news__items.left').marquee({
        direction: 'left',
        speed: 80,
        pauseOnHover: true,
    });

    $('.news__items.right').marquee({
        direction: 'right',
        speed: 80,
        pauseOnHover: true,
    });

    // requst btn
    var isTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
    let heroBtn = document.querySelector('.btn-request');
    if (!isTouch) {
        if (heroBtn) {
            let X = (Y = 0)

            function move() {
                heroBtn.style.left = X + 'px'
                heroBtn.style.top = Y + 'px'
            }
            document.addEventListener('mousemove', function(e) {
                    heroBtn.style.display = 'flex';
                    heroBtn.style.transform = 'scale(1)'
                    X = e.pageX - 70
                    Y = e.pageY - 70
                    if (e.target.closest('.js-remove-request-btn')) {
                        heroBtn.style.transform = 'scale(0)';
                    }
                },
                false
            )
            setInterval(move, 100)
        }
    }

    // gallery items filter
    let galleryTabs = document.querySelector('.gallery__tabs');
    let galleryItems = document.querySelectorAll('.gallery__item');
    let galleryItemsActive = document.querySelectorAll('.gallery__item.active');
    if (galleryTabs) {
        galleryTabs.addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains('gallery__tab')) {
                document.querySelector('.gallery__tab.active').classList.remove('active');
                target.classList.add('active');
                let targetId = target.getAttribute('data-id');
                let count = 0;
                galleryItems.forEach((item, i) => {
                    if (targetId === item.getAttribute('data-id')) {
                        item.classList.add('active');
                        count++;
                        item.querySelector('.gallery__item-name .count').innerHTML = count;
                        item.animate([
                            { opacity: '0' },
                            { opacity: '1' }
                        ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' });
                    } else {
                        item.classList.remove('active');
                    }
                })
            }
        });
        if (galleryItemsActive.length) {
            galleryItemsActive.forEach((item, i) => {
                item.querySelector('.gallery__item-name .count').innerHTML = i + 1;
            })
        }
    }

    // experts filter
    let expertTabs = document.querySelector('.experts__tabs');
    let expertsCards = document.querySelector('.experts__items');
    if (expertTabs) {
        let expertItems = document.querySelectorAll('.experts__item');
        expertTabs.addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains('experts__tab')) {
                document.querySelector('.experts__tab.active').classList.remove('active');
                target.classList.add('active');
                let targetId = target.getAttribute('data-id');
                expertItems.forEach(item => {
                    if (targetId === item.getAttribute('data-id') && targetId != 1) {
                        item.style.display = 'flex';
                        item.animate([
                            { opacity: '0' },
                            { opacity: '1' }
                        ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' })
                    } else {
                        item.style.display = 'none';
                    }
                })
                if (targetId == 1) {
                    expertItems.forEach(item => {
                        item.style.display = 'flex';
                        item.animate([
                            { opacity: '0' },
                            { opacity: '1' }
                        ], { duration: 300, easing: 'ease-in-out', fill: 'forwards' })

                    })
                }
            }
        })
    }
    if (expertsCards) {
        expertsCards.addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains('experts__item-img') || target.classList.contains('experts__item-name')) {
                let backCard = target.closest('.experts__item').querySelector('.experts__item-back');
                backCard.style.display = 'flex';
                backCard.animate([{
                        opacity: '0',
                        transform: 'translateY(-50px)',
                    },
                    {
                        opacity: '1',
                        transform: 'translateY(0)',
                    }
                ], { duration: 400, easing: 'ease-in-out', fill: 'forwards' })
            }
            if (target.classList.contains('experts__item-close')) {
                let backCard = target.closest('.experts__item').querySelector('.experts__item-back');
                let animateCard = backCard.animate([{
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                    {
                        opacity: '0',
                        transform: 'translateY(-50px)',
                    }
                ], { duration: 400, easing: 'ease-in-out', fill: 'forwards' });
                animateCard.addEventListener('finish', () => {
                    backCard.style.display = 'none';
                })
            }
        })
    }

    // services page sidebar

    let servicesSidebar = document.querySelector('.services__sidebar-list');
    if (servicesSidebar) {
        // let firstSidebarItem = document.querySelector('.js-first-sidebar-item');
        // if (firstSidebarItem) {
        //     firstSidebarItem.style.maxHeight = `${firstSidebarItem.scrollHeight}px`;
        // }
        servicesSidebar.addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains('services__sidebar-header') && !target.classList.contains('active')) {
                let activeItem = document.querySelector('.services__sidebar-header.active');
                if (activeItem) {
                    activeItem.classList.remove('active');
                }
                document.querySelectorAll('.services__sidebar-body').forEach(item => item.style.maxHeight = `0px`);
                target.classList.add('active');
                if (target.nextElementSibling.classList.contains('services__sidebar-body')) {
                    let bodySidebar = target.nextElementSibling;
                    bodySidebar.style.maxHeight = `${bodySidebar.scrollHeight}px`;
                }
            } else {
                target.classList.remove('active');
                if (target.nextElementSibling.classList.contains('services__sidebar-body')) {
                    let bodySidebar = target.nextElementSibling;
                    bodySidebar.style.maxHeight = `0px`;
                }
            }
        })
    }

    // projects tabs 
    let planSection = document.querySelector('.plan');
    if (planSection) {
        let planTabs = document.querySelectorAll('.plan__list-item');
        let planItems = document.querySelectorAll('.plan__item');
        planSection.addEventListener('click', e => {
            const target = e.target;
            if (target.classList.contains('plan__list-item')) {
                let activeTab = document.querySelector('.plan__list-item.active');
                if (activeTab) {
                    activeTab.classList.remove('active');
                }
                target.classList.add('active');
            }
        })
        planTabs.forEach((key, i) => {
            key.addEventListener('click', () => {
                planItems.forEach((item, j) => {
                    item.classList.remove('active');
                    if (i === j) {
                        item.classList.add('active');
                    }
                })
            })
        })
    }

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