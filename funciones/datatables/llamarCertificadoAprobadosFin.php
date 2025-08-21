<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	// $conexionEstablecida->exec("set names utf8");

 	extract($_POST);

	$query="(SELECT DISTINCT(codigo_solicitud)as codigo_importador,(SELECT ruc FROM ic_usuario WHERE id_Actor = id_ingresaInfo) as nombreEmpresa, id_ingresaInfo as id_importador,(SELECT RasonSocial FROM ic_usuario where id_Actor = id_calificacionFinalFirmas) as id_calificacionFinalFirmas, (SELECT RasonSocial FROM ic_usuario u WHERE u.id_Actor = id_ingresaInfo) as nombreImporta,c.fechaSubeDocu FROM ic_ingresoproductoadicional  ia INNER JOIN ic_calificacertificado c ON  c.id_importador = id_ingresaInfo and c.codigo_importador = ia.codigo_solicitud WHERE caliInSolicitud = 'A' and codigo_solicitud != '' AND id_calificacionFinalFirmas is null AND calificaciondeCertificado!='N')UNION (SELECT DISTINCT(codigo_solicitud)as codigo_importador,(SELECT ruc FROM ic_usuario WHERE id_Actor = ia.id_importador) as nombreEmpresa, ia.id_importador, (SELECT RasonSocial FROM ic_usuario where id_Actor = id_calificacionFinalFirmas) as id_calificacionFinalFirmas, (SELECT RasonSocial FROM ic_usuario u WHERE u.id_Actor = ia.id_importador) as nombreImporta,c.fechaSubeDocu from ic_ingresoproducto ia INNER JOIN ic_calificacertificado c ON  c.id_importador = ia.id_importador and c.codigo_importador = ia.codigo_solicitud WHERE checkCalificacion = 'A' and caliInSolicitud = 'A' and codigo_solicitud != '' AND id_calificacionFinalFirmas is null AND calificaciondeCertificado!='N');";



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

