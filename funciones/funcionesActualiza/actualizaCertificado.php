<?php

	require_once "../../conexion/conexion.php";

	require_once "../../Swift/lib/swift_required.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');

	if($certificadoFirmado=='undefined' || empty($recuperaCodigoCertificado1) || empty($codigoimportador1)){

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

		$tipo = $_FILES['certificadoFirmado']['type']; 
		$archivotmp1 = $_FILES['certificadoFirmado']['tmp_name'];
		$destino1="../../images/certificadosEmitidos";

		$nombre = str_replace ( " " , "" ,$codigoimportador1).'nombramiento'.str_replace ( ":" , "" ,$hora_actual);

		copy($archivotmp1,"$destino1/$nombre.pdf");



		$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_emisioncertificado`(`id_numeroCertificado`, `id_importador`, `id_calificaUsuario`, `codigoGenera`, `fechaAprueba`, `horaAprueba`, `estadoCertificado`, `documentoCertificado`) VALUES (NULL, '$recuperaCodigoCertificado1', '$codigodeUsuario', '$codigoimportador1', '$fecha_actual', '$hora_actual', '', '$nombre');";
		$resultado = $conexionEstablecida->exec($query);

		$query1="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproducto` SET `id_calificacionFinalFirmas` = '$codigodeUsuario' WHERE `codigo_solicitud` = '$codigoimportador1';";
		$resultado1 = $conexionEstablecida->exec($query1);

		$query1="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproductoadicional` SET `id_calificacionFinalFirmas` = '$codigodeUsuario' WHERE `codigo_solicitud` = '$codigoimportador1';";
		$resultado1 = $conexionEstablecida->exec($query1);

		$data=array();
		$data2=array();
		$data3=array();

		$query15="SELECT id_producto,cantidadAdicional FROM ic_ingresoproductoadicional WHERE codigo_solicitud='$codigoimportador1';";
		$resultado15 = $conexionEstablecida->query($query15);

		while($registro15 = $resultado15->fetch()) {

			$id_producto=$registro15['id_producto'];
			array_push($data, $id_producto);

			$cantidadAdicional=$registro15['cantidadAdicional'];
			array_push($data3, $cantidadAdicional);

		}		


		$contador=count($data);


		for ($i=0; $i < $contador; $i++) { 
	
			$query25="SELECT cantidadImportada,cantidadRestante,idProductosTrimestrales FROM ic_productos_trimestrales WHERE id_productoSegundo='$data[$i]' ORDER BY idProductosTrimestrales DESC LIMIT 1;";
			$resultado25 = $conexionEstablecida->query($query25);

			while($registro25 = $resultado25->fetch()) {

				$cantidadImportada=$registro25['cantidadImportada'];
				$cantidadRestante=$registro25['cantidadRestante'];
				$idProductosTrimestrales=$registro25['idProductosTrimestrales'];
					
			}

			if (!empty($cantidadRestante)) {

				$sumadorAnonimo=intval($cantidadRestante) + intval($data3[$i]);

				$query16="UPDATE ic_productos_trimestrales SET cantidadRestante='$sumadorAnonimo',cantidadImportada='$sumadorAnonimo' WHERE id_productoSegundo='$data[$i]';";

				$resultado16 = $conexionEstablecida->exec($query16);				

			}


		}


		/*=======================================================================
		=            mensaje para el usuario de Certificado Aceptado            =
		=======================================================================*/
		
		// $email=$agregaEmail;

		// $from="importaciones@deporte.gob.ec";

		// $transport = Swift_SmtpTransport::newInstance('mail.deporte.gob.ec',465,'ssl');

		// $transport->setUsername('importaciones@deporte.gob.ec');

		// $transport->setPassword('importacion123');	
													
		// $message = Swift_Message::newInstance();
												
		// $message->setTo($email);

		// $body='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>ICIDE</title><style type="text/css">body {background:#EEE; padding:30px;}'.'</style>'.'</head>'.'<body><p style="font-size:14px;">'.'Estimado'.' '.$razonImportador.'  </p><p style="font-size:14px;">'.'El certificado con número '.$codigoImporta.' ha sido aprobado puede revisarlo en el sistema de Importación de calzado e implementos deportivos especializados, en la parte del menú “CERTIFICADO FINAL”. </p></body></html>';

		// $message->setSubject('Notificación Observación');

		// $message->setBody($body);

		// $message->setContentType('text/html');

		// $message->setFrom(array($from => 'IMPORTACION CALZADO E IMPLEMENTOS ESPECIALIZADOS'));

		// $mailer = Swift_Mailer::newInstance($transport);

		// $mailer->send($message);
		
		/*=====  End of mensaje para el usuario de Certificado Aceptado  ======*/


		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);
		
	}
