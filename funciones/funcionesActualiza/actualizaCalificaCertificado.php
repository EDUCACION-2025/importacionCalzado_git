<?php
	require_once "../../conexion/conexion.php";

	

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');

	if($itemDep=='undefined' || empty($id_ingresoLogin)){

		$mensaje=2;
		$jason['mensaje']=$mensaje; 
		echo json_encode($jason);

	}else{

		$query="UPDATE `ezonshar_mdepsaddb`.`ic_calificacertificado` SET `calificaciondeCertificado` = 'A', `observacionCalificaCertificado` = '$observacionEmitirCertificado', `fechaCalifica` = '$fecha_actual', `horaCalifica` = '$hora_actual', `id_apruebaCertificadoFin` = '$id_ingresoLogin' WHERE `id_caliCertificado` = '$idCodigoCalifi';";
		$resultado = $conexionEstablecida->exec($query);



		$query1="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproducto` SET `caliInSolicitud` = 'A'  WHERE `codigo_solicitud` = '$codigoImporta';";
		$resultado1 = $conexionEstablecida->exec($query1);


		$query2="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproductoadicional` SET `caliInSolicitud` = 'A' WHERE `codigo_solicitud` = '$codigoImporta';";
		$resultado2 = $conexionEstablecida->exec($query2);


		$mensaje=1;
		$jason['mensaje']=$mensaje; 
		echo json_encode($jason); 
		
	}
