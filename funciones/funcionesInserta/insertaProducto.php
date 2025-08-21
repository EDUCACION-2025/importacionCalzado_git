<?php

	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

 	$itemArray = explode(",", $stringItem);
 	$codigoArrancelarioArray = explode(",", $stringcodigoArrancelario);
 	$descripcionArray = explode(",", $stringdescripcion);
 	$disciplinaDeportivaArray = explode(",", $stringdisciplinaDeportiva);
 	$marcaArray = explode(",", $stringmarca);
 	$modeloArray = explode(",", $stringmodelo);
 	$precioVentaPeruArray = explode(",", $stringprecioVentaPeru);
 	$precioVentaColombiaArray = explode(",", $stringprecioVentaColombia);
 	$generoArray = explode(",", $stringgeneroArray);
 	$grupoEtarioArray = explode(",", $stringgrupoEtario);
 	$codigoUnicoInternacionalArray = explode(",", $stringcodigoUnicoInternacional);
 	$materialesArray = explode(",", $stringMaterialesArray);

	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');

 	for ($i=0; $i < $imagenProductos; $i++) { 

 		$nombreFiles='photoProductos'.$i;

 		$tipo = $_FILES[$nombreFiles]['type']; 
		$archivotmp = $_FILES[$nombreFiles]['tmp_name'];
		$destino="../../images/imagenesCatalogo";


		$imagen= str_replace (" " ,"" ,$codigoUnicoInternacionalArray[$i]).'1'.str_replace ( ":" , "" , date("H:i:s")); 

		copy($archivotmp,"$destino/$imagen.jpg");

		$query="SELECT id_Calzado FROM ic_calzadoeimplemento WHERE codigoCalzado='$codigoArrancelarioArray[$i]';";
		$resultado = $conexionEstablecida->query($query);

		while($registro = $resultado->fetch()) {

			$id_Calzado=$registro['id_Calzado'];
				
		}


		$marcaArray[$i]=trim($marcaArray[$i]);

		$query = 'INSERT INTO `ezonshar_mdepsaddb`.`ic_ingresoproducto` (`id_producto`, `id_item`, `id_calzadoeimplemento`, `cantidad`, `pesoNeto`, `pesoBruto`, `valorUSD`, `descripcionComercial`, `id_disciplinaDeportiva`, `id_marca`, `modelo`, `codigoCalzadoImplemento`, `precioUSD`, `imagen1`, `tipoIma1`, `imagen2`, `tipoIma2`, `imagen3`, `tipoIma3`, `imagen4`, `tipoIma4`, `id_importador`, `fechaIngresa`, `horaIngresa`, `precioPeru`, `precioColombia`, `genero`, `grupo_etario`, `calificacion`, `observacion`, `especializado`, `fechaAprueba`, `horaAprueba`, `nombreProveedor`, `rucProveedor`, `materiales`) VALUES (NULL, "' . $itemArray[$i] . '", "' . $id_Calzado . '", NULL, NULL, NULL, NULL, "' . $descripcionArray[$i] . '", "' . $disciplinaDeportivaArray[$i] . '", "' . $marcaArray[$i] . '", "' . $modeloArray[$i] . '", "' . $codigoUnicoInternacionalArray[$i] . '", NULL, "' . $imagen . '", NULL, NULL, NULL, NULL, NULL, NULL, NULL, "' . $idImportador . '", "' . $fecha_actual . '", "' . $hora_actual . '", "' . $precioVentaPeruArray[$i] . '", "' . $precioVentaColombiaArray[$i] . '", "' . $generoArray[$i] . '", "' . $grupoEtarioArray[$i] . '", "P", NULL, NULL, NULL, NULL, NULL, NULL, "' . $materialesArray[$i] . '")';


		$resultado = $conexionEstablecida->exec($query);


 	}


	$mensaje=1;
	$jason['mensaje']=$mensaje;
	echo json_encode($jason);