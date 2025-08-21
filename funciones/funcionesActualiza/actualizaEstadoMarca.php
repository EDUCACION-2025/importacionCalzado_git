<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

 	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');
 
 		$query="UPDATE `ezonshar_mdepsaddb`.`ic_documentoadicional` SET  `estadoMarca` = 'I', `id_aprueba` = '$id_ingresoLogin', `fechaAprueba` = '$fecha_actual', `horaAprueba` = '$hora_actual', observacion = '$observacionMarca' WHERE `id_documentoAdicional` = '$id_aEliminar';";


 		// echo $query;

		$resultado = $conexionEstablecida->query($query);

	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);

 