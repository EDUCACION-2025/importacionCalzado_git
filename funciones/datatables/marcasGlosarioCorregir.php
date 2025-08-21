<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	$conexionEstablecida->exec("set names utf8");

 	extract($_POST);

	$query="SELECT  id_documentoAdicional,fecha,(SELECT RasonSocial FROM ic_usuario as us where us.id_Actor = da.id_Actor) as importador, documento, certificadoMarca, CASE WHEN nombreMarcaAdiciona = '' or nombreMarcaAdiciona is null THEN (SELECT nombreMarca FROM ic_marca where id_marca = da.nombreMarca) ELSE nombreMarcaAdiciona END nombreMarcaAdiciona, Observacion FROM ic_documentoadicional da WHERE id_Actor = '$idImportador' and estadoMarca = 'I';";


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

