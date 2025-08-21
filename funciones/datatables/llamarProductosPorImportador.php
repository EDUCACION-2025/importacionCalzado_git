<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	$conexionEstablecida->exec("set names utf8");

 	extract($_POST);

	$query="SELECT id_producto, calificacion, codigoCalzadoImplemento, ip.id_marca as marca, id_item,id_calzadoeimplemento,  (SELECT nombreItem from ic_item as i where i.ic_calzadoImplemento = ip.id_item) as item, (select codigoCalzado from ic_calzadoeimplemento ci where ci.id_Calzado = ip.id_calzadoeimplemento) as codigoArancelario, (select descripcionCalzado from ic_calzadoeimplemento ci where ci.id_Calzado = ip.id_calzadoeimplemento) as descripcionArancelario,descripcionComercial, fechaIngresa AS fechaInSolicitud,modelo, (SELECT nombreDisciplina FROM ic_disciplina as d WHERE d.id_disciplina  = ip.id_disciplinaDeportiva) as disciplinaDeportiva,id_disciplinaDeportiva, imagen1, tipoIma1, imagen2, tipoIma2, imagen3, tipoIma3, imagen4, tipoIma4, precioPeru, precioColombia, observacion,genero,grupo_etario,ip.materiales FROM ic_ingresoproducto as ip where id_importador = '$idImportador'  and (checkCalificacion IS NULL or checkCalificacion = '') and calificacion != 'A';";


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

