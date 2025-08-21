<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	// $conexionEstablecida->exec("set names utf8");

 	extract($_POST);

	$query="SELECT DISTINCT(codigoGenera) as codigoGenera, (SELECT ruc FROM ic_usuario WHERE id_Actor = id_importador) as ruc, (SELECT RasonSocial FROM ic_usuario WHERE id_Actor = id_importador) as nombreEmpresa, documentoCertificado,  (SELECT RasonSocial FROM ic_usuario WHERE id_Actor = id_calificaUsuario) as calificaCertificado, (SELECT fechaSubeDocu FROM ic_calificacertificado WHERE codigoGenera = codigo_importador GROUP BY codigoGenera) as fechaEmision, fechaAprueba FROM ic_emisioncertificado  GROUP BY codigoGenera;";


// echo($query);

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

 