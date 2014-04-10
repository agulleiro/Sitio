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
   // var intv = setInterval(nubeFlotante,800);
    Aparecerobjetos();  // probando funcion para aprender

	
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

var intv = setInterval(funcion3,1600);
var intv = setInterval(funcion1,3500);
var intv = setInterval(funcion2,6000);

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