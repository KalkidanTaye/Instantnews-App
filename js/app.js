
$(".select-menu").change(function() {
  // $(this).toggleClass("resize");
      let $selection = $( ".select-menu option:selected" ).val();
      //  console.log($selection)
       if(($selection !== '') && ($selection !== 'home')) {
        $.getJSON('https://api.nytimes.com/svc/topstories/v2/'+$selection+'.json?api-key=6JnntmTCfFwazTbZ4Hd0rPbyYzVyUbtJ')
      
        .done(function(data) {
          // $('p, img').hide()
          // $('p').on("mouseover", function () {
          //   $('p').append(`<p>${data.results[1].abstract}</p>`)
          //   })
            
            console.log(data.results[1].abstract);

          $.each(data.results, function(key, value){
          // console.log(value.multimedia)
          
         if(value.multimedia[4].url !== '')  {
         
            $('.display_list').append(`<img src=${value.multimedia[4].url}></img>`)
            $('.display_list').append(`<p>${value.title}</p>`)

            // if(){

            //   $('p').on("mouseover", function () {
            //     $('p').append(`<p>${value.abstract}</p>`)
            //     })
            // }
            
         }
          else {
            key++
            $('.display_list').append(`<img src=${value.multimedia[4].url}></img>`)
            $('.display_list').append(`<p>${value.title}</p>`)
          }
          // console.log(key)
          // console.log(value.abstract)
     
        return (key<11)
       
        
        })
  
  
  
       
    
        })
  
       }
       else{
        $('p, img').hide()
       }
          })
  

 // console.log(data.results[9].title)
            // console.log(data.results[9].multimedia[0].url)
            // console.log(data.results.length)