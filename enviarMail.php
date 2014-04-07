<?php 

if(isset($_POST['asunto']) && isset($_POST['comentario']) && isset($_POST['nombre']) && isset($_POST['email']) &&
	!empty($_POST['asunto']) && !empty($_POST['comentario']) && !empty($_POST['nombre']) && !empty($_POST['email']))
	{

		/*falta codificar*/
		echo "Correo enviado... <br>  - Falta codificar";

	}
else
	{
		echo "Error: Campo/s vacio/s";
	}
?>
