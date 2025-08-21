<?php

	require_once "../../conexion/conexion.php";
	
	//requiriendo la librería Swift de php para enviar correos electronicos
	require_once "../../Swift/lib/swift_required.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

 	if (empty($id_ingresoInfo) || $rucOption == 'undefined' || $certificadoOption == 'undefined' || $cartaOption == 'undefined' || $declaracionInpuestoAnioAnterior == 'undefined' || $declaracionImpuestoComercioExterior == 'undefined' || $documentosElectronicosSeleccion == 'undefined' || $noAdeudarNacional == 'undefined' || $obligacionesEmitidoSuper == 'undefined') {
		
		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

		date_default_timezone_set("America/Guayaquil");

		$fecha_actual = date('Y-m-d');
		$hora_actual= date('H:i:s');


			$email=$emaiTable;

			$from="ministerioDeporte2021@gmail.com";

			$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com',465,'ssl');

			$transport->setUsername('ministerioDeporte2021@gmail.com');

			$transport->setPassword('flloexddodrdqusj');	
													
			$message = Swift_Message::newInstance();
										
			$message->setTo($email);

			$body='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>ONADE</title><style type="text/css">body {background:#EEE; padding:30px;}'.'</style>'.'</head>'.'<body>
			<p style="font-size:14px;">'.'Estimado.'.' '.$razonTabla.'  </p>
			<p style="font-size:14px;">'.'Su registro en el sistema ha sido aprobado. '.' </p>

			<p style="font-size:14px;">'.'Usuario:'.' '.$emaiSeparado.'  </p>

			<p style="font-size:14px;">'.'Contraseña:'.' '.$passUser.'  </p>
			<p style="font-size:14px;">'.'Para ingresar a la página puede realizarlo presionando click  <a href="http://aplicativos.deporte.gob.ec/ImportacionCalzado/ingreso">Aquí</a> '.'  </p>
			<p style="font-size:14px;">'.'Saludos cordiales'.'  </p>
			<p style="font-size:14px;">'.'Secretaría del Deporte'.'  </p>
			</body></html>';

			$message->setSubject('Notificación Usuario');

			$message->setBody($body);

			$message->setContentType('text/html');

			$message->setFrom(array($from => 'IMPORTACION CALZADO E IMPLEMENTOS ESPECIALIZADOS'));

			$mailer = Swift_Mailer::newInstance($transport);

			$mailer->send($message);

		
		$passwordCodificado=sha1($passUser);

		$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_calificacionregistro`(`id_registro`, `id_usuarioIngresa`, `id_revisaInfo`, `copiaCedula`, `nombramiento`, `ruc`, `certificadoVigencia`, `cartaIntencion`, `fechaCalifica`, `horaCalifica`, `Observacion`, `declaracionInpuestoAnioAnterior`, `declaracionImpuestoComercioExterior`, `documentosElectronicosSeleccion`, `noAdeudarNacional`, `obligacionesEmitidoSuper`) VALUES (NULL, '$id_ingresoInfo', '$id_ingresoLogin', NULL, '$nombramientoOption', '$rucOption', '$certificadoOption', '$cartaOption', '$fecha_actual', '$hora_actual', null,'$declaracionInpuestoAnioAnterior','$declaracionImpuestoComercioExterior','$documentosElectronicosSeleccion','$noAdeudarNacional','$obligacionesEmitidoSuper');";
		$resultado = $conexionEstablecida->exec($query);

		$query1="UPDATE `ezonshar_mdepsaddb`.`ic_usuario` SET `estadoActor` = 'A', `usuario` = '$emaiSeparado', `password` = '$passwordCodificado' WHERE `id_Actor` = '$id_ingresoInfo';";
		$resultado1 = $conexionEstablecida->exec($query1);


		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}
