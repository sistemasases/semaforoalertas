
// Acomodar exepciones que suceden en la pagina en diferentes dispositivos
function screenResponsiveWebDesing() {

     sizeScreenWidth  = $(window).width()
     sizeScreenHeigth = $(window).height()
     linkUnivalle     = $('map').find('#link-univalle')
     linkAses         = $('map').find('#link-ases')
     pressFooter = false;
     starPage = false
     startSemaforo = false
     startSlide = true
     //viene la magia
    //No perdere, lo hare bien y vencere y le dare gracias a DIOS

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

       
        $('.page').each(function(index,value) {
          if ( $(value).attr('id') != 'inicio' ) {
          $('#'+ $(value).attr('id') + '').hide()
          }
        })

        for (let i = 1; i <= 13 ; i++) {
          $('#content-'+i+'').css({
              'background-color':'whitesmoke',
              'border': 'hidden',
              'border-radius': '15px',
              'padding':'10% 5%'
        })
        }

        textInformationContact = $('.contact-information').html()
        $('.contact-information').text('Mayor información')

        $('.tooltip-movil-inicio').fadeIn()
        $('.tooltip-movil-inicio').delay(3000).fadeOut()
        
        $('.menu-item').each(function (index,value) {
           if ($(value).attr('href') === '#about'){
               $(value).text('¿ Qué es el semaforo de alertas ?')
               $('#about .information-page-title').text('¿ Qué es el semaforo de alertas ?')
           }
        })


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
        $('.page').off('scroll')
        slideThematic(false , true) 

        $('.menu-dimension-movil').slideUp(700)
        $('.title-tematicas').fadeIn(500)
        $('.hamburger-movil-tematica').fadeIn(500)
        $('.title-tematicas').fadeIn()
        $('#title-dimension').fadeIn()
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
        $('#tematicas-movil').attr({'style':'display: block;'})
        $('.tematica-logo').css({'float' : 'left'})

        $('.tematica-nav-btn').css({
             'height':'2.8rem',
             'width':'15rem'
        })

        for (var i = 0 ; i <= 12 ; i++) {
        $('#semaforo-item-'+i+'').hide()
        }
     
        if (booleanParams === false) {
        $('#tematicas-movil').addClass('title-tematicas')
        $('#tematicas-movil').removeClass('title-tematica-movil')
        $('#tematicas-movil').text('Tematicas')
        }

        if (starPage === false) {

        let arrayTematicaLogo = []
        let arrayTematicaContent = []
        let arrayNameThematic = []

        $('.tematica-content').each(function(index,value) {
           arrayTematicaContent.push(value)
        })
        
        $('.tematica-logo').each(function (index,value) { 
           arrayTematicaLogo.push(value)
        })

        $('.tematica-nav').each( function (index,value) {
          arrayNameThematic.push(value)
        })


        for ( let i = 0 ; i < 29 ; i++) {
           arrayTematicaContent[i].prepend(arrayTematicaLogo[i])

           if (i < 24) {

              title = "<div class='title-thematic-movil-boton '>"
              + $(arrayNameThematic[i]).attr('title') +
              "</div>"

             
             $(arrayNameThematic[i]).find('.tematica-nav-btn').prepend(title)
              $(arrayNameThematic[i]).find('img').css({
                  'position': 'relative',
                  'right': '-40%'
              })

              if (i === 5 || i === 7 || i === 3) {

                $(arrayNameThematic[i]).find('.title-thematic-movil-boton').css({
                    'font-size': '0.4em'
                })
              }
              else if (i >= 14 && i <= 20 || i === 23) {
                $(arrayNameThematic[i]).find('.title-thematic-movil-boton').css({
                    'padding-top':'2.7%',
                    'font-size': '0.3em'
                })

                if (i === 23) {
                $(arrayNameThematic[i]).find('.title-thematic-movil-boton').css({
                    'padding-top':'1%',
                    'width':'150px'
                })
                }

              }

           }
        }

        responsiveThematicAux(arrayNameThematic)
        arrayTematicaLogo.splice(0,arrayTematicaContent.length)
        arrayTematicaContent.splice(0,arrayTematicaContent.length)
        arrayNameThematic.splice(0,arrayNameThematic.length)
        starPage = true

        }

        if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {

        $('#title-dimension').removeClass('title')
        $('#title-dimension').addClass('title-movil')
        $('div .tematica-logo img').css( {'height':'90px'} )
        $('.title-movil').css({
            'font-size': '17px',
            'right': '-1em'
        })


        }
        else if (sizeScreenWidth <= 375) {

        $('#title-dimension').removeClass('title')
        $('#title-dimension').addClass('title-movil')   
        $('div .tematica-logo img').css( {'height':'90px'} )
        $('.title-movil').css({
            'right': '-1em',
            'font-size': '0.9em'  
        })

        if (sizeScreenWidth <= 280) {
        $('div .tematica-logo img').css( {'height':'70px'} )
        }

        }
        
        $('.page').each(function(index,value) {

          if ( ( '#'  + $(value).attr('id') ) != dimension ) {
          $('#'+ $(value).attr('id') + '').hide()
          }
          else {
          $('#'+ $(value).attr('id') + '').show()
          }
          
        })

        switch (dimension) {

            case '#individual':

               
               if (sizeScreenHeigth <= 800 ) {

                 if ( sizeScreenHeigth <= 800 && 
                      sizeScreenHeigth >  653) 
                {

                 $('.tematica-nav-btn').css({
                     'height':'2.4rem',
                     'width':'15rem'
                 })

                 if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {

                 $('.tematicas-dimension-movil').css({
                     'right': '3.2%'
                 })

                 }
                 else {

                 $('.tematicas-dimension-movil').css({
                     'right': '1.5%'
                 })

                 }

                }
                else if (sizeScreenHeigth <= 653 &&
                         sizeScreenHeigth > 556 ) 
                {
               
                $('.tematica-nav-btn').css({
                     'height':'2rem',
                     'width':'15rem'
                })

                if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {

                $('.tematicas-dimension-movil').css({
                     'right': '3.85%'
                })

                }
                else {

                $('.tematicas-dimension-movil').css({
                     'right': '2.4%'
                })

                }

                }
                else {
                                 
                $('.tematica-nav-btn').css({
                     'height':'1.5rem',
                     'width':'15rem'
                })  


                if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {

                $('.tematicas-dimension-movil').css({
                     'top': '26%',
                     'right': '4.8%'
                })

                }
                else {

                $('.tematicas-dimension-movil').css({
                      'top': '26%',
                      'right': '2.95%'
                })

                }
        

                }

                }
               

            break;

            case '#familiar':

                  $('.title-movil').css({
                      'right': '0em'
                  })
                  
            break;

            case '#vidauniversitaria':
               
                 if (sizeScreenWidth <= 500 && sizeScreenWidth > 375) {
                  $('.title-movil').css({
                      'font-size': '0.9em',
                      'right': '-2em'
                  })
                  
                 }else {
                  $('.title-movil').css({
                      'font-size': '0.7em',
                      'right': '-1em'
                  })    
                 }

            break;
        }

}

