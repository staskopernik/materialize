$( document ).ready(function () {
      $(".button-collapse").sideNav();
      $(".parallax").parallax();
      $(".modal").modal({
            dismissible:false,
            opacity:.9,
            inDuration: 300,
            outDuration: 300,
            startingtop:"70%",
            
      });
      $(".carousel.carousel-slider").carousel({
            fullWidth: true,
            indicators: true,
            duration: 500,
            noWrap:true,
      })
})