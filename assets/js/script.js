let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('#enviarCorreo').click(function () {
    alert('El correo fue enviado exitosamente...')
});

$('#Ingredientes').on('dblclick', function () {
    $(this).css('color', 'red');
});

$('#Preparacion').on('dblclick', function () {
    $(this).css('color', 'red');
});

$('.card-title').click(function() {
    $('.card-text, .card img').toggle();
});
