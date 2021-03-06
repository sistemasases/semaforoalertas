/*
Semaforo
*/

function semaforo(indexTematica , indexDimension , tematicaPresionada) {


    currentColor = "none"
    var anteriorId
    var colors = {
        "red": "#ef3a2d",
        "yellow": "#f3eb3b",
        "green": "#94b33c"
    }

    
    $('.semaforo-link').on('click', function(e) {

        id = $(this).attr('href').replace('#', '')
        if (anteriorId != id) { clickPress = true} else {clickPress = false}

        if (clickPress) {

        e.preventDefault()
        e.stopPropagation()
        tematica = $($($($('.page').get(selectedPage())).find('.section').get(selectedSection(selectedPage()))).find('.tematica'))
        var prevHeight = tematica.height();

        currentColor = id 
        anteriorId = id
        titleRiskRed ='<div class="title-risk text-danger" id="titleRiskRed">RIESGO ALTO</div>'
        titleRiskYellow = '<div class="title-risk text-warning" id="titleRiskYellow">RIESGO MEDIO</div>'
        titleRiskGreen ='<div class="title-risk text-success" id="titleRiskGreen">RIESGO BAJO</div>'

        //Implementacion
        switch (indexTematica) {
             case 0:
                    $('.section').css({'height': '105vh' , 'padding-top': '14%'})
                 break;
             case 1:
                    $('.section').css({'height': '104vh' , 'padding-top': '12%'})
                 break;
             case 2:
                    $('.section').css({'height': '102vh' , 'padding-top': '13%'})
                 break;
             case 3:
                    $('.section').css({'height': '102vh' , 'padding-top': '12%'})
                 break;
             case 4:
                    $('.section').css({'height': '102vh' , 'padding-top': '11%'})
                 break;
             case 5:
                    $('.section').css({'height': '102vh' , 'padding-top': '10%'})
                 break;
             case 6:
                    $('.section').css({'height': '101vh' , 'padding-top': '12%'})
                 break;
             case 7:
                    $('.section').css({'height': '101vh' , 'padding-top': '12%'})
                 break;
             case 8:
                    $('.section').css({'height': '101vh' , 'padding-top': '12%'})
                 break;
             case 9:
                    $('.section').css({'height': '101vh' , 'padding-top': '12%'})
                 break;
                
         }
         
         if (indexDimension === 4 && indexTematica === 5 ) {
            $('div .tematica-texto').attr({'class': 'tematica-little'})
            $('.tematica-title-little').css('font-size','2em')
         } else {

            $('div .tematica-texto').attr({'class': 'tematica-aux'})
            $('.tematica-title').css('font-size','2.8em')

         }
       
         $('.tematica').css('justify-content','left')
         $('.tematica').css('padding', '50px 50px');
         $('.tematica').css('max-height','15%')
         $('div .tematica-content').hide()
         $('div .tematica-logo img').attr({'height': 90})
         $('div .section').attr({'id':'section'})
        
         $('.descriptores').css('display', 'flex')
         $('.descriptores').css('border-color', colors[id])
         $('.descriptor').hide()
        
         descriptorColor = $('.descriptor').filter(function(){return $(this).attr('id') == id});
         descriptorColor.css('display', 'flex')
         $('.tematica').css('height', '30%');

         currentDescriptorColor = tematica.parent().find('.descriptores').find('#'+id)
         var currHeight = tematica.height();
         currentDescriptorColor.hide()
         tematica.height(prevHeight)
         tematica.animate({ height: currHeight }, {
             duration: 250,
             complete: function() {
                 currentDescriptorColor.css('display', 'flex')
             }
         })

         $('.descriptor-circulo').each(function(e) {
             if($(this).hasClass(id)) {
                 $(this).addClass('active')
             } else {
                 $(this).removeClass('active')
             }
         })

         $('.semaforo').find('.circle').each(function(e) {
             $(this).addClass('filter')
             if($(this).hasClass(id+'-circle')) {
                 $(this).removeClass('filter')
             }
         })
        
         if ( $(tematicaPresionada).attr('id') === 'activo') {
              $(tematicaPresionada).removeClass('red')
              $(tematicaPresionada).removeClass('yellow')
              $(tematicaPresionada).removeClass('green')
              $(tematicaPresionada).addClass(id) 
         }

         //semaforo de mi brother samuel
         if (id === 'red') {
             $('#circle-red').attr({'stroke': '#FC0404' , 'stroke-width':2})
             $('#circle-yellow').attr({'stroke': '' , 'stroke-width':0})
             $('#circle-green').attr({'stroke': '' , 'stroke-width':0})
             $('.red-circle').css('fill','#FC0404')
             $('.green-circle').css('fill','#94b33c')
             $('.yellow-circle').css('fill','#f3eb3b')
             $('.descriptor-circulos').before(titleRiskRed)
             $('div').remove('.text-warning')
             $('div').remove('.text-success')
            

         } 
         else if (id === 'yellow') {
             $('#circle-red').attr({'stroke': '' , 'stroke-width':0})
             $('#circle-yellow').attr({'stroke': '#FFF000' , 'stroke-width':2})
             $('#circle-green').attr({'stroke': '' , 'stroke-width':0})
             $('.yellow-circle').css('fill','#FFF000')
             $('.green-circle').css('fill','#94b33c')
             $('.red-circle').css('fill','#ef3a2d')
             $('.descriptor-circulos').before(titleRiskYellow)
             $('div').remove('.text-danger')
             $('div').remove('.text-success')
             
             

         } 
         else if (id === 'green') {
             $('#circle-red').attr({'stroke': '' , 'stroke-width':0})
             $('#circle-yellow').attr({'stroke': '' , 'stroke-width':0})
             $('#circle-green').attr({'stroke': '#72FF04' , 'stroke-width':2})
             $('.green-circle').css('fill','#72FF04')
             $('.yellow-circle').css('fill','#f3eb3b')
             $('.red-circle').css('fill','#ef3a2d')
             $('.descriptor-circulos').before(titleRiskGreen)
             $('div').remove('.text-danger')
             $('div').remove('.text-warning')
            
         }


     }

     })


 
}

