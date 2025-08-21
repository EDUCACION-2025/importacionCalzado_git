<?php

	require_once "../../conexion/conexion.php";

 	function getObtenerRol(){

 		extract($_POST);

		$conexionRecuperada= new conexion();
	 	$conexionEstablecida=$conexionRecuperada->cConexion();

	 	$conexionEstablecida->exec("set names utf8");

	 	$query="SELECT ic_calzadoImplemento, nombreItem, estadoItem FROM ic_item ORDER BY nombreItem asc;";
	 	$resultado=$conexionEstablecida->query($query);


	 	$listas="<option value='0'>--Elige un Item--</option>";

	 	while ($resultado2= $resultado->fetch()) {
	 	
	 		$listas.="<option value='".$resultado2["ic_calzadoImplemento"]."'>".utf8_decode(utf8_encode($resultado2["nombreItem"]))."</option>";

	 	}

	 	return $listas;


 	}

 	echo getObtenerRol();