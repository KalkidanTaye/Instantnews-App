
$(".select-menu").change(function() {
  
      let $selection = $( ".select-menu option:selected" ).val();
       console.log($selection)
       if($selection !== '') {
        $.getJSON('https://api.nytimes.com/svc/topstories/v2/'+$selection+'.json?api-key=6JnntmTCfFwazTbZ4Hd0rPbyYzVyUbtJ')
      
        .done(function(data) {
          // console.log(data.results[0].title)
          // console.log(data.results[9].multimedia[0].url)
          // $('.display_list').append(`<img src=${data.results[0].multimedia[3].url}></img>`)
          // $('.title').append(`<p>${data.results[0].title}</p>`)
          $('p, img').hide()
          
        $.each(data.results, function(key, value){
          // for(let i=0;i<11; i++){
         if(value.multimedia[4].url !== '')  {
          
           
            console.log(value)
  
           
            $('.display_list').append(`<img src=${value.multimedia[4].url}></img>`)
            $('.display_list').append(`<p>${value.title}</p>`)
          }
        // }
        })
  
  
  
       
    
        })
  
       }
       else{
         // goes to home page
       }
          })
  

 // console.log(data.results[9].title)
            // console.log(data.results[9].multimedia[0].url)
            // console.log(data.results.length)