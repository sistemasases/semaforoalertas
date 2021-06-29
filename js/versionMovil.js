
// Acomodar exepciones que suceden en la pagina en diferentes dispositivos
function screenResponsiveWebDesing() {

     sizeScreenWidth  = $(window).width()
     sizeScreenHeigth = $(window).height()
     linkUnivalle     = $('map').find('#link-univalle')
     linkAses         = $('map').find('#link-ases')
     pressFooter = false;
     starPage = false
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
     if (sizeScreenWidth <= 375 && sizeScreenWidth > 280 && sizeScreenHeigth >= 800) {

         $('.ayuda-image').css({
             'height': '26vh'
         })

     }
     else if (sizeScreenWidth <= 375 &&sizeScreenWidth > 280 && sizeScreenHeigth <= 600) {

         $('.ayuda-information-page-title').css({
             'top': '-40%'
         })
     }


     // adaptacion de la imagen de ayudad a pantallas menores o iguales a 280px de ancho
     if ( sizeScreenWidth <= 280) {
        $('.ayuda-image').css({'height':'30vh'})
        $('.ayuda-information-page-title').css({'font-size':'1.9em' , 'left' : '9%'})
     }



     //No permite salirse de la pantalla del inicio en version movil
      if ( sizeScreenWidth <= 1050 ) {

        textInformationContact = $('.contact-information').html()
        $('#individual').hide()
        $('#familiar').hide()
        $('#academica').hide()
        $('#economica').hide()
        $('#vidauniversitaria').hide()
        $('.contact-information').text('Mayor información')


        //funcionalidad del footer version movil
        $('.contact-information').click( function(event) {
            event.preventDefault()
            event.stopPropagation()

            if ( pressFooter === false) {

            $('.hamburger-movil-cerrar').fadeIn()
            $('.footer').animate({height:'90px'})
            $('.corner-menu').animate({paddingBottom:'80px'})
            $('.semaforo').animate({paddingBottom:'90px'})
            $('.logo-ases').animate({paddingBottom:'70px'})
            $('.hamburger-movil-cerrar').animate({paddingBottom:'35px'})
            $('.contact-information').html(textInformationContact)

 
            if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {

            $('.contact-information').css ({
               'font-size':'10px',
               'padding': '23px 35px'
            })

            $('.logo-ases').css({
                'height':'8rem',
                'right': '25%'
            })

            $('.semaforo').css({
                'height':'43%',
            })

            }
            else if (sizeScreenWidth <= 375) {

            
            $('.contact-information').css ({
               'font-size':'9.5px',
               'padding': '20px 35px'
            })

            if (sizeScreenWidth < 321) {

            $('.contact-information').css ({
               'font-size':'9px',
               'padding': '15px 35px'
            })

            }

            $('.semaforo').css({
                'height':'40%',
            })

            $('.logo-ases').css({
                'height':'8rem',
                'right': '33%'
            })

            }
            

            pressFooter = true

            }
            else {

            //restarAnimateFooterMovil()
            pressFooter = false

            }
        })

        $('.hamburger-btn-movil-cerrar').click(function(event) {
            event.preventDefault()
            restarAnimateFooterMovil()
        })

        //cambiar de orientacion la pantalla
        $(window).on('orientationchange',function(event) {
            
            if (window.orientation === 90) {
               // $(screen).width(sizeScreenHeigth)
            }
        })
                          

      }

}


