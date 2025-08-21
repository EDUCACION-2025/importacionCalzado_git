<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();
 	
 	extract($_POST);

 	$query="SELECT id_item, id_calzadoeimplemento, cantidad, pesoNeto, pesoBruto, valorUSD, descripcionComercial, disciplinaDeportiva, marca, modelo, codigoCalzadoImplemento, precioUSD, imagen1,tipoIma1, imagen2,tipoIma2, imagen3,tipoIma3, imagen4,tipoIma4 FROM ic_ingresoproducto WHERE id_item = '$selectItem1' and id_calzadoeimplemento = (select id_Calzado from ic_calzadoeimplemento where codigoCalzado = '$CodArancelario');";


	$resultado = $conexionEstablecida->query($query);

	while($registro = $resultado->fetch()) {

		$marca=$registro['marca'];
		$modelo=$registro['modelo'];
	}

	if (empty($marca)) {

		$mensaje=2;
		$jason['mensaje']=$mensaje;

	}else{

		$mensaje=1;
		$jason['mensaje']=$mensaje;
		$jason['marca']=$marca;
		$jason['modelo']=$modelo;

	}

	echo json_encode($jason);