<?php

	require_once "../../conexion/conexion.php";

 	function getObtenerRol(){

 		extract($_POST);

		$conexionRecuperada= new conexion();
	 	$conexionEstablecida=$conexionRecuperada->cConexion();

	 	$conexionEstablecida->exec("set names utf8");

	 	$query="SELECT id_marca, nombreMarca, estado from ic_marca;";
	 	$resultado=$conexionEstablecida->query($query);


	 	$listas="<option value='0'>--Elige Marca--</option>";

	 	while ($resultado2= $resultado->fetch()) {
	 	
	 		$listas.="<option value='"."'idRecuperado='".$resultado2["id_marca"]."' idRecodigo='".$resultado2["nombreMarca"]."'>".utf8_decode(utf8_encode($resultado2["nombreMarca"]))."</option>";
	 	  

	 	}

	 	return $listas;


 	}

 	echo getObtenerRol();