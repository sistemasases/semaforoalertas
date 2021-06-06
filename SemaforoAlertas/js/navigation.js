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
    console.log($('.page').get(selectedPage()))
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
      $('.logo-ases img').css('height','80%')
      $('.tematica-title').css('font-size','3em')
      $('div .section').attr({'id':''})
      $('div').remove('.text-danger')
      $('div').remove('.text-warning')
      $('div').remove('.text-success')
      
    
}


$(function () {
    durationAnimation = 300;
    waitForAnimation = false;

    var indexTematica
    var indexDimension
    var tematicaPresionada
    var dimensionPrecionada
    sizeScreen  = $(window).width()
    //reponsive web desing
    screenResponsiveWebDesing()
    // Nav dimensiones
    $('.dimension').click(function(event) {
        event.preventDefault()
        // $('.semaforo').find('.cls-1').addClass('filter')
        dimensionPrecionada = $(this).attr('href')

        if (sizeScreen > 1050) {
          indexDimension = $('.dimension').index(this) -5
        }else {
          dimensionPress = ( $(this).find('img') ).attr('src')
          dimensionFuncionalityMovil( dimensionPress , this)
          indexDimension = $('.dimension').index(this)  
        }

        id = $(this).attr("href");
        title = $(this).find('.dimension-btn').attr('title')
        $('.title').text(title.toUpperCase())
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
             quitRisk()
             goToSection(-1, durationAnimation)
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
        tematicaPresionada = this;
        tematicaDimension = $(this).parent()
        navsInDimension = tematicaDimension.find('.tematica-nav')
        indexTematica = navsInDimension.index(this)
        alert(indexTematica)
        id = $(this).attr("href");
        $(this).attr({'id' : 'activo'})
        navsInDimension.each(function (e) {
            if ($(this).attr("href") != id) {
                 $(this).find('.tematica-nav-btn').removeClass("active")
                 $(this).attr({'id' : ''})
                
            } else {
                $(this).find('.tematica-nav-btn').addClass("active")
                /*
                if ( $('.pop-up-window').css('display') === 'none') {
                    $('.pop-up-window').fadeIn(1000)
                    $('.pop-up-window').delay(3000).fadeOut()
                }*/
            }
             quitRisk()
                $(this).removeClass('red')
                $(this).removeClass('yellow')
                $(this).removeClass('green')
        })

        semaforo(indexTematica , indexDimension , this)
        goToSection(indexTematica + 1, durationAnimation)
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
         event.preventDefault()
         event.stopPropagation()

         id = $(this).attr('id')
         
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
       $(tematicaPresionada).removeClass('red')
       $(tematicaPresionada).removeClass('yellow')
       $(tematicaPresionada).removeClass('green')
       $('.semaforo-link').off('click')
       quitRisk()
       goToSection(-1, durationAnimation)
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
       $('.title-tematicas').fadeOut()
       $('.hamburger-movil-tematica').fadeOut()
       
     })

     //Hamburger movil tematicas
     $('.hamburger-movil-tematica').click( function(event) {

         event.preventDefault()

         if (dimensionPrecionada === '#individual') {

            $('.tematicas-dimension-movil').slideToggle(700)

         }
         else if (dimensionPrecionada === '#familiar') {

            $('.tematicas-dimension-familiar').slideToggle(700)

         }
         else if (dimensionPrecionada === '#academica') {

            $('.tematicas-dimension-academica').slideToggle(700)

         }
         else if (dimensionPrecionada === '#economica') {

            $('.tematicas-dimension-economica').slideToggle(700)

         }else {

             $('.tematicas-dimension-vidaU').slideToggle(700)

         }
         
     })
     
     //rueda del mouse
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
    });
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