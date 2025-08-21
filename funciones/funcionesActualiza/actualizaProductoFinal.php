<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');

	$query="SELECT IF(EXISTS(SELECT id_producto FROM ic_ingresoproducto where id_producto = '$llamaridDeProducto' and id_importador = '$recuperaCodigoCertificado' and codigo_solicitud = '$codigoimportador'),'1','2') as resul;";

		$resultado = $conexionEstablecida->query($query);


		while($registro = $resultado->fetch()) {

				$resulBaseDeDatos=$registro['resul'];
				
		}

	// echo $resulBaseDeDatos;

	if(empty($llamaridDeProducto)){

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

		
		if ($resulBaseDeDatos == '1'){

			$query1="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproducto` SET  `cantidad` = '$llamarCantidad', `pesoNeto` = '$llamarPesoNeto', `pesoBruto` = '$llamarPesoBruto', `valorUSD` = '$llamarValorFob', `precioUSD` = '$llamarPrecio', `PaisOrigen` = '$llamarPaisOrigen', `PaisProcedencia` = '$llamarPaisProce', `nombreProveedor` = '$llamarNomProve', `rucProveedor` = '$llamarRucProve' WHERE id_producto = '$llamaridDeProducto' and id_importador = '$recuperaCodigoCertificado' and codigo_solicitud = '$codigoimportador'";
			$resultado1 = $conexionEstablecida->exec($query1);

			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);


		}
		if ($resulBaseDeDatos == '2'){

			$query2="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproductoadicional` SET `cantidadAdicional` = '$llamarCantidad', `pesoNetoAdicional` = '$llamarPesoNeto', `pesoBrutoAdicional` = '$llamarPesoBruto', `valorFOBAdicional` = '$llamarValorFob', `precioFOBAdicional` = '$llamarPrecio', `paisOrigen` = '$llamarPaisOrigen', `paisProcedencia` = '$llamarPaisProce', `nombreProveedor` = '$llamarNomProve', `rucProveedor` = '$llamarRucProve' WHERE `id_producto` = '$llamaridDeProducto' and `id_ingresaInfo` = '$recuperaCodigoCertificado' and  `codigo_solicitud` = '$codigoimportador'";
			$resultado2 = $conexionEstablecida->exec($query2);

			$mensaje=1;
			$jason['mensaje']=$mensaje;
			echo json_encode($jason);

		}


				
		
	}
