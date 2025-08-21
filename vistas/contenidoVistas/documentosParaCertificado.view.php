<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  $rurRecuperado=$nombreObjeto->recuperandoruc();

  extract($_POST);
?> 

<div class="wrapper row3">
   

<div class="modal-dialog modal-lg"> 
		
	<div class="contenedor__principal__de__formularios">

		<input type="hidden" name="idImportador" id="idImportador" value="<?php   echo $IdCompletoUsuario; ?>">


		<div id="cuerpoDocumentosParaFin">

			<table class="table table-bordered" style="width: 100%">

				<tr>

					<td colspan="6">

						<center>

							<div class="modal-header" style="background: #1565c0; color: white;">

								<h4 class="modal-title">
									"Formulario para la Importación de Calzado e Implementos Deportivos Especializados"
								</h4>

							</div>

						</center>

					</td>

				</tr> 		
									
				<tr>

					<td style="width: 16%">
						Nombre/Razón Social/ del Importador:
					</td>

					<td>
						<input type="text" name="" class="form-control" value="<?php   echo $NombreUsuario; ?>" readonly="">
					</td>

					<td style="width: 20%">
						Número de identificación/RUC del Importador:
					</td>

					<td style="width: 10%">
						<input type="text" name="numeRucRecu" id="numeRucRecu" class="form-control" value="<?php   echo $rurRecuperado; ?>" readonly="">
					</td>


					<td style="width: 10%">
						Fecha de Documento
					</td>

					<td style="width: 10%">
						<input type="text" name="" class="form-control" value="<?php echo date("d")?> / <?php echo date("m")?> / <?php echo date("Y")?>" readonly="">
					</td>

				</tr>

			</table>

			<center>

				<h4>
					<strong> 
						INGRESO DE DOCUMENTOS HABILITANTES
					</strong>
				</h4>

			</center>

			<table class="table table-bordered" style="border: hidden; width: 90%">

				<tr>

					<td style="border: hidden;width: 30%">
						Declaración Juramentada incluida en la Resolución 019-2019 del COMEX
					</td>
												
					<td style="border: hidden;">
						Certificado de encontrarse en Listas Blancas con el Servicio de Rentas Internas (SRI) 
					</td>
					
				</tr>

				<tr>

					<td style="border: hidden;">
						<input type="file" name="documentoCalificaCertificado1" id="documentoCalificaCertificado1">
					</td>
													
					<td style="border: hidden;">
						<input type="file" name="documentoCalificaCertificado3" id="documentoCalificaCertificado3">
					</td>
						
				</tr>

				<tr>

					<td style="border: hidden;">
						Certificado de Cumplimiento de Obligaciones emitido por el Instituto Ecuatoriano de Seguridad Social(IESS)
					</td>

					<td style="border: hidden;">
						Certificado de no adeudar al servicio nacional de aduana del Ecuador
					</td>


				</tr>

				<tr>

					<td style="border: hidden;">
						<input type="file" name="documentoCalificaCertificado7" id="documentoCalificaCertificado7">
					</td>

					<td style="border: hidden;">
						<input type="file" name="certificadoAduanas" id="certificadoAduanas">
					</td>


				</tr>



			</table>
										
			<table class="table table-bordered" style="border: hidden; width: 90%">

				<tr>

					<td>
						Seleccione Código del Certificado
					</td>

					<td>
						<select class="form-control" name="codigoParaEmpatar" id="codigoParaEmpatar"></select>
					</td>

					<td>
						<input type="submit" name="enviarInfoAdicio" id="enviarInfoAdicio" value="ENVIAR DOCUMENTOS" style="background:#2979ff!important; color: white;padding: .5em; border-radius: .5em;">
					</td>

				</tr>

			</table>

		</div>

	</div>

</div>