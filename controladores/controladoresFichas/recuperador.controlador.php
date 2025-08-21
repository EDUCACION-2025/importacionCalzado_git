	<?php	

	class recuperandoDatosDeLogeo{

		public static function recuperandoid(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			// $conexionEstablecida->exec("set names utf8");

 			$centro= new recuperandoLogeo();
		  	$centro->ctrrecuperandoLogeo(); 
 			

		  	$query="SELECT a.id_Actor, a.RasonSocial,  c.nombre AS rol, c.tipo FROM ic_usuario as a INNER JOIN ic_usuario_roles AS b ON a.id_Actor=b.id_usuario INNER JOIN ic_roles AS c ON b.id_rol=c.id_rol WHERE a.usuario='".$_SESSION["nombre"]."';";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idBaseDeDatos=$registro['id_Actor'];
				
			}

		  	return $idBaseDeDatos;
 
		}

		/*======================================
		=            Traer periodos            =
		======================================*/
		
		public static function recuperarPeriodosIngresas(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();


		  	$query="SELECT MAX(idTrimestral) AS trimestrales FROM ic_trimestral_ingresos;";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$trimestrales=$registro['trimestrales'];
				
			}

		    $query="SELECT periodo FROM ic_trimestral_ingresos WHERE idTrimestral='$trimestrales';";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$periodo=$registro['periodo'];
				
			}


		  	return $periodo;
 
 
		}		
		
		/*=====  End of Traer periodos  ======*/
		


		public static function recuperandoFormularioVacioTrimestrales(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

			$query="SELECT b.id_Actor FROM  ic_usuario AS b  WHERE b.usuario='".$_SESSION["nombre"]."';";
			$resultado=$conexionEstablecida->query($query);	
			
			while($registro = $resultado->fetch()) {

				$id_Actor=$registro['id_Actor'];

			}


			$query2="SELECT DISTINCT c.id_producto AS id_productoDos FROM ic_emisioncertificado AS d INNER JOIN ic_ingresoproductoadicional AS c ON d.codigoGenera=c.codigo_solicitud WHERE d.id_importador='$id_Actor' AND c.columnaTrimestral IS NULL AND c.identificadorProducto IS NULL GROUP BY c.id_producto ORDER BY c.id_productosnuevoIngreso DESC LIMIT 1;";
			$resultado2=$conexionEstablecida->query($query2);	
			
			while($registro2 = $resultado2->fetch()) {

				$id_producto=$registro2['id_productoDos'];

			}


		  	return $id_producto;
 
 
		}		

		/*============================================
		=            Controlador Periodos            =
		============================================*/
		
		public static function recuperPeriodosConcatenadores(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

			date_default_timezone_set("America/Guayaquil");

			$mesActual = date('m');

			$mesActual= intval($mesActual); 

			$anioActual = date('Y');

			$anioActual = intval($anioActual);


			$variablePeriodos="";

			if ($mesActual==1 || $mesActual==2 | $mesActual==3) {
				
				$variablePeriodos="PRIMER PERIODO";

			}else if($mesActual==4 || $mesActual==5 | $mesActual==6){

				$variablePeriodos="SEGUNDO PERIODO";

			}else if($mesActual==7 || $mesActual==8 | $mesActual==9){

				$variablePeriodos="TERCER PERIODO";

			}else if($mesActual==10 || $mesActual==11 | $mesActual==12){

				$variablePeriodos="CUARTO PERIODO";

			}


		  	$query="SELECT idTrimestral FROM ic_trimestral_ingresos WHERE YEAR(fecha)='$anioActual' AND periodo='$variablePeriodos';";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idTrimestral=$registro['idTrimestral'];
				
			}

		  	return $idTrimestral;
 
 
		}		
		
		/*=====  End of Controlador Periodos  ======*/

		/*===============================
		=            Calzado            =
		===============================*/
		
		public static function recuperandoCalzadosContretos(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();


 			$centro= new recuperandoLogeo();
		  	$centro->ctrrecuperandoLogeo(); 

		  	$data=array();
 			
			$query="SELECT id_Calzado,CONCAT(codigoCalzado,' ',descripcionCalzado) AS codigoCalzado FROM ic_calzadoeimplemento WHERE id_Item = '1' AND estadoCalzado='A';";
			$resultado=$conexionEstablecida->query($query);	
			
			while($registro = $resultado->fetch()) {

				$codigoCalzado=$registro['codigoCalzado'];

				array_push($data,$codigoCalzado);

			}

			$stringCalzados = implode("<br>", $data);

		  	return $stringCalzados;
 
		}

		
		/*=====  End of Calzado  ======*/

		/*===================================
		=            Descripción            =
		===================================*/
		
		public static function recuperandoDescripcionesConcretas(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();


 			$centro= new recuperandoLogeo();
		  	$centro->ctrrecuperandoLogeo(); 

		  	$data=array();
 			
			$query="SELECT idDescripcionComercial,nombreDescripcion FROM ic_descripcionComercial WHERE estado='A';";
			$resultado=$conexionEstablecida->query($query);	
			
			while($registro = $resultado->fetch()) {

				$nombreDescripcion=$registro['nombreDescripcion'];

				array_push($data,$nombreDescripcion);

			}

			$stringDescripcion = implode("<br>", $data);

		  	return $stringDescripcion;
 
		}		
		
		/*=====  End of Descripción  ======*/
		
		
		/*==========================================
		=            Modal activaciones            =
		==========================================*/
		
		public static function recuperandoModalProductos(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();


 			$centro= new recuperandoLogeo();
		  	$centro->ctrrecuperandoLogeo(); 

		  	$data=array();
 			
			$query="SELECT a.columnaIndicacion FROM ic_ingresoproductoadicional AS a INNER JOIN ic_usuario AS b ON a.id_ingresaInfo=b.id_Actor WHERE a.columnaIndicacion='A' AND b.usuario='".$_SESSION["nombre"]."';";
			$resultado=$conexionEstablecida->query($query);	
			
			while($registro = $resultado->fetch()) {

				$columnaIndicacion=$registro['columnaIndicacion'];

			}


		  	return $columnaIndicacion;
 
		}		
		
		/*=====  End of Modal activaciones  ======*/
		
		/*================================================
		=            Certificados y productos            =
		================================================*/
		
		public static function recuperandoCertificadosProductos(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();


 			$centro= new recuperandoLogeo();
		  	$centro->ctrrecuperandoLogeo(); 

		  	$data=array();
 			
			$query="SELECT id_Actor FROM ic_usuario WHERE usuario='".$_SESSION["nombre"]."';";
			$resultado=$conexionEstablecida->query($query);	
			
			while($registro = $resultado->fetch()) {

				$id_Actor=$registro['id_Actor'];

			}

			$query2="SELECT DISTINCT c.id_productosnuevoIngreso FROM ic_emisioncertificado AS d LEFT JOIN ic_ingresoproductoadicional AS c ON d.codigoGenera=c.codigo_solicitud LEFT JOIN ic_productos_trimestrales AS e ON e.id_producto=c.id_productosnuevoIngreso WHERE d.id_importador='$id_Actor' AND c.columnaTrimestral IS NULL AND c.id_productosnuevoIngreso IS NOT NULL ORDER BY c.id_productosnuevoIngreso DESC;";
			$resultado2=$conexionEstablecida->query($query2);	
			
			while($registro2 = $resultado2->fetch()) {

				$id_productosnuevoIngreso=$registro2['id_productosnuevoIngreso'];

			}


		  	return $id_productosnuevoIngreso;
 
		}		
		
		/*=====  End of Certificados y productos  ======*/
		



		/*==============================================
		=            Implementos Deportivos            =
		==============================================*/
		
		public static function recuperandoImplementosDeportivosContretos(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$centro= new recuperandoLogeo();
		  	$centro->ctrrecuperandoLogeo(); 

		  	$data=array();
 			
			$query="SELECT id_Calzado,CONCAT(codigoCalzado,' ',descripcionCalzado) AS codigoCalzado FROM ic_calzadoeimplemento WHERE id_Item = '2' AND estadoCalzado='A';";
			$resultado=$conexionEstablecida->query($query);	
			
			while($registro = $resultado->fetch()) {

				$codigoCalzado=$registro['codigoCalzado'];

				array_push($data,$codigoCalzado);

			}

			$stringCalzados = implode("<br>", $data);

		  	return $stringCalzados;
 
		}		
		
		/*=====  End of Implementos Deportivos  ======*/
		
		/*================================
		=            Deportes            =
		================================*/
		
		
		public static function recuperandoDeportesContretos(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$centro= new recuperandoLogeo();
		  	$centro->ctrrecuperandoLogeo(); 

		  	$data=array();
 			
		   $queryDeportes2="SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreDisciplina, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreDisciplina FROM ic_disciplina WHERE estado='A';";	
		   $resultadoDeportes2=$conexionEstablecida->query($queryDeportes2);	

		   while($registroDeportes2= $resultadoDeportes2->fetch()) {

				$nombreDisciplina=$registroDeportes2['nombreDisciplina'];

				array_push($data,$nombreDisciplina);

		   }
			$stringDeportes = implode("<br>", $data);

		  	return $stringDeportes;
 
		}		
				
		
		/*=====  End of Deportes  ======*/
		


		public static function recuperandoMarcaMarcadas(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$centro= new recuperandoLogeo();
		  	$centro->ctrrecuperandoLogeo(); 
 			
 			$data=array();


		  	$query2="SELECT a.id_Actor FROM ic_usuario as a WHERE a.usuario='".$_SESSION["nombre"]."';";
			$resultado2 = $conexionEstablecida->query($query2);

			while($registro2 = $resultado2->fetch()) {

				$id_Actor=$registro2['id_Actor'];
				
			}


		  	$query="SELECT id_documentoAdicional,nombreMarca,(CASE WHEN da.nombreMarca = '100' THEN da.nombreMarcaAdiciona ELSE (SELECT nombreMarca FROM ic_marca m WHERE m.id_marca = da.nombreMarca) END) as marca from ic_documentoadicional da where id_Actor ='$id_Actor' and estadoMarca = 'A' ORDER BY nombreMarcaAdiciona asc;";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$id_documentoAdicional=$registro['id_documentoAdicional'];
				$marca=$registro['marca'];

				$complemento=$id_documentoAdicional."__".$marca;
				
				array_push($data,$complemento);

			}

			$dataString = implode("_________________", $data);

		  	return $dataString;
 
		}


		public static function recuperandoMarcaMarcadasDoces(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$centro= new recuperandoLogeo();
		  	$centro->ctrrecuperandoLogeo(); 
 			
 			$data=array();


		  	$query2="SELECT a.id_Actor FROM ic_usuario as a WHERE a.usuario='".$_SESSION["nombre"]."';";
			$resultado2 = $conexionEstablecida->query($query2);

			while($registro2 = $resultado2->fetch()) {

				$id_Actor=$registro2['id_Actor'];
				
			}


		  	$query="SELECT id_documentoAdicional,nombreMarca,(CASE WHEN da.nombreMarca = '100' THEN da.nombreMarcaAdiciona ELSE (SELECT nombreMarca FROM ic_marca m WHERE m.id_marca = da.nombreMarca) END) as marca from ic_documentoadicional da where id_Actor ='$id_Actor' and estadoMarca = 'A' ORDER BY nombreMarcaAdiciona asc;";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$id_documentoAdicional=$registro['id_documentoAdicional'];
				$marca=$registro['marca'];

				$complemento=$marca;
				
				array_push($data,$complemento);

			}

			$dataString = implode(",  ", $data);

		  	return $dataString;
 
		}




		public static function recuperandoIdFormulario(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			// $conexionEstablecida->exec("set names utf8");

 			$centro= new recuperandoLogeo();
		  	$centro->ctrrecuperandoLogeo(); 
 			

		  	$query="SELECT r.id_rol FROM ic_roles r INNER JOIN ic_usuario_roles ur on r.id_rol = ur.id_rol INNER JOIN ic_usuario u on ur.id_usuario = u.id_Actor WHERE u.usuario = '".$_SESSION["nombre"]."';";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idBaseDeDatos=$registro['id_rol'];
				
			}

		  	return $idBaseDeDatos;
 
		}


		public static function recuperandoruc(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$conexionEstablecida->exec("set names utf8");

		  	$query="SELECT a.id_Actor, a.ruc,  a.RasonSocial,  c.nombre AS rol, c.tipo FROM ic_usuario as a INNER JOIN ic_usuario_roles AS b ON a.id_Actor=b.id_usuario INNER JOIN ic_roles AS c ON b.id_rol=c.id_rol WHERE a.usuario='".$_SESSION["nombre"]."';";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idBaseDeDatos=$registro['ruc'];
				
			}

			return $idBaseDeDatos;

		}

		public static function recuperandoRazonSocial(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			// $conexionEstablecida->exec("set names utf8");

		  	$query="SELECT a.id_Actor, a.ruc,  a.RasonSocial,  c.nombre AS rol, c.tipo FROM ic_usuario as a INNER JOIN ic_usuario_roles AS b ON a.id_Actor=b.id_usuario INNER JOIN ic_roles AS c ON b.id_rol=c.id_rol WHERE a.usuario='".$_SESSION["nombre"]."';";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idBaseDeDatos=$registro['RasonSocial'];
				
			}


		  	return $idBaseDeDatos;

		}

		
		public static function recuperandoCantidad(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$conexionEstablecida->exec("set names utf8");

		  	$query="SELECT cantidad FROM ic_ingresoproducto where id_importador = (SELECT id_Actor FROM ic_usuario WHERE usuario = '".$_SESSION["nombre"]."') AND (cantidad <> '' or cantidad IS NULL) AND checkCalificacion != 'A';";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idBaseDeDatos=$registro['cantidad'];
				
			}


		  	return $idBaseDeDatos;

		}

		public static function recuperandoCantidadAdicional(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$conexionEstablecida->exec("set names utf8");

		  	$query="SELECT masProductos FROM ic_ingresoproducto where id_importador = (SELECT id_Actor FROM ic_usuario WHERE usuario = '".$_SESSION["nombre"]."') AND masProductos = 'A';";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idBaseDeDatos=$registro['cantidad'];
				
			}


		  	return $idBaseDeDatos;

		}

		public static function recuperandoruccodigo(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$conexionEstablecida->exec("set names utf8");

		  	$query="SELECT  CONCAT(SUBSTRING((ruc),8,3),SUBSTRING((ruc),1,3)) as ruc1  FROM ic_usuario WHERE usuario = '".$_SESSION["nombre"]."';";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idBaseDeDatos=$registro['ruc1'];
				
			}


		  	return $idBaseDeDatos;

		}

		public static function recuperandofincodigo(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$conexionEstablecida->exec("set names utf8");

		  	$query="SELECT IF(EXISTS(SELECT DISTINCT(codigo_solicitud) FROM ic_ingresoproducto WHERE id_importador = (SELECT id_Actor FROM ic_usuario where usuario='".$_SESSION["nombre"]."') and codigo_solicitud is not null limit 1), (SELECT DISTINCT(max(SUBSTR(codigo_solicitud,23,2)))+1 FROM ic_ingresoproducto  WHERE id_importador = (SELECT id_Actor FROM ic_usuario where usuario='".$_SESSION["nombre"]."')), 1) as codigo;";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idBaseDeDatos=$registro['codigo'];
				
			}


		  	return $idBaseDeDatos;

		}

		public static function recuperandofincodigoAdicional(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$conexionEstablecida->exec("set names utf8");

		  	$query="SELECT IF(EXISTS(SELECT DISTINCT(codigo_solicitud) FROM ic_ingresoproductoadicional WHERE id_ingresaInfo = (SELECT id_Actor FROM ic_usuario where usuario='".$_SESSION["nombre"]."') and codigo_solicitud is not null limit 1), (SELECT DISTINCT(max(CAST((SUBSTR(codigo_solicitud,25,5)) AS UNSIGNED INTEGER)))+1 FROM ic_ingresoproductoadicional  WHERE id_ingresaInfo = (SELECT id_Actor FROM ic_usuario where usuario='".$_SESSION["nombre"]."')), 1) as codigo;";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idBaseDeDatos=$registro['codigo'];
				
			}


		  	return $idBaseDeDatos;

		}

		public static function recuperandofincodigoGenerado(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$conexionEstablecida->exec("set names utf8");

		  	$query="SELECT CONCAT(REPLACE(DATE_FORMAT((DATE(NOW())),'%d%m%Y'),'-',''),'-ICIDE-',SUBSTRING(ruc,8,3),SUBSTRING(ruc,1,3),'-') as codigo  FROM ic_usuario where usuario='".$_SESSION["nombre"]."';";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idBaseDeDatos=$registro['codigo'];
				
			}


		  	return $idBaseDeDatos;

		}



		public static function recuperandoEncuesta(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$conexionEstablecida->exec("set names utf8");

		  	$query="SELECT id_usuario FROM ic_encuestas_satisfaccion WHERE id_usuario = (SELECT id_Actor FROM ic_usuario where usuario = '".$_SESSION["nombre"]."');";



			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$codEncuestaDeDatos=$registro['id_usuario'];
				
			}


		  	return $codEncuestaDeDatos;

		}



		public static function recuperandofincodigoGeneradoAdicional(){
			
		  	$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();

 			$conexionEstablecida->exec("set names utf8");

		  	$query="SELECT CONCAT(REPLACE(DATE_FORMAT((DATE(NOW())),'%d%m%Y'),'-',''),'-ICIDE-',SUBSTRING(ruc,8,3),SUBSTRING(ruc,1,3),'-','A','-') as codigo  FROM ic_usuario where usuario='".$_SESSION["nombre"]."';";
			$resultado = $conexionEstablecida->query($query);

			while($registro = $resultado->fetch()) {

				$idBaseDeDatos=$registro['codigo'];
				
			}


		  	return $idBaseDeDatos;

		}

		


	}


	
  	
