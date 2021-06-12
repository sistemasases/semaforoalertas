
// Acomodar exepciones que suceden en la pagina en diferentes dispositivos
function screenResponsiveWebDesing() {

     sizeScreenWidth  = $(window).width()
     sizeScreenHeigth = $(window).height()
     linkUnivalle     = $('map').find('#link-univalle')
     linkAses         = $('map').find('#link-ases')
     //viene la magia

     //Adapatacíon de los enlaces de la imagen de la universida
     if ( sizeScreenWidth <= 1050 &&  sizeScreenWidth > 500) {

         linkUnivalle.attr({'coords': '0,0,100,127'})
         linkAses.attr({'coords': '100,0,275,127'})

     }
     else if ( sizeScreenWidth <= 500 &&  sizeScreenWidth > 375) {

         linkUnivalle.attr({'coords': '0,0,70,96'})
         linkAses.attr({'coords': '70,0,208,96'})

     }
     else {

         linkUnivalle.attr({'coords': '0,0,52,62'})
         linkAses.attr({'coords': '52,0,140,62'})
         
     }


     //Reposive web desing para pantallas de 800 de alto y 500 de ancho
     if ( sizeScreenWidth <= 500 &&  sizeScreenWidth > 375 && sizeScreenHeigth > 800) {

        $('.semaforo').css({
           'left': '1%' ,
        })

        $('.menu').css({
            'top': '43%'
        })

        $('.ayuda-image').css({
            'height': '26vh'
        })
     }

     //resposive web desing en pantallas mayores de 800px y un ancho minimo de 375px
     if (sizeScreenWidth <= 375 &&sizeScreenWidth > 280 && sizeScreenHeigth >= 800) {

         $('.ayuda-image').css({
             'height': '26vh'
         })

     }

     // adaptacion de la imagen de ayudad a pantallas menores o iguales a 280px de ancho
     if ( sizeScreenWidth <= 280) {
        $('.ayuda-image').css({'height':'30vh'})
        $('.ayuda-information-page-title').css({'font-size':'1.9em' , 'left' : '9%'})
     }

     //No permite salirse de la pantalla del inicio en version movil
      if ( sizeScreenWidth <= 1050 ) {
        $('#individual').hide()
        $('#familiar').hide()
        $('#academica').hide()
        $('#economica').hide()
        $('#vidauniversitaria').hide()
      }

}

//reiniciar el estado de las paginas en la version movil
function restartPage() {
        $('#individual').show()
        $('#familiar').show()
        $('#academica').show()
        $('#economica').show()
        $('#vidauniversitaria').show()
}

// Funcionalidad del menu parte de las dimensiones
function dimensionFuncionalityMovil(dimension , dimensionPrecionada) {

        sizeScreenWidth  = $(window).width()

        $('.menu-dimension-movil').slideUp(700)
        $('.title-tematicas').fadeIn(500)
        $('.hamburger-movil-tematica').fadeIn(500)
        $('.title-tematicas').fadeIn()
        $('.hamburger-movil-tematica').fadeIn()
        $('.semaforo').css({'left': '-25%'})
        $('.corner-menu').css({'padding-left': '30px'})
        $('.tematica-logo').attr({'height':'100px'}) 
        $('.title-dimension').css({'display': 'none'})
        $('.inicio-title-movil').css({'display': 'none'})
        $('.tematicas-nav').css({'display': 'none'})

        if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {

        $('.title').css({
            'display': 'flex',
            'font-size': '25px',
            'left': '55%'
        })


        }
        else {

        $('.title').css({
            'display': 'flex',
            'font-size': '20px',
            'left': '51%'
        })

        }

        switch (dimension) {

            case '#individual':
                 $('#individual').show()
                 $('#familiar').hide()
                 $('#academica').hide()
                 $('#economica').hide()
                 $('#vidauniversitaria').hide()
            break;

            case '#familiar':
                 $('#familiar').show()
                 $('#individual').hide()
                 $('#academica').hide()
                 $('#economica').hide()
                 $('#vidauniversitaria').hide()
            break;

            case '#academica':
                 $('#academica').show()
                 $('#individual').hide()
                 $('#familiar').hide()
                 $('#economica').hide()
                 $('#vidauniversitaria').hide()
            break;

            case '#economica':
                 $('#economica').show()
                 $('#individual').hide()
                 $('#familiar').hide()
                 $('#academica').hide()
                 $('#vidauniversitaria').hide()
            break;

            case '#vidauniversitaria':
                 $('#vidauniversitaria').show()
                 $('#individual').hide()
                 $('#familiar').hide()
                 $('#academica').hide()
                 $('#economica').hide()

                 if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {
                  $('.title').css({
                      'font-size': '19px',
                      'left': '50%'
                  })
                  
                 }else {
                  $('.title').css({
                      'font-size': '18px',
                      'left': '50%'
                  })    
                 }

            break;
        }

}

//funcionalidad de las tematicas en version movil
function tematicasFuncionalityMovil(NombreDimension) {
                  
        switch (NombreDimension) {

            case '#individual':
                 $('.tematicas-dimension-movil').slideUp(300)
            break;

            case '#familiar':
                 $('.tematicas-dimension-familiar').slideUp(300)
            break;

            case '#academica':
                 $('.tematicas-dimension-academica').slideUp(300)
            break;

            case '#economica':
                  $('.tematicas-dimension-economica').slideUp(300)
            break;

            case '#vidauniversitaria':
                 $('.tematicas-dimension-vidaU').slideUp(300)
            break;
        }

}


// Reiniciar todo a la pagina de inicio
function inicioMovil() {

     sizeScreen  = $(window).width()

     if ( sizeScreen <= 1050 ) {
        $('.title').fadeOut()
        $('.title-dimension').fadeIn()
        $('.title-tematicas').fadeOut()
        $('.hamburger-movil-tematica').fadeOut()
        $('.inicio-title-movil').fadeIn()
        $('.tematicas-dimension-movil').fadeOut()
        $('.tematicas-dimension-familiar').fadeOut()
        $('.tematicas-dimension-academica').fadeOut()
        $('.tematicas-dimension-economica').fadeOut()
        $('.tematicas-dimension-vidaU').fadeOut()
        $('.menu-dimension-movil').fadeOut()
        $('#individual').hide()
        $('#familiar').hide()
        $('#academica').hide()
        $('#economica').hide()
        $('#vidauniversitaria').hide()

        if (sizeScreen <= 500 && sizeScreen > 375) {
        $('.semaforo').css({'left': '-4%'})
        $('.corner-menu').css({'padding-left': '10px'})
        }
        else {
        $('.semaforo').css({'left': '1%'})
        $('.corner-menu').css({'padding-left': '10px'})
        }
       
     }
}

