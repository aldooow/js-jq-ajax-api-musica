/*
Attraverso una chiamata ajax all’Api di boolean avremo a
disposizione una decina di dischi musicali.
Servendoci di handlebars stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.
Bonus: Creare una select con i seguenti generi: pop, rock,
metal e jazz. In base a cosa scegliamo nella select vedremo i
corrispondenti cd.
*/

$(document).ready(function() {


  $.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(data){
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);

        var cds = data.response;
        console.log(cds)
         for(var i = 0; i < cds.length; i++ ){
           var cd = data.response[i];
           var html = template(cd);
            $(".cds-container").append(html);
         }

      },
      error: function(richiesta, stato, errore){
          alert('ERROR');
      }
    }
  );



});