// Funcionalidad del menu parte de las dimensiones
function dimensionFuncionalityMovil(dimension , dimensionPrecionada) {

        sizeScreenWidth  = $(window).width()

        restarAnimateFooterMovil()

        $('.menu-dimension-movil').slideUp(700)
        $('.title-tematicas').fadeIn(500)
        $('.hamburger-movil-tematica').fadeIn(500)
        $('.title-tematicas').fadeIn()
        $('.hamburger-movil-tematica').fadeIn()
        $('.semaforo').css({'left': '-25%'})
        $('.corner-menu').css({'padding-left': '30px'})
        $('.title-dimension').css({'display': 'none'})
        $('.inicio-title-movil').css({'display': 'none'})
        $('.tematicas-nav').css({'display': 'none'})
        $('.tematica-title').hide()
        $('.tematica-title-little').hide()
        $('#tematicas-movil').show()
        $('#tematicas-movil').addClass('title-tematicas')
        $('#tematicas-movil').removeClass('title-tematica-movil')
        $('#tematicas-movil').text('Tematicas')
        $('#tematicas-movil').attr({'style':'display: block;'})
        $('.tematica-logo').css({'float' : 'left'})
        $('#8').hide()
        $('#9').hide()
        $('#2').hide()
        $('#1').hide()
        $('#5').hide()
        $('#6').hide()


        if (starPage === false) {

        let arrayTematicaLogo = []
        let arrayTematicaContent = []

        $('.tematica-content').each(function(index,value) {
           arrayTematicaContent.push(value)
        })
        
        $('.tematica-logo').each(function (index,value) { 
           arrayTematicaLogo.push(value)
        })

        for ( let i = 0 ; i < 29 ; i++) {
           arrayTematicaContent[i].prepend(arrayTematicaLogo[i])
        }


        arrayTematicaLogo.splice(0,29)
        arrayTematicaContent.splice(0,29)
        starPage = true

        }

        if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {
        $('div .tematica-logo img').css( {'height':'90px'} )
        $('.title').css({
            'display': 'flex',
            'font-size': '25px',
            'left': '55%'
        })


        }
        else if (sizeScreenWidth <= 375) {
        $('div .tematica-logo img').css( {'height':'90px'} )
        $('.title').css({
            'display': 'flex',
            'font-size': '20px',
            'left': '51%'
        })

        if (sizeScreenWidth <= 280) {
        $('div .tematica-logo img').css( {'height':'70px'} )
        }

        }
        

        switch (dimension) {

            case '#individual':
                 $('#individual').show()
                 $('#inicio').hide()
                 $('#familiar').hide()
                 $('#academica').hide()
                 $('#economica').hide()
                 $('#vidauniversitaria').hide()
            break;

            case '#familiar':
                 $('#familiar').show()
                 $('#inicio').hide()
                 $('#individual').hide()
                 $('#academica').hide()
                 $('#economica').hide()
                 $('#vidauniversitaria').hide()
            break;

            case '#academica':
                 $('#academica').show()
                 $('#inicio').hide()
                 $('#individual').hide()
                 $('#familiar').hide()
                 $('#economica').hide()
                 $('#vidauniversitaria').hide()
            break;

            case '#economica':
                 $('#economica').show()
                 $('#inicio').hide()
                 $('#individual').hide()
                 $('#familiar').hide()
                 $('#academica').hide()
                 $('#vidauniversitaria').hide()
            break;

            case '#vidauniversitaria':
                 $('#vidauniversitaria').show()
                 $('#inicio').hide()
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
function tematicasFuncionalityMovil(NombreDimension , tematicaPresionada, indexTematica,indexDimension) {

        sizeScreenWidth  = $(window).width()
        tituloTematica = $(tematicaPresionada).attr('title')

        $('#tematicas-movil').addClass('title-tematica-movil')
        $('#tematicas-movil').removeClass('title-tematicas')
        $('#tematicas-movil').text(tituloTematica)
  
        restarAnimateFooterMovil()
        switch (NombreDimension) {

            case '#individual':
                 $('.tematicas-dimension-movil').slideUp(300)
               
                 if (sizeScreenWidth <= 290) {

                      if (  indexTematica === 3 ||
                            indexTematica === 5 ||
                            indexTematica === 7
                      ) {

                        $('.title-tematica-movil').css({
                            'font-size': '16px',
                            'padding-top':'83px'
                        })

                      }else {
                       $('#tematicas-movil').attr({'style': 'display: block;'})
                
                      }
                 }

            break;

            case '#familiar':
                 $('.tematicas-dimension-familiar').slideUp(300)
            break;

            case '#academica':
                 $('.tematicas-dimension-academica').slideUp(300)

                 if (sizeScreenWidth <= 375) {
     
                    if ( indexTematica === 0 ) {

                        $('.title-tematica-movil').css({
                            'font-size': '16px',
                            'padding-top':'83px'
                        })

                      } else {

                       $('#tematicas-movil').attr({'style': 'display: block;'})
                
                      }
                 }
                 
            break;

            case '#economica':
                  $('.tematicas-dimension-economica').slideUp(300)

                  if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {

                         if (indexTematica === 0 ||
                             indexTematica === 3) {
                        
                            $('.title-tematica-movil').css({
                                 'font-size': '15px',
                                 'padding-top': '108px'
                            })

                         }
                         else {

                            $('.title-tematica-movil').css({
                                 'font-size': '20px',
                                 'padding-top': '99.8px'
                            })

                         }
                  }
                  else if (sizeScreenWidth <= 375) {
     
                         if ( indexTematica === 0 ||
                         indexTematica === 3 ) {

                            $('.title-tematica-movil').css({
                                 'width': '300px',
                                 'right': '-10%',
                                 'font-size': '13px',
                                 'padding-top':'85px',
                            
                            })
                        }
                        else if ( indexTematica === 1 ||
                                  indexTematica === 2 ) {

                            $('.title-tematica-movil').css({
                                 'width': '270px',
                                 'right': '-10%',
                                 'font-size': '13px',
                                 'padding-top':'85px',
                            
                        })

                       }
                 }

            break;

            case '#vidauniversitaria':
                 $('.tematicas-dimension-vidaU').slideUp(300)

                if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {

                        if ( indexTematica === 0 ||
                             indexTematica === 2  ) {

                            $('.title-tematica-movil').attr({
                                 'style' : 'right: 29%; font-size:15px; padding-top: 108px; ' 
                          
                            })

                        }
                        else if ( indexTematica === 5 ) {

                            $('.title-tematica-movil').css({
                                 'width': '300px',
                                 'right': '23%',
                                 'font-size': '15px',
                                 'padding-top': '100px'

                            })

                        }
                        else {
                        
                            $('.title-tematica-movil').attr({
                            'style' : 'right: 29%; font-size:20px; padding-top: 99.8px; '
                            })

                     }
                 }
                 else if (sizeScreenWidth <= 375) {

                        if ( indexTematica === 0 ||
                             indexTematica === 1 ||
                             indexTematica === 2 ||
                             indexTematica === 5  ) {

                            $('.title-tematica-movil').css({
                               'width': '170px',
                               'right': '23%',
                               'font-size': '15px',
                               'padding-top': '70px'

                            })

                        }
                        else  {

                            $('.title-tematica-movil').attr({
                            'style' : 'right: 29%; font-size:20px; padding-top: 78px; '
                            })

                        }

                 }

            break;
        }



}


// Reiniciar todo a la pagina de inicio
function inicioMovil() {

     sizeScreenWidth   = $(window).width()

     if ( sizeScreenWidth  <= 1050 ) {
        $('.title').fadeOut()
        $('.title-dimension').fadeIn()
        $('#tematicas-movil').fadeOut()
        $('.hamburger-movil-tematica').fadeOut()
        $('.inicio-title-movil').fadeIn()
        $('.tematicas-dimension-movil').fadeOut()
        $('.tematicas-dimension-familiar').fadeOut()
        $('.tematicas-dimension-academica').fadeOut()
        $('.tematicas-dimension-economica').fadeOut()
        $('.tematicas-dimension-vidaU').fadeOut()
        $('.menu-dimension-movil').fadeOut()
        $('#inicio').show()
        $('#individual').hide()
        $('#familiar').hide()
        $('#academica').hide()
        $('#economica').hide()
        $('#vidauniversitaria').hide()
        $('#8').show()
        $('#9').show()
        $('#2').show()
        $('#1').show()
        $('#5').show()
        $('#6').show()

        if ( sizeScreenWidth  <= 500 &&  sizeScreenWidth  > 375) {
        $('.semaforo').css({'left': '-4%'})
        $('.corner-menu').css({'padding-left': '10px'})
        }
        else {
        $('.semaforo').css({'left': '1%'})
        $('.corner-menu').css({'padding-left': '10px'})
        }
       
     }
}

function restarAnimateFooterMovil() {

        sizeScreenWidth  = $(window).width()

        $('.footer').animate({height:'20px'})   
        $('.corner-menu').animate({paddingBottom:'10px'})
        $('.semaforo').animate({paddingBottom:'0'})
        $('.logo-ases').animate({paddingBottom:'0'})
        $('.contact-information').text('Mayor información')
        $('.hamburger-movil-cerrar').animate({paddingBottom:'5px'})
        $('.hamburger-movil-cerrar').hide()

        $('.contact-information').css ({
               'font-size':'12px',
               'padding': '0'
            })


        if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {
        
        $('.logo-ases').css({
            'height':'5rem',
            'right': '34%'
        })

        $('.semaforo').css({
            'height':'47%',
        })

        }
        else if (sizeScreenWidth <= 375) {
        
        $('.logo-ases').css({
            'height':'4rem',
            'right': '36%'
        })

        $('.semaforo').css({
            'height':'43%',
        })

        }

}


//Mostrar la definicion de las temasticas en la version movil
function goToSectionMovil(section, duration , index) {
    $($('.page').get(index)).animate({
        scrollTop: $(window).height() * section
    }, {
        duration: duration
    })
}