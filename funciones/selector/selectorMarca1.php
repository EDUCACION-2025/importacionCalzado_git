<?php

	require_once "../../conexion/conexion.php";

 	function getObtenerRol(){

 		extract($_POST);

		$conexionRecuperada= new conexion();
	 	$conexionEstablecida=$conexionRecuperada->cConexion();

	 	$conexionEstablecida->exec("set names utf8");

	 	$query="SELECT id_documentoAdicional,nombreMarca,(CASE WHEN da.nombreMarca = '100' THEN da.nombreMarcaAdiciona ELSE (SELECT nombreMarca FROM ic_marca m WHERE m.id_marca = da.nombreMarca) END) as marca from ic_documentoadicional da where id_Actor = '$ItemId12' and estadoMarca = 'A' ORDER BY nombreMarcaAdiciona asc;";
	 	$resultado=$conexionEstablecida->query($query);


	 	$listas="<option value='0'>--Elige Marca--</option>";

	 	while ($resultado2= $resultado->fetch()) {
	 	
	 		$listas.="<option value='"."'idRecuperado='".$resultado2["id_documentoAdicional"]."' idRecodigo='".$resultado2["marca"]."'>".utf8_decode(utf8_encode($resultado2["marca"]))."</option>";
	 	  

	 	}

	 	return $listas;


 	}

 	echo getObtenerRol();