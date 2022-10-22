// Mobile identificator 

let isMobile = {
   Android: function () { return navigator.userAgent.match(/Android/i); },
   BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
   iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
   Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
   Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
   any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
      let body = document.querySelector('body');
if (isMobile.any()) {
   body.classList.add('touch');
} else {
   body.classList.add('pc');
}

// Header slider

$(document).ready(function(){
   $('.slider-header__items').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      cssEase: 'linear',
      customPaging: function () { return '' }
   })
})

// Header menu

const menuArrow = document.querySelector('.arrow');
if (menuArrow) {
   const subList = document.querySelector('.list-header__sub-list');
   menuArrow.addEventListener("click", function (e) {
      menuArrow.classList.toggle('active');
      subList.classList.toggle('active');
   })
}

const HeaderIcon = document.querySelector('.nav-header__icon');
if (HeaderIcon) {
   const ListHeader = document.querySelector('.list-header');
   HeaderIcon.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      HeaderIcon.classList.toggle('_active');
      ListHeader.classList.toggle('_active');
   })
}

// Spoilers

if ($(window).width() < 768) {
   $('.spoiler').toggleClass('one');
}


$(document).ready(function() {
   $('.spoiler__title').click(function(event) {
      if ($('.spoiler').hasClass('one')) {
         $('.spoiler__title').not($(this)).removeClass('active');
         $('.spoiler__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   })
})
