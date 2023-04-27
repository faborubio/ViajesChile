// se agrega un smooth scrooll
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

// se muestran los tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// se agrega alerta de envio de correo
$(document).ready(function() {
  $("#enviarCorreo").click(function() {
    alert("El correo fue enviado correctamente...");
  });
});


// seleccionar todas las secciones con la clase "bg-section"
const sections = document.querySelectorAll('.bg-section');

// seleccionar la navbar con la clase "fixed-top"
const navbar = document.querySelector('.fixed-top');

// función que se ejecutará cuando se detecte que se ha alcanzado una sección
function handleSectionChange(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navbar.classList.add('bg-change');
    } else {
      navbar.classList.remove('bg-change');
    }
  });
}

// crear un observer para observar las secciones
const observer = new IntersectionObserver(handleSectionChange);

// observar cada sección
sections.forEach(section => {
  observer.observe(section);
});

// observar también el footer para asegurarnos de que se elimine el fondo de la navbar al llegar al final de la página
const footer = document.querySelector('footer');
observer.observe(footer);
