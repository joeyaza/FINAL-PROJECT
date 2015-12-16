var images = ["http://nextprojection.com/wp-content/uploads/2014/06/rigor_mortis_1.jpg","http://2.bp.blogspot.com/-Vlk5CaVNxWc/UzIoj8s1cDI/AAAAAAAABF0/VVH-K95ezT0/s1600/Screen+Shot+2014-03-25+at+6.07.26+PM.png"],
    counter = 0
console.log(images[counter]);
$('#ghost').click(function () {
    counter = (counter + 1) % images.length;
    $("#ghost").attr('src', images[counter] )
    console.log('hello');
});