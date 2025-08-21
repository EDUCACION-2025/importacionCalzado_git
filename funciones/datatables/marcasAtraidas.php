<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	// $conexionEstablecida->exec("set names utf8");

 	extract($_POST);

	$query="SELECT fecha, fechaAprueba, (SELECT RasonSocial FROM ic_usuario as us where us.id_Actor = da.id_Actor) as importador, (SELECT ruc FROM ic_usuario as us where us.id_Actor = da.id_Actor) as ruc, IF(estadoMarca='A', 'APROBADO', 'NEGADO') AS estado, (SELECT RasonSocial FROM ic_usuario as us where us.id_Actor = da.id_aprueba) as responsable, observacion, id_documentoAdicional, documento, certificadoMarca, CASE WHEN nombreMarcaAdiciona = '' or nombreMarcaAdiciona is null THEN (SELECT nombreMarca FROM ic_marca where id_marca = da.nombreMarca) ELSE nombreMarcaAdiciona END nombreMarcaAdiciona,periodoAniosMarca,fechaInicioMarca,fechaFinMarca FROM ic_documentoadicional da WHERE estadoMarca is not null;";


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

