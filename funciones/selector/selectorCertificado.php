<?php

	require_once "../../conexion/conexion.php";

 	function getObtenerRol(){

 		extract($_POST);

		$conexionRecuperada= new conexion();
	 	$conexionEstablecida=$conexionRecuperada->cConexion();

	 	$conexionEstablecida->exec("set names utf8");

	 	$query="SELECT DISTINCT(codigo_solicitud), id_importador AS id_ingresaInfo FROM ic_ingresoproducto WHERE checkCalificacion = 'A' and caliInSolicitud = 'P' and codigo_solicitud != '' and id_importador = '$importer' UNION SELECT DISTINCT(codigo_solicitud), id_ingresaInfo as id_importador FROM ic_ingresoproductoadicional WHERE id_ingresaInfo = '$importer' and  codigo_solicitud != '' and caliInSolicitud = 'P'  AND NOT EXISTS (SELECT NULL FROM ic_calificacertificado AS t1 WHERE ic_ingresoproductoadicional.codigo_solicitud=t1.codigo_importador);";
	 	$resultado=$conexionEstablecida->query($query);


	 	$listas="<option value='0'>--Seleccione el Certificado--</option>";

	 	while ($resultado2= $resultado->fetch()) {

	 		$listas.="<option value='".$resultado2["codigo_solicitud"]."'>".utf8_decode(utf8_encode($resultado2["codigo_solicitud"]))."</option>";
	 	  

	 	}

	 	return $listas;


 	}

 	echo getObtenerRol();