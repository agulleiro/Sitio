var pos=1;

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

	$('#navegacionPrincipal').localScroll();//carga el localScroll, efecto copado para la navegacion
	$('.navegacionFooter').localScroll();
    $('#quienesSomos').localScroll(); 
    Aparecerobjetos();  // probando funcion para aprender
 

    var width = $('.slider_container').width();
  $('.slide').each(function(i,e){
          $(e).css('width', width);

          
    });
      
      


   
 
      var intv = setInterval(slide,5000); 
       
    
    
 
     

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

