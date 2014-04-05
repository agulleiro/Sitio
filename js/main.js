$(document).on('ready', init);


function init()
{

	$('#navegacionPrincipal').localScroll();//carga el localScroll, efecto copado para la navegacion
	$('.navegacionFooter').localScroll();  

	alert($("h1").parent('#logo').text());
	$("#logo").lettering();
	
}
