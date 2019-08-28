$(document).ready(function () {
  const alerta = document.querySelector('#alert');

  alerta.addEventListener('click', () => {
    toastr.success('Mascota adoptada', 'Adopción de mascota', {
      "closeButton": true,
      "newestOnTop": true,
      "progressBar": true,
      "positionClass": "toast-top-right"
    });
  });
});
