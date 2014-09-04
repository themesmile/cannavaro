   $('.newsticker').newsTicker({
        row_height: 62,
        max_rows: 2,
        duration: 3000,
        pauseOnHover: 0
    });
  $('.top-newsticker').newsTicker({
        row_height: 20,
        max_rows: 1,
        duration: 5000,
        pauseOnHover: 0
    });
       /**
     * If you need to access the internal property or methods, use this:
     * var api = $.data( $('#main-slider')[0], 'liquidSlider');
     * console.log(api);
     */

    $('#main-slider').liquidSlider({
        responsive: true,
        autoSlide:false,
        slideEaseDuration: 1500,
        autoSlideInterval: 6000,
        mobileNavigation: false
    });