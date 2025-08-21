<?php
	require_once "../../conexion/conexion.php";

	require_once "../../Swift/lib/swift_required.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	$query10="SELECT ruc FROM ic_usuario where ruc = '$cedula';";
	$resultado10 = $conexionEstablecida->query($query10);


	while($resultado11 = $resultado10->fetch()) {

		$ruc=$resultado11['ruc'];

	}

	if (!empty($ruc)) {

		$mensaje=2;
		$jason['mensaje']=$mensaje;

		
	}else{

		date_default_timezone_set("America/Guayaquil");

		$fecha_actual = date('Y-m-d');
		$hora_actual= date('H:i:s');

		/*============================================
		=            Obtener los archivos            =
		============================================*/
		
		$archivotmpNombramiento = $_FILES['nombramiento']['tmp_name'];
		$destinoNombramiento="../../images/imagenesDocumentos";

		$archivotmpDocuRuc= $_FILES['docuRuc']['tmp_name'];
		$destinoDocuRuc="../../images/imagenesDocumentos";
 
		$archivotmpCertificadoVigente = $_FILES['CertificadoVigente']['tmp_name'];
		$destinoCertificadoVigente="../../images/imagenesDocumentos";

		$archivotmpCartaIntencion = $_FILES['cartaIntencion']['tmp_name'];
		$destinoCartaIntencion="../../images/imagenesDocumentos";	

		$archivotmpDeclaracionInpuesto = $_FILES['declaracionInpuesto']['tmp_name'];
		$destinoDeclaracionInpuesto="../../images/imagenesDocumentos";

		$archivotmpDeclaracionAduaneraDeImportacion = $_FILES['declaracionAduaneraDeImportacion']['tmp_name'];
		$destinoDeclaracionAduaneraDeImportacion="../../images/imagenesDocumentos";

		$archivotmpEmisionDocumentosElectronicos = $_FILES['emisionDocumentosElectronicos']['tmp_name'];
		$destinoEmisionDocumentosElectronicos="../../images/imagenesDocumentos";

		$archivotmpNoAdeudarServicio = $_FILES['noAdeudarServicio']['tmp_name'];
		$destinoNoAdeudarServicio="../../images/imagenesDocumentos";

		$archivotmpCertificadoDeCumplimiento = $_FILES['certificadoDeCumplimiento']['tmp_name'];
		$destinoCertificadoDeCumplimiento="../../images/imagenesDocumentos";

		$archivotmpCertificadoDistribucionAutorizacion = $_FILES['certificadoDistribucion']['tmp_name'];
		$destinoCertificadoDistribucionAutorizacion="../../images/imagenesCatalogo";
		
		$archivotmpGlosarioDeTecnologias = $_FILES['glosarioDeTecnologias']['tmp_name'];
		$destinoGlosarioDeTecnologias="../../images/imagenesCatalogo";
		
		/*=====  End of Obtener los archivos  ======*/
		
		/*===========================================
		=            Reenombrar Archivos            =
		===========================================*/
		
		$nombreNombramiento = str_replace ( " " , "" ,$agregaRasonSocial).'nombramiento'.str_replace ( ":" , "" ,$hora_actual);
		$nombreDocumentoRuc = str_replace ( " " , "" ,$agregaRasonSocial).'documentoRuc'.str_replace ( ":" , "" ,$hora_actual);
		$nombreCertificadoVigente = str_replace ( " " , "" ,$agregaRasonSocial).'certificadoV'.str_replace ( ":" , "" ,$hora_actual);
		$nombreCartaIntencion = str_replace ( " " , "" ,$agregaRasonSocial).'cartaIntenci'.str_replace ( ":" , "" ,$hora_actual);
		$nombreDeclaracionImpuesto = str_replace ( " " , "" ,$agregaRasonSocial).'DeclaracionImpuesto'.str_replace ( ":" , "" ,$hora_actual);
		$nombreDeclaracionAduanera = str_replace ( " " , "" ,$agregaRasonSocial).'DeclaracionAduanera'.str_replace ( ":" , "" ,$hora_actual);
		$nombreEmisionDocumentosElectronicos = str_replace ( " " , "" ,$agregaRasonSocial).'EmisionDocumentosElectronicos'.str_replace ( ":" , "" ,$hora_actual);
		$nombreNoAdeudar = str_replace ( " " , "" ,$agregaRasonSocial).'NoAdeudar'.str_replace ( ":" , "" ,$hora_actual);
		$nombreCertificadoCumplimiento = str_replace ( " " , "" ,$agregaRasonSocial).'CertificadoCumplimiento'.str_replace ( ":" , "" ,$hora_actual);

		$nombreMarca= str_replace ( " " , "" ,$marca).'1'.str_replace ( ":" , "" , date("H:i:s")); 
		$nombreTecnologias= str_replace ( " " , "" ,$marca).'2'.str_replace ( ":" , "" , date("H:i:s")); 
		
		/*=====  End of Reenombrar Archivos  ======*/
		
		/*======================================================
		=            Seccion de envio de documentos            =
		======================================================*/
		
		copy($archivotmpNombramiento,"$destinoNombramiento/$nombreNombramiento.pdf");
		copy($archivotmpDocuRuc,"$destinoDocuRuc/$nombreDocumentoRuc.pdf");
		copy($archivotmpCertificadoVigente,"$destinoCertificadoVigente/$nombreCertificadoVigente.pdf");
		copy($archivotmpCartaIntencion,"$destinoCartaIntencion/$nombreCartaIntencion.pdf");
		copy($archivotmpDeclaracionInpuesto,"$destinoDeclaracionInpuesto/$nombreDeclaracionImpuesto.pdf");
		copy($archivotmpDeclaracionAduaneraDeImportacion,"$destinoDeclaracionAduaneraDeImportacion/$nombreDeclaracionAduanera.pdf");
		copy($archivotmpEmisionDocumentosElectronicos,"$destinoEmisionDocumentosElectronicos/$nombreEmisionDocumentosElectronicos.pdf");
		copy($archivotmpNoAdeudarServicio,"$destinoNoAdeudarServicio/$nombreNoAdeudar.pdf");
		copy($archivotmpCertificadoDeCumplimiento,"$destinoCertificadoDeCumplimiento/$nombreCertificadoCumplimiento.pdf");
		copy($archivotmpCertificadoDistribucionAutorizacion,"$destinoCertificadoDistribucionAutorizacion/$nombreMarca.pdf");
		copy($archivotmpGlosarioDeTecnologias,"$destinoGlosarioDeTecnologias/$nombreTecnologias.pdf");
		
		/*=====  End of Seccion de envio de documentos  ======*/
		

		/*=============================================
		=            ingreso de documentos            =
		=============================================*/

		$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_usuario` (`id_Actor`, `ruc`, `actividadEconomica`, `RasonSocial`, `usuario`, `password`, `email`, `telefono`, `celular`, `estadoActor`, `copiaCedula`, `nombramiento`, `docuRuc`, `certificadoVigente`, `cartaIntencion`, `fechaIngresoDocumentos`, `horaIngresoDocumentos`, `cedulaRepresentanteLegal`, `nombreRepresentanteLegar`, `actividadBeneficio`, `declaracionInpuesto`, `declaracionAduaneraDeImportacion`, `emisionDocumentosElectronicos`, `noAdeudarServicio`, `certificadoDeCumplimiento`, `tipoPersona`) VALUES (NULL, '$cedula', '$agregaActividadPrincipal', '$agregaRasonSocial', NULL, NULL, '$agregaEmail', '$agregaTelefono', '$agregaCelular', 'P', NULL, '$nombreNombramiento', '$nombreDocumentoRuc', '$nombreCertificadoVigente', '$nombreCartaIntencion', '$fecha_actual', '$hora_actual', '$cedulaIdentidad', '$nomRepresentanteLegal', '$agregaActividadBeneficio', '$nombreDeclaracionImpuesto', '$nombreDeclaracionAduanera', '$nombreEmisionDocumentosElectronicos', '$nombreNoAdeudar', '$nombreCertificadoCumplimiento', '$tipoPersona');";

		$resultado = $conexionEstablecida->exec($query);

		$query3="SELECT MAX(id_Actor) AS maximos FROM ic_usuario;";
		$resultado3 = $conexionEstablecida->query($query3);

		while($registro3 = $resultado3->fetch()) {

				$maximos=$registro3['maximos'];
				
		}
		
		$query4="INSERT INTO `ezonshar_mdepsaddb`.`ic_usuario_roles`(`id_usuarios_roles`, `id_usuario`, `id_rol`, `estado`) VALUES (NULL, '$maximos', '3', 'A');";

		$resultado4 = $conexionEstablecida->query($query4);


		$query2="INSERT INTO `ezonshar_mdepsaddb`.`ic_documentoadicional` (`id_documentoAdicional`, `nombreMarca`, `documento`, `certificadoMarca`, `id_Actor`, `fecha`, `hora`, `nombreMarcaAdiciona`, `estadoMarca`, `periodoAniosMarca`, `fechaInicioMarca`, `fechaFinMarca`, `bicicleta`, `pelotasTennis`, `cadenasDeRodillos`, `raquetasDeTennis`, `sillines`, `pelotasInflables`, `calzadoDeportivo`, `materialesBeisbol`, `cascosProductos`, `articulosMaterialTenisDeMesa`) VALUES (NULL, '100', '$nombreMarca', '$nombreTecnologias', '$maximos', '$fecha_actual', '$hora_actual', '$marcaAdicioNew', NULL, '$periodoAniosMarca', '$fechaInicioMarca', '$fechaFinMarca', '$bicicleta', '$pelotasTennis', '$cadenasDeRodillos', '$raquetasDeTennis', '$sillines', '$pelotasInflables', '$calzadoDeportivo', '$materialesBeisbol', '$cascosProductos', '$articulosMaterialTenisDeMesa');";

		$resultado2 = $conexionEstablecida->exec($query2);

		/*=====  End of ingreso de documentos  ======*/
		
		if (!empty($nomRepresentanteLegal)) {
			$variableNombres=$nomRepresentanteLegal;
		}else{
			$variableNombres=$agregaRasonSocial;
		}

		/*=======================================
		=            mensaje usuario            =
		=======================================*/
						
		$email=$agregaEmail;

		$from="importaciones@deporte.gob.ec";

		$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com',465,'ssl');

		$transport->setUsername('ministerioDeporte2021@gmail.com');

		$transport->setPassword('flloexddodrdqusj');	
													
		$message = Swift_Message::newInstance();
												
		$message->setTo($email);

		$body='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>ICIDE</title><style type="text/css">body {background:#EEE; padding:30px;}'.'</style>'.'</head>'.'<body><p style="font-size:14px;">'.'Estimado'.' '.$variableNombres.'  </p><p style="font-size:14px;">'.'Los datos han sido enviados para su revisión, en el transcurso de 48 horas recibirá un correo con el estado de su registro., </p></body></html>';

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

		$transport->setUsername('ministeriodeporte2021@gmail.com');

		$transport->setPassword('flloexddodrdqusj');	
													
		$message1 = Swift_Message::newInstance();
												
		$message1->setTo($email1);

		$body1='<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>ICIDE</title><style type="text/css">body {background:#EEE; padding:30px;}'.'</style>'.'</head>'.'<body><p style="font-size:14px;">'.'Estimado'.' '.'SANTIAGO DAVID DEL PINO MURIEL'.'  </p><p style="font-size:14px;">'.'Le ha llegado una solicitud de'.' '.$variableNombres.'  </p></body></html>';

		$message1->setSubject('Notificación Observación');

		$message1->setBody($body1);

		$message1->setContentType('text/html');

		$message1->setFrom(array($from1 => 'IMPORTACION CALZADO E IMPLEMENTOS ESPECIALIZADOS'));

		$mailer1 = Swift_Mailer::newInstance($transport1);

		$mailer1->send($message1);
						
		/*=====  End of mensaje para tecnico  ======*/

		$mensaje=1;
		$jason['mensaje']=$mensaje;

	}

	echo json_encode($jason);