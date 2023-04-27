
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 850, function(){

      window.location.hash = hash;
      });
    }
  });
});


$(document).ready(function() {
  $("#enviarCorreo").click(function() {
    alert("El correo fue enviado correctamente...");
  });
});
