<?php

	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	if (empty($cedulaBuscada)) {
		
		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

		$tipo2 = $_FILES['documento1']['type']; 
		$archivotmp2 = $_FILES['documento1']['tmp_name'];
		$destino2="../../images/imagenesDocumentos";
 

		date_default_timezone_set("America/Guayaquil");

		$fecha_actual = date('Y-m-d');
		$hora_actual= date('H:i:s');
			
		if($selectTipoDocumento == '1'){

			$nombre2 = str_replace ( " " , "" ,$cedulaBuscada).'documentoRuc'.str_replace ( ":" , "" ,$hora_actual);

			$query3="UPDATE `ezonshar_mdepsaddb`.`ic_usuario` SET   `docuRuc` = '$nombre2', `estadoActor` = 'P'  WHERE `id_Actor` = '$cedulaBuscada';";
			$resultado3 = $conexionEstablecida->query($query3);

			copy($archivotmp2,"$destino2/$nombre2.pdf");

			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}else if($selectTipoDocumento == '2'){

			$nombre2 = str_replace ( " " , "" ,$cedulaBuscada).'certificadoV'.str_replace ( ":" , "" ,$hora_actual);

			$query3="UPDATE `ezonshar_mdepsaddb`.`ic_usuario` SET   `certificadoVigente` = '$nombre2', `estadoActor` = 'P'  WHERE `id_Actor` = '$cedulaBuscada';";
			$resultado3 = $conexionEstablecida->query($query3);

			copy($archivotmp2,"$destino2/$nombre2.pdf");


			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}else if($selectTipoDocumento == '3'){

			$nombre2 = str_replace ( " " , "" ,$cedulaBuscada).'cartaIntenci'.str_replace ( ":" , "" ,$hora_actual);

			$query3="UPDATE `ezonshar_mdepsaddb`.`ic_usuario` SET   `cartaIntencion` = '$nombre2', `estadoActor` = 'P'  WHERE `id_Actor` = '$cedulaBuscada';";
			$resultado3 = $conexionEstablecida->query($query3);

			copy($archivotmp2,"$destino2/$nombre2.pdf");

			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}else if($selectTipoDocumento == '4'){

			$nombre2 = str_replace ( " " , "" ,$cedulaBuscada).'NoAdeudar'.str_replace ( ":" , "" ,$hora_actual);

			$query3="UPDATE `ezonshar_mdepsaddb`.`ic_usuario` SET   `noAdeudarServicio` = '$nombre2', `estadoActor` = 'P'  WHERE `id_Actor` = '$cedulaBuscada';";
			$resultado3 = $conexionEstablecida->query($query3);

			copy($archivotmp2,"$destino2/$nombre2.pdf");

			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}else if($selectTipoDocumento == '5'){

			$nombre2 = str_replace ( " " , "" ,$cedulaBuscada).'DeclaracionImpuesto'.str_replace ( ":" , "" ,$hora_actual);

			$query3="UPDATE `ezonshar_mdepsaddb`.`ic_usuario` SET   `declaracionInpuesto` = '$nombre2', `estadoActor` = 'P'  WHERE `id_Actor` = '$cedulaBuscada';";
			$resultado3 = $conexionEstablecida->query($query3);

			copy($archivotmp2,"$destino2/$nombre2.pdf");

			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}else if($selectTipoDocumento == '6'){

			$nombre2 = str_replace ( " " , "" ,$cedulaBuscada).'DeclaracionAduanera'.str_replace ( ":" , "" ,$hora_actual);

			$query3="UPDATE `ezonshar_mdepsaddb`.`ic_usuario` SET   `declaracionAduaneraDeImportacion` = '$nombre2', `estadoActor` = 'P'  WHERE `id_Actor` = '$cedulaBuscada';";
			$resultado3 = $conexionEstablecida->query($query3);

			copy($archivotmp2,"$destino2/$nombre2.pdf");

			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}else if($selectTipoDocumento == '7'){

			$nombre2 = str_replace ( " " , "" ,$cedulaBuscada).'EmisionDocumentosElectronicos'.str_replace ( ":" , "" ,$hora_actual);

			$query3="UPDATE `ezonshar_mdepsaddb`.`ic_usuario` SET   `emisionDocumentosElectronicos` = '$nombre2', `estadoActor` = 'P'  WHERE `id_Actor` = '$cedulaBuscada';";
			$resultado3 = $conexionEstablecida->query($query3);

			copy($archivotmp2,"$destino2/$nombre2.pdf");

			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);


		}else if($selectTipoDocumento == '8'){

			$nombre2 = str_replace ( " " , "" ,$cedulaBuscada).'CertificadoCumplimiento'.str_replace ( ":" , "" ,$hora_actual);

			$query3="UPDATE `ezonshar_mdepsaddb`.`ic_usuario` SET   `certificadoDeCumplimiento` = '$nombre2', `estadoActor` = 'P'  WHERE `id_Actor` = '$cedulaBuscada';";
			$resultado3 = $conexionEstablecida->query($query3);

			copy($archivotmp2,"$destino2/$nombre2.pdf");

			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}else{

			$mensaje=2;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);
		}
						
		


	}
