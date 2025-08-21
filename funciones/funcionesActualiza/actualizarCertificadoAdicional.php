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


 	$fecha1 = date('dmY');

 	$codigo = $codioRecupera;


	for($i=0;$i<$contador;$i++){

 		$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_ingresoproductoadicional` (`id_productosnuevoIngreso`, `cantidadAdicional`, `pesoNetoAdicional`, `pesoBrutoAdicional`, `valorFOBAdicional`, `precioFOBAdicional`, `paisOrigen`, `paisProcedencia`, `nombreProveedor`, `rucProveedor`, `id_producto`, `fechaAdd`, `horaAdd`, `id_ingresaInfo`,`estadoProducto`,`codigo_solicitud`,`caliInSolicitud`) VALUES (NULL, '$arrayCantidad[$i]', '$arrayPesoNeet[$i]', '$arrayPesoBrut[$i]', '$arrayValorfob[$i]', '$arrayPreciofu[$i]', '$arrayPaisOrig[$i]', '$arrayPaisProc[$i]', '$arrayProveeNo[$i]', '$arrayProveeRu[$i]', '$arrayidProduc[$i]', '$fecha_actual', '$hora_actual', '$idImportador1', 'A', '$codigo','P');";

	    $resultado1 = $conexionEstablecida->exec($query);

		$query1="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproducto` SET  `masProductos` = NULL WHERE `id_producto` = '$arrayidProduc[$i]';";

		$resultado2 = $conexionEstablecida->exec($query1);
	
	}

	$query3="UPDATE ic_ingresoproductoadicional  SET estadoProducto='A', codigo_solicitud='$codigo', caliInSolicitud='P' WHERE id_ingresaInfo='$idImportador1' AND estadoProducto='C' AND caliInSolicitud='C';";

	$resultado3 = $conexionEstablecida->exec($query3);	

	$query4="UPDATE ic_ingresoproducto SET productoadiciones=NULL,masProductos=NULL WHERE id_importador='$idImportador1' AND productoadiciones='A';";

	$resultado4 = $conexionEstablecida->exec($query4);	

	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);


