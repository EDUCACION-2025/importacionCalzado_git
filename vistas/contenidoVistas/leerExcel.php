<?php 
	require_once "../../PHPExcel/PHPExcel/IOFactory.php";

	require_once "../../conexion/conexion.php";

	$nombreArchivo = "../../PHPExcel/ejemplo.xlsx";

	$objPHPExcel = PHPEXCEL_IOFactory::load($nombreArchivo);

	$objPHPExcel->setActiveShetIndex(0);

	$numRows = $objPHPExcel->setActiveShetIndex(0)->getHighestRow();

	echo'<table><tr><td>Producto</td><td>Precio</td><td>Existencia</td></tr>';


	for($i = 1; $i <= $numRows; $i++){
		$nombre = $objPHPExcel->getActiveSheet()->getCell('A'.$i)->getCalculatedValue();

		$precio = $objPHPExcel->getActiveSheet()->getCell('B'.$i)->getCalculatedValue();

		$existencia = $objPHPExcel->getActiveSheet()->getCell('C'.$i)->getCalculatedValue();

		echo '<tr>';
		echo '<td>'.$nombre.'</td>';
		echo '<td>'.$precio.'</td>';
		echo '<td>'.$existencia.'</td>';
		echo '</tr>';

	}

	// $conexionRecuperada= new conexion();
 	// $conexionEstablecida=$conexionRecuperada->cConexion();

 	// $conexionEstablecida->exec("set names utf8");

 	// extract($_POST); 

?>

