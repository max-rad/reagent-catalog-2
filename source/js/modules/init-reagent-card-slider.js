const initReagentCardSlider = () => {
  const slider1 = document.querySelector('[data-slider="swiper-1"]');
  const slider2 = document.querySelector('[data-slider="swiper-2"]');

  const buttonPrev = document.querySelector('[data-slider-button="prev"]');
  const buttonNext = document.querySelector('[data-slider-button="next"]');

  const pagination = document.querySelector('[data-slider-pagination]');

  const swiper1 = new Swiper(slider1, {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 22,
    freeMode: true,
    watchSlidesProgress: true,
  });

  const swiper2 = new Swiper(slider2, {
    loop: true,
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    pagination: {
      el: pagination,
    },
    thumbs: {
      swiper: swiper1,
    }
  });
}

export {initReagentCardSlider};
