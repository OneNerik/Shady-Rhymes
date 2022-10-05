$(document).ready(function(){
   $('.slider-header__items').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      customPaging: function () { return '' }
   })
})