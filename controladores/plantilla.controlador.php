<?php

	class ControladorPlantilla{

		public static function ctrPlantilla(){

			include "vistas/plantilla/plantilla.php";

		}

		public static function ctrHead(){

			include "vistas/vistasGenerales/head.view.php";
			
		}

		public static function ctrMenu(){

			if (isset($_GET["ruta"])) {

				if ($_GET["ruta"]=="ingreso" || $_GET["ruta"]=="registro") {

			  		include "vistas/vistasGenerales/menu.view.php";

			  	}else if($_GET["ruta"]=="ingresoMercaderia" || $_GET["ruta"]=="solicitaCertificado" || $_GET["ruta"]=="catalogo" || $_GET["ruta"]=="ingresoDocumentos" || $_GET["ruta"]=="certificadosAprobados" || $_GET["ruta"]=="certificadosNegados" || $_GET["ruta"]=="documentosParaCertificado" || $_GET["ruta"]=="emitirCertificado"  || $_GET["ruta"]=="corregirDocumentos" || $_GET["ruta"]=="catalogoHistorico" || $_GET["ruta"]=="solicitaCertificadoAdicional" || $_GET["ruta"]=="certificadosAprobadosAdicionales" || $_GET["ruta"]=="registroUsuarios" || $_GET["ruta"]=="registroProductos" || $_GET["ruta"]=="registrosNegados" || $_GET["ruta"]=="productosNegados" || $_GET["ruta"]=="certificadosTecniPendientes" || $_GET["ruta"]=="certificadosTecniAprobados" || $_GET["ruta"]=="certificadosTecniNegados" || $_GET["ruta"]=="marcaGlosario" || $_GET["ruta"]=="registrosAprobados" || $_GET["ruta"]=="productosAceptados" || $_GET["ruta"]=="certificadosAprobadosFin" || $_GET["ruta"]=="leerExcel" || $_GET["ruta"]=="reporteriaImportaciones" || $_GET["ruta"]=="reporteriaImportacionesTrimestral"){

			  		include "vistas/vistasGenerales/menuTecnico.view.php";
			  		
			  	}

			}else{

				include "vistas/vistasGenerales/menu.view.php";
				
			}

		}

		public static function ctrContenidoIndex(){

			  if (isset($_GET["ruta"])) {

			  	if ($_GET["ruta"]=="index" || $_GET["ruta"]=="ingreso"  || $_GET["ruta"]=="registro" || $_GET["ruta"]=="ingresoMercaderia"  ||  $_GET["ruta"]=="salir" || $_GET["ruta"]=="salir2"  || $_GET["ruta"]=="solicitaCertificado" || $_GET["ruta"]=="catalogo" || $_GET["ruta"]=="registroUsuarios" || $_GET["ruta"]=="registroProductos" || $_GET["ruta"]=="registrosNegados" || $_GET["ruta"]=="ingresoDocumentos"  || $_GET["ruta"]=="productosNegados"  || $_GET["ruta"]=="certificadosAprobados" || $_GET["ruta"]=="certificadosNegados"  || $_GET["ruta"]=="certificadosTecniPendientes" || $_GET["ruta"]=="certificadosTecniAprobados" || $_GET["ruta"]=="certificadosTecniNegados" || $_GET["ruta"]=="marcaGlosario" || $_GET["ruta"]=="documentosParaCertificado"	|| $_GET["ruta"]=="certificadosAprobadosFin" || $_GET["ruta"]=="registrosAprobados" || $_GET["ruta"]=="productosAceptados" || $_GET["ruta"]=="emitirCertificado" || $_GET["ruta"]=="corregirDocumentos" || $_GET["ruta"]=="catalogoHistorico" || $_GET["ruta"]=="solicitaCertificadoAdicional" || $_GET["ruta"]=="certificadosAprobadosAdicionales" || $_GET["ruta"]=="leerExcel" || $_GET["ruta"]=="reporteriaImportaciones"  || $_GET["ruta"]=="productosIngresados" || $_GET["ruta"]=="reporteriaImportacionesTrimestral") {
			  		


			  		
			  			include "vistas/contenidoVistas/".$_GET["ruta"].".view.php";

			  	}

			  }else{
			  	
			  	include "vistas/contenidoVistas/ingreso.view.php";

			  }

		}

		public static function ctrFooter(){

			if ($_GET["ruta"]!="productosIngresados") {

				include "vistas/vistasGenerales/footer.view.php";

			}

		}

	}