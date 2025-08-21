<?php

	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');


	$arrayCodigosCertificados = explode(",", $stringCodigosCertificados);


	for ($i=0; $i < $contadorDocumentos; $i++) { 
		
		$nombreFiles='archivosCorregidos'.$i;

		$tipo = $_FILES[$nombreFiles]['type']; 
		$archivotmp = $_FILES[$nombreFiles]['tmp_name'];
		$destino="../../images/documentosCertificado";
		
		if ($arrayCodigosCertificados[$i]=='1') {
		
			$nombre = str_replace (" ","",$codigoCertificado).'comex';
			copy($archivotmp,"$destino/$nombre.pdf");

			$query="UPDATE `ezonshar_mdepsaddb`.`ic_calificacertificado` SET  `comex` = '$nombre', `calificaciondeCertificado` = 'P', fechaSubeDocu='$fecha_actual', HoraSubeDocu='$hora_actual' WHERE codigo_importador = '$codigoCertificado';";
			$resultado = $conexionEstablecida->exec($query);		

		}


		if ($arrayCodigosCertificados[$i]=='3'){
			
			$nombre = str_replace ( " " , "" ,$codigoCertificado).'listasBlancas';
		
			copy($archivotmp,"$destino/$nombre.pdf");

			$query="UPDATE `ezonshar_mdepsaddb`.`ic_calificacertificado` SET  `listasBlancas` = '$nombre', `calificaciondeCertificado` = 'P', fechaSubeDocu='$fecha_actual', HoraSubeDocu='$hora_actual' WHERE codigo_importador = '$codigoCertificado';";
			$resultado = $conexionEstablecida->exec($query);

		}

		if ($arrayCodigosCertificados[$i]=='7'){
			
			$nombre = str_replace ( " " , "" ,$codigoCertificado).'IESScumplimientos';
		
			copy($archivotmp,"$destino/$nombre.pdf");

			$query="UPDATE `ezonshar_mdepsaddb`.`ic_calificacertificado` SET  `IESScumplimientos` = '$nombre', `calificaciondeCertificado` = 'P', fechaSubeDocu='$fecha_actual', HoraSubeDocu='$hora_actual' WHERE codigo_importador = '$codigoCertificado';";
			$resultado = $conexionEstablecida->exec($query);

		}

		if ($arrayCodigosCertificados[$i]=='8'){
			
			$nombre = str_replace ( " " , "" ,$codigoCertificado).'senae';
		
			copy($archivotmp,"$destino/$nombre.pdf");


			$query="UPDATE `ezonshar_mdepsaddb`.`ic_calificacertificado` SET  `senae` = '$nombre', `calificaciondeCertificado` = 'P', fechaSubeDocu='$fecha_actual', HoraSubeDocu='$hora_actual' WHERE codigo_importador = '$codigoCertificado';";
			$resultado = $conexionEstablecida->exec($query);

		}

	}


	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);