//funcionalidad del semaforo en la version movil
function semaforoMovil(tematicaPresionada) {

    //Iniciando la magia
    currentColor = "none"
    var anteriorId
    var colors = {
        "red": "#ef3a2d",
        "yellow": "#f3eb3b",
        "green": "#94b33c"
    }

    titleRiskRed1 ='<div class="title-risk-movil text-danger" id="titleRiskRed">RIESGO ALTO</div>'
    titleRiskYellow1 = '<div class="title-risk-movil text-warning" id="titleRiskYellow">RIESGO MEDIO</div>'
    titleRiskGreen1 ='<div class="title-risk-movil text-success" id="titleRiskGreen">RIESGO BAJO</div>'
    
    var closeBotonRisk = 
    ' <div class="hamburger-movil-cerrar-risk" id="cerrar-risk">           ' +
    '   <button  class="hamburger-btn-movil-risk" type="button"            ' +             '        data-bs-toggle="dropdown" aria-expanded="false">              ' +
    '            <i class="far fa-window-close"></i>                       ' +
    '    </button>                                                         ' +
    ' </div>                                                               '

    $('.semaforo-link').on('click', function(e) {


        id = $(this).attr('href').replace('#', '')
        if (anteriorId != id) { clickPress = true} else {clickPress = false}

        if (clickPress) {

        e.preventDefault()
        e.stopPropagation()

        tematica = $($($($('.page').get(selectedPage())).find('.section').get(selectedSection(selectedPage()))).find('.tematica'))
        anteriorId = id

        $('.tematica').fadeOut()
        $('div .descriptores').delay(400).fadeIn()
        $('.descriptores').css('border-color', colors[id])
        $('.corner-menu').css({'padding-left' : '80px'})
        $('.hamburger-btn-movil-risk').show()
        $('.semaforo').css({'left': '-14%'})
        $('.tematicas-dimension-movil').slideUp()
        $('.tematicas-dimension-familiar').slideUp()
        $('.tematicas-dimension-academica').slideUp()
        $('.tematicas-dimension-economica').slideUp()
        $('.tematicas-dimension-vidaU').slideUp()
        $('.descriptor').hide()
        if (startSemaforo === false) {
            startSemaforo = true
            $('.descriptor-circulos').before(closeBotonRisk)
            $('div #green').prepend(titleRiskGreen1)
            $('div #red').prepend(titleRiskRed1)
            $('div #yellow').prepend(titleRiskYellow1)
 

            $('.hamburger-btn-movil-risk').click(function(event) {
            event.preventDefault()
            quitRiskMovil() 
            semaforoMovil(tematicaPresionada)
            })

        }

        $('.descriptor-circulos').hide()
        $('.descriptores').css({
            'position': 'inherit',
            'margin-top': '0',
            'width': '100%',
            'padding': '0',
            'padding-top': '0',
            'background': 'white',
            'border-radius':'0'

        })

        $('#red , #yellow , #green').attr({
            'style' : 
            'padding-top: 5%;'+
            'padding-left: 30%;'+
            'padding-right: 1em;'
        })

        $('.section').css({
            'padding-bottom': '55%'
        })

        descriptorColor = $('.descriptor').filter(function(){return $(this).attr('id') == id});
        descriptorColor.css('display', 'flex')

        $('.semaforo').find('.circle').each(function(e) {
             $(this).addClass('filter')
             if($(this).hasClass(id+'-circle')) {
                 $(this).removeClass('filter')
             }
        })

        if (id === 'red') {
             $('#circle-red').attr({'stroke': '#FC0404' , 'stroke-width':2})
             $('#circle-yellow').attr({'stroke': '' , 'stroke-width':0})
             $('#circle-green').attr({'stroke': '' , 'stroke-width':0})
             $('.red-circle').css('fill','#FC0404')
             $('.green-circle').css('fill','#94b33c')
             $('.yellow-circle').css('fill','#f3eb3b')
   
        } 
        else if (id === 'yellow') {
             $('#circle-red').attr({'stroke': '' , 'stroke-width':0})
             $('#circle-yellow').attr({'stroke': '#FFF000' , 'stroke-width':2})
             $('#circle-green').attr({'stroke': '' , 'stroke-width':0})
             $('.yellow-circle').css('fill','#FFF000')
             $('.green-circle').css('fill','#94b33c')
             $('.red-circle').css('fill','#ef3a2d')

         } 
         else if (id === 'green') {
             $('#circle-red').attr({'stroke': '' , 'stroke-width':0})
             $('#circle-yellow').attr({'stroke': '' , 'stroke-width':0})
             $('#circle-green').attr({'stroke': '#72FF04' , 'stroke-width':2})
             $('.green-circle').css('fill','#72FF04')
             $('.yellow-circle').css('fill','#f3eb3b')
             $('.red-circle').css('fill','#ef3a2d')

            
         }

        if ( $(tematicaPresionada).attr('id') === 'activo') {
              $(tematicaPresionada).removeClass('red')
              $(tematicaPresionada).removeClass('yellow')
              $(tematicaPresionada).removeClass('green')
              $(tematicaPresionada).addClass(id) 
         }

        }
        


    })

}
