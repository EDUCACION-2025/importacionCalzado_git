<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  $rurRecuperado=$nombreObjeto->recuperandoruc();
  $rasonRecuperado=$nombreObjeto->recuperandoRazonSocial();
  $recuperaCanti=$nombreObjeto->recuperandoCantidadAdicional();
  $recuperarCodigo=$nombreObjeto->recuperandoruccodigo();
  $recuperarFinCodigo=$nombreObjeto->recuperandofincodigoAdicional();
  $recuperarFinCodigoGenerado=$nombreObjeto->recuperandofincodigoGeneradoAdicional();
  extract($_POST);
?> 

<!-- <--=======================================
=            Sección Principal            =
========================================-->
<div class="wrapper row3">
   
		
	<div class="contenedor__principal__de__formularios">
			    	
		<!--==========================================
		=            Evaludador de vacios            =
		===========================================-->
			
		<input type="hidden" name="cantidadEvaluadorVaciosProducto" id="cantidadEvaluadorVaciosProducto">
		<input type="hidden" name="cantidadEvaluadorVacios" id="cantidadEvaluadorVacios">
		<input type="hidden" name="cantidadEvaluadorVaciosPesoNeto" id="cantidadEvaluadorVaciosPesoNeto">
		<input type="hidden" name="cantidadEvaluadorVaciosPesoBrut" id="cantidadEvaluadorVaciosPesoBrut">
		<input type="hidden" name="cantidadEvaluadorVaciosValor" id="cantidadEvaluadorVaciosValor">
		<input type="hidden" name="cantidadEvaluadorVaciosPrecio" id="cantidadEvaluadorVaciosPrecio">
		<input type="hidden" name="cantidadEvaluadorVaciosPairOri" id="cantidadEvaluadorVaciosPairOri">
		<input type="hidden" name="cantidadEvaluadorVaciosPaisPro" id="cantidadEvaluadorVaciosPaisPro">
		<input type="hidden" name="cantidadEvaluadorVaciosProvRaz" id="cantidadEvaluadorVaciosProvRaz">
		<input type="hidden" name="cantidadEvaluadorVaciosProvRuc" id="cantidadEvaluadorVaciosProvRuc">

		<input type="hidden" name="numeroRucRecuperr" id="numeroRucRecuperr" value="<?php   echo $recuperarCodigo; ?>">

	  	<input type="hidden" name="numeroFinRecuperr" id="numeroFinRecuperr" value="<?php   echo $recuperarFinCodigo; ?>">

		<input type="hidden" name="idImportador1" id="idImportador1" value="<?php   echo $IdCompletoUsuario; ?>">

		<input type="hidden" name="recuperaCantidTable1" id="recuperaCantidTable1" value="<?php   echo $recuperaCanti; ?>">

		<!--====  End of Evaludador de vacios  ====-->
			
		<div class="contenedor__flexibles__productos__importadores">

			Codigo Generado: &nbsp; &nbsp; <?php echo $recuperarFinCodigoGenerado.$recuperarFinCodigo ; ?>

			<input type="hidden" style="width: 120%" name="codioRecupera" id="codioRecupera" value="<?php   echo $recuperarFinCodigoGenerado.$recuperarFinCodigo ; ?>" class="form-control" readonly="" >

		</div>

		<br>

		<a style="padding: 1em; color:white; background:#1565c0; font-size: 12px; border-radius: .8em" href="catalogoHistorico">REGRESAR</a>

		<br>

		<div class="contenedor__flexibles__productos__importadores">

			<table class="cabeceradetablaMercaderia1"></table>

		</div>

		<!-- <input type="submit" name="enviarCertificadoAdicional" id="enviarCertificadoAdicional" class=" btn btn-primary" value="Enviar Informacion" style="padding:.8em; border-radius: .5em; font-weight: bold; color: white; background:#1565c0;"> -->

		<div class="reload__cargar2"></div>

	</div>

	<br>
	<br>
	<br>
	<br>
	<br>

</div>


<!--====  End of Sección Principal  ====--!