const swiper1 = new Swiper('.channel-slider', {
    // Optional parameters
    loop: true,

    slidesPerView: 1,
    spaceBetween: 20,

    breakpoints: {
        1900: {
            slidesPerView: 6
        },
        1600: {
            slidesPerView: 5
        },
        1300: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 3
        },
        800: {
            slidesPerView: 2
        },
    },
    // Navigation arrows
    navigation: {
        nextEl: '.channel-button-next',
        prevEl: '.channel-button-prev',
    },
});

const swiper2 = new Swiper('.recommended-slider', {
    // Optional parameters
    loop: true,

    slidesPerView: 2,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
        nextEl: '.recommended-button-next',
        prevEl: '.recommended-button-prev',
    },
});