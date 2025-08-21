<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	$conexionEstablecida->exec("set names utf8");

 	extract($_POST);

	$query="SELECT ip.id_producto,(SELECT RasonSocial FROM ic_usuario as us where us.id_Actor = ip.id_importador) as importador ,id_producto,(SELECT nombreItem FROM ic_item as i WHERE i.ic_calzadoImplemento = ip.id_item) as item, descripcionComercial,codigoCalzadoImplemento, id_marca as marca,modelo, (SELECT nombreDisciplina FROM ic_disciplina as d WHERE d.id_disciplina  = ip.id_disciplinaDeportiva) as disciplinaDeportiva, imagen1, tipoIma1, imagen2, tipoIma2, imagen3, tipoIma3, imagen4, tipoIma4, precioPeru, precioColombia, observacion, (SELECT RasonSocial FROM ic_usuario as us where us.id_Actor = ip.id_persona_califica) as personaAprueba, calificacion, fechaAprueba, ip.id_marca, ip.fechaIngresa FROM ic_ingresoproducto as ip where calificacion = 'A' ORDER BY ip.id_producto DESC LIMIT 80000;";


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

