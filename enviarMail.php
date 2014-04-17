<?php 

if(isset($_POST['asunto']) && isset($_POST['comentario']) && isset($_POST['nombre']) && isset($_POST['email']) &&
	!empty($_POST['asunto']) && !empty($_POST['comentario']) && !empty($_POST['nombre']) && !empty($_POST['email']))
	{

		$mailLucas="lucas.alderete@skysoft.com.ar";
		$mailWalter="walter.dotto@skysoft.com.ar";
		$desde="From:"."SkySoft";
		$asunto="[Comentario SkySoft] ".$_POST['asunto'];
		$mensaje=" Nombre: ".$_POST['nombre']."\nEmail: ".$_POST['email']."\nMensaje: ".$_POST['comentario'];
		mail($destino,$asunto,$mensaje,$mailLucas);
		mail($destino,$asunto,$mensaje,$mailWalter);
		header('Location: enviado.html'); 

	}
else
	{
		header('Location: noEnviado.html');
	}

?>
