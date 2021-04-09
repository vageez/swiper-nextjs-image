export const InitRotator = () => {
  return {
    speed: 1000,
    // autoplay: { delay: 5000 },
    // centeredSlides: true,
    // loop: true,
    grabCursor: true,
    longSwipesRatio: 0.25,
    navigation: true,
    pagination: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    breakpoints: {
      0: {
        slidesPerView: 3.5,
        slidesPerGroup: 3.5,
        spaceBetween: 8,
      },
      576: {
        slidesPerView: 4.5,
        slidesPerGroup: 4.5,
        spaceBetween: 12,
      },
      992: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
      1500: {
        slidesPerView: 5,
        slidesPerGroup: 5,
      },
      1900: {
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
    },
  }
}


export const InitPromoTeaser = () => {
  return {
    speed: 1000,
    autoplay: { delay: 5000 },
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    longSwipesRatio: 0.25,
    navigation: true,
    pagination: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    breakpoints: {},
  }
}
