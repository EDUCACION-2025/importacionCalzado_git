<?php

	require_once "../../conexion/conexion.php";

 	function getObtenerRol(){

 		extract($_POST);

		$conexionRecuperada= new conexion();
	 	$conexionEstablecida=$conexionRecuperada->cConexion();

	 	$conexionEstablecida->exec("set names utf8");

	 	$query="SELECT codigo_importador FROM ic_calificacertificado cc WHERE calificaciondeCertificado = 'N' and cc.id_importador = '$importer';";
	 	$resultado=$conexionEstablecida->query($query);


	 	$listas="<option value='0'>--Escoger Código--</option>";

	 	while ($resultado2= $resultado->fetch()) {

	 		$listas.="<option value='".$resultado2["codigo_importador"]."'>".utf8_decode(utf8_encode($resultado2["codigo_importador"]))."</option>";
	 	  

	 	}

	 	return $listas;


 	}

 	echo getObtenerRol();