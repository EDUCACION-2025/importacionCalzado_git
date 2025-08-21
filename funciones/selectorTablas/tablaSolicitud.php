<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();
	
	$conexionEstablecida->exec("set names utf8");
	extract($_POST);

	$data1=array();
	$data2=array();
	$data3=array();
	$data4=array(); 
	$data5=array();
	$data6=array();
	$data7=array();
	$data8=array();
	$data9=array();
	$data10=array();

	$query="SELECT id_producto, calificacion, codigoCalzadoImplemento, id_marca as marca, (SELECT nombreItem from ic_item as i where i.ic_calzadoImplemento = ip.id_item) as item, (select codigoCalzado from ic_calzadoeimplemento ci where ci.id_Calzado = ip.id_calzadoeimplemento) as codigoArancelario, (select descripcionCalzado from ic_calzadoeimplemento ci where ci.id_Calzado = ip.id_calzadoeimplemento) as descripcionArancelario,descripcionComercial, modelo, (SELECT nombreDisciplina FROM ic_disciplina as d WHERE d.id_disciplina  = ip.id_disciplinaDeportiva) as disciplinaDeportiva, precioPeru, precioColombia FROM ic_ingresoproducto as ip where id_importador = '$idImportador' and checkCalificacion = 'A' AND cantidad IS NULL;";
	$resultado = $conexionEstablecida->query($query);

	while($registro = $resultado->fetch()) {

		$id_producto=$registro['id_producto'];
		array_push($data1, $id_producto);

		$item=$registro['item'];
		array_push($data4, $item);

		$codigoArancelario=$registro['codigoArancelario'];
		array_push($data8, $codigoArancelario);

		$codigoCalzadoImplemento=$registro['codigoCalzadoImplemento'];
		array_push($data2, $codigoCalzadoImplemento);

		$descripcionComercial=$registro['descripcionComercial'];
		array_push($data6, $descripcionComercial);
 
		$disciplinaDeportiva=$registro['disciplinaDeportiva'];
		array_push($data5, $disciplinaDeportiva);

		$marca=$registro['marca'];
		array_push($data3, $marca);

		$modelo=$registro['modelo'];
		array_push($data7, $modelo);

		// $precioColombia=$registro['precioColombia'];
		// array_push($data9, $precioColombia);

		// $precioPeru=$registro['precioPeru'];
		// array_push($data10, $precioPeru);
				

	}

	$stringId_producto =  implode("------", $data1);
	$stringItem = implode("------", $data4);
	$stringcodigoArancelario = implode("------", $data8);
	$stringCodigoCalzadoImplemento = implode("------", $data2);
	$stringDescripcionComercial = implode("------", $data6);
	$stringDisciplinaDeportiva = implode("------", $data5);
	$stringMarca = implode("------", $data3);
	$stringModelo = implode("------", $data7);
	// $stringPreColom = implode("------", $data9);
	// $stringPrePeru = implode("------", $data10);


	$jason['stringId_producto']=$stringId_producto;
	$jason['stringCodigoCalzadoImplemento']=$stringCodigoCalzadoImplemento;
	$jason['stringMarca']=$stringMarca;
	$jason['stringItem']=$stringItem;
	$jason['stringDisciplinaDeportiva']=$stringDisciplinaDeportiva;
	$jason['stringDescripcionComercial']=$stringDescripcionComercial;
	$jason['stringModelo']=$stringModelo;
	$jason['stringcodigoArancelario']=$stringcodigoArancelario;
	// $jason['stringPreColom']=$stringPreColom;
	// $jason['stringPrePeru']=$stringPrePeru;

	echo json_encode($jason);
