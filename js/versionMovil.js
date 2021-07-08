
// Acomodar exepciones que suceden en la pagina en diferentes dispositivos
function screenResponsiveWebDesing() {

     sizeScreenWidth  = $(window).width()
     sizeScreenHeigth = $(window).height()
     linkUnivalle     = $('map').find('#link-univalle')
     linkAses         = $('map').find('#link-ases')
     pressFooter = false;
     starPage = false
     startSemaforo = false
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
            $('.hamburger-movil-cerrar').delay(1200).fadeIn()
            $('.contact-information').html(textInformationContact)

 
            if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {

            $('.contact-information').css ({
               'font-size':'0.7em',
               'padding': '3% 10%'
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
               'font-size':'0.6em',
               'padding': '4% 12%'
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
        $('#inicio').addClass('active')
        $('.tematica-title').hide()
        $('.tematica-title-little').hide()
        $('#tematicas-movil').show()
        $('#tematicas-movil').addClass('title-tematicas')
        $('#tematicas-movil').removeClass('title-tematica-movil')
        $('#tematicas-movil').text('Tematicas')
        $('#tematicas-movil').attr({'style':'display: block;'})
        $('.tematica-logo').css({'float' : 'left'})
        $('#semaforo-item-1').hide()
        $('#semaforo-item-2').hide()
        $('#semaforo-item-3').hide()
        $('#semaforo-item-4').hide()
        $('#semaforo-item-5').hide()
        $('#semaforo-item-6').hide()
        $('#semaforo-item-7').hide()
        $('#semaforo-item-8').hide()
        $('#semaforo-item-9').hide()
        $('#semaforo-item-10').hide()
        $('#semaforo-item-11').hide()
        $('#semaforo-item-12').hide()
        $('.tematica-nav-btn').css({
             'height':'2.8rem',
             'width':'2.8rem'
        })
     

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
            'left': '54%'
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

               if (sizeScreenHeigth <= 800 ) {

                 if ( 
                      sizeScreenHeigth <= 800 && 
                      sizeScreenHeigth >  653) 
                {

                 $('.tematica-nav-btn').css({
                     'height':'2.4rem',
                     'width':'2.6rem'
                 })

                 $('.tematicas-dimension-movil').css({
                     'right': '10%'
                 })

                }
                else if (sizeScreenHeigth <= 653 &&
                         sizeScreenHeigth > 556 ) 
                {
               
                $('.tematica-nav-btn').css({
                     'height':'2rem',
                     'width':'2.4rem'
                })

                $('.tematicas-dimension-movil').css({
                     'right': '10%'
                 })

                }
                else {
                                 
                $('.tematica-nav-btn').css({
                     'height':'1.8rem',
                     'width':'2.2rem'
                })  

                $('.tematicas-dimension-movil').css({
                     'top': '120px',
                     'right': '10%'
                })

                }

                }
               

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

        quitRiskMovil()
        semaforoMovil(tematicaPresionada)
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
                                 'padding-top':'83px',
                            
                            })
                        }
                        else if ( indexTematica === 1 ||
                                  indexTematica === 2 ) {

                            $('.title-tematica-movil').css({
                                 'width': '270px',
                                 'right': '-10%',
                                 'font-size': '13px',
                                 'padding-top':'83px',
                            
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
                             indexTematica === 2 
                           ) {

                            $('.title-tematica-movil').css({
                               'width': '170px',
                               'right': '23%',
                               'font-size': '15px',
                               'padding-top': '70px'

                            })

                        }
                        else if ( indexTematica === 5 ) {
                            $('.title-tematica-movil').css({
                               'width': '160px',
                               'right': '23%',
                               'font-size': '10.5px',
                               'padding-top': '60px'

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
        $('#inicio').removeClass('active')
        $('#inicio').show()
        $('#individual').hide()
        $('#familiar').hide()
        $('#academica').hide()
        $('#economica').hide()
        $('#vidauniversitaria').hide()
        $('#semaforo-item-1').show()
        $('#semaforo-item-2').show()
        $('#semaforo-item-3').show()
        $('#semaforo-item-4').show()
        $('#semaforo-item-5').show()
        $('#semaforo-item-6').show()
        $('#semaforo-item-7').show()
        $('#semaforo-item-8').show()
        $('#semaforo-item-9').show()
        $('#semaforo-item-10').show()
        $('#semaforo-item-11').show()
        $('#semaforo-item-12').show()

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
        $('.hamburger-movil-cerrar').fadeOut(100)

        $('.contact-information').css ({
               'font-size':'0.9em',
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
        scrollTop: $(document).height() * section
    }, {
        duration: duration
    })
}


// quitar la zona de riesgo en la version movil
function quitRiskMovil() {

    $('.tematica').show()
    $('.descriptores').hide()
    $('#circle-red').attr({'stroke': '' , 'stroke-width':0})
    $('#circle-yellow').attr({'stroke': '' , 'stroke-width':0})
    $('#circle-green').attr({'stroke': '' , 'stroke-width':0})
    $('.green-circle').css('fill','#94b33c')
    $('.yellow-circle').css('fill','#f3eb3b')
    $('.red-circle').css('fill','#ef3a2d')
    $('.corner-menu').css({'padding-left': '30px'})
    $('.tematica-nav').removeClass('red')
    $('.tematica-nav').removeClass('yellow')
    $('.tematica-nav').removeClass('green')
    $('.semaforo').css({
       'left': '-25%'
    })

}