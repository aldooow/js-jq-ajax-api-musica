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

  /*
  Attraverso una chiamata ajax all’Api di boolean avremo a
  disposizione una decina di dischi musicali.
  Servendoci di handlebars stampiamo tutto a schermo.
  In questo momento non è importante la parte grafica.
  */
  $.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(data){
        // Handlebars.
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);

        // Variante di tutto il contenuto del URL (Array di OBJECTS).
        var cds = data.response;
        // Ciclo FOR con Lunghezza della Variante che contiene tutta la risposta URL.
         for(var i = 0; i < cds.length; i++ ){
           // Variante di Ogni OBJECT che è dentro l'Array.
           var cd = data.response[i];
           // TEMPLATE da Appendere.
           var html = template(cd);
           // Appendere HTML nel DIV desiderato.
           $(".cds-container").append(html);

         }

      },
      error: function(richiesta, stato, errore){
          alert('ERROR');
      }
    }
  );


  /*
  Bonus: Creare una select con i seguenti generi: pop, rock,
  metal e jazz. In base a cosa scegliamo nella select vedremo i
  corrispondenti cd.
  */
  $(document).change(function(){
    // Creare una Variante per la VALUE di SELECT.
    var genreValueSelect = $("#js_select").val();
    // Per Ogni CD esegue questa funzione.
    $(".cd").each(function() {
      // Creare una Variante Per il GENRE di THIS CD.
      var genreCD = $(this).find(".genre").text();

      // Se il VALUE del SELECT è uguale ad "All", Mostrare Tutti CD.
      if(genreValueSelect == "All"){
        $(".cd").show();
      } // Altrementi Se il VALUE del SELECT è uguale a GENRE nel CD, SHOW questo CD.
      else if(genreValueSelect == genreCD){
        $(this).show();
      } // Altrementi HIDE questo CD.
      else {
        $(this).hide();
      }
    });

  });


});
