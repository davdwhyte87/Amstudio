$(document).ready(function(){
    // $(function () {
    //     $(document).scroll(function () {
    //       var $nav = $(".navbar");
    //       var $navitem=$(".nav-item>a");
    //       $nav.toggleClass('scrolled', $(this).scrollTop() >5);
    //       $navitem.toggleClass('scrolled-a', $(this).scrollTop() >5,false);
    //     });
    //   });

  // Add scrollspy to <body>
$('body').scrollspy({target: ".navbar", offset: 0});

// Add smooth scrolling on all links inside the navbar
  $("#myNav a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
 
    // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });

  } // End if

}); 
});