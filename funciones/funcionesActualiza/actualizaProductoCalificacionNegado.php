<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');

	if($itemDep=='undefined' || empty($observacionesCalificaProducto)){

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{


	$query15="SELECT fechaIngresa FROM ic_ingresoproducto WHERE id_producto='$idProducto';";
	$resultado15 = $conexionEstablecida->query($query15);

	while($registro15 = $resultado15->fetch()) {
		$fechaIngres__BD=$registro15['fechaIngresa'];
	}		



	$query="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproducto` SET  `calificacion` = 'N', `observacion` = '$observacionesCalificaProducto', `especializado` = '$implemento' , `id_persona_califica` = '$id_ingresoLogin', `fechaAprueba` = '$fecha_actual', `horaAprueba` = '$hora_actual', `fechaIngresa` = '0000-00-00',estado='N' WHERE `id_producto` = '$idProducto';";
	$resultado = $conexionEstablecida->exec($query);


	$query1="INSERT INTO `ezonshar_mdepsaddb`.`ic_ingresoproducto_negado` (`idFechaRechazo`, `id_producto`, `fechaIngresoInicial`, `fecha`, `hora`) VALUES (NULL, $idProducto, '$fechaIngres__BD', '$fecha_actual', '$hora_actual');";
	$resultado2 = $conexionEstablecida->exec($query1);	

	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);

} 