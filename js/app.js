$(document).ready(function(){
 
  $('.gif-loader').hide();
$(".select-menu").change(function() {
  let $selection = $(".select-menu option:selected").val();
  $("p, img").remove(); 
  $('.gif-loader').show();

  if ($selection !== "" && $selection !== "home") {
    $.getJSON(
      "https://api.nytimes.com/svc/topstories/v2/" +
        $selection +
        ".json?api-key=6JnntmTCfFwazTbZ4Hd0rPbyYzVyUbtJ"
    )
    .done(function(data) {
      $("p, img").remove();  
         
      $.each(data.results, function(key, value) {
          let i = 12, 
          myArray = new Array(i);
          for (i = 0; i < myArray.length; i++) {
            if (value.multimedia[4] !== "") {
          myArray = value.multimedia[4].url
          
            }
        }

        $('.gif-loader').hide();

          $(".display_list").append(`<img class ="image" src=${myArray}></img>`);
          $(".display_list").append(`<a href=${value.url}><p class= "test">${value.title}</p></a>`);
        // } else {
        //   key++;
        // }
        return key < 11;
      });
    });
  } else {
    $("p, img").remove();
    $('.gif-loader').hide();
  }
  $('p').hover(function(){
    $(this).text(data.results[1].title);
  }, function() {
    $(this).text(data.results[1].abstract);
  });
});

});




