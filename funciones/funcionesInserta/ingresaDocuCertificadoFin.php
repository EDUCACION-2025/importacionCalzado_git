<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

 	$query4="SELECT DISTINCT codigo_importador from ic_calificacertificado where codigo_importador = '$codigoParaEmpatar';";
	$resultado4 = $conexionEstablecida->query($query4);

	while($buscarCodigo = $resultado4->fetch()) {
		$codigoRecuperado = $buscarCodigo['codigo_importador'];
	}

	$tipo = $_FILES['documentoCalificaCertificado1']['type']; 
	$archivotmp = $_FILES['documentoCalificaCertificado1']['tmp_name'];
	$destino="../../images/documentosCertificado";
		 
	$tipo2 = $_FILES['documentoCalificaCertificado3']['type']; 
	$archivotmp2 = $_FILES['documentoCalificaCertificado3']['tmp_name'];
	$destino2 ="../../images/documentosCertificado"; 

	$tipo6 = $_FILES['documentoCalificaCertificado7']['type']; 
	$archivotmp6 = $_FILES['documentoCalificaCertificado7']['tmp_name'];
	$destino6 ="../../images/documentosCertificado";

	$tipo7 = $_FILES['certificadoAduanas']['type']; 
	$archivotmp7 = $_FILES['certificadoAduanas']['tmp_name'];
	$destino7 ="../../images/documentosCertificado";

	if(empty($idImportador) || empty($archivotmp) || empty($archivotmp2) || empty($archivotmp6) || empty($codigoParaEmpatar) || empty($archivotmp7)){

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{


		$variable = $codigoRecuperado;
		$variable = (string) $variable;

		$variable1 = $codigoParaEmpatar;
		$variable1 = (string) $variable1;


		if ($variable==$variable1) {
				
				$mensaje=3;
				$jason['mensaje']=$mensaje;
				echo json_encode($jason);
			}else{

				date_default_timezone_set("America/Guayaquil");

				$fecha_actual = date('Y-m-d');

				$hora_actual= date('H:i:s');

				$fecha1 = date('dmY');
				
				$codigo = $codigoParaEmpatar;

				$nombre2 = str_replace ( " " , "" ,$codigo).'declaracionJuramentada';
				$nombre4 = str_replace ( " " , "" ,$codigo).'sri';
				$nombre8 = str_replace ( " " , "" ,$codigo).'iess'; 
				$nombre9 = str_replace ( " " , "" ,$codigo).'senae';


				copy($archivotmp,"$destino/$nombre2.pdf");
				copy($archivotmp2,"$destino2/$nombre4.pdf");
				copy($archivotmp6,"$destino6/$nombre8.pdf");
				copy($archivotmp7,"$destino7/$nombre9.pdf");

				$query1="INSERT INTO `ezonshar_mdepsaddb`.`ic_calificacertificado` (`id_caliCertificado`, `id_importador`, `comex`, `impuestoAlaRenta`, `listasBlancas`, `superAplicable`, `declaracionAduanera`, `SRIdocumentosElectronicos`, `IESScumplimientos`, `senae`, `calificaciondeCertificado`, `observacionCalificaCertificado`, `fechaCalifica`, `horaCalifica`, `codigo_importador`,`fechaSubeDocu`,`HoraSubeDocu`) VALUES (NULL, '$idImportador', '$nombre2', 'N/A', '$nombre4', 'N/A', 'N/A', 'N/A', '$nombre8', '$nombre9', 'P', NULL, NULL, NULL, '$codigo','$fecha_actual','$hora_actual');";
		 	
		 		$resultado2 = $conexionEstablecida->exec($query1);	

		 		$mensaje=1;
				$jason['mensaje']=$mensaje;
				echo json_encode($jason);
			}

		}

	