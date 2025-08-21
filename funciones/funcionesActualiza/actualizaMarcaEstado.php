<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');

	if(empty($id_ingresoLogin)){

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

		$query="UPDATE `ezonshar_mdepsaddb`.`ic_documentoadicional` SET `estadoMarca` = 'A', id_aprueba = '$id_ingresoLogin', fechaAprueba = '$fecha_actual', horaAprueba = '$hora_actual' WHERE `id_documentoAdicional` = '$idMarcaAdiciona';";
		$resultado = $conexionEstablecida->exec($query);


		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);
		
	}
 