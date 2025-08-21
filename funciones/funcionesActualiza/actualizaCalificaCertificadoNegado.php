<?php
	require_once "../../conexion/conexion.php";

	require_once "../../Swift/lib/swift_required.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');

	if($itemDep=='undefined' || empty($observacionEmitirCertificado) || empty($cuantosCorregir)){

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{



		$query15="SELECT fechaSubeDocu FROM ic_calificacertificado WHERE id_caliCertificado='$idCodigoCalifi';";
		$resultado15 = $conexionEstablecida->query($query15);

		while($registro15 = $resultado15->fetch()) {
			$fechaSubeDocu__BD=$registro15['fechaSubeDocu'];
		}		



		$query="UPDATE `ezonshar_mdepsaddb`.`ic_calificacertificado` SET `calificaciondeCertificado` = 'N', `observacionCalificaCertificado` = '$observacionEmitirCertificado', `fechaCalifica` = '$fecha_actual', `horaCalifica` = '$hora_actual', `id_apruebaCertificadoFin` = '$id_ingresoLogin',cuantosCorregir='$cuantosCorregir',fechaSubeDocu='000-00-00' WHERE `id_caliCertificado` = '$idCodigoCalifi';";
		$resultado = $conexionEstablecida->exec($query);

		$query1="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproducto` SET `caliInSolicitud` = 'N'  WHERE `codigo_solicitud` = '$codigoImporta';";
		$resultado1 = $conexionEstablecida->exec($query1);

		$query1="INSERT INTO `ezonshar_mdepsaddb`.`ic_calificacertificado_negado` (`idCalificaNegado`, `id_caliCertificado`, `fechaInicial`, `fecha`, `hora`) VALUES (NULL, '$idCodigoCalifi', '$fechaSubeDocu__BD', '$fecha_actual', '$hora_actual');";
		$resultado2 = $conexionEstablecida->exec($query1);	


		/*=======================================================================
		=            mensaje para el usuario de Certificado Negado            =
		=======================================================================*/
		
		$email=$agregaEmail;

		$from="ministerioDeporte2021@gmail.com";

		$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com',465,'ssl');

		$transport->setUsername('ministerioDeporte2021@gmail.com');

		$transport->setPassword('flloexddodrdqusj');	
													
		$message = Swift_Message::newInstance();
												
		$message->setTo($email);

		$body='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>ICIDE</title><style type="text/css">body {background:#EEE; padding:30px;}'.'</style>'.'</head>'.'<body><p style="font-size:14px;">'.'Estimado'.' '.$razonImportador.'  </p><p style="font-size:14px;">'.'El certificado con numero '.$codigoImporta.' ha sido negado por la siguiente razon: '.$observacionEmitirCertificado.', tambien puede revisarlo en el sistema de Importación de calzado e implementos deportivos especializados, en el menu "SOLICITAR CERTIFICADO \ CORREGIR DOCUMENTOS". </p></body></html>';

		$message->setSubject('Notificación Observación');

		$message->setBody($body);

		$message->setContentType('text/html');

		$message->setFrom(array($from => 'IMPORTACION CALZADO E IMPLEMENTOS ESPECIALIZADOS'));

		$mailer = Swift_Mailer::newInstance($transport);

		$mailer->send($message);
		
		/*=====  End of mensaje para el usuario de Certificado Negado  ======*/


		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);
		
	}
