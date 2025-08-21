<?php

	require_once "../../conexion/conexion.php";

 		extract($_POST);

		$conexionRecuperada= new conexion();
	 	$conexionEstablecida=$conexionRecuperada->cConexion();

	 	$conexionEstablecida->exec("set names utf8");

	 	$query="SELECT codigoCalzadoImplemento FROM ic_ingresoproducto where codigoCalzadoImplemento = '$codigoCalzado' AND id_importador='$idImportador';";
	 	$resultado=$conexionEstablecida->query($query);


		while($registro = $resultado->fetch()) {

			$codigoCalzadoImplemento=$registro['codigoCalzadoImplemento'];
				
		}

		$jason['codigoCalzadoImplemento']=$codigoCalzadoImplemento;
		echo json_encode($jason);

