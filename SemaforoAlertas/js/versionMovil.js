

function screenResponsiveWebDesing() {

     sizeScreen       = $(window).width()
     linkUnivalle     = $('map').find('#link-univalle')
     linkAses         = $('map').find('#link-ases')
     //viene la magia

     //Adapatacíon de los enlaces de la imagen de la universida
     if (sizeScreen <= 1050 && sizeScreen > 500) {

         linkUnivalle.attr({'coords': '0,0,100,127'})
         linkAses.attr({'coords': '100,0,275,127'})

     }
     else if (sizeScreen <= 500 && sizeScreen > 375) {

         linkUnivalle.attr({'coords': '0,0,70,96'})
         linkAses.attr({'coords': '70,0,208,96'})

     }
     else {

         linkUnivalle.attr({'coords': '0,0,52,62'})
         linkAses.attr({'coords': '52,0,140,62'})
         
     }

     // adaptacion de la imagen de ayudad a pantallas menores o iguales a 280px de ancho
     if (sizeScreen <= 280) {
        $('.ayuda-image').css({'height':'30vh'})
        $('.ayuda-information-page-title').css({'font-size':'1.9em' , 'left' : '9%'})
     }

}

function dimensionFuncionalityMovil(dimension , dimensionPrecionada) {
      

     
     //alert(dimension)
     $('.menu-dimension-movil').slideUp(700);
     $('.title-dimension').css({'display': 'none'})
     $('.inicio-title-movil').css({'display': 'none'})
     $('.tematicas-nav').css({'display': 'none'})
     $('.title').css({
         'display': 'flex',
         'font-size': '15px'
     })
     //$('#movil-hamburger').css({'display':'none'})
     //$('#imagen-movil-hamburger').attr({'src': dimension})
     //$('#imagen-movil-hamburger').addClass('dimension-btn-movil')
     //$(dimensionPrecionada).find('.dimension-btn-movil').addClass("active")

}