<?php

	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);


		date_default_timezone_set("America/Guayaquil");

		$fecha_actual = date('Y-m-d H:i:s');
		$hora_actual= date('H:i:s');


	if (empty($usuarioEnviado) || $disponiblidadPagina=='undefined' || $facilidadNavegacion=='undefined' || $actualizacionInformacion=='undefined' || $claridadPresicion=='undefined' || $facilidadPagina=='undefined') {
		
		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{


		$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_encuestas_satisfaccion`(`idEncuestaSatisfaccion`, `disponibilidad`, `facilidad`, `actualizacion`, `claridad`, `facilidadWeb`, `id_usuario`, `fecha`, `hora`) VALUES (NULL, '$disponiblidadPagina', '$facilidadNavegacion', '$actualizacionInformacion', '$claridadPresicion', '$facilidadPagina', '$usuarioEnviado','$fecha_actual','$hora_actual');";
		
		//echo $query;

		$resultado = $conexionEstablecida->exec($query);

		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);
	}
