<?php

	require_once "../../conexion/conexion.php";

 	function getObtenerItem(){

 		extract($_POST);

		$conexionRecuperada= new conexion();
	 	$conexionEstablecida=$conexionRecuperada->cConexion();

	 	$query="SELECT id_Calzado,CONCAT(codigoCalzado,' ',descripcionCalzado) AS codigoCalzado, uf, tarifaArancelaria, estadoCalzado FROM ic_calzadoeimplemento WHERE id_Item = '$ItemId'";
	 	$resultado=$conexionEstablecida->query($query);


	 	$listas="<option value='0'>--Elige un Codigo Arancelario--</option>";

	 	while ($resultado2= $resultado->fetch())  {

	 		if ($resultado2["estadoCalzado"]=="I") {
	 			
	 			$listas.="<option value='".$resultado2["id_Calzado"]."' idRecuperado='".$resultado2["codigoCalzado"]."' disabled='disabled'>".utf8_decode(utf8_encode($resultado2["codigoCalzado"]))."</option>";

	 		}else{

	 			$listas.="<option value='".$resultado2["id_Calzado"]."' idRecuperado='".$resultado2["codigoCalzado"]."'>".utf8_decode(utf8_encode($resultado2["codigoCalzado"]))."</option>";	

	 		}
	 	
	 		

	 	}

	 	return $listas;


 	}

 	echo getObtenerItem();