//funcionalidad de las tematicas en version movil
function tematicasFuncionalityMovil(NombreDimension , tematicaPresionada, indexTematica) {
        
        sizeScreenWidth  = $(window).width()
        tituloTematica = $(tematicaPresionada).attr('title')
        
        //$(tematicaPresionada).attr({'id' : 'activo'})
        
        $('#tematicas-movil').addClass('title-tematica-movil')
        $('#tematicas-movil').removeClass('title-tematicas')
        $('#tematicas-movil').text(tituloTematica)

        //tooltip de ayuda
        if ($('.tooltip-movil').css('display') === 'none') {
            $('.tooltip-movil').fadeIn()
            $('.tooltip-movil').delay(3000).fadeOut()

        }

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
                            'right': '4.2em',
                            'font-size': '16px',
                            'padding-top':'65px'
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
                                 'right': '5.2em',
                                 'font-size': '15px',
                                 'padding-top': '95px'
                            })

                         }
                         else {

                            $('.title-tematica-movil').css({
                                 'right': '4em',
                                 'font-size': '20px',
                                 'padding-top': '92px',
                                 
                            })

                         }
                  }
                  else if (sizeScreenWidth <= 375) {
     
                         if ( indexTematica === 0 ||
                         indexTematica === 3 ) {

                            $('.title-tematica-movil').css({
                                 'right': '5.2em',
                                 'font-size': '13px',
                                 'padding-top':'67px',
                            })
                        }
                        else if ( indexTematica === 1 ||
                                  indexTematica === 2 ) {

                            $('.title-tematica-movil').css({
                                 'font-size': '13px',
                                 'padding-top':'67px',
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
                                 'style' : 'font-size:15px; padding-top: 95px;'+
                                 'right:5.2em; ' 
                          
                            })

                        }
                        else if ( indexTematica === 5 ) {

                            $('.title-tematica-movil').css({
                                 'right': '3em',
                                 'width': '300px',
                                 'font-size': '15px',
                                 'padding-top': '90px'

                            })

                        }
                        else {
                        
                            $('.title-tematica-movil').attr({
                            'style' : 'font-size:20px; padding-top: 90px; right:4em; '
                            })

                     }
                 }
                 else if (sizeScreenWidth <= 375) {

                        if ( indexTematica === 0 ||
                             indexTematica === 1 ||
                             indexTematica === 2 
                           ) {

                            if (indexTematica === 0) {
                            $('.title-tematica-movil').css({
                                'right':'3.2em'
                            })

                            }
                            else if (indexTematica === 1) {
                            $('.title-tematica-movil').css({
                                'right':'0.5em'
                            })

                            }
                            else if (indexTematica === 2) {
                            $('.title-tematica-movil').css({
                                'right':'5em'
                            })

                            }
                            $('.title-tematica-movil').css({
                               'width': '170px',
                               'font-size': '15px',
                               'padding-top': '65px'
                            })

                        }
                        else if ( indexTematica === 5 ) {
                            $('.title-tematica-movil').css({
                               'right': '5.5em',
                               'width': '160px',
                               'font-size': '0.75em',
                               'padding-top': '65px'

                            })    
                        }
                        else  {

                            $('.title-tematica-movil').attr({
                                'style' : 'rigth: 3.2em; font-size:20px; padding-top: 62px; '
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
        
        $('#title-dimension').fadeOut()
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
  
        for (var i = 0 ; i <= 12 ; i++) {
        $('#semaforo-item-'+i+'').show()
        }

        if ( sizeScreenWidth  <= 500 &&  sizeScreenWidth  > 375) {
        $('.semaforo').css({'left': '-4%'})
        $('.corner-menu').css({'padding-left': '10px'})
        }
        else {
        $('.semaforo').css({'left': '1%'})
        $('.corner-menu').css({'padding-left': '10px'})
        }

        if ( $('.tooltip-movil-inicio').css('display') === 'none') {
        $('.tooltip-movil-inicio').fadeIn()
        $('.tooltip-movil-inicio').delay(2500).fadeOut()
        }
       
     }
}

//
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
        duration: 0
    })
}


