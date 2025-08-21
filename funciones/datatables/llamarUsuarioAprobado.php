<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

 	$conexionEstablecida->exec("set names utf8");
 	
 	extract($_POST);

 	$query="SELECT id_Actor, u.ruc, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(actividadEconomica, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadEconomica, REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(RasonSocial, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS RasonSocial, email, telefono, celular, u.copiaCedula, u.nombramiento, docuRuc, certificadoVigente, u.cartaIntencion, cedulaRepresentanteLegal, nombreRepresentanteLegar, cr.Observacion, u.estadoActor, (SELECT RasonSocial FROM ic_usuario as usu where usu.id_Actor = cr.id_revisaInfo LIMIT 1) AS tecnico, cr.fechaCalifica,u.noAdeudarServicio,u.declaracionInpuesto,u.declaracionAduaneraDeImportacion,u.emisionDocumentosElectronicos  FROM ic_usuario as u INNER JOIN ic_usuario_roles as ur on u.id_Actor = ur.id_usuario INNER JOIN ic_calificacionregistro as cr on u.id_Actor = cr.id_usuarioIngresa WHERE u.estadoActor = 'A';";


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
 