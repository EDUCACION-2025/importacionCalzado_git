<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	$conexionEstablecida->exec("set names utf8");

 	extract($_POST);

	$query="SELECT a.fecha,(SELECT a4.RasonSocial FROM ic_usuario AS a4 WHERE a4.id_Actor=a.id_importador) AS razonSocial,(SELECT a1.codigoCalzadoImplemento FROM ic_ingresoproducto AS a1 WHERE a1.id_producto=a.id_productoSegundo) AS codigoCalzado,(SELECT IF(a2.codigoCalzado='6402.19.00.11' OR a2.codigoCalzado='6402.19.00.12' OR a2.codigoCalzado='6402.19.00.19' OR a2.codigoCalzado='6402.99.90.10'OR a2.codigoCalzado='6403.19.00.11' OR a2.codigoCalzado='6403.19.00.12' OR a2.codigoCalzado='6403.19.00.19' OR a2.codigoCalzado='6403.99.90.10'OR a2.codigoCalzado='6404.11.10.11' OR a2.codigoCalzado='6404.11.10.12' OR a2.codigoCalzado='6404.11.10.19' OR a2.codigoCalzado='6404.11.20.11'OR a2.codigoCalzado='6404.11.20.12' OR a2.codigoCalzado='6404.11.20.13' OR a2.codigoCalzado='6404.11.20.19','Calzado',IF(a2.codigoCalzado='6506.10.00.10','Cascos',IF(a2.codigoCalzado='7315.11.00.10','Cadenas',IF(a2.codigoCalzado='8712.00.00.10','Bicicletas',IF(a2.codigoCalzado='8714.95.00.10','Asientos',IF(a2.codigoCalzado='9506.40.00.10','Tenis de mesa',IF(a2.codigoCalzado='9506.51.00.10' OR a2.codigoCalzado='9506.59.00.10','Raquetas',IF(a2.codigoCalzado='9506.61.00.10','Pelotas de tenis',IF(a2.codigoCalzado='9506.62.00.10','Inflables',IF(a2.codigoCalzado='9506.99.10.10','Beisbol y softbol','Codigo no permitido')))))))))) FROM ic_ingresoproducto AS a1 INNER JOIN ic_calzadoeimplemento AS a2 ON a2.id_Calzado=a1.id_calzadoeimplemento WHERE a1.id_producto=a.id_productoSegundo) AS descripcionComercial,a.cantidadInicial,a.cantidadRestante,a.cantidadVendida,a.precioVentaPublico,a.total,a.periodo, (SELECT b1.nombreItem FROM ic_ingresoproducto AS a1 INNER JOIN ic_item AS b1 ON a1.id_item=b1.ic_calzadoImplemento WHERE a1.id_producto=a.id_productoSegundo) AS nombreItem FROM ic_productos_trimestrales AS a;";

	$resultado = $conexionEstablecida->query($query);

	if (!$resultado) {
		echo "error";
	}else{ 
		$arreglo=array();
		while($data=$resultado->fetch()){
			$arreglo["data"][]=$data;
		}
		echo json_encode($arreglo);
	}