// quitar la zona de riesgo en la version movil
function quitRiskMovil() {


    $('.descriptores').css({'background': 'transparent',
    'border-color': 'transparent' })
    $('.tematica').delay(300).fadeIn()
    $('div .descriptores').fadeOut()
    $('div #red').hide()
    $('div #yellow').hide()
    $('div #green').hide()
    $('.hamburger-btn-movil-risk').hide()
    $('#circle-red').attr({'stroke': '' , 'stroke-width':0})
    $('#circle-yellow').attr({'stroke': '' , 'stroke-width':0})
    $('#circle-green').attr({'stroke': '' , 'stroke-width':0})
    $('.green-circle').css('fill','#94b33c')
    $('.yellow-circle').css('fill','#f3eb3b')
    $('.red-circle').css('fill','#ef3a2d')
    $('.tematica-nav').removeClass('red')
    $('.tematica-nav').removeClass('yellow')
    $('.tematica-nav').removeClass('green')
    $('.section').css({
        'padding-bottom': '50%'
    })
    

    if ( $('#inicio').hasClass('active')  ) {

    $('.corner-menu').css({'padding-left': '30px'})
    $('.semaforo').css({
       'left': '-25%'
    })

    }

    
}


//encargada de capturar los parametros y luego cargar la pagina con ese parametro
function redirectUrlToDimensionOrThematic() {

    var searchParamsUrl = window.location.search
    var urlParams = new URLSearchParams(searchParamsUrl)
    var dimensionUrl = urlParams.get('dim')
    var thematicUrl = urlParams.get('tem')

    var arrayDimension = []
    var arrayDimensionObjects = []
    var arraythematic  = []

    $('.dimension').each(function(index,value) {
       if (index < 5) {
       arrayDimension.push( ( ( $(value).attr('href') ).replace('#','') ).toLowerCase() )
       arrayDimensionObjects.push(value)
       }
    })

    $('.tematica-nav-btn').each(function(index,value) {
       if (index < 24) {
       arraythematic.push( (((( $(value).parent()).attr('href') ).replace('#','')).toLowerCase()).trim() )
       }  
    })
    
    if (dimensionUrl != null && thematicUrl === null) {

    booleanParams = true

    for (var i = 0 ; i < dimensionUrl.length ; i++) {
       dimensionUrl = dimensionUrl.replace('\'','')
       dimensionUrl = dimensionUrl.replace('\"','')
    }

    dimensionUrl = dimensionUrl.trim()
    searchElementsArrayUrl(arrayDimension,dimensionUrl, 'dimension' , arrayDimensionObjects)    
  
    }
    else if (dimensionUrl === null && thematicUrl != null ||
             dimensionUrl !=  null && thematicUrl != null ) {

    booleanParams = true     
    
     for (var i = 0 ; i < thematicUrl.length ; i++) {
       thematicUrl = thematicUrl.replace('\'','')
       thematicUrl = thematicUrl.replace('\"','')
    }

    thematicUrl = thematicUrl.trim()
    searchElementsArrayUrl(arraythematic,thematicUrl, 'thematic', arrayDimensionObjects)  

    }

    arrayDimension.splice(0,5)
    arrayDimensionObjects.splice(0,5)
    arraythematic.splice(0,24)
    
}


