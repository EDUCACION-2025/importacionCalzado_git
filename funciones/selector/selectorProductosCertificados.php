<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();
	
	$conexionEstablecida->exec("set names utf8");
	extract($_POST);

	$data=array();

	$data=array();
	$data1=array();
	$data2=array();
	$data3=array();
	$data4=array();
	$data5=array();
	$data6=array();
	$data7=array();

	$query="SELECT DISTINCT c.id_producto AS id_productoDos,c.id_productosnuevoIngreso,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.descripcionComercial, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM ic_ingresoproducto AS a1 WHERE a1.id_producto=c.id_producto) AS producto,SUM(c.cantidadAdicional) AS cantidadAdicional,(SELECT a1.id_producto FROM ic_ingresoproducto AS a1 WHERE a1.id_producto=c.id_producto) AS id_producto,IF((SELECT e.idProductosTrimestrales FROM ic_productos_trimestrales AS e WHERE e.id_producto=c.id_productosnuevoIngreso LIMIT 1) IS NOT NULL,(SELECT DISTINCT a2.cantidadRestante FROM ic_productos_trimestrales AS a2 WHERE a2.id_producto=c.id_productosnuevoIngreso AND a2.estado='A' AND a2.cantidadRestante!='0' GROUP BY c.id_productosnuevoIngreso ORDER BY a2.idProductosTrimestrales DESC LIMIT 1),(SELECT DISTINCT a2.cantidadRestante FROM ic_productos_trimestrales AS a2 WHERE a2.id_producto=c.id_productosnuevoIngreso GROUP BY c.id_productosnuevoIngreso ORDER BY a2.idProductosTrimestrales DESC LIMIT 1)) AS cantidadrestante,(SELECT a2.codigoCalzado FROM ic_ingresoproducto AS a1 INNER JOIN ic_calzadoeimplemento AS a2 ON a2.id_Calzado=a1.id_calzadoeimplemento WHERE a1.id_producto=c.id_producto) AS codigoCalzado, (SELECT a1.codigoCalzadoImplemento FROM ic_ingresoproducto AS a1 WHERE a1.id_producto=c.id_producto) AS codigoGenerado,(SELECT b1.nombreItem FROM ic_ingresoproducto AS a1 INNER JOIN ic_item AS b1 ON a1.id_item=b1.ic_calzadoImplemento WHERE a1.id_producto=c.id_producto) AS nombreItemsGenerados FROM ic_emisioncertificado AS d INNER JOIN ic_ingresoproductoadicional AS c ON d.codigoGenera=c.codigo_solicitud WHERE d.id_importador='$idImportador' AND c.columnaTrimestral IS NULL AND c.identificadorProducto IS NULL GROUP BY c.id_producto ORDER BY c.id_productosnuevoIngreso DESC;";
	$resultado = $conexionEstablecida->query($query);

	while($registro = $resultado->fetch()) {

		$id_producto=$registro['id_productosnuevoIngreso'];
		array_push($data, $id_producto);

		$producto=$registro['producto'];
		array_push($data1, $producto);

		$cantidadAdicional=$registro['cantidadAdicional'];
		array_push($data2, $cantidadAdicional);

		$cantidadrestante=$registro['cantidadrestante'];
		array_push($data3, $cantidadrestante);

		$id_productoDos=$registro['id_productoDos'];
		array_push($data4, $id_productoDos);

		$codigoCalzado=$registro['codigoCalzado'];
		array_push($data5, $codigoCalzado);

		$codigoGenerado=$registro['codigoGenerado'];
		array_push($data6, $codigoGenerado);

		$nombreItemsGenerados=$registro['nombreItemsGenerados'];
		array_push($data7, $nombreItemsGenerados);


	}

	$stringid_producto =  implode("------", $data);
	$stringproducto = implode("------", $data1);
	$stringcantidadAdicional = implode("------", $data2);
	$stringcantidadrestante = implode("------", $data3);
	$stringid_productoDos = implode("------", $data4);
	$stringcodigoCalzado = implode("------", $data5);
	$stringcodigoGenerado = implode("------", $data6);
	$stringnombreItemsGenerados = implode("------", $data7);

	$jason['stringid_producto']=$stringid_producto;
	$jason['stringproducto']=$stringproducto;
	$jason['stringcantidadAdicional']=$stringcantidadAdicional;
	$jason['stringcantidadrestante']=$stringcantidadrestante;
	$jason['stringid_productoDos']=$stringid_productoDos;
	$jason['stringcodigoCalzado']=$stringcodigoCalzado;
	
	$jason['stringcodigoGenerado']=$stringcodigoGenerado;
	$jason['stringnombreItemsGenerados']=$stringnombreItemsGenerados;

	
	echo json_encode($jason);
