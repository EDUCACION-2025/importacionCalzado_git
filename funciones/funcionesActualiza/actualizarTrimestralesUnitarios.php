<?php

	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();
 
 	extract($_POST);

 	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');

	$hora_actual= date('H:i:s');

	$restadorCantidades=0;

 	$restadorCantidades=  $restante - intval($productosVendidos);    

 	if ($restadorCantidades<0) {

 		$mensaje=2;
		$jason['mensaje']=$mensaje;

 	}else if($clasesIguales=="1" || $clasesIguales==1){

 		// $restadorCantidades2=0;

	 	// $restadorCantidades2=  $restante - intval($productosVendidos);    


	 	// $query2="UPDATE ic_productos_trimestrales SET estado='I' WHERE id_producto='$idOcultos';";

		 // $resultado2= $conexionEstablecida->exec($query2);


	 	// $query4="UPDATE ic_ingresoproductoadicional SET columnaIndicacion='A',identificadorProducto=NULL WHERE id_productosnuevoIngreso='$idOcultos' OR id_producto='$idOcultosProductos';";

		 // $resultado4= $conexionEstablecida->exec($query4);


		 // if ($restadorCantidades2<=0) {
		 		
		 // 	$query3="UPDATE ic_ingresoproductoadicional SET columnaTrimestral='A' WHERE id_productosnuevoIngreso='$idOcultos' OR id_producto='$idOcultosProductos';";

		 // 	$resultado3= $conexionEstablecida->exec($query3);

		 // }

	 	// $query="INSERT INTO `ezonshar_mdepsaddb`.`ic_productos_trimestrales` (`idProductosTrimestrales`, `id_producto`, `cantidadImportada`, `cantidadVendida`, `precioVentaPublico`, `total`, `cantidadRestante`, `fecha`, `hora`, `estado`, `id_importador`, `periodo`, `id_productoSegundo`, `cantidadInicial`) VALUES (NULL,'$idOcultos','$restadorCantidades2','$productosVendidos','$precioVentaPublico','$totalEvaluos','$restadorCantidades2','$fecha_actual','$hora_actual','A','$idImportador','$nombresPeriodos','$idOcultosProductos','$cantidadInicial');";

		 // $resultado= $conexionEstablecida->exec($query);


		$restadorCantidades2=0;

	 	$restadorCantidades2=  $restante - intval($productosVendidos);    


	 	$query2="UPDATE ic_productos_trimestrales SET estado='I' WHERE id_producto='$idOcultos';";

		 $resultado2= $conexionEstablecida->exec($query2);


	 	$query4="UPDATE ic_ingresoproductoadicional SET identificadorProducto='A' WHERE id_productosnuevoIngreso='$idOcultos';";

		 $resultado4= $conexionEstablecida->exec($query4);


		 if ($restadorCantidades2<=0) {
		 		
		 	$query3="UPDATE ic_ingresoproductoadicional SET columnaTrimestral='A' WHERE id_productosnuevoIngreso='$idOcultos';";

		 	$resultado3= $conexionEstablecida->exec($query3);

		 }

	 	$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_productos_trimestrales` (`idProductosTrimestrales`, `id_producto`, `cantidadImportada`, `cantidadVendida`, `precioVentaPublico`, `total`, `cantidadRestante`, `fecha`, `hora`, `estado`, `id_importador`, `periodo`, `id_productoSegundo`, `cantidadInicial`) VALUES (NULL,'$idOcultos','$restadorCantidades2','$productosVendidos','$precioVentaPublico','$totalEvaluos','$restadorCantidades2','$fecha_actual','$hora_actual','A','$idImportador','$nombresPeriodos','$idOcultosProductos','$cantidadInicial');";

		 $resultado= $conexionEstablecida->exec($query);



	 	$mensaje=3;
		$jason['mensaje']=$mensaje;



 	}else{


		$restadorCantidades2=0;

	 	$restadorCantidades2=  $restante - intval($productosVendidos);    

	 	$estadoI='I';

	 	$query2="UPDATE ic_productos_trimestrales SET estado=:estadoI WHERE id_producto=:idOcultos;";
		$sql2 = $conexionEstablecida->prepare($query2);

		$sql2->bindParam(':estadoI',$estadoI,PDO::PARAM_STR);
		$sql2->bindParam(':idOcultos',$idOcultos,PDO::PARAM_STR);
		$sql2->execute();

	 	$query4="UPDATE ic_ingresoproductoadicional SET identificadorProducto='A' WHERE id_productosnuevoIngreso='$idOcultos';";

		 $resultado4= $conexionEstablecida->exec($query4);

		 $estadoA='A';

		 if ($restadorCantidades2<=0) {
		 		
		 	$query3="UPDATE ic_ingresoproductoadicional SET columnaTrimestral=:estadoA WHERE id_productosnuevoIngreso=:idOcultos2;";
			$sql3 = $conexionEstablecida->prepare($query3);

			$sql3->bindParam(':estadoA',$estadoA,PDO::PARAM_STR);
			$sql3->bindParam(':idOcultos2',$idOcultos,PDO::PARAM_STR);
			$sql3->execute();

		 }

		$estado='A'; 

	 	$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_productos_trimestrales` (`idProductosTrimestrales`, `id_producto`, `cantidadImportada`, `cantidadVendida`, `precioVentaPublico`, `total`, `cantidadRestante`, `fecha`, `hora`, `estado`, `id_importador`, `periodo`, `id_productoSegundo`, `cantidadInicial`) VALUES (NULL,:id_producto,:restadorCantidades2,:productosVendidos,:precioVentaPublico,:totalEvaluos,:restadorCantidades23,:fecha_actual,:hora_actual,:estado,:idImportador,:nombresPeriodos,:idOcultosProductos,:cantidadInicial);";

		$sql = $conexionEstablecida->prepare($query);

		$sql->bindParam(':id_producto',$id_producto,PDO::PARAM_STR);
		$sql->bindParam(':restadorCantidades2',$restadorCantidades2,PDO::PARAM_STR);
		$sql->bindParam(':productosVendidos',$productosVendidos,PDO::PARAM_STR);
		$sql->bindParam(':precioVentaPublico',$precioVentaPublico,PDO::PARAM_STR);
		$sql->bindParam(':totalEvaluos',$totalEvaluos,PDO::PARAM_STR);
		$sql->bindParam(':restadorCantidades23',$restadorCantidades2,PDO::PARAM_STR);
		$sql->bindParam(':fecha_actual',$fecha_actual,PDO::PARAM_STR);
		$sql->bindParam(':hora_actual',$hora_actual,PDO::PARAM_STR);
		$sql->bindParam(':estado',$estado,PDO::PARAM_STR);
		$sql->bindParam(':idImportador',$idImportador,PDO::PARAM_STR);
		$sql->bindParam(':nombresPeriodos',$nombresPeriodos,PDO::PARAM_STR);
		$sql->bindParam(':idOcultosProductos',$idOcultosProductos,PDO::PARAM_STR);
		$sql->bindParam(':cantidadInicial',$cantidadInicial,PDO::PARAM_STR);

		$sql->execute();

	 	$mensaje=1;
		$jason['mensaje']=$mensaje;

	}

	echo json_encode($jason);