// Buscar el parametro en la definiciones y si pertenece llevarlo directamente a esa definicion
function searchElementsArrayUrl( array, search , type , arrayAux) {

    iteradorAux = 0
    pageAux = 1

    for (var i = 0 ; i < array.length ; i++) {
        
        if (array[i] === search ) {

            if (type === 'dimension') {
                FuncionalityUrl(arrayAux,iteradorAux)
                goToPage(iteradorAux + 1 , 300)
                
            }
            else {
                FuncionalityUrl(arrayAux,pageAux-1,type,array,i,iteradorAux)
                goToPage(pageAux , 300)
                goToSectionMovil(iteradorAux + 1 , 300 , pageAux)
            }

            break;
        }

        iteradorAux++

        if (i === 9 || i === 10 || i === 13 || i === 17 ) {
            iteradorAux = 0
            pageAux++
        }

    }

   
   
}


/* funcion encargada de asiganar los eventos adecuados a cada parametro
  array1 = arrayDimension
  index1 = indexDimension
  type   =  busqueda por dimension o directamente a la tematica
  array2 = arrarThematic
  index2 = indexTematic
  indexAux =  index auxiliar exclusivo de las busquedas por tematicas  */
function FuncionalityUrl(array1,index1,type,array2,index2,indexAux) {
   
    sizeScreenWidth = $(window).width()
    pressHamburgerMovil = true
    dimensionMovil = $(array1[index1]).attr('href')
    dimensionActual = $(array1[index1]).find('.dimension-btn')
    dimensionActual.addClass('active')
    title = $(array1[index1]).find('.dimension-btn').attr('title')
    $('#title-dimension').text(title.toUpperCase())
    

    if (sizeScreenWidth <= 1050) {

        $('#individual').show()
        $('#familiar').show()
        $('#academica').show()
        $('#economica').show()
        $('#vidauniversitaria').show()
        dimensionFuncionalityMovil(dimensionMovil)
        quitRiskMovil()

    }
    else {
        title = 'Dimensión  ' + $(array1[index1]).find('.dimension-btn').attr('title')
        $('#title-dimension').text(title.toUpperCase())
        quitRisk()
        
        $(".tematicas-dimension").each(function(e) {
            if ($(this).attr("id") != "tematicas-nav-" + dimensionMovil.replace('#', '')) {
                $(this).hide()
            } else {
                $(this).css('display', 'flex');
            }
        })

        $('.dimension').each(function(index,value) {

            if ( $(value).attr('href') === dimensionMovil ) {
                 $(value).find('.dimension-btn').addClass('active')
            }

        })
    } 

    
    if (type != 'thematic') {

         $('.semaforo-link').off('click')

    }else {

        var dimensionPrecionada
        var indexDimension

        $('.dimension-btn').each( function(index,value) {

          if (index < 5) {
            if ( $(value).hasClass('active')) {
              dimensionPrecionada = (($(value).parent()).attr('href')).trim()
              indexDimension = $('.dimension').index($(value).parent()) 
            }
        
          }

        })
       
        $('.tematica-nav-btn').each(function(index,value) {

            if (  (((( $(value).parent()).attr('href') ).replace('#','')).toLowerCase()).trim() === array2[index2] ) {
                 $(value).addClass('active')

                 if (sizeScreenWidth <= 1050) {
                  tematicasFuncionalityMovil(dimensionPrecionada , value , indexAux)
                 }
                 else {
                  semaforo(indexAux , indexDimension , $(value).parent())
                 }
            }
        })

    }
   
}


