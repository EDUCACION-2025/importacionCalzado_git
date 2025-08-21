<?php

	require_once "../../conexion/conexion.php";

	require_once '../../PHPExcel/Classes/PHPExcel.php';

	extract($_POST);

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	$archivo = $_FILES['documentoExcelProductos']['tmp_name'];

	$inputFileType = PHPExcel_IOFactory::identify($archivo);

	$objReader = PHPExcel_IOFactory::createReader($inputFileType);

	$objPHPExcel = $objReader->load($archivo);

	$sheet = $objPHPExcel->getSheet(0); 

	$highestRow = $sheet->getHighestRow(); 

	$highestColumn = $sheet->getHighestColumn();

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
	$dataMateriales13=array();

	$dataItemsCalzados=array();
	$dataItemsCalzados2=array();
	$dataItemsCalzados3=array();
	$dataItemsCalzadosFilas=array();

	$contadorItemCalzados=0;
	$contadorItemImplementos=0;

	$dataItemsImplementos=array();
	$dataItemsImplementos2=array();
	$dataItemsImplementos3=array();
	$dataItemsImplementosFilas=array();

	$contadorDinamicos=0;

	
	$dataItem=array();
	$dataCodigoArrancelario=array();
	$dataDescripcionComercial=array();
	$dataDisciplinaDeportiva=array();
	$dataMarca=array();
	$dataModelo=array();
	$dataPrecioPeru=array();
	$dataPrecioColombia=array();
	$dataGenero=array();
	$dataGrupoEtario=array();
	$dataCodigoInternacional=array();
	$dataMaterialesComposicion=array();

	$contadorItem=0;
	$dataItemEscritura=array();

	$dataItemsImplementosCalzadosMixtos=array();

	$contadorDeportes=0;
	$dataFilasDeportes=array();
	$dataCompletosDeportes=array();

	$contadorMarcas=0;
	$dataFilasMarcas=array();
	$dataMarcasCompletas=array();

	$contadorPeru=0;
	$dataFilasPeru=array();

	$contadorColombia=0;
	$dataFilasColombia=array();

	$contadorGenero=0;
	$dataFilasGenero=array();

	$contadorGrupoEtario=0;
	$dataFilasGrupoEtario=array();


	$contadorDescripciones=0;
	$contadorDescripcionesSecuencias=0;
	$dataFilasDescripciones=array();

	$dataFilasDescripcionesTodas=array();

	/*==========================================
	=            Códigos permitidos            =
	==========================================*/
	
	$query="SELECT id_Calzado,CONCAT(codigoCalzado,' ',descripcionCalzado) AS codigoCalzado FROM ic_calzadoeimplemento WHERE id_Item = '1' AND estadoCalzado='A';";
	$resultado=$conexionEstablecida->query($query);	
	
	while($registro = $resultado->fetch()) {

		$id_Calzado=$registro['id_Calzado'];

		$codigoCalzado=$registro['codigoCalzado'];

		$calzado=$id_Calzado."___".$codigoCalzado;

		array_push($dataItemsCalzados,$calzado);
				
		array_push($dataItemsCalzados2,$codigoCalzado);

	}



	$query2="SELECT id_Calzado AS id_CalzadoImplementos,CONCAT(codigoCalzado,' ',descripcionCalzado) AS codigoCalzadoImplementos  FROM ic_calzadoeimplemento WHERE id_Item = '2' AND estadoCalzado='A';";
	$resultado2=$conexionEstablecida->query($query2);	

	while($registro2 = $resultado2->fetch()) {

		$id_CalzadoImplementos=$registro2['id_CalzadoImplementos'];

		$codigoCalzadoImplementos=$registro2['codigoCalzadoImplementos'];

		$implementos=$id_CalzadoImplementos."___".$codigoCalzadoImplementos;

		array_push($dataItemsImplementos,$implementos);
		array_push($dataItemsImplementos2,$codigoCalzadoImplementos);
				
	}


	/*=====  End of Códigos permitidos  ======*/


	/*================================================
	=            Descripciones permitidas            =
	================================================*/
	
	$queryDescripcionesComerciales="SELECT nombreDescripcion FROM ic_descripcioncomercial WHERE estado='A';";
	$resultadoDescripcionesComerciales=$conexionEstablecida->query($queryDescripcionesComerciales);	

	while($registroDescripcionesComerciales = $resultadoDescripcionesComerciales->fetch()) {

		$nombreDescripcion=$registroDescripcionesComerciales['nombreDescripcion'];

		array_push($dataFilasDescripcionesTodas,$nombreDescripcion);
				
	}

	
	/*=====  End of Descripciones permitidas  ======*/

