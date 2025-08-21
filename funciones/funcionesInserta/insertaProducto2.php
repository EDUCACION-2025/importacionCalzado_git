<?php

	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	extract($_POST);

	if (empty($selectItem) || empty($precioPeru) || empty($precioColombia) || empty($marca)) {
		
		//echo ("entro aqui");	
		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

 			$tipo = $_FILES['foto']['type']; 
			$archivotmp = $_FILES['foto']['tmp_name'];
			$destino="../../images/imagenesCatalogo";

			$tipo1 = $_FILES['foto1']['type']; 
			$archivotmp1 = $_FILES['foto1']['tmp_name'];
			$destino1="../../images/imagenesCatalogo";
			
			$tipo2 = $_FILES['foto2']['type']; 
			$archivotmp2 = $_FILES['foto2']['tmp_name'];
			$destino2="../../images/imagenesCatalogo";

			$tipo3 = $_FILES['foto3']['type']; 
			$archivotmp3 = $_FILES['foto3']['tmp_name'];
			$destino3="../../images/imagenesCatalogo";

			if(empty($archivotmp)){

						$mensaje=2;
						$jason['mensaje']=$mensaje;
						echo json_encode($jason);

					}else{



						if ($tipo == "application/pdf"){

							$FOTO= str_replace ( " " , "" ,$codigoCalzado).'1'.str_replace ( ":" , "" , date("H:i:s")); 
							$FOTO1= str_replace ( " " , "" ,$codigoCalzado).'2'.str_replace ( ":" , "" , date("H:i:s")); 
							$FOTO2= str_replace ( " " , "" ,$codigoCalzado).'3'.str_replace ( ":" , "" , date("H:i:s")); 
							$FOTO3= str_replace ( " " , "" ,$codigoCalzado).'4'.str_replace ( ":" , "" , date("H:i:s")); 
				 

							 if ($tipo=="application/pdf") {

								copy($archivotmp,"$destino/$FOTO.pdf");

							}else if ($tipo=="image/jpeg" || $tipo=="image/gif" || $tipo=="image/png" || $tipo=="image/jpeg") {

								copy($archivotmp,"$destino/$FOTO.jpg");

							}

							if ($tipo1=="application/pdf") {

								copy($archivotmp1,"$destino1/$FOTO1.pdf");

							}else if ($tipo1=="image/jpeg" || $tipo1=="image/gif" || $tipo1=="image/png" || $tipo1=="image/jpeg") {

								copy($archivotmp1,"$destino1/$FOTO1.jpg");

							}

							if ($tipo2=="application/pdf") {

								copy($archivotmp2,"$destino2/$FOTO2.pdf");

							}else if ($tipo2=="image/jpeg" || $tipo2=="image/gif" || $tipo2=="image/png" || $tipo2=="image/jpeg") {

								copy($archivotmp2,"$destino2/$FOTO2.jpg");

							}
							 	
							if ($tipo3=="application/pdf") {

								copy($archivotmp3,"$destino3/$FOTO3.pdf");

							}else if ($tipo3=="image/jpeg" || $tipo3=="image/gif" || $tipo3=="image/png" || $tipo3=="image/jpeg") {

								copy($archivotmp3,"$destino3/$FOTO3.jpg");

							}
							

							date_default_timezone_set("America/Guayaquil");

							$fecha_actual = date('Y-m-d');
							$hora_actual= date('H:i:s');

							
						$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_ingresoproducto`(`id_producto`, `id_item`, `id_calzadoeimplemento`, `cantidad`, `pesoNeto`, `pesoBruto`, `valorUSD`, `descripcionComercial`, `id_disciplinaDeportiva`, `id_marca`, `modelo`, `codigoCalzadoImplemento`, `precioUSD`, `imagen1`,`tipoIma1`, `imagen2`,`tipoIma2`, `imagen3`,`tipoIma3`, `imagen4`,`tipoIma4`, `id_importador`, `fechaIngresa`, `horaIngresa`,`precioPeru` ,`precioColombia`, `genero`, `grupo_etario`,`calificacion`, `observacion`, `especializado`, `fechaAprueba`, `horaAprueba`,`nombreProveedor`,`rucProveedor`) VALUES (NULL, '$selectItem', '$selectItem2', NULL, NULL, NULL, NULL, '$descripcionComercial', '$disiplinaDeportiva', '$marca', '$modelo', '$codigoCalzado', NULL, '$FOTO', '$tipo', '$FOTO1', '$tipo1', '$FOTO2', '$tipo2', '$FOTO3', '$tipo3','$idImportador','$fecha_actual','$hora_actual','$precioPeru','$precioColombia','$genero','$grupoEtario','P',NULL, NULL, NULL, NULL, NULL, NULL);";

						$resultado = $conexionEstablecida->exec($query);



						$query2="SELECT MAX(id_producto) AS id_producto FROM ic_ingresoproducto;";
						$resultado2 = $conexionEstablecida->query($query2);

						while($registro = $resultado2->fetch()) {

							$idMaximoRecuperado=$registro['id_producto'];

						}



						$mensaje=1;
						$jason['mensaje']=$mensaje;
						echo json_encode($jason);

						}else{

							$mensaje=3;
							$jason['mensaje']=$mensaje;
							echo json_encode($jason);

						}




						

						}

						
	} 