/* Recrea un movimiento amigable al deslizarse por la pagina */
/* Recibe 2 parametros que deben ser actualizados por dimension */
function slideThematic(band,auxBandSlide) {
      
    
    var indexTematica = 0
    var indexDimension
    var HeightScreen =  $(document).height()
    var arrayThem = []
    var arrayDim = []
    var slideAux = 0
    var scrollMax
    var scrollSmall
    var scroll
   
    
    
    $('.page').scroll(function (event) {
    event.stopPropagation()
    event.preventDefault()

    scroll = $(this).scrollTop() 
    

    $('.dimension-btn').each( function(index,value) {

      if (index < 5) {

        arrayDim.push(value)
        if ( $(value).hasClass('active') ) {

           indexDimension = $('.dimension').index($(value).parent())

           if  (auxBandSlide) { 
                auxBandSlide = false
                startSlide = true
                slideAux = 0
           }

       }

      }
       
    })


    // saber el numero de la tematica presionada
    $('.tematica-nav').each(function(index,value) {
        
    if (index < 24) {
    
     
      if ( index < 10 && indexDimension === 0) {
      arrayThem.push(value)
      }
      else if (index === 10 && indexDimension === 1) {
      arrayThem.push(value)
      }
      else if (index > 10 && index < 14 && indexDimension === 2) {
      arrayThem.push(value)
      }
      else if (index > 13 && index < 18 && indexDimension === 3) {
      arrayThem.push(value)
      }
      else if (index > 17  && index < 24 && indexDimension === 4) {
      arrayThem.push(value)
      }

      
      if ( ($(value).find('.tematica-nav-btn')).hasClass('active') ) {
          band = true
          tematicaDimension = ( ( $(this).parent() ).parent() ).parent()
          navsInDimension = tematicaDimension.find('.tematica-nav')
          indexTematica = navsInDimension.index(this)
          scrollMax = (HeightScreen * (indexTematica+1)) + 50
          scrollSmall = (HeightScreen * (indexTematica+1)) - 50
    
      }

    }

        
    })
    

    if (band === false) {
        
        if (startSlide) {
        startSlide = false
        scrollMax =  0
        }
       
    }

    if ($('.tematica').css('display') != 'none' ) {

    // desliza la tematica cuando se detecta que la pagina baja 50px o sube.
    if ( scroll > scrollMax ) {

        if (band) {
          return slideFuncionalty(arrayThem,indexTematica, 2 ,indexDimension, arrayDim , 1 , 1) 
        }
        else {
          return slideFuncionalty(arrayThem,slideAux, 1 ,indexDimension, arrayDim , 0 , 1) 
        }

    }
    else  if (scrollSmall > scroll) {

        if (band) {
          
          if (indexTematica === 0) {

           band = false
           startSlide = true
           auxBandSlide = true
           goToSectionMovil( -1 ,300,indexDimension + 1)
           $('#tematicas-movil').attr({style:'display:block;'})
           $('#tematicas-movil').removeClass('title-tematica-movil')
           $('#tematicas-movil').addClass('title-tematicas')
           $('#tematicas-movil').text('Tematicas')
           $('.semaforo-link').off('click')
           
          }

          return slideFuncionalty(arrayThem,indexTematica, 0 ,indexDimension, arrayDim , -1  , -1)
          
        }
    
   }
   }

     indexTematica = 0
     arrayThem.splice(0,arrayThem.length)
     arrayDim.splice(0,arrayDim.length)

    
    })

  

}



function slideFuncionalty(arrayThem,indexTematica, numSlide ,indexDimension, arrayDim , iterador , index ) {
     
    if (numSlide != 1 && indexTematica >= 0) {
    ($(arrayThem[indexTematica]).find('.tematica-nav-btn')).removeClass('active')
    }

    if ( (indexTematica + numSlide ) > 0 ) {
    goToSectionMovil( ( indexTematica + numSlide ) ,300,indexDimension + 1)
    }

    if(indexTematica >= 0){
    $(arrayThem[indexTematica+iterador]).find('.tematica-nav-btn').addClass("active")
    }

    tematicasFuncionalityMovil($($(arrayDim[indexDimension]).parent()).attr('href'),arrayThem[indexTematica+iterador] , indexTematica + index)    

}


function responsiveThematicAux(array) {

     if (sizeScreenHeigth <= 800 ) {

        if ( sizeScreenHeigth <= 800 && 
             sizeScreenHeigth >  653
        ){
           for (let i = 0 ; i < 10 ; i++) {
                $(array[i]).find('.title-thematic-movil-boton').css({
                    'padding-top':'0.7%',
                })
           }
                
        }
        else {

           for (let i = 0 ; i < 10 ; i++) {
                $(array[i]).find('.title-thematic-movil-boton').css({
                    'padding-top':'0',
                })
           }                
               
        }

    }
}




