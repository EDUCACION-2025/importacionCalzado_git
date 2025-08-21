<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');

	if($itemDep=='undefined'){

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

		$query="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproducto` SET  `calificacion` = 'A', `observacion` = '$observacionesCalificaProducto', `fechaAprueba` = '$fecha_actual', `horaAprueba` = '$hora_actual', `especializado`= '$itemDep', `id_persona_califica` = '$id_ingresoLogin' ,estado='A' WHERE `id_producto` = '$idProducto';";
		$resultado = $conexionEstablecida->exec($query);

		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);
		
	}

	