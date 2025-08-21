<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();
 
 	extract($_POST);

 	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');

	$hora_actual= date('H:i:s');


 	$arrayIdProductos = explode(",", $stringIdProductos);
 	$arrayProductosVendidos = explode(",", $stringProductosVendidos);
 	$arrayPrecioDeVentaPublico = explode(",", $stringPrecioDeVentaPublico);
 	$arrayTotalEvaluos = explode(",", $stringTotalEvaluos);
 	$arrayCantidadRestantes = explode(",", $stringCantidadRestantes);
 	$arrayIdProductosOcultos = explode(",", $stringIdProductosOcultos);
 	$arrayCantidadInicial = explode(",", $stringCantidadInicial);

 	$contador=count($arrayIdProductos);

 	$validadorBoleano=false;

 	for ($i=0; $i < $contador; $i++) { 

 		$restadorCantidades=0;

 		$restadorCantidades=  $arrayCantidadRestantes[$i] - intval($arrayProductosVendidos[$i]);    

 		if ($restadorCantidades<0) {

 			$validadorBoleano=true;

 		}

 	}
	
 	if ($validadorBoleano==true) {
 		
 		$mensaje=2;
		$jason['mensaje']=$mensaje;		

 	}else{

 		for ($z=0; $z < $contador; $z++) { 

			$restadorCantidades2=0;

	 		$restadorCantidades2=  $arrayCantidadRestantes[$z] - intval($arrayProductosVendidos[$z]);    


	 		$query2="UPDATE ic_productos_trimestrales SET estado='I' WHERE id_producto='$arrayIdProductos[$z]';";

		 	$resultado2= $conexionEstablecida->exec($query2);


	 		$query4="UPDATE ic_ingresoproductoadicional SET columnaIndicacion='A',identificadorProducto='A' WHERE id_productosnuevoIngreso='$arrayIdProductos[$z]' OR id_producto='$arrayIdProductosOcultos[$z]';";

		 	$resultado4= $conexionEstablecida->exec($query4);


		 	if ($restadorCantidades2<=0) {
		 		
		 		$query3="UPDATE ic_ingresoproductoadicional SET columnaTrimestral='A' WHERE id_productosnuevoIngreso='$arrayIdProductos[$z]' OR id_producto='$arrayIdProductosOcultos[$z]';";

		 		$resultado3= $conexionEstablecida->exec($query3);

		 	}

	 		$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_productos_trimestrales` (`idProductosTrimestrales`, `id_producto`, `cantidadImportada`, `cantidadVendida`, `precioVentaPublico`, `total`, `cantidadRestante`, `fecha`, `hora`, `estado`, `id_importador`, `periodo`, `id_productoSegundo`, `cantidadInicial`) VALUES (NULL,'$arrayIdProductos[$z]','$restadorCantidades2','$arrayProductosVendidos[$z]','$arrayPrecioDeVentaPublico[$z]','$arrayTotalEvaluos[$z]','$restadorCantidades2','$fecha_actual','$hora_actual','A','$idImportador','$nombresPeriodos','$arrayIdProductosOcultos[$z]','$arrayCantidadInicial[$z]');";

		 	$resultado= $conexionEstablecida->exec($query);


	 	}

		$mensaje=1;
		$jason['mensaje']=$mensaje;

 	}


	echo json_encode($jason);


