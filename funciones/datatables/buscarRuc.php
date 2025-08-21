<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();
 	
 	extract($_POST);

 	$query="SELECT id_Actor, ruc FROM ic_usuario where ruc = '$numeroRucBase';";


 	// echo($query);

	$resultado = $conexionEstablecida->query($query);



	while($resultado1 = $resultado->fetch()) {

		$usuarioRecuperado=$resultado1['ruc'];
		$idRecuperado=$resultado1['id_Actor'];

	}

	$jason['id_Actor']=$idRecuperado;

	// echo($usuarioRecuperado);

	if ($usuarioRecuperado != ""){

		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);
	}

	