if ($sheet->getHighestRow()<=24) {

	$stringCalzados = implode(";;", $dataItemsCalzados);

	$stringImplementos = implode(";;", $dataItemsImplementos);

	for ($row = 2; $row <= $highestRow; $row++){ 

		if ($sheet->getCell("A".$row)->getValue()=="" || $sheet->getCell("B".$row)->getValue()=="" || $sheet->getCell("C".$row)->getValue()=="" || $sheet->getCell("D".$row)->getValue()=="" || $sheet->getCell("E".$row)->getValue()=="" || $sheet->getCell("F".$row)->getValue()=="" || $sheet->getCell("G".$row)->getValue()=="" || $sheet->getCell("H".$row)->getValue()=="" || $sheet->getCell("I".$row)->getValue()=="" || $sheet->getCell("J".$row)->getValue()=="" || $sheet->getCell("K".$row)->getValue()=="") {
		
			$contadorDinamicos=1;

			if (empty($sheet->getCell("A".$row)->getValue())) {
			
				array_push($dataItem,$row);

			}

			if (empty($sheet->getCell("B".$row)->getValue())) {
			
				array_push($dataCodigoArrancelario,$row);

			}


			if (empty($sheet->getCell("C".$row)->getValue())) {
			
				array_push($dataDescripcionComercial,$row);

			}


			if (empty($sheet->getCell("D".$row)->getValue())) {
			
				array_push($dataDisciplinaDeportiva,$row);

			}



			if (empty($sheet->getCell("E".$row)->getValue())) {
			
				array_push($dataMarca,$row);

			}


			if (empty($sheet->getCell("F".$row)->getValue())) {
			
				array_push($dataModelo,$row);

			}


			if (empty($sheet->getCell("G".$row)->getValue())) {
			
				array_push($dataPrecioPeru,$row);

			}


			if (empty($sheet->getCell("H".$row)->getValue())) {
			
				array_push($dataPrecioColombia,$row);

			}


			if (empty($sheet->getCell("I".$row)->getValue())) {
			
				array_push($dataGenero,$row);

			}


			if (empty($sheet->getCell("J".$row)->getValue())) {
			
				array_push($dataGrupoEtario,$row);

			}


			if (empty($sheet->getCell("K".$row)->getValue())) {
			
				array_push($dataCodigoInternacional,$row);

			}


			if (empty($sheet->getCell("L".$row)->getValue())) {
			
				array_push($dataMaterialesComposicion,$row);

			}


		}

		$itemFilas = strtoupper($sheet->getCell("A".$row)->getValue());

		if($itemFilas!="CALZADO" && $itemFilas!="IMPLEMENTOS DEPORTIVOS"){

			$contadorItem=1;

			array_push($dataItemEscritura,$row);
			

		}

		if ($itemFilas=="CALZADO") {

			$valorCalzados=trim($sheet->getCell("B".$row)->getValue());

			$queryCalzado="SELECT id_Calzado,codigoCalzado AS codigoCalzadoCalzados FROM ic_calzadoeimplemento WHERE codigoCalzado=LEFT('$valorCalzados',13) AND id_Item=1;";
			$resultadoCalzado=$conexionEstablecida->query($queryCalzado);	

			$contadorCalzados=$resultadoCalzado->rowCount();	

			if($contadorCalzados==0){

				$contadorItemCalzados=1;

				array_push($dataItemsCalzadosFilas,$row);

			}

			while($registroCalzado = $resultadoCalzado->fetch()) {

				$codigoCalzadoCalzados=$registroCalzado['codigoCalzadoCalzados'];
				$id_Calzado=$registroCalzado['id_Calzado'];

				$codigoCalzadoUnidos=$id_Calzado.";;;;;;;".$codigoCalzadoCalzados;

				array_push($dataItemsImplementosCalzadosMixtos,$codigoCalzadoUnidos);

			}



		}

		if ($itemFilas=="IMPLEMENTOS DEPORTIVOS") {
			
			$valorImplementos=$sheet->getCell("B".$row)->getValue();

			$queryImplementos="SELECT id_Calzado,codigoCalzado AS codigoCalzadoImplementos FROM ic_calzadoeimplemento WHERE codigoCalzado=LEFT('$valorImplementos',13) AND id_Item=2;";
			$resultadoImplementos=$conexionEstablecida->query($queryImplementos);	

			$contadorImplementaciones=$resultadoImplementos->rowCount();	

			if($contadorImplementaciones==0){

				$contadorItemImplementos=1;

				array_push($dataItemsImplementosFilas,$row);
			}

			while($registroCalzado = $resultadoImplementos->fetch()) {

				$codigoCalzadoImplementos=$registroCalzado['codigoCalzadoImplementos'];
				$id_Calzado=$registroCalzado['id_Calzado'];

				$codigoCalzadoUnidosImplementos=$id_Calzado.";;;;;;;".$codigoCalzadoImplementos;

				array_push($dataItemsImplementosCalzadosMixtos,$codigoCalzadoUnidosImplementos);

			}

		}

		/*=============================================
		=            Descripción Comercial            =
		=============================================*/
	   $valorDescripciones=trim($sheet->getCell("C".$row)->getValue());

	   $queryDescripciones="SELECT nombreDescripcion FROM ic_descripcioncomercial WHERE nombreDescripcion='$valorDescripciones';";	
	   $resultadoDescripciones=$conexionEstablecida->query($queryDescripciones);	

	   $contadorDescripcionesSecuencias=$resultadoDescripciones->rowCount();



		if($contadorDescripcionesSecuencias==0){

			$contadorDescripciones=1;

			array_push($dataFilasDescripciones,$row);
		}
		
		
		
		/*=====  End of Descripción Comercial  ======*/
		


	   /*================================
	   =            Deportes            =
	   ================================*/
			
	   $valorDeportes=trim($sheet->getCell("D".$row)->getValue());

	   $queryDeportes="SELECT id_disciplina FROM ic_disciplina WHERE nombreDisciplina='$valorDeportes';";	
	   $resultadoDeportes=$conexionEstablecida->query($queryDeportes);	

	   $contadorDeportesSecuencias=$resultadoDeportes->rowCount();



		if($contadorDeportesSecuencias==0){

			$contadorDeportes=1;

			array_push($dataFilasDeportes,$row);
		}


	   /*=====  End of Deportes  ======*/

	   /*==============================
	   =            Marcas            =
	   ==============================*/
	   
	   $valorMarcas=trim($sheet->getCell("E".$row)->getValue());

	  $queryMarcasMarcas="SELECT DISTINCT id_documentoAdicional,nombreMarca,(CASE WHEN da.nombreMarca = '100' THEN da.nombreMarcaAdiciona ELSE (SELECT nombreMarca FROM ic_marca m WHERE m.id_marca = da.nombreMarca) END) as marca FROM ic_documentoadicional da WHERE id_Actor ='$idImportadorExcel' AND  estadoMarca = 'A'  ORDER BY nombreMarcaAdiciona asc;";	
	   $resultadoMarcasMarcas=$conexionEstablecida->query($queryMarcasMarcas);	


		while($resultadoMarcasMarcas1 = $resultadoMarcasMarcas->fetch()) {

			$marca=$resultadoMarcasMarcas1['marca'];

			if (!in_array($marca, $dataMarcasCompletas)) {
				
				array_push($dataMarcasCompletas,$marca);

			}	


		}


		if (!in_array("$valorMarcas", $dataMarcasCompletas)) {

			$contadorMarcas=1;
				
			array_push($dataFilasMarcas,$row);


		}	

	   /*=====  End of Marcas  ======*/
	   

	   /*===================================
	   =            Precio Perú            =
	   ===================================*/
	   
	   $valorPrecioPeru=$sheet->getCell("G".$row)->getValue();

	   if (intval($valorPrecioPeru) == 0) {
	   
			$contadorPeru=1;
				
			array_push($dataFilasPeru,$row);

	   }



	   /*=====  End of Precio Perú  ======*/

	   /*=======================================
	   =            Precio Colombia            =
	   =======================================*/
	   
	   $valorPrecioColombia=$sheet->getCell("H".$row)->getValue();

	   if (intval($valorPrecioColombia) == 0) {
	   
			$contadorColombia=1;
				
			array_push($dataFilasColombia,$row);

	   }  
	   
	   /*=====  End of Precio Colombia  ======*/
	   
	   
	   /*==============================
	   =            Genero            =
	   ==============================*/
	   
	   $valorGenero=trim(strtoupper($sheet->getCell("I".$row)->getValue()));


	   if ($valorGenero!="MASCULINO" && $valorGenero!="FEMENINO" && $valorGenero!="MIXTO") {
	   	
	   		$contadorGenero=1;
				
			array_push($dataFilasGenero,$row);

	   }
	   
	   /*=====  End of Genero  ======*/
	   
	   /*====================================
	   =            Grupo Etario            =
	   ====================================*/
	   
	 	$valorEtario=trim(strtoupper($sheet->getCell("J".$row)->getValue()));

	   if ($valorEtario!="NIÑOS" && $valorEtario!="ADULTOS") {
	   	
	   		$contadorGrupoEtario=1;
				
			array_push($dataFilasGrupoEtario,$row);

	   }  
	   
	   /*=====  End of Grupo Etario  ======*/
	   


		array_push($data1, $itemFilas);
		array_push($data2, trim($sheet->getCell("B".$row)->getValue()));
		array_push($data3, trim($sheet->getCell("C".$row)->getValue()));
		array_push($data4, trim($sheet->getCell("D".$row)->getValue()));
		array_push($data5, trim($sheet->getCell("E".$row)->getValue()));
		array_push($data6, trim($sheet->getCell("F".$row)->getValue()));
		array_push($data7, trim($sheet->getCell("G".$row)->getValue()));
		array_push($data8, trim($sheet->getCell("H".$row)->getValue()));
		array_push($data9, trim($sheet->getCell("I".$row)->getValue()));
		array_push($data10, trim($sheet->getCell("J".$row)->getValue()));
		array_push($data11, trim($sheet->getCell("K".$row)->getValue()));
		array_push($dataMateriales13, trim($sheet->getCell("L".$row)->getValue()));

	}

	/*=========================================
	=            Datos Convertidos            =
	=========================================*/
	
	$columnaA = implode("_________________", $data1);
	$columnaB = implode("_________________", $data2);
	$columnaC = implode("_________________", $data3);
	$columnaD = implode("_________________", $data4);
	$columnaE = implode("_________________", $data5);
	$columnaF = implode("_________________", $data6);
	$columnaG = implode("_________________", $data7);
	$columnaH = implode("_________________", $data8);
	$columnaI = implode("_________________", $data9);
	$columnaJ = implode("_________________", $data10);
	$columnaK = implode("_________________", $data11);
	$columnaL = implode("_________________", $dataMateriales13);

	$stringItemsImplementosCalzadosMixtos = implode("_________________", $dataItemsImplementosCalzadosMixtos);

	$stringFilasDeportes = implode(";", $dataFilasDeportes);
	
	/*=====  End of Datos Convertidos  ======*/

	$contador1=count($data1);	
	$contador2=count($data2);
	$contador3=count($data3);
	$contador4=count($data4);
	$contador5=count($data5);
	$contador6=count($data6);
	$contador7=count($data7);
	$contador8=count($data8);
	$contador9=count($data9);
	$contador10=count($data10);
	$contador11=count($data11);
	$contador12=count($dataMateriales13);

	if($contadorDinamicos>0 || empty($columnaA) || empty($columnaB) || empty($columnaC) || empty($columnaD) || empty($columnaE) || empty($columnaF) || empty($columnaG) || empty($columnaH) || empty($columnaI) || empty($columnaJ) || empty($columnaK) || $contador1==0 || $contador2==0 || $contador3==0 || $contador4==0 || $contador5==0 || $contador6==0 || $contador7==0 || $contador8==0 || $contador9==0 || $contador10==0 || $contador11==0 || $contador12==0){

		$mensaje=1;
		$jason['mensaje']=$mensaje;

		$dataItemString = implode(";", $dataItem);
		$jason['dataItemString']=$dataItemString;


		$dataCodigoArrancelarioString = implode(";", $dataCodigoArrancelario);
		$jason['dataCodigoArrancelarioString']=$dataCodigoArrancelarioString;


		$dataDescripcionComercialString = implode(";", $dataDescripcionComercial);
		$jason['dataDescripcionComercialString'] =$dataDescripcionComercialString;


		$dataDisciplinaDeportivaString = implode(";", $dataDisciplinaDeportiva);
		$jason['dataDisciplinaDeportivaString']=$dataDisciplinaDeportivaString;


		$dataMarcaString = implode(";", $dataMarca);
		$jason['dataMarcaString']=$dataMarcaString;


		$dataModeloString = implode(";", $dataModelo);
		$jason['dataModeloString']=$dataModeloString;


		$dataPrecioPeruString = implode(";", $dataPrecioPeru);
		$jason['dataPrecioPeruString']=$dataPrecioPeruString;


		$dataPrecioColombiaString = implode(";", $dataPrecioColombia);
		$jason['dataPrecioColombiaString']=$dataPrecioColombiaString;


		$dataGeneroString = implode(";", $dataGenero);
		$jason['dataGeneroString']=$dataGeneroString;


		$dataGrupoEtarioString = implode(";", $dataGrupoEtario);
		$jason['dataGrupoEtarioString']=$dataGrupoEtarioString;


		$dataCodigoInternacionalString = implode(";", $dataCodigoInternacional);
		$jason['dataCodigoInternacionalString']=$dataCodigoInternacionalString;


		$dataMaterialesComposicionString = implode(";", $dataMaterialesComposicion);
		$jason['dataMaterialesComposicionString']=$dataMaterialesComposicionString;

	}else if($contadorItem>0){

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		$dataItemEscrituraString = implode(";", $dataItemEscritura);
		$jason['dataItemEscrituraString']=$dataItemEscrituraString;

	}else if($contadorItemCalzados>0){

		$mensaje=3;

		$dataItemsCalzadosFilasString = implode(";", $dataItemsCalzadosFilas);
		$dataItemsCalzadosString = implode(";", $dataItemsCalzados2);

		$jason['dataItemsCalzadosFilasString']=$dataItemsCalzadosFilasString;
		$jason['dataItemsCalzadosString']=$dataItemsCalzadosString;
		

		$jason['mensaje']=$mensaje;

	}else if($contadorItemImplementos>0){

		$mensaje=4;

		$dataItemsImplementosFilasString = implode(";", $dataItemsImplementosFilas);
		$dataItemsImplementos2String = implode(";", $dataItemsImplementos2);

		$jason['dataItemsImplementosFilasString']=$dataItemsImplementosFilasString;
		$jason['dataItemsImplementos2String']=$dataItemsImplementos2String;
		

		$jason['mensaje']=$mensaje;

	}else if($contadorDeportes>0){

	   $queryDeportes2="SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreDisciplina, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreDisciplina FROM ic_disciplina;";	
	   $resultadoDeportes2=$conexionEstablecida->query($queryDeportes2);	

	   while($registroDeportes2= $resultadoDeportes2->fetch()) {

			$nombreDisciplina=$registroDeportes2['nombreDisciplina'];

			array_push($dataCompletosDeportes,$nombreDisciplina);

	   }

	   $dataCompletosDeportesString = implode(";", $dataCompletosDeportes);
	   $dataFilasDeportesString = implode(";", $dataFilasDeportes);

		$mensaje=5;
		$jason['dataFilasDeportesString']=$dataFilasDeportesString;
		$jason['mensaje']=$mensaje;
		$jason['dataCompletosDeportesString']=$dataCompletosDeportesString;

	}if($contadorMarcas>0){

		$mensaje=6;

		$dataFilasMarcasString = implode(";", $dataFilasMarcas);
		$dataMarcasCompletasString = implode(";", $dataMarcasCompletas);

		$jason['dataFilasMarcasString']=$dataFilasMarcasString;
		$jason['mensaje']=$mensaje;
		$jason['dataMarcasCompletasString']=$dataMarcasCompletasString;

	}else if($contadorGenero>0){

		$mensaje=9;

		$dataFilasGeneroString = implode(";", $dataFilasGenero);

		$jason['dataFilasGeneroString']=$dataFilasGeneroString;
		$jason['mensaje']=$mensaje;

	}else if($contadorGrupoEtario>0){

		$mensaje=10;

		$dataFilasGrupoEtarioString = implode(";", $dataFilasGrupoEtario);

		$jason['dataFilasGrupoEtarioString']=$dataFilasGrupoEtarioString;
		$jason['mensaje']=$mensaje;

	}else if($contadorDescripciones>0){

		$mensaje=11;

		$dataFilasDescripcionesString = implode(";", $dataFilasDescripciones);
		$dataFilasDescripcionesTodasString = implode(";", $dataFilasDescripcionesTodas);

		$jason['dataFilasDescripcionesTodasString']=$dataFilasDescripcionesTodasString;
		$jason['dataFilasDescripcionesString']=$dataFilasDescripcionesString;
		$jason['mensaje']=$mensaje;

	}else{

		$jason['columnaA']=$columnaA;
		$jason['columnaB']=$columnaB;
		$jason['columnaC']=$columnaC;
		$jason['columnaD']=$columnaD;
		$jason['columnaE']=$columnaE;
		$jason['columnaF']=$columnaF;
		$jason['columnaJ']=$columnaJ;
		$jason['columnaG']=$columnaG;
		$jason['columnaH']=$columnaH;
		$jason['columnaI']=$columnaI;
		$jason['columnaJ']=$columnaJ;
		$jason['columnaK']=$columnaK;
		$jason['columnaL']=$columnaL;

		$jason['stringItemsImplementosCalzadosMixtos']=$stringItemsImplementosCalzadosMixtos ;
		
	}



}else{

	$jason['columnaA']="si__si";

}


echo json_encode($jason);