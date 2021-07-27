/*
Navegación de la página-slider - Dimensiones y Temáticas
*/

// Utils 

function selectedPage() {
    return Math.floor($('body').scrollLeft() / $(window).width());
}

function selectedSection(page) {
    if (isNaN(page)) 
        return Math.ceil($('#'+page).scrollTop() / $(window).height());
    return Math.ceil($($('.page').get(page)).scrollTop() / $(window).height());
}

function goToPage(page, duration, callback) {
    $('body').animate({
        scrollLeft: $(window).width() * page
    }, {
        duration: duration,
        complete: callback
    })
}

function goToSection(section, duration) {
    
    $($('.page').get(selectedPage())).animate({
        scrollTop: $(window).height() * section
    }, {
        duration: duration
    })
}

function goTo(page, section, duration) {
    goToPage(page, duration/2, ()=>{ goToSection(section, duration/2) })
}

function quitRisk() {

      $('div .descriptores').hide()
      $('div .tematica-content').show()
      $('div .tematica-little').attr({'class': 'tematica-title-little'})
      $('div .tematica-aux').attr({'class': 'tematica-texto'})
      $('.tematica-title-little').css('font-size','2.5em')
      $('.tematica-title-little').css(' line-height','120%')
      $('.section').css({'height': '100vh' , 'padding-top': '220px'})
      $('div .tematica-logo img').attr({'height': 150})
      $('.tematica').css('height', 'auto');
      $('.tematica').css('padding', '1.4% 1.4%');
      $('.tematica').css('max-height','100%')
      $('.semaforo').find('.cls-1').removeClass('filter')
      $('.semaforo').find('.red-circle').removeClass('filter')
      $('.semaforo').find('.yellow-circle').removeClass('filter')
      $('.semaforo').find('.green-circle').removeClass('filter')
      $('#circle-red').attr({'stroke': '' , 'stroke-width':0})
      $('#circle-yellow').attr({'stroke': '' , 'stroke-width':0})
      $('#circle-green').attr({'stroke': '' , 'stroke-width':0})
      $('.green-circle').css('fill','#94b33c')
      $('.yellow-circle').css('fill','#f3eb3b')
      $('.red-circle').css('fill','#ef3a2d')
      $('.tematica-title').css('font-size','3em')
      $('div .section').attr({'id':''})
      $('div').remove('.text-danger')
      $('div').remove('.text-warning')
      $('div').remove('.text-success')
      if (sizeScreenWidth > 1050) {
      $('.logo-ases img').css('height','80%')
      $('.logo-ases').css('margin','10px' ) 
      }
     
}



