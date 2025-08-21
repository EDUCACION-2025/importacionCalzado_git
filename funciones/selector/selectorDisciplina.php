<?php

	require_once "../../conexion/conexion.php";

 	function getObtenerRol(){

 		extract($_POST);

		$conexionRecuperada= new conexion();
	 	$conexionEstablecida=$conexionRecuperada->cConexion();

	 	$conexionEstablecida->exec("set names utf8");

	 	$query="SELECT id_disciplina, nombredisciplina, estado from ic_disciplina;";
	 	$resultado=$conexionEstablecida->query($query);


	 	$listas="<option value='0'>--Elige Disciplina--</option>";

	 	while ($resultado2= $resultado->fetch()) {
	 	
	 		$listas.="<option value='".$resultado2["id_disciplina"]."'>".utf8_decode(utf8_encode($resultado2["nombredisciplina"]))."</option>";

	 	}

	 	return $listas;


 	}

 	echo getObtenerRol();