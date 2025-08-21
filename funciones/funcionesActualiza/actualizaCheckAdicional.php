<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

	$query="SELECT b.id_producto FROM ic_usuario AS a INNER JOIN ic_ingresoproducto AS b ON a.id_Actor=b.id_importador WHERE b.masProductos='A' AND a.id_Actor='$idImportador';";
	$resultado = $conexionEstablecida->query($query);

	while($registro = $resultado->fetch()) {

		$id_producto=$registro['id_producto'];
				
	}

	if (empty($id_producto)) {
		
		if(empty($idCatalogoAbsorvido1)){

			$mensaje=2;
			$jason['mensaje']=$mensaje;

		}else{

		 	$idCatalogoAbsorvidoArray = explode(",", $idCatalogoAbsorvido1);


		 	$contador=count($idCatalogoAbsorvidoArray);

		 	
		 	for($i=0;$i<$contador;$i++){

			 	$query="UPDATE ic_ingresoproducto set masProductos = 'A'  WHERE id_producto=$idCatalogoAbsorvidoArray[$i];";

				$resultado = $conexionEstablecida->exec($query);

		 	}

		 	$mensaje=1;
			$jason['mensaje']=$mensaje;

		}

	}else{

		if(!empty($idCatalogoAbsorvido1)){


		 	$idCatalogoAbsorvidoArray = explode(",", $idCatalogoAbsorvido1);


		 	$contador=count($idCatalogoAbsorvidoArray);

		 	
		 	for($i=0;$i<$contador;$i++){

			 	$query="UPDATE ic_ingresoproducto set masProductos = 'A'  WHERE id_producto=$idCatalogoAbsorvidoArray[$i];";

				$resultado = $conexionEstablecida->exec($query);

		 	}

		 	$mensaje=1;
			$jason['mensaje']=$mensaje;

		}else{

			$mensaje=1;
			$jason['mensaje']=$mensaje;

		}


	}


	echo json_encode($jason);