<?php

	require_once "../../conexion/conexion.php";

	extract($_POST);

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	$query="SELECT cuantosCorregir FROM ic_calificacertificado WHERE codigo_importador='$codigoCertificado';";
	$resultado=$conexionEstablecida->query($query);	
	
	while($registro = $resultado->fetch()) {

		$cuantosCorregir=$registro['cuantosCorregir'];

	}

	$jason['cuantosCorregir']=$cuantosCorregir;
	echo json_encode($jason);