$(function () {
    durationAnimation = 300;
    waitForAnimation = false;
    sizeScreenWidth  = $(window).width()
    pressHamburgerMovil = false
    booleanParams = false

    var indexTematica
    var indexDimension
    var tematicaPresionada
    var dimensionPrecionada
    var dimensionActual
    
    //reponsive web desing
    screenResponsiveWebDesing()

    //redirect url
    redirectUrlToDimensionOrThematic()

    // Nav dimensiones
    $('.dimension').click(function(event) {
        event.preventDefault()

        dimensionPrecionada = $(this).attr('href')
        dimensionActual = this
        pressHamburgerMovil = true
        booleanParams = false

        if (sizeScreenWidth > 1050) {
          indexDimension = $('.dimension').index(this) -5
        }else {
          dimensionFuncionalityMovil( dimensionPrecionada , this)
          indexDimension = $('.dimension').index(this)  
        }

        id = $(this).attr("href");
        title = $(this).find('.dimension-btn').attr('title')
        $('.dimension').each(function (e) {
            if ($(this).attr("href") != id) {
                $(this).find('.dimension-btn').removeClass("active")
                $('.tematica-nav').find('.tematica-nav-btn').removeClass("active")
                $(tematicaPresionada).removeClass('red')
                $(tematicaPresionada).removeClass('yellow')
                $(tematicaPresionada).removeClass('green')
            } else {
                $(this).find('.dimension-btn').addClass("active")
            }

             $('.semaforo-link').off('click')
            

             if (sizeScreenWidth <= 1050) {
               $('.title-movil').text(title.toUpperCase())
               goToSectionMovil(-1, durationAnimation , indexDimension + 1)
               quitRiskMovil()
             }
             else {
               $('.title').text(title.toUpperCase())
               goToSection(-1, durationAnimation)
               quitRisk()
             }
             
        })
       
        goToPage(indexDimension + 1, durationAnimation)
        $(".tematicas-dimension").each(function(e) {
            if ($(this).attr("id") != "tematicas-nav-" + id.replace('#', '')) {
                $(this).hide()
            } else {
                $(this).css('display', 'flex');
            }
        })

    })


    // Nav tematica
    $('.tematica-nav').click(function(event) {

        event.preventDefault()
        //booleanParams = false
        
        if (sizeScreenWidth <= 1050) {
          tematicaDimension = ( ( $(this).parent() ).parent() ).parent()
        }
        else {
          tematicaDimension = $(this).parent()
        }

       
        tematicaPresionada = this;
        navsInDimension = tematicaDimension.find('.tematica-nav')
        indexTematica = navsInDimension.index(this)
        id = $(this).attr("href");
        $(this).attr({'id' : 'activo'})
        navsInDimension.each(function (e) {
            if ($(this).attr("href") != id) {
                 $(this).find('.tematica-nav-btn').removeClass("active")
                 $(this).attr({'id' : ''})
                
            } else {
                $(this).find('.tematica-nav-btn').addClass("active")
                
                if (sizeScreenWidth > 1050) {

                 if ( $('.pop-up-window').css('display') === 'none') {
                      $('.pop-up-window').fadeIn(1000)
                      $('.pop-up-window').delay(3000).fadeOut()
                 }

                }
            }
               
                $(this).removeClass('red')
                $(this).removeClass('yellow')
                $(this).removeClass('green')
        })

        if (booleanParams) {

        $('.dimension-btn').each( function(index,value) {
          if (index < 5) {
            if ( $(value).hasClass('active')) {
              dimensionPrecionada = ($(value).parent()).attr('href')
              indexDimension = $('.dimension').index($(value).parent()) 
            }
          }
        })
      
        }   
        
        if (sizeScreenWidth <= 1050) {
            //slideThematic(true,false)
            tematicasFuncionalityMovil(dimensionPrecionada , this , indexTematica)
            goToSectionMovil(indexTematica + 1, durationAnimation , indexDimension + 1)
            
        }else {
            quitRisk()
            goToSection(indexTematica + 1, durationAnimation)
            semaforo(indexTematica , indexDimension , this)
        }

       
       
    });
    

    // Wheel
    $('.page').on('wheel', function (event) {
        if (
            $(event.target).hasClass('tematica-texto') ||
            $(event.target).hasClass('tematica-title') ||
            $(event.target).hasClass('tematica-content')) {
            return;
        }
        event.preventDefault()
        if (waitForAnimation) return;
        waitForAnimation = true;
        newTop = $(this).scrollTop();
        selectedPageId = $($('.page').get(selectedPage())).attr('id');
        tematicaDimension = $('#tematicas-nav-'+selectedPageId);
        navsInDimension = tematicaDimension.find('.tematica-nav');
        if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
            if ($(this).scrollTop() == 0) {
                waitForAnimation = false;
                return;
            };
            newTop =  $(this).scrollTop() - $(window).height()
            $(this).animate({
                scrollTop: $(this).scrollTop() - $(window).height()
            }, {
                duration: 500,
                complete: function () {
                    waitForAnimation = false;
                }
            })
        } else {
            if ($(this).scrollTop() == (navsInDimension.length-1) * $(window).height()) {
                waitForAnimation = false;
                return;
            };
            newTop =  $(this).scrollTop() + $(window).height()
            $(this).animate({
                scrollTop: $(this).scrollTop() + $(window).height()
            }, {
                duration: 500,
                complete: function () {
                    waitForAnimation = false;
                }
            })
        }
        expectedSection = Math.floor(newTop / $(window).height())
        navsInDimension.each(function (e) {
            if (navsInDimension.index(this) != expectedSection) {
                $(this).find('.tematica-nav-btn').removeClass("active")
            } else {
                $(this).find('.tematica-nav-btn').addClass("active")
            }
        })
    })


    $('div').click( function(event) {
        
         id = $(this).attr('id')
         event.stopPropagation()

        if (id != 'contact-information') {
          event.preventDefault()
        }
       
           
         if (id === 'section') {
            quitRisk()
            $(tematicaPresionada).removeClass('red')
            $(tematicaPresionada).removeClass('yellow')
            $(tematicaPresionada).removeClass('green')
            semaforo(indexTematica , indexDimension ,tematicaPresionada )
            goToSection( indexTematica + 1, durationAnimation)
         }
     })


    //Hamburger nagevacion cuando se da click en el menu
     $('.hamburger-btn').click(function(event) {
       event.preventDefault()
      
       
       $('.tematica-nav').find('.tematica-nav-btn').removeClass("active")
       $('.semaforo-link').off('click')
       
       if (sizeScreenWidth <= 1050) {

       if (booleanParams) {

        $('.dimension-btn').each( function(index,value) {
          if (index < 5) {
            if ( $(value).hasClass('active')) {
              indexDimension = $('.dimension').index($(value).parent()) 
            }
          }
        })
      
       }  
       
       
       if ( $('#inicio').hasClass('active') ) {
       $('#tematicas-movil').addClass('title-tematicas')
       $('#tematicas-movil').removeClass('title-tematica-movil')
       $('#tematicas-movil').attr({style : 'display: flex;'})
       $('#tematicas-movil').text('Tematicas')
       }

       $('.page').off('scroll')
       slideThematic(false,true)
       restarAnimateFooterMovil()
       goToSectionMovil(-1, durationAnimation , indexDimension + 1)
       quitRiskMovil()
       }
       else {
       $(tematicaPresionada).removeClass('red')
       $(tematicaPresionada).removeClass('yellow')
       $(tematicaPresionada).removeClass('green')
       goToSection(-1, durationAnimation)
       quitRisk()
       }
     
     })

     //hamburger movil dimensiones
     $('.hamburger-movil').click( function(event) {
       event.preventDefault()
       $('.menu-dimension-movil').slideToggle(700)
       $('.tematicas-dimension-movil').fadeOut()
       $('.tematicas-dimension-familiar').fadeOut()
       $('.tematicas-dimension-academica').fadeOut()
       $('.tematicas-dimension-economica').fadeOut()
       $('.tematicas-dimension-vidaU').fadeOut()
       $('#tematicas-movil').fadeOut()
       $('.hamburger-movil-tematica').fadeOut()

       if (booleanParams) {

       $('.dimension-btn').each(function(index,value) {
         if ($(value).hasClass('active')) {
            dimensionActual = $(value).parent()
         }
       })

       }
       if ( pressHamburgerMovil === false) {
            pressHamburgerMovil = true

          if ( ($(dimensionActual).find('button.dimension-btn')).hasClass('active') ) {
                 $('#tematicas-movil').fadeIn(800)
                 $('.hamburger-movil-tematica').fadeIn(800)
          }

       }
       else {  pressHamburgerMovil = false  }
       
     })

     //Hamburger movil tematicas
     $('.hamburger-movil-tematica').click( function(event) {

         event.preventDefault()

         titleDimension = ''
    
         if (booleanParams) {

         $('.dimension-btn').each(function(index,value) {
             if ($(value).hasClass('active')) {
               titleDimension = $(value).parent().attr('href')
             }
         })

         }
         switch (dimensionPrecionada || titleDimension) {

            case '#individual':
                $('.tematicas-dimension-movil').slideToggle(700)
            break;

            case '#familiar':
                $('.tematicas-dimension-familiar').slideToggle(700)
            break;

            case '#academica':
                $('.tematicas-dimension-academica').slideToggle(700)
            break;

            case '#economica':
                $('.tematicas-dimension-economica').slideToggle(700)
            break;
            
            case '#vidauniversitaria':
                $('.tematicas-dimension-vidaU').slideToggle(700)
            break;

         }
         
     })

     $('.section-nav-btn').click( function(event) {

         event.preventDefault()

         eventoCapturado = $(this).attr('id')
         numId = eventoCapturado.replace('title-accion-','')
         
         for (let i = 1 ; i <= 13 ; i++ ) {
         if (i != numId)
         $('#content-'+i+'').slideUp()
         }

         $('#content-'+numId+'').slideToggle()

     })

     if (sizeScreenWidth > 1050) {
     for (let i = 1; i <= 13 ; i++) {
          $('#content-'+i+'').css({
            'background-color': 'whitesmoke',
            'padding': '15px 30px',
            'border': 'hidden',
            'border-radius': '15px'
        })
     }
    }
     
     
     //rueda del mouse
     /*
     $(window).bind('mousewheel DOMMouseScroll', function(event) {

       if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

             if (indexTematica >= 0 && indexTematica <= 8) {
                goToSection( indexTematica + 1, durationAnimation)
             }
      }
      else {

       if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {

              if (indexTematica >= 1 && indexTematica <= 8) {
                 goToSection( indexTematica - 1, durationAnimation)
               }
           }
     }
    });*/
    
    /*
    POPOVER
    dimensiones.hover(
        function () {
            id = $(this).attr("href").replace('#', '');
            $('#popover-'+id).css('display', 'flex');
        },
        function () {
            id = $(this).attr("href").replace('#', '');
            $('#popover-'+id).hide();
        }
    )*/

})