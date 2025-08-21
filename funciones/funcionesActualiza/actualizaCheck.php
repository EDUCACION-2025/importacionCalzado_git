<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

 	$idCatalogoAbsorvidoArray = explode(",", $idCatalogoAbsorvido);


 	$contador=count($idCatalogoAbsorvidoArray);

 	
 	for($i=0;$i<$contador;$i++){

 	$query="UPDATE ic_ingresoproducto set checkCalificacion = 'A'  WHERE id_producto=$idCatalogoAbsorvidoArray[$i];";

	$resultado = $conexionEstablecida->exec($query);

 	}


	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);