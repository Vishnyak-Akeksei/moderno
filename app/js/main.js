$(function (){
     $(".rate-star").rateYo({
         rating: 5,
         starWidth: "12px",
         readOnly: true
      });
       
   
      $('.product-slider__inner').slick({
              dots: true,
              infinite: true,
              arrows: false,
              slidesToShow: 4,
              slidesToScroll: 2
      });
    
    var mixer = mixitup('.products__inner-box');

});