<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);


	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');

	$passwordCodificado=sha1($passwordUsuario);

	$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_usuario`(`id_Actor`, `ruc`, `actividadEconomica`, `RasonSocial`, `usuario`, `password`, `email`, `telefono`, `celular`, `fechaInscripcion`, `estadoActor`) VALUES (NULL, '$cedula', '$nombreRaSocial', '$descripcionRaSocial', '$usuario', '$passwordCodificado', '$email', '$telefono', '$celular', '$fecha_actual', 'A');";

	$resultado = $conexionEstablecida->exec($query);



