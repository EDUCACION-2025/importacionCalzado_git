<?php

	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

 	date_default_timezone_set("America/Guayaquil");

		$fecha_actual = date('Y-m-d');
		$hora_actual= date('H:i:s');

 	$arrayClaNombre = explode(",", $stringClaNombre);
	$arrayClaPrecio = explode(",", $stringClaPrecio);
	$arrayClaExistencia = explode(",", $stringClaExistencia);
	$arrayClaPesoNeto = explode(",", $stringClaPesoNeto);
	$arrayClaPesoBruto = explode(",", $stringClaPesoBruto);
	$arrayClaValorfob = explode(",", $stringClaValorfob);
	$arrayClaDescripcionComercial = explode(",", $stringClaDescripcionComercial);
	$arrayClaDisciplinaDeportiva = explode(",", $stringClaDisciplinaDeportiva);
	$arrayClaMarca = explode(",", $stringClaMarca);
	$arrayClaModelo = explode(",", $stringClaModelo);
	$arrayClaPreciofob = explode(",", $stringClaPreciofob);
	$arrayClaPaisOrigen = explode(",", $stringClaPaisOrigen);
	$arrayClaPaisProcedencia = explode(",", $stringClaPaisProcedencia);
	$arrayClaNombreProveedor = explode(",", $stringClaNombreProveedor);
	$arrayClaRucProveedor = explode(",", $stringClaRucProveedor);
	$arrayClaPrecioPeru = explode(",", $stringClaPrecioPeru);
	$arrayClaPrecioColombia = explode(",", $stringClaPrecioColombia);
	$arrayClaComposicionProducto = explode(",", $stringClaComposicionProducto);
	$arrayClaTecnologia = explode(",", $stringClaTecnologia);
	$arrayClaMaterial = explode(",", $stringClaMaterial);
	$arrayClaPorcentaje = explode(",", $stringClaPorcentaje);
	$arrayClalink = explode(",", $stringClalink);




	$contador=count($arrayClaNombre);

	if (empty($stringClaNombre)) {
		
		//echo ("entro aqui");	
		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

		for($i=0;$i<$contador;$i++){


			$tipo =$_FILES["lulaImagencitas$i"]['type']; 
			$archivotmp = $_FILES["lulaImagencitas$i"]['tmp_name'];
			$destino="../../images/imagenesCatalogo";



			$nomImagen = str_replace ( " " , "" , $arrayClaExistencia[$i]).'_'.str_replace ( ":" , "" , $hora_actual); 

			copy($archivotmp,"$destino/$nomImagen.jpg");

			$queryConsulta="SELECT id_Calzado FROM ic_calzadoeimplemento WHERE codigoCalzado = '$arrayClaPrecio[$i]';";
 	
			$resultadoCodigo = $conexionEstablecida->query($queryConsulta);

			while($buscarCodigo = $resultadoCodigo->fetch()) {

				$codigoRecuperado = $buscarCodigo['id_Calzado'];
			
			}

			$queryConsultaDisciplina="SELECT id_disciplina FROM ic_disciplina where nombreDisciplina = '$arrayClaDisciplinaDeportiva[$i]';";
 	
			$resultadoDisciplina = $conexionEstablecida->query($queryConsultaDisciplina);

			while($buscarDisciplina = $resultadoDisciplina->fetch()) {

				$disciplinaRecuperado = $buscarDisciplina['id_disciplina'];
			
			}

			// echo $disciplinaRecuperado;

			$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_ingresoproducto` (`id_producto`, `id_item`, `id_calzadoeimplemento`, `cantidad`, `pesoNeto`, `pesoBruto`, `valorUSD`, `descripcionComercial`, `id_disciplinaDeportiva`, `id_marca`, `modelo`, `codigoCalzadoImplemento`, `precioUSD`, `imagen1`, `tipoIma1`, `imagen2`, `tipoIma2`, `imagen3`, `tipoIma3`, `imagen4`, `tipoIma4`, `id_importador`, `fechaIngresa`, `horaIngresa`, `precioPeru`, `precioColombia`, `calificacion`, `observacion`, `especializado`, `fechaAprueba`, `horaAprueba`, `checkCalificacion`, `rucProveedor`, `nombreProveedor`, `PaisOrigen`, `PaisProcedencia`, `fechaInSolicitud`, `horaInSolicitud`, `caliInSolicitud`, `codigo_solicitud`, `id_persona_califica`, `id_calificacionFinalFirmas`, `masProductos`, `material`, `porcenta`, `material1`, `porcenta1`, `link`) VALUES (NULL, '$arrayClaNombre[$i]', '$codigoRecuperado', NULL, '$arrayClaPesoNeto[$i]', '$arrayClaPesoBruto[$i]', '$arrayClaValorfob[$i]', '$arrayClaDescripcionComercial[$i]', '$disciplinaRecuperado', '$arrayClaMarca[$i]', '$arrayClaModelo[$i]', '$arrayClaExistencia[$i]', '$arrayClaPreciofob[$i]',  '$nomImagen', '$tipo',NULL,NULL,NULL,NULL,NULL,NULL, '$idImportador', '$fecha_actual', '$hora_actual', '$arrayClaPrecioPeru[$i]', '$arrayClaPrecioColombia[$i]', 'P', NULL, NULL, NULL, NULL, NULL, '$arrayClaRucProveedor[$i]', '$arrayClaNombreProveedor[$i]', '$arrayClaPaisOrigen[$i]', '$arrayClaPaisProcedencia[$i]', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '$arrayClaComposicionProducto[$i]', '$arrayClaTecnologia[$i]', '$arrayClaMaterial[$i]', '$arrayClaPorcentaje[$i]', '$arrayClalink[$i]');";

			// echo($query);
		 	$resultado1 = $conexionEstablecida->exec($query);

		}

		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);
						
	}