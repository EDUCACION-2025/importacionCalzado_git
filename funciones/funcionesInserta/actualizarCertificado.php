<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();
 
 	extract($_POST);

 	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');

	$hora_actual= date('H:i:s');

 	$arrayCantidad = explode(",", $stringClacantidad);
 	$arrayPesoNeet = explode(",", $stringClapesoNeto);
 	$arrayPesoBrut = explode(",", $stringClaperoBrto);
 	$arrayValorfob = explode(",", $stringClavalorfob);
 	$arrayPreciofu = explode(",", $stringClapreciofb);
 	$arrayPaisOrig = explode(",", $stringClapaisOrig);
 	$arrayPaisProc = explode(",", $stringClapaisProc);
 	$arrayProveeNo = explode(",", $stringClaproveRaz);
 	$arrayProveeRu = explode(",", $stringClaproveRuc);
 	$arrayidProduc = explode(",", $stringidProductoo);
 	$contador=count($arrayCantidad);

// echo $contador;

 	if(empty($contador) || empty($arrayCantidad) || empty($arrayPesoNeet) || empty($arrayPesoBrut) || empty($arrayValorfob) || empty($arrayPreciofu) || empty($arrayPaisOrig) || empty($arrayPaisProc) || empty($arrayProveeNo) || empty($arrayProveeRu) || empty($arrayidProduc)){

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

 	$fecha1 = date('dmY');

 	$codigo = $codioRecupera;

	// echo $codigo;

		for($i=0;$i<$contador;$i++){

 			$query="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproducto` SET `cantidad` = '$arrayCantidad[$i]', `pesoNeto` = '$arrayPesoNeet[$i]', `pesoBruto` = '$arrayPesoBrut[$i]', `valorUSD` = '$arrayValorfob[$i]',  `precioUSD` = '$arrayPreciofu[$i]', `PaisOrigen` = '$arrayPaisOrig[$i]', `PaisProcedencia` = '$arrayPaisProc[$i]', rucProveedor = '$arrayProveeRu[$i]', nombreProveedor = '$arrayProveeNo[$i]', `fechaInSolicitud` = '$fecha_actual', `horaInSolicitud` = '$hora_actual', `caliInSolicitud`='P', `codigo_solicitud` = '$codigo'   WHERE `id_producto` = '$arrayidProduc[$i]';";

		 	$resultado1 = $conexionEstablecida->exec($query);
	

		}

		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);


	}


 	

	