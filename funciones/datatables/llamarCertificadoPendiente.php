<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	// $conexionEstablecida->exec("set names utf8");

 	extract($_POST);

	$query="SELECT cc.id_caliCertificado as id_certi,fechaSubeDocu,(SELECT RasonSocial FROM ic_usuario as us where us.id_Actor = cc.id_importador) as importador, (SELECT email FROM ic_usuario as us where us.id_Actor = cc.id_importador) as mailImportador,(SELECT ruc FROM ic_usuario as us where us.id_Actor = cc.id_importador) as ruc , comex, impuestoAlaRenta, listasBlancas, superAplicable, declaracionAduanera, SRIdocumentosElectronicos, IESScumplimientos, senae, codigo_importador FROM ic_calificacertificado cc WHERE calificaciondeCertificado = 'P';";


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

