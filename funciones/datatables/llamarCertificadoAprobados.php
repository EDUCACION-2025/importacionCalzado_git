<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	// $conexionEstablecida->exec("set names utf8");

 	extract($_POST);

	$query="SELECT DISTINCT(codigo_solicitud), (SELECT ruc FROM ic_usuario WHERE id_Actor = id_importador) as nombreEmpresa,(SELECT RasonSocial FROM ic_usuario WHERE id_Actor = id_importador) as nombreEmpresa1, id_importador AS id_ingresaInfo FROM ic_ingresoproducto WHERE checkCalificacion = 'A' and caliInSolicitud = 'P' and codigo_solicitud != '' and id_importador = '$codigodeUsuario' UNION SELECT DISTINCT(codigo_solicitud), (SELECT ruc FROM ic_usuario WHERE id_Actor = id_ingresaInfo) as nombreEmpresa,(SELECT RasonSocial FROM ic_usuario WHERE id_Actor = id_ingresaInfo) as nombreEmpresa1, id_ingresaInfo as id_importador FROM ic_ingresoproductoadicional WHERE id_ingresaInfo = '$codigodeUsuario' and  codigo_solicitud != '' and caliInSolicitud = 'P';";


// echo($query);

	$resultado = $conexionEstablecida->query($query);

	if (!$resultado) {
		echo "error";
	}else{ 
		$arreglo=array();
		while($data=$resultado->fetch()){
			$arreglo["data"][]=$data;
		}
		echo json_encode($arreglo);
	}

 