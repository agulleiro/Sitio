var pos=1;
var intv;



$(document).on('ready', init);



//:::::::: RESPONSIVE TEXTOS DE QUIENES SOMOS::::::::::

 $(".TextoPre").fitText(2.5,{minFontSize: '14.5px',maxFontSize: '18.5px'});  

 $(".comentarioContacto").fitText();
 
 $(".texto").fitText(0.5);
 $("#tituloPre").fitText();




$("#contacto").hover(function(){
  $(".palabraContacto").css("-webkit-transition","all 1.8s ease");
  $(".palabraContacto").css("transition","all 1.8s ease");
  $(".palabraContacto").css("left","-5em");

    $(".movimientoSobre").css("-webkit-transition","all 1.5s ease");
    $(".movimientoSobre").css("transition","all 1.5s ease");
    $(".movimientoSobre").css("margin-right","0.95em");
    $(".movimientoSobre").css("margin-top","-3.8em");
    $(".movimientoSobre").css("-webkit-transform","rotate(0deg)");
},function(){
  
    $(".movimientoSobre").css("transition","all 1.2s"); 
    $(".movimientoSobre").css("-webkit-transition","all 1.2s"); 
    $(".movimientoSobre").css("margin-top","3.8em");
    $(".movimientoSobre").css("margin-right","20em");
    $(".movimientoSobre").css("-webkit-transform","rotate(-45deg)");
  
});

function init()
{
 
 $('#fondo').css({

    'opacity': 1
  });

	
   Aparecerobjetos();  // probando funcion para aprender
   intv = setInterval(slide,5000);  
   
   
  responsiveDesign();
  
 
  
;
  $('#navegacionPrincipal').localScroll();//carga el localScroll, efecto copado para la navegacion
  $('.navegacionFooter').localScroll();
  $('#inicio').localScroll();
  $('#quienesSomos').localScroll();
 
 
       
    
    
 
     

  }
    

function Aparecerobjetos(){


setTimeout(funcion3,1600);
setTimeout(funcion1,3500);
setTimeout(funcion2,6000);


    

}



function funcion1(){

  $('#frase1').css({

    'opacity': 1
  });
}

function funcion2(){
 
  $('#frase2').css({

    'opacity': 1
  });

}

function funcion3(){

  $('#frase3').css({

    'opacity': 1
  });

}


function scrollMouse(){
  $('body').on('DOMMouseScroll mousewheel', function (e) {
  var height = $(window).scrollTop();
  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
    //scroll Down

     
        if(height>=0 && height< 890 )
          {$("body").animate({ scrollTop: $("#prueba").offset().top },500);}
        else{
      
        if(height>=890 && height< 1799 )
           {$("body").animate({ scrollTop: $("#portfolio").offset().top }, 500);}

         else{
        if(height>=1799 && height< 2698 )
          {$("body").animate({ scrollTop: $("#tecnologias").offset().top }, 500);}

        else {
        if(height>=2698 && height< 3757 )
          {$("body").animate({ scrollTop: $("#contacto").offset().top }, 500);}
         else {return true;}
       }
     }
   }
     
      }
  else {
    //scroll up
     if(height>=890 && height< 1799 )
        $("body").animate({ scrollTop: $("#inicio").offset().top },500);
       if(height>=1799 && height<2698 )
        $("body").animate({ scrollTop: $("#prueba").offset().top }, 500);
         if(height>=2698 && height< 3757 )
        $("body").animate({ scrollTop: $("#portfolio").offset().top }, 500);
       if(height>=3757)
        $("body").animate({ scrollTop: $("#tecnologias").offset().top },500);
  }
  //prevent page fom scrolling
  return false;
});
}

function slide(){

  
/*$('.slideContainer').css({
  'margin-left': -(pos* $('.slider_container').width())+'px'
});*/

  
 $('.slideContainer').slideDown('slow',function(){
      $(this).animate({
        'margin-left':-(pos* $('.slider_container').width())+'px'}
        ,'slow',function(){
          $(this).fadeIn();
            });
    });

  
      

   pos++;
  if(pos>2){
    pos=0;
  }
}


function responsiveDesign(){
  
//::::::::RESPONSIVE DE: "EXPERIENCIA,COMPROMISO,DEDICACION" EN QUIENES SOMOS::::::::::::::::::
  altura = $('.parrafo').height();
 $('.parrafo').css('line-height',altura+'px'); 



 
//:::::::: RESPONSIVE SLIDER DE QUIENES SOMOS:::::::::::::::
 var width = $('.slider_container').width();
 $('.slide').each(function(i,e){
          $(e).css('width', width);

          
    }); 

 $( window ).resize(function() {
        altura = $('.parrafo').height(); 
        $('.parrafo').css('line-height',altura+'px');
      width = $('.slider_container').width();

      $('.slide').each(function(i,e){
          $(e).css('width', width);   
    });

       
      
      pos=0;
      slide();
      clearInterval(intv);
      intv = setInterval(slide,5000);      
    });
 

}