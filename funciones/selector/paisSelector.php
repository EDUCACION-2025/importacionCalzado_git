<?php

	require_once "../../conexion/conexion.php";

 	function getObtener(){

 		extract($_POST);

		$conexionRecuperada= new conexion();
	 	$conexionEstablecida=$conexionRecuperada->cConexion();

	 	// $conexionEstablecida->exec("set names utf8");


	 	$query="SELECT id,paisnombre FROM poa_pais ORDER BY paisnombre ASC;";
	 	$resultado = $conexionEstablecida->query($query);


	 	$listas="<option value=''>--Elige un país--</option>";

	 	while ($resultado2=$resultado->fetch()) {
	 	
	 		$listas.="<option value='".$resultado2["paisnombre"]."'>".$resultado2["paisnombre"]."</option>";

	 	}

	 	return $listas;


 	}

 	echo getObtener();