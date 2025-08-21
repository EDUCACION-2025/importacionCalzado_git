<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();
 
 	extract($_POST);

 	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');

	$hora_actual= date('H:i:s');


 	$fecha1 = date('dmY');

 	$codigo = $codioRecupera;




 	$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_ingresoproductoadicional` (`id_productosnuevoIngreso`, `cantidadAdicional`, `pesoNetoAdicional`, `pesoBrutoAdicional`, `valorFOBAdicional`, `precioFOBAdicional`, `paisOrigen`, `paisProcedencia`, `nombreProveedor`, `rucProveedor`, `id_producto`, `fechaAdd`, `horaAdd`, `id_ingresaInfo`,`estadoProducto`,`codigo_solicitud`,`caliInSolicitud`) VALUES (NULL, '$actuCantidad', '$actupesoNeto', '$actuperoBruto', '$actuvalorFOB', '$actuPrecio', '$actupaisOrigen', '$actupaisProceden', '$acturazonSocialProvee', '$acturucProvee', '$idProductoo', '$fecha_actual', '$hora_actual', '$idImportador1', 'C', 'N/A','C');";

	 $resultado1 = $conexionEstablecida->exec($query);

	 $query2="UPDATE ic_ingresoproducto SET productoadiciones='A',cantidad='$actuCantidad' WHERE id_producto='$idProductoo';";

	 $resultado2 = $conexionEstablecida->exec($query2);	


	 if ($clasesIguales==1 || $clasesIguales=="1") {

		$query3="UPDATE ic_ingresoproductoadicional  SET estadoProducto='A', codigo_solicitud='$codigo', caliInSolicitud='P' WHERE id_ingresaInfo='$idImportador1' AND estadoProducto='C' AND caliInSolicitud='C';";

		$resultado3 = $conexionEstablecida->exec($query3);	

		$query4="UPDATE ic_ingresoproducto SET productoadiciones=NULL,masProductos=NULL WHERE id_importador='$idImportador1' AND productoadiciones='A';";

		$resultado4 = $conexionEstablecida->exec($query4);	

	 	$mensaje=2;
		$jason['mensaje']=$mensaje;


	 }else{

	 	$mensaje=1;
		$jason['mensaje']=$mensaje;

	 }


	echo json_encode($jason);


