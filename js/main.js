$(document).on('ready', init);


function init()
{
	alert('pagina cargada');
	$('#navegacionPrincipal').localScroll();//carga el localScroll, efecto copado para la navegacion
	$('.navegacionFooter').localScroll();  
}
