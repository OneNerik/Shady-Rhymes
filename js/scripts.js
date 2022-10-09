// Header slider

$(document).ready(function(){
   $('.slider-header__items').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      customPaging: function () { return '' }
   })
})

// Header menu

const HeaderIcon = document.querySelector('.nav-header__icon');
if (HeaderIcon) {
   const ListHeader = document.querySelector('.list-header');
   HeaderIcon.addEventListener("click", function (e) {
      HeaderIcon.classList.toggle('_active');
      ListHeader.classList.toggle('_active');
   })
}

