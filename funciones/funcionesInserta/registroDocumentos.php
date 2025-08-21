<?php
	require_once "../../conexion/conexion.php";

	// requiriendo la librería Swift de php para enviar correos electronicos
	require_once "../../Swift/lib/swift_required.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);



	$query10="SELECT ruc FROM ic_usuario where ruc = '$agregaRuc';";
	$resultado10 = $conexionEstablecida->query($query10);


	while($resultado11 = $resultado10->fetch()) {

		$usuarioRecuperado=$resultado11['ruc'];

	}



	if (empty($agregaRuc) || empty($agregaActividadPrincipal) || empty($agregaActividadBeneficio) || empty($agregaRasonSocial) || empty($agregaEmail) || empty($agregaTelefono) || empty($agregaCelular)) {

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{ 
				date_default_timezone_set("America/Guayaquil");

				$fecha_actual = date('Y-m-d');
				$hora_actual= date('H:i:s');
			
				// $tipo1 = $_FILES['copiaCedula']['type']; 
				// $archivotmp1 = $_FILES['copiaCedula']['tmp_name'];
				// $destino1="../../images/imagenesDocumentos";

				$tipo2 = $_FILES['nombramiento']['type']; 
				$archivotmp2 = $_FILES['nombramiento']['tmp_name'];
				$destino2="../../images/imagenesDocumentos";

				$tipo3 = $_FILES['docuRuc']['type']; 
				$archivotmp3 = $_FILES['docuRuc']['tmp_name'];
				$destino33="../../images/imagenesDocumentos";

				$tipo4 = $_FILES['CertificadoVigente']['type']; 
				$archivotmp4 = $_FILES['CertificadoVigente']['tmp_name'];
				$destino4="../../images/imagenesDocumentos";

				$tipo5 = $_FILES['cartaIntencion']['type']; 
				$archivotmp5 = $_FILES['cartaIntencion']['tmp_name'];
				$destino5="../../images/imagenesDocumentos";	

			


				if (empty($usuarioRecuperado)){

					if(empty($archivotmp3) || empty($archivotmp4) || empty($archivotmp5)){

						$mensaje=2;
						$jason['mensaje']=$mensaje;
						echo json_encode($jason);

					}else{

						if (($tipo2 == "application/pdf") || ($tipo3 == "application/pdf") || ($tipo4 == "application/pdf") || ($tipo5 == "application/pdf")) {

						// $nombre1 = str_replace ( " " , "" ,$agregaRasonSocial).'copiadCedula'.str_replace ( ":" , "" ,$hora_actual);
						$nombre2 = str_replace ( " " , "" ,$agregaRasonSocial).'nombramiento'.str_replace ( ":" , "" ,$hora_actual);
						$nombre3 = str_replace ( " " , "" ,$agregaRasonSocial).'documentoRuc'.str_replace ( ":" , "" ,$hora_actual);
						$nombre4 = str_replace ( " " , "" ,$agregaRasonSocial).'certificadoV'.str_replace ( ":" , "" ,$hora_actual);
						$nombre5 = str_replace ( " " , "" ,$agregaRasonSocial).'cartaIntenci'.str_replace ( ":" , "" ,$hora_actual);

						// copy($archivotmp1,"$destino1/$nombre1.pdf");
						copy($archivotmp2,"$destino2/$nombre2.pdf");
						copy($archivotmp3,"$destino33/$nombre3.pdf");
						copy($archivotmp4,"$destino4/$nombre4.pdf");
						copy($archivotmp5,"$destino5/$nombre5.pdf");

						/*=======================================
						=            mensaje usuario            =
						=======================================*/
						
						$email=$agregaEmail;

						$from="importaciones@deporte.gob.ec";

						$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com',465,'ssl');

						$transport->setUsername('ministeriodeporte2021@gmail.com');

						$transport->setPassword('flloexddodrdqusj');	
													
						$message = Swift_Message::newInstance();
												
						$message->setTo($email);

						$body='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>ICIDE</title><style type="text/css">body {background:#EEE; padding:30px;}'.'</style>'.'</head>'.'<body>
					<p style="font-size:14px;">'.'Estimado'.' '.$nomRepresentanteLegal.'  </p>
					<p style="font-size:14px;">'.'Los datos han sido enviados para su revisión, en el transcurso de 48 horas recibirá un correo con el estado de su registro., </p>
					</body></html>';

						$message->setSubject('Notificación Observación');

						$message->setBody($body);

						$message->setContentType('text/html');

						$message->setFrom(array($from => 'IMPORTACION CALZADO E IMPLEMENTOS ESPECIALIZADOS'));

						$mailer = Swift_Mailer::newInstance($transport);

						$mailer->send($message);
						
						/*=====  End of mensaje usuario  ======*/


						/*============================================
						=            mensaje para tecnico            =
						============================================*/
						
						$email1="sdelpino@deporte.gob.ec";

						$from1="importaciones@deporte.gob.ec";

						$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com',465,'ssl');

						$transport->setUsername('ministerioDeporte2021@gmail.com');

						$transport->setPassword('Becquer098..');	
						
						$message1 = Swift_Message::newInstance();
												
						$message1->setTo($email1);

						$body1='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>ICIDE</title><style type="text/css">body {background:#EEE; padding:30px;}'.'</style>'.'</head>'.'<body>
						

					<p style="font-size:14px;">'.'Estimado'.' '.'SANTIAGO DAVID DEL PINO MURIEL'.'  </p>
					<p style="font-size:14px;">'.'Le ha llegado una solicitud de'.' '.$nomRepresentanteLegal.'  </p>
					</body></html>';

						$message1->setSubject('Notificación Observación');

						$message1->setBody($body1);

						$message1->setContentType('text/html');

						$message1->setFrom(array($from1 => 'IMPORTACION CALZADO E IMPLEMENTOS ESPECIALIZADOS'));

						$mailer1 = Swift_Mailer::newInstance($transport1);

						$mailer1->send($message1);
						
						/*=====  End of mensaje para tecnico  ======*/
						
						
						

						$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_usuario` (`id_Actor`, `ruc`, `actividadEconomica`, `RasonSocial`, `usuario`, `password`, `email`, `telefono`, `celular`, `estadoActor`, `copiaCedula`, `nombramiento`, `docuRuc`, `certificadoVigente`, `cartaIntencion`, `fechaIngresoDocumentos`, `horaIngresoDocumentos`,`cedulaRepresentanteLegal`,`nombreRepresentanteLegar`, `actividadBeneficio`) VALUES (NULL, '$agregaRuc', '$agregaActividadPrincipal', '$agregaRasonSocial', NULL, NULL, '$agregaEmail', '$agregaTelefono', '$agregaCelular', 'P', NULL, '$nombre2', '$nombre3', '$nombre4', '$nombre5', '$fecha_actual', '$hora_actual', '$cedulaIdentidad','$nomRepresentanteLegal', '$agregaActividadBeneficio');";

						$resultado = $conexionEstablecida->exec($query);

						$query2="SELECT MAX(id_Actor) AS idMaximo FROM ic_usuario;";
						$resultado2 = $conexionEstablecida->query($query2);

						while($registro = $resultado2->fetch()) {

							$idMaximoRecuperado=$registro['idMaximo'];

						}

						$query3="INSERT INTO `ezonshar_mdepsaddb`.`ic_usuario_roles`(`id_usuarios_roles`, `id_usuario`, `id_rol`, `estado`) VALUES (NULL, '$idMaximoRecuperado', '3', 'A');";

						$resultado3 = $conexionEstablecida->query($query3);

						$mensaje=1;
						$jason['mensaje']=$mensaje;
						echo json_encode($jason);

				}else{

						$mensaje=3;
						$jason['mensaje']=$mensaje;
						echo json_encode($jason);

				}
					}

					

				}else{

					$mensaje=4;
					$jason['mensaje']=$mensaje;
					echo json_encode($jason);
					
				}

				


	}


