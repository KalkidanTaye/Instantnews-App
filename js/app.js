
$(".select-menu").change(function() {
      let $selection = $('#my-select-menu').val()
      //  console.log($selection)
      $.getJSON("https://api.nytimes.com/svc/topstories/v2/business.json?api-key=6JnntmTCfFwazTbZ4Hd0rPbyYzVyUbtJ")
      
      .done(function(data) {
        // console.log(data.results[0].title)
        // console.log(data.results[9].multimedia[0].url)
        // $('.display_list').append(`<img src=${data.results[0].multimedia[3].url}></img>`)
        // $('.title').append(`<p>${data.results[0].title}</p>`)

      $.each(data.results, function(key, value){
      
        //     console.log(data.results[9].title)
      //     console.log(data.results[9].multimedia[0].url)
          // console.log(data.results.length)
          // console.log(value)

          
          $('.display_list').append(`<img src=${value.multimedia[3].url}></img>`)
          $('.display_list').append(`<p>${value.title}</p>`)
    
      })



      // $('#fashion-option').append(`<p>${data.weather["0"].description}</p>`)



      //   $("results").siblings().toggle('slow')
      //   $("p, img").slideUp()
      //     var iconcode = data.weather[0].icon;
      //     var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
  
      //     $('.results').append(`<img src=${iconurl}></img>`)
      //     $('.results').append(`<p>${data.weather["0"].main}</p>`)
      //     $('.results').append(`<p>${data.weather["0"].description}</p>`)
  
      })
    })
  

