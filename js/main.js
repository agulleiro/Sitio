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
    $(document).on('mousemove',function(e){ 


     /* if($("#jodido").position().left>= $(document).width()-$("#jodido").width())
          {$("#jodido").css({
          'left': $(document).width()-$("#jodido").width()+'px'
        });}

        $("#jodido").css({
          'left': e.pageX+'px' */
     

          if(e.pageX>=$(document).width()-$("#jodido").width())
          {
            $("#jodido").css({
          'left': $(document).width()-$("#jodido").width()+'px'});
          }
          else
          {
                $("#jodido").css({
               'left': e.pageX+'px'});

          }

      
       


    });

 
       
       
      //  var pos = "e.pageX: " + e.pageX + ", e.pageY: " + e.pageY; 

       // console.log(pos)
   // var intv = setInterval(nubeFlotante,800);
    Aparecerobjetos();  // probando funcion para aprender
 
      //scrollMouse();  //baja o sube automaticamente (funciona solo en chrome)

  }
    
	



/*function nubeFlotante(){

//alert($("#imagen").position().top);
   var imagen= $("#imagen");
        if(imagen.position().top > 203)
            {   
                imagen.css({
                    'top': 185+'px'
                });
    }
    else  { if(imagen.position().top < 203)
            {   
                imagen.css({
                    'top': 230+'px'
                });
    }
}
}*/

function Aparecerobjetos(){

setTimeout(funcion3, 1600);
setTimeout(funcion1,3500);
setTimeout(funcion2,6000);


/*$('#cajaNegra').css({

        
        'left': 60+'%'


});*/
    

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


/*function posMouse(){
  $(document).bind('mousemove',function(e){ 
        $("#log").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY); 
}); 
}*/