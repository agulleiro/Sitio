$(document).on('ready', init);
$("#contacto").hover(function(){
  $(".palabraContacto").css("transition","all 1.8s ease");
  $(".palabraContacto").css("left","-130px");
  $(".carita").css("transition","all 1.5s ease");
  $(".carita").css("margin-top","-100px");

  },function(){
    $(".carita").css("transition","all 1.2s");	
  $(".carita").css("margin-top","100px");
});

function init()
{

	$('#navegacionPrincipal').localScroll();//carga el localScroll, efecto copado para la navegacion
	$('.navegacionFooter').localScroll();  
	
}
