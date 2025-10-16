<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');

	if(empty($id_producto)){

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

		$tipo = $_FILES['cambioImagenExtra']['type']; 
		$archivotmp = $_FILES['cambioImagenExtra']['tmp_name'];
		$destino="../../images/imagenesCatalogo";

		if($selectItem11 == '0'){
			$item = $traeItemOriginal;
		}else{
			$item = $selectItem11;		
		}

		if($selectItem21 == '0' || empty($selectItem21)){
			$item2 = $traeCodigoArancelarioOriginal;
		}else{
			$item2 = $selectItem21;
		}

		if($nombreMarccca == '0' || empty($nombreMarccca)){
			$marcaBC = $marcaImplemento;
		}else{
			$marcaBC = $nombreMarccca;
		}

		if($disiplinaDeportiva1=='0'){
			$disipli = $traeDisciplinaOriginal;
		}else{
			$disipli = $disiplinaDeportiva1;
		}

		if($cambioImagenExtra == 'undefined'){
			$cambioIma = $nomFoto;
		}else{
			$cambioIma = str_replace(" ","",$CodigoImplemento).'IMGMODIFICADA';
			copy($archivotmp,"$destino/$cambioIma.jpg");
		}
		
		if ($grupo_etario=="Ninos") {
			$grupo_etario="Niños"; 
		}

		$descripcionComercial = addslashes($descripcionComercial);
		$modeloImplemento = addslashes($modeloImplemento);
		$materialesEdicion = addslashes($materialesEdicion);

		if ($cambioImagenExtra == 'undefined') {
			
			$query="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproducto` 
					SET `calificacion` = 'P', 
					    `codigoCalzadoImplemento` = '$CodigoImplemento', 
					    `id_marca` = '$marcaBC', 
					    `id_item` = '$item', 
					    `id_calzadoeimplemento` = '$item2', 
					    `descripcionComercial` = '$descripcionComercial', 
					    `modelo` = '$modeloImplemento', 
					    `id_disciplinaDeportiva` = '$disipli', 
					    `precioPeru` = '$preciPerr', 
					    `precioColombia` = '$preColomm',
					    genero='$generoCambiante',
					    grupo_etario='$grupoEtarioCambiantes', 
					    materiales='$materialesEdicion',
					    fechaIngresa='$fecha_actual',
					    estado='R' 
					WHERE `id_producto` = '$id_producto';";
			
		}else{

			$query="UPDATE `ezonshar_mdepsaddb`.`ic_ingresoproducto` 
					SET `calificacion` = 'P', 
					    `codigoCalzadoImplemento` = '$CodigoImplemento', 
					    `id_marca` = '$marcaBC', 
					    `id_item` = '$item', 
					    `id_calzadoeimplemento` = '$item2', 
					    `descripcionComercial` = '$descripcionComercial', 
					    `modelo` = '$modeloImplemento', 
					    `id_disciplinaDeportiva` = '$disipli', 
					    `imagen1` = '$cambioIma.jpg',  
					    `precioPeru` = '$preciPerr', 
					    `precioColombia` = '$preColomm',
					    genero='$generoCambiante',
					    grupo_etario='$grupoEtarioCambiantes', 
					    materiales='$materialesEdicion',
					    fechaIngresa='$fecha_actual',
					    estado='R' 
					WHERE `id_producto` = '$id_producto';";

		}

		$resultado = $conexionEstablecida->exec($query);

		$mensaje=1;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}
?>
