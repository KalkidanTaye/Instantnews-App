$(".select-menu").change(function() {
  // $(this).toggleClass("resize");
  let $selection = $(".select-menu option:selected").val();
  console.log($selection);
  if ($selection !== "" && $selection !== "home") {
    $.getJSON(
      "https://api.nytimes.com/svc/topstories/v2/" +
        $selection +
        ".json?api-key=6JnntmTCfFwazTbZ4Hd0rPbyYzVyUbtJ"
    )
    .done(function(data) {
      //find a way to clear all articles currently on screen before adding the new ones
      $("p, img").hide();

      console.log(data.results[1].title)
      


      // console.log(data.results[1].abstract);

      $.each(data.results, function(key, value) {
        // console.log(value.multimedia)

        if (value.multimedia !== "") {
          $(".display_list").append(
            `<img src=${value.multimedia[4].url}></img>`
          );
          $(".display_list").append(`<p class= "test">${value.title}</p>`);
        } else {
          key++;
          $(".display_list").append(
            `<img src=${value.multimedia[4].url}></img>`
          );
          $(".display_list").append(`<p>${value.title}</p>`);
        }
        // console.log(key)
        // console.log(value.abstract)

        return key < 11;
      });
    });
  } else {
    $("p, img").hide();
    $('p').hover(function(){
      $(this).text(data.results[1].title);
    }, function() {
      $(this).text(data.results[1].abstract);
    });
  }
});



// console.log(data.results[9].title)
// console.log(data.results[9].multimedia[0].url)
// console.log(data.results.length)
