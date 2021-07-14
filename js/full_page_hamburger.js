/* Open */

document.querySelector("#hamburger-btn").addEventListener('click', function() {
    $('.overlay').fadeIn(300)
    $('.menu').fadeIn(300)
   // $('#hamburger-btn').fadeOut(300)
    $('#ayuda').hide()
}, false)

/* Close */
document.querySelector("#close-btn").addEventListener('click', function() {
    $('.overlay').fadeOut(300)
    $('#hamburger-btn').fadeIn(300)
}, false)

/* Back */
document.querySelector("#back-btn").addEventListener('click', function() {
    $('.information-page').fadeOut(300)
    $('.menu').fadeIn(300)
    $('.back').hide()
    $('.close').fadeIn(300)
}, false)


function inicio() {

    sizeScreenWidth  = $(window).width()
    inicioMovil()
    
    $('.title').text('INICIO')
    
    $('.dimension').each(function (e) {
        $(this).find('.dimension-btn').removeClass("active")
    })
    $('html, body').animate({
        scrollLeft: 0
    }, {
        duration: 500
    })
    
    $(".tematicas-dimension").each(function(e) {
        $(this).hide()
    })

    $('.semaforo').find('.cls-1').removeClass('filter')
    $('.semaforo').find('.red-circle').removeClass('filter')
    $('.semaforo').find('.yellow-circle').removeClass('filter')
    $('.semaforo').find('.green-circle').removeClass('filter')
    $('.section').css({'height': '100vh' , 'padding-top': '220px'})
    $('.logo-ases img').css('height','100%')
    $('.semaforo-link').off('click')
    $('#circle-red').attr({'stroke': '' , 'stroke-width':0})
    $('#circle-yellow').attr({'stroke': '' , 'stroke-width':0})
    $('#circle-green').attr({'stroke': '' , 'stroke-width':0})
    $('.green-circle').css('fill','#94b33c')
    $('.yellow-circle').css('fill','#f3eb3b')
    $('.red-circle').css('fill','#ef3a2d')

    if (sizeScreenWidth > 1050) {

    $('div').remove('.text-danger')
    $('div').remove('.text-warning')
    $('div').remove('.text-success')
    $('.logo-ases').css('margin','40px' ) 
    
    }
}

$('.menu-item').on('click', function(e) {
    e.preventDefault()
    id = $(this).attr('href')
    if(id == '#inicio') {
        inicio();
        $('.overlay').fadeOut(300);
        $('#hamburger-btn').fadeIn(300);
        return;
    }
    $(id).fadeIn(300)
    $('.menu').fadeOut(300)
    $('.close').hide()
    $('.back').fadeIn(300)
})

$('#ayuda-btn').on('click', function(e) {
    e.preventDefault()
    $('.overlay').fadeIn(300)
    $('.menu').hide(300)
    $('#ayuda').fadeIn(300)
})