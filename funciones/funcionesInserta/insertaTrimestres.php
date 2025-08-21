<?php

	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);


	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');

	$mesActual = date('m');

	$mesActual= intval($mesActual); 

	$variablePeriodos="";

	if ($mesActual==1 || $mesActual==2 | $mesActual==3) {
		
		$variablePeriodos="PRIMER PERIODO";

	}else if($mesActual==4 || $mesActual==5 | $mesActual==6){

		$variablePeriodos="SEGUNDO PERIODO";

	}else if($mesActual==7 || $mesActual==8 | $mesActual==9){

		$variablePeriodos="TERCER PERIODO";

	}else if($mesActual==10 || $mesActual==11 | $mesActual==12){

		$variablePeriodos="CUARTO PERIODO";

	}

	$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_trimestral_ingresos` (`idTrimestral`, `fecha`, `periodo`) VALUES (NULL, '$fecha_actual','$variablePeriodos');";
	$resultado = $conexionEstablecida->exec($query);

	$query2="UPDATE ic_ingresoproductoadicional SET columnaIndicacion=NULL,identificadorProducto=NULL;";
	$resultado2 = $conexionEstablecida->exec($query2);

	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);
