<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();
 	
 	extract($_POST);


 	$query="SELECT u.id_Actor, u.ruc, u.fechaIngresoDocumentos, u.actividadEconomica, u.RasonSocial, u.email, u.telefono, u.celular, u.copiaCedula, u.nombramiento, u.docuRuc, u.certificadoVigente , u.cartaIntencion , u.cedulaRepresentanteLegal, u.nombreRepresentanteLegar, u.declaracionInpuesto, u.declaracionAduaneraDeImportacion, u.emisionDocumentosElectronicos, u.noAdeudarServicio, u.certificadoDeCumplimiento, u.tipoPersona,a1.documento,a1.certificadoMarca,a1.nombreMarcaAdiciona,a1.periodoAniosMarca,a1.fechaInicioMarca,a1.fechaFinMarca,a1.bicicleta,a1.pelotasTennis,a1.cadenasDeRodillos,a1.raquetasDeTennis,a1.sillines,a1.pelotasInflables,a1.calzadoDeportivo,a1.materialesBeisbol,a1.cascosProductos,a1.articulosMaterialTenisDeMesa,IF((ELT(WEEKDAY(CURDATE()) + 1, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'))!='Domingo'AND (ELT(WEEKDAY(CURDATE()) + 1, 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'))!='Sabado',(TIMESTAMPDIFF(DAY, CURDATE(),(ADDDATE(u.fechaIngresoDocumentos, INTERVAL 2 DAY)))),(TIMESTAMPDIFF(DAY, CURDATE(),(ADDDATE(u.fechaIngresoDocumentos, INTERVAL 0 DAY))))) AS diasRestantes FROM ic_usuario as u INNER JOIN ic_usuario_roles as ur on u.id_Actor = ur.id_usuario LEFT JOIN ic_documentoadicional AS a1 ON a1.id_Actor=u.id_Actor WHERE u.estadoActor = 'P';";


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
  