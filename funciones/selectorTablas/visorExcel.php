
<?php
	require '../../PHPExcel/PHPExcel/IOFactory.php'; //Agregamos la librería 

	$tipo2 = $_FILES['selectorArchivoExcel']['type']; 
	$archivotmp2 = $_FILES['selectorArchivoExcel']['tmp_name'];
	$destino2="../../images/imagenesDocumentos";

	$nombreArchivo = $archivotmp2;

	// Cargo la hoja de cálculo
	$objPHPExcel = PHPExcel_IOFactory::load($nombreArchivo);
	
	//Asigno la hoja de calculo activa
	$objPHPExcel->setActiveSheetIndex(0);

	//Obtengo el numero de filas del archivo
	$numRows = $objPHPExcel->setActiveSheetIndex(0)->getHighestRow();

	// declarar el array
	$data1=array();
	$data2=array();
	$data3=array();
	$data4=array();
	$data5=array();
	$data6=array();
	$data7=array();
	$data8=array();
	$data9=array();
	$data10=array();
	$data11=array();
	$data12=array();
	$data13=array();
	$data14=array();
	$data15=array();
	$data16=array();
	$data17=array();
	$data18=array();
	$data19=array();
	$data20=array();
	$data21=array();
	$data22=array();

	$auxiliar=0;
	
	for ($i = 2; $i <= $numRows; $i++) {

		$nombre = $objPHPExcel->getActiveSheet()->getCell('A'.$i)->getCalculatedValue();
		array_push($data1, $nombre);

		$precio = $objPHPExcel->getActiveSheet()->getCell('B'.$i)->getCalculatedValue();
		array_push($data2, $precio);

		$existencia = $objPHPExcel->getActiveSheet()->getCell('C'.$i)->getCalculatedValue();
		array_push($data3, $existencia);

		$pesoNeto = $objPHPExcel->getActiveSheet()->getCell('D'.$i)->getCalculatedValue();
		array_push($data4, $pesoNeto);

		$pesoBruto = $objPHPExcel->getActiveSheet()->getCell('E'.$i)->getCalculatedValue();
		array_push($data5, $pesoBruto);

		$valorfob = $objPHPExcel->getActiveSheet()->getCell('F'.$i)->getCalculatedValue();
		array_push($data6, $valorfob);

		$descripcionComercial = $objPHPExcel->getActiveSheet()->getCell('G'.$i)->getCalculatedValue();
		array_push($data7, $descripcionComercial);

		$disciplinaDeportiva = $objPHPExcel->getActiveSheet()->getCell('H'.$i)->getCalculatedValue();
		array_push($data8, $disciplinaDeportiva);

		$marca = $objPHPExcel->getActiveSheet()->getCell('I'.$i)->getCalculatedValue();
		array_push($data9, $marca);

		$modelo = $objPHPExcel->getActiveSheet()->getCell('J'.$i)->getCalculatedValue();
		array_push($data10, $modelo);

		$preciofob = $objPHPExcel->getActiveSheet()->getCell('K'.$i)->getCalculatedValue();
		array_push($data11, $preciofob);

		$paisOrigen = $objPHPExcel->getActiveSheet()->getCell('L'.$i)->getCalculatedValue();
		array_push($data12, $paisOrigen);

		$paisProcedencia = $objPHPExcel->getActiveSheet()->getCell('M'.$i)->getCalculatedValue();
		array_push($data13, $paisProcedencia);

		$nombreProveedor = $objPHPExcel->getActiveSheet()->getCell('N'.$i)->getCalculatedValue();
		array_push($data14, $nombreProveedor);

		$rucProveedor = $objPHPExcel->getActiveSheet()->getCell('O'.$i)->getCalculatedValue();
		array_push($data15, $rucProveedor);

		$precioPeru = $objPHPExcel->getActiveSheet()->getCell('P'.$i)->getCalculatedValue();
		array_push($data16, $precioPeru);

		$precioColombia = $objPHPExcel->getActiveSheet()->getCell('Q'.$i)->getCalculatedValue();
		array_push($data17, $precioColombia);

		$composicionProducto = $objPHPExcel->getActiveSheet()->getCell('R'.$i)->getCalculatedValue();
		array_push($data18, $composicionProducto);

		$tecnologia = $objPHPExcel->getActiveSheet()->getCell('S'.$i)->getCalculatedValue();
		array_push($data19, $tecnologia);

		$material1 = $objPHPExcel->getActiveSheet()->getCell('T'.$i)->getCalculatedValue();
		array_push($data20, $material1);

		$oprcentaje1 = $objPHPExcel->getActiveSheet()->getCell('U'.$i)->getCalculatedValue();
		array_push($data21, $oprcentaje1);

		$link = $objPHPExcel->getActiveSheet()->getCell('V'.$i)->getCalculatedValue();
		array_push($data22, $link);

		if (empty($nombre) || empty($precio) || empty($existencia) || empty($pesoNeto) || empty($pesoBruto)) {
	
			$auxiliar=0;

		}else{

			$auxiliar=1;

		}

		

	}

	if ($auxiliar==1) {

		$stringNombre =  implode("__", $data1);
		$stringPrecio = implode("__", $data2);
		$stringExistencia = implode("__", $data3);
		$stringPesoNeto = implode("__", $data4);
		$stringPesoBruto = implode("__", $data5);
		$stringValorfob = implode("__", $data6);
		$stringDescripcionComercial =  implode("__", $data7);
		$stringDisciplinaDeportiva =  implode("__", $data8);
		$stringMarca =  implode("__", $data9);
		$stringModelo =  implode("__", $data10);
		$stringPreciofob =  implode("__", $data11);
		$stringPaisOrigen =  implode("__", $data12);
		$stringPaisProcedencia =  implode("__", $data13);
		$stringNombreProveedor =  implode("__", $data14);
		$stringRucProveedor =  implode("__", $data15);
		$stringPrecioPeru =  implode("__", $data16);
		$stringPrecioColombia =  implode("__", $data17);
		$stringComposicionProducto =  implode("__", $data18);
		$stringTecnologia =  implode("__", $data19);
		$stringMaterial =  implode("__", $data20);
		$stringPorcentaje =  implode("__", $data21);
		$stringLink =  implode("__", $data22);


		$jason['stringNombre']=$stringNombre;
		$jason['stringPrecio']=$stringPrecio;
		$jason['stringExistencia']=$stringExistencia;
		$jason['stringPesoNeto']=$stringPesoNeto;
		$jason['stringPesoBruto']=$stringPesoBruto;
		$jason['stringValorfob']=$stringValorfob;
		$jason['stringDescripcionComercial']=$stringDescripcionComercial;
		$jason['stringDisciplinaDeportiva']=$stringDisciplinaDeportiva;
		$jason['stringMarca']=$stringMarca;
		$jason['stringModelo']=$stringModelo;
		$jason['stringPreciofob']=$stringPreciofob;
		$jason['stringPaisOrigen']=$stringPaisOrigen;
		$jason['stringPaisProcedencia']=$stringPaisProcedencia;
		$jason['stringNombreProveedor']=$stringNombreProveedor;
		$jason['stringRucProveedor']=$stringRucProveedor;
		$jason['stringPrecioPeru']=$stringPrecioPeru;
		$jason['stringPrecioColombia']=$stringPrecioColombia;
		$jason['stringComposicionProducto']=$stringComposicionProducto;
		$jason['stringTecnologia']=$stringTecnologia;
		$jason['stringMaterial']=$stringMaterial;
		$jason['stringPorcentaje']=$stringPorcentaje;
		$jason['stringLink']=$stringLink;

	}else if($auxiliar==0){

		$mensaje=1;
		$jason['stringNombre']=$stringNombre;


	}



	echo json_encode($jason);

