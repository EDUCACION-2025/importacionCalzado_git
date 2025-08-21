<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  $rurRecuperado=$nombreObjeto->recuperandoruc();
  $rasonRecuperado=$nombreObjeto->recuperandoRazonSocial();
  $recuperaCanti=$nombreObjeto->recuperandoCantidad();
  $recuperarCodigo=$nombreObjeto->recuperandoruccodigo();
  $recuperarFinCodigo=$nombreObjeto->recuperandofincodigo();
  $recuperarFinCodigoGenerado=$nombreObjeto->recuperandofincodigoGenerado();
  extract($_POST);
?> 

<!-- <--=======================================
=            Sección Principal            =
========================================-->
<div class="wrapper row3">
    

<div class="modal-dialog modal-lg"> 
		
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
		<!--====  End of Evaludador de vacios  ====-->
		
		<input type="hidden" name="numeroRucRecuperr" id="numeroRucRecuperr" value="<?php   echo $recuperarCodigo; ?>">

  		<input type="hidden" name="numeroFinRecuperr" id="numeroFinRecuperr" value="<?php   echo $recuperarFinCodigo; ?>">

		<input type="hidden" name="idImportador" id="idImportador" value="<?php   echo $IdCompletoUsuario; ?>">

		<input type="hidden" name="recuperaCantidTable" id="recuperaCantidTable" value="<?php   echo $recuperaCanti; ?>">

			  		<div class="contenedor__principal">
			  			<div class="wrapper row3">
			      

							<div id="productosParaCertificadoFin" style="width: 140%; position: relative; left: -20%;">

								<label>Codigo Generado: <input type="text" style="width: 110%" name="codioRecupera" id="codioRecupera" value="<?php   echo $recuperarFinCodigoGenerado.$recuperarFinCodigo ; ?>" class="form-control" readonly="" ></label>

								<center>
									<div class="modal-header" style="background: #D1EBF7; color: black; width: 100%">
										<h4 class="modal-title">"Reporte de las mercancias a importar"</h4>
									</div>
								</center>

								<div id="div1" style="width: 100%"> 
									
									<table class="cabeceradetablaMercaderia" style="width: 180%">

										<thead> 
											<tr>
												<td><center>ITEM</center></td>
												<td><center>Código Arancelario</center></td>
												<td><center>Código de Calzado e <br/>Implementos Especializados</center></td>
												<td><center>Cantidad<br/> (Pares/Unidades)</center></td>
												<td><center>Peso Neto</center></td>
												<td><center>Peso Bruto</center></td>
												<td><center>Valor en USD FOB</center></td>
												<td><center>Descripción <br/>Comercial</center></td>
												<td><center>Disciplina Deportiva /<br/>Actividad Física</center></td>
												<td><center>Marca</center></td>
												<td><center>Modelo</center></td>
												<td><center>Precio USD (FOB/PAR O FOB/UNIDAD)</center></td>
												<td><center>País de Origen</center></td>
												<td><center>País de Procedencia:</center></td>
												<td><center>Nombre/Razòn Social/ del Proveedor:</center></td>
												<td><center>Número de identificación/RUC del Proveedor:</center></td>
											</tr>
										</thead>
											    		
									</table>

								</div>	

						    	<center><br><input type="submit" name="enviarCertificado" id="enviarCertificado" class=" btn btn-primary" value="Enviar Informacion"></center>

							</div>

						
						
					</div>    	

			    </div>
	</div>
			
</div>

</div>


<!--====  End of Sección Principal  ====--!