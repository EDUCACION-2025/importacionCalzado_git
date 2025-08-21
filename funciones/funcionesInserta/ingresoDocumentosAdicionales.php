<?php

	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

	$tipo4 = $_FILES['docuAdiocio1']['type']; 
	$archivotmp4 = $_FILES['docuAdiocio1']['tmp_name'];
	$destino4="../../images/imagenesCatalogo";

	$tipo5 = $_FILES['docuGlosario']['type']; 
	$archivotmp5 = $_FILES['docuGlosario']['tmp_name'];
	$destino5="../../images/imagenesCatalogo";	


	if (empty($marcaAdicioNew) || empty($archivotmp4) || empty($archivotmp5) || empty($periodoAniosMarca) || empty($fechaInicioMarca) || empty($fechaFinMarca)) {
		
		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

		date_default_timezone_set("America/Guayaquil");

		$fecha_actual = date('Y-m-d');
		$hora_actual= date('H:i:s');

			
		$FOTO1= str_replace ( " " , "" ,'100').'1'.str_replace ( ":" , "" , date("H:i:s")); 
		$FOTO2= str_replace ( " " , "" ,'100').'2'.str_replace ( ":" , "" , date("H:i:s")); 

		copy($archivotmp4,"$destino4/$FOTO1.pdf");
		copy($archivotmp5,"$destino5/$FOTO2.pdf");
	
		$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_documentoadicional`(`id_documentoAdicional`, `nombreMarca`, `documento`,`certificadoMarca`, `id_Actor`, `fecha`, `hora`,`nombreMarcaAdiciona`, `periodoAniosMarca`, `fechaInicioMarca`, `fechaFinMarca`) VALUES (NULL, '100', '$FOTO1','$FOTO2', '$idImportador', '$fecha_actual', '$hora_actual','$marcaAdicioNew','$periodoAniosMarca','$fechaInicioMarca','$fechaFinMarca');";
		$resultado = $conexionEstablecida->exec($query);

		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}