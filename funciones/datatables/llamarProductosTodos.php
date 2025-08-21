<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	$conexionEstablecida->exec("set names utf8");

 	extract($_POST);

	$query="SELECT (SELECT RasonSocial FROM ic_usuario as us where us.id_Actor = ip.id_importador) as importador, id_producto, (SELECT nombreItem FROM ic_item as i WHERE i.ic_calzadoImplemento = ip.id_item) as item, descripcionComercial, codigoCalzadoImplemento, id_marca as marca, modelo, (SELECT nombreDisciplina FROM ic_disciplina as d WHERE d.id_disciplina  = ip.id_disciplinaDeportiva) as disciplinaDeportiva, imagen1, tipoIma1, imagen2, tipoIma2, imagen3, tipoIma3, imagen4, tipoIma4, precioPeru, precioColombia, fechaIngresa, (TIMESTAMPDIFF(DAY, CURDATE(),(ADDDATE(fechaIngresa, INTERVAL 15 DAY)))) as diasFin, genero, grupo_etario , ip.materiales,if(ip.estado IS NULL,'INGRESADO',IF(ip.estado='N','EN SUBSANACIÓN',IF(ip.estado='R','EN POST ANÁLISIS','FINALIZADO'))) AS estadoPrincipal FROM ic_ingresoproducto as ip where calificacion = 'P';";


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

 