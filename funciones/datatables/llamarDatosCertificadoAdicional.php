<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	$conexionEstablecida->exec("set names utf8");

 	extract($_POST);

	$query="SELECT ipp.id_producto, calificacion, (SELECT nombreItem from ic_item as i where i.ic_calzadoImplemento = i.id_item) as item, (select codigoCalzado from ic_calzadoeimplemento ci where ci.id_Calzado = i.id_calzadoeimplemento) as codigoArancelario, codigoCalzadoImplemento, cantidadAdicional as cantidad, pesoNetoAdicional as pesoNeto, pesoBrutoAdicional as pesoBruto,valorFOBAdicional as valorUSD,REPLACE(descripcionComercial,',','') AS descripcionComercial,  (SELECT nombreDisciplina FROM ic_disciplina as d WHERE d.id_disciplina  = i.id_disciplinaDeportiva) as id_disciplinaDeportiva, id_marca as marca, modelo, precioFOBAdicional as precioUSD, ipp.PaisOrigen,ipp.PaisProcedencia,ipp.nombreProveedor, ipp.rucProveedor,(SELECT RasonSocial FROM ic_usuario iu where iu.id_Actor = i.id_persona_califica) as productoCalifica FROM ic_ingresoproductoadicional ipp INNER JOIN ic_ingresoproducto i on ipp.id_producto = i.id_producto where id_ingresaInfo = '$recuperaCodigoCertificado' and ipp.codigo_solicitud = '$codigoimportador';";

	

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

