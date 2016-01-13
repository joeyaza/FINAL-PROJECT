$(function(){


  // function moveDiv() {
  //     var $span = $(".ghost2");
      
  //     $span.fadeOut(1000, function() {
  //         var maxLeft = $(container).width() - $span.width();
  //         var maxTop = $(container).height() - $span.height();
  //         var leftPos = Math.floor(Math.random() * (maxLeft + 1))
  //         var topPos = Math.floor(Math.random() * (maxTop + 1))
       
  //         $span.css({ left: leftPos, top: topPos }).fadeIn(1000);
  //     });
  // };

  // moveDiv();
  // setInterval(moveDiv, 5000);




var text = $("#jquerybuddy"),
numLetters = text.find("span").length;

function randomBlurize() {
  text.find("span:nth-child(" + (Math.floor(Math.random()*numLetters)+1) + ")")
  .animate({
    'textShadowBlur': Math.floor(Math.random()*25)+4,
    'textShadowColor': 'rgba(0,100,0,' + (Math.floor(Math.random()*200)+55) + ')'
  });
// Call itself recurssively
setTimeout(randomBlurize, 100);
} // Call once
randomBlurize();
})











//   var images = ["http://nextprojection.com/wp-content/uploads/2014/06/rigor_mortis_1.jpg","http://2.bp.blogspot.com/-Vlk5CaVNxWc/UzIoj8s1cDI/AAAAAAAABF0/VVH-K95ezT0/s1600/Screen+Shot+2014-03-25+at+6.07.26+PM.png", "http://cdn3-www.shocktillyoudrop.com/assets/uploads/2014/12/The-Babadook-1024x576.jpg"],

//       counter = 0;
//   console.log(images[counter]);

//   $('body').on("click", "#ghost", function () {
//       counter = (counter + 1) % images.length;
//       console.log(counter)
//       $("#ghost").attr('src', images[counter] )
//   });


// })


  // $("#jquerybuddy").lettering();

// hack to get animations to run again