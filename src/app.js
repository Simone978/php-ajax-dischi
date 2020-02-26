const $ = require('jquery');
const Handlebars = require("handlebars");

const template = Handlebars.compile("Name: {{name}}");
console.log(template({ name: "Nils" }));


$(document).ready(function(){
  $.ajax(
    {
      url: "http://localhost:88/php/php-ajax-dischi/server.php",
      method: "GET",
      success: function (data) {
      // console.log(data);
      fillDisk(data);
      },
      error: function (richiesta, stato, errori) {
      alert("E' avvenuto un errore. " + errore);
      }
    }
  );

})

function fillDisk(data){
  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);
  for (var i = 0; i < data.length; i++) {
    var dati = data[i];
    var context = {
      poster: dati.poster,
      title: dati.title,
      author: dati.author,
      year: dati.year
    };
    var html = template(context);
    $('.wrapper').append(html);

  }
}
