var pos=1;
var intv;

$(document).on('ready', init);
$("#contacto").hover(function(){
  $(".palabraContacto").css("transition","all 1.8s ease");
  $(".palabraContacto").css("left","-130px");

    $(".carita").css("transition","all 1.5s ease");
    $(".carita").css("margin-right","25px");
    $(".carita").css("margin-top","-100px");
    $(".carita").css("-webkit-transform","rotate(0deg)");
},function(){
  
    $(".carita").css("transition","all 1.2s");	
    $(".carita").css("margin-top","100px");
    $(".carita").css("margin-right","500px");
    $(".carita").css("-webkit-transform","rotate(-45deg)");
  
});

function init()
{
//alert($('body').height());
	$('#navegacionPrincipal').localScroll();//carga el localScroll, efecto copado para la navegacion
	$('.navegacionFooter').localScroll();
    $('#inicio').localScroll();
    $('#quienesSomos').localScroll();
  responsiveWali();
   
  
    Aparecerobjetos();  // probando funcion para aprender
   intv = setInterval(slide,5000);  
  
  
      
     


   
 
     
       
    
    
 
     

  }
    

function Aparecerobjetos(){

setTimeout(funcion3, 1600);
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
     //alert($(window).scrollTop());
     
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
 // alert("ejecutando "+pos);
  
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


function responsiveWali(){
//RESPONSIVE GENERAL
 /*    var minimo = $(document).height();

    $('#quienesSomos,#portfolio,#tecnologias,#contacto').css({
      'min-height': minimo
    });*/
  

        
//::::::::RESPONSIVE DE: "EXPERIENCIA,COMPROMISO,DEDICACION" EN QUIENES SOMOS::::::::::::::::::
  altura = $('.parrafo').height();
 $('.parrafo').css('line-height',altura+'px'); 

//:::::::: RESPONSIVE TEXTOS DE QUIENES SOMOS::::::::::
 $("#tituloPre").fitText();
 $(".TextoPre").fitText(2.5,{minFontSize: '14.5px',maxFontSize: '18.5px'});  

 
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



 //::::::::: RESPONSIVE ACORDEON ::::::::::::::::

    /*   var refAltura //764
       var refAncho  // 320

        refAltura = $('.acordeon').height();
        refAncho = $('.acordeon').width();

        $('.acordeon ul li').css({

           'width': refAncho*0.24+'px'

          });

        $('.acordeon ul li a img').css({
          'width': refAncho*0.83+'px',
          'height': refAltura

        });
*/

}