<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
?>


<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
    	
  		<div class="contenedor__principal">
  			
  			<input type="hidden" name="id_ingresoLogin" id="id_ingresoLogin" value="<?php  echo $IdCompletoUsuario; ?>" >
  			
  			<table id="tablaDocumentosUsuarios" name="tablaDocumentosUsuarios">

				<thead>

				   	<tr>
				   		<th>FECHA DE CREACIÓN</th>
				     	<th>RUC</th>
			            <th>RAZÓN SOCIAL</th> 
				     	<th>E-MAIL</th>
				     	<th>DÍAS RESTANTES</th>
						<th>REVISAR</th>
					</tr>

		        </thead>

				<tfoot>

				   	<tr>
				   		<th>FECHA DE CREACIÓN</th>
						<th>RUC</th>
			          	<th>RAZÓN SOCIAL</th>
				      	<th>E-MAIL</th>
				      	<th>-</th>
				       	<th>-</th>
				   	</tr>

			    </tfoot>

			</table>  

  		</div>
  	
  	</div>

</div>


<div id="edicionUsuarioDocu" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">

	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">INFORMACIÓN IMPORTADOR</h4>

	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input type="hidden" name="id_ingresoInfo" id="id_ingresoInfo" >

        		<table class="table table-bordered">

        			<tr>

        				<td>

        					<label>RUC</label>

			                <div class="form-group">

			                  <div class="input-group">
			                      <span class="input-group-addon"><i class="fas fa-building"></i></span>
			                      <input class="form-control inpunt-lg" name="rucTabla" id="rucTabla" readonly="" />
			                  </div>

			                </div>

        				</td>

        				<td>

        					<label>RAZÓN SOCIAL</label>

			                <div class="form-group">

			                  <div class="input-group">

			                      <span class="input-group-addon"><i class="fas fa-building"></i></span>
			                      <input class="form-control inpunt-lg" name="razonTabla" id="razonTabla" readonly="" />

			                  </div>

			                </div>

        				</td>

        			</tr>

        		</table>
        		
        		<label>ACTIVIDAD ECONOMICA PRINCIPAL</label>

			    <div class="form-group">

			        <div class="input-group">

			            <span class="input-group-addon"><i class="fas fa-building"></i></span>
			            <textarea class="form-control inpunt-lg" name="activiTabla" id="activiTabla" row="4" readonly="" /></textarea>

			        </div>

			    </div>
        			

				<table class="table table-bordered oculto__representantes__legales">

		            <tr>

		              <td style="width: 40%" class="oculto__representantes__legales">

		                  <label>Cedula Representante Legal</label>

		                  <div class="form-group">

		                    <div class="input-group">

		                    	<span class="input-group-addon"><i class="fas fa-user"></i></span>
		                        <input type="text" class="form-control"  name="cedulaTabla" id="cedulaTabla" readonly="">
		                         
		                    </div>

		                  </div>
		              </td>

		              <td class="oculto__representantes__legales">

		                <label>Nombre Representante Legal</label>

		                <div class="form-group">

		                   <div class="input-group">

		                      <span class="input-group-addon"><i class="fas fa-user"></i></span>
		                      <input class="form-control inpunt-lg" name="nomRepresentanteTabla" id="nomRepresentanteTabla" readonly=""  />

		                   </div>

		                </div>

		              </td>

		            </tr>

	          	</table> 

			    <table class="table table-bordered">

		            <tr>

		              <td>

		                <label>Email</label>

		                <div class="form-group">

		                    <div class="input-group">

		                        <span class="input-group-addon"><i class="fas fa-envelope"></i></span>

		                        <input class="form-control inpunt-lg" name="emaiSeparado" id="emaiSeparado" readonly="" type="hidden" />

		                        <input class="form-control inpunt-lg" name="passUser" id="passUser" readonly="" type="hidden" />

		                        <input class="form-control inpunt-lg" name="emaiTable" id="emaiTable" readonly="" />

		                    </div>

		                </div>

		              </td>

		              <td>

		                <label>Celular</label>

		                <div class="form-group">

		                    <div class="input-group">

		                      <span class="input-group-addon"><i class="fas fa-mobile"></i></span>
		                        <input class="form-control inpunt-lg" name="celulaTabla" id="celulaTabla" readonly="" />

		                    </div>

		                </div>

		              </td>

		              <td>

		                <label>Telefono</label>

		                <div class="form-group">

		                   <div class="input-group">

		                      <span class="input-group-addon"><i class="fas fa-phone"></i></span>
		                        <input class="form-control inpunt-lg" name="telefonoTabla" id="telefonoTabla" readonly="" />

		                   </div>

		                </div>

		              </td>

		            </tr>

		          </table>

 				 <table class="table table-bordered">

 				 	<thead>

 				 		<tr>
 				 			
 				 			<td colspan="4" style="font-weight: bold;"><center>INFORMACIÓN DE MARCA</center></td>

 				 		</tr>

 				 	</thead>

 				 	<tbody>

 				 		<tr>

 				 			<td style="font-weight: bold;">
 				 				<center>MARCA</center>
 				 			</td style="font-weight: bold;">

 				 			<td style="font-weight: bold;">
 				 				<center>PERIODO AÑOS/MESES</center>
 				 			</td style="font-weight: bold;">

 				 			<td style="font-weight: bold;">
 				 				<center>FECHA INICIO</center>
 				 			</td style="font-weight: bold;">

 				 			<td style="font-weight: bold;">
 				 				<center>FECHA FIN</center>
 				 			</td style="font-weight: bold;">

 				 		</tr>

 				 		<tr>

 				 			<td>
 				 				<center><div class="nombre__marcas"></div></center>
 				 			</td>


 				 			<td>
 				 				<center><div class="periodo__anios__marcas"></div></center>
 				 			</td>


 				 			<td>
 				 				<center><div class="fecha__inicio__marca"></div></center>
 				 			</td>


 				 			<td>
 				 				<center><div class="fecha__fin__marca"></div></center>
 				 			</td>

 				 		</tr>


 				 		<tr>

 				 			<td colspan="4">

 				 				<center>

 				 					DEBE REVISAR LA MARCA COMO MARCA PENDIENTE (CON LA FINALIDAD DE PODER APROBAR LA MARCA)

 				 				</center>

 				 			</td>

 				 		</tr>

 				 		<tr>
 				 			
 				 			<td colspan="4" style="font-weight: bold;"><center>PRODUCTOS A IMPORTAR</center></td>

 				 		</tr>

 				 		<tr>

 				 			<td style="font-weight: bold;">
 				 				<center>
 				 					BICICLETAS
 				 				</center>
 				 			</td>


 				 			<td style="font-weight: bold;">
 				 				<center>
 				 					PELOTAS DE TENNIS
 				 				</center>
 				 			</td>

 				 			<td style="font-weight: bold;">
 				 				<center>
 				 					CADENAS DE RODILLOS
 				 				</center>
 				 			</td>

 				 			<td style="font-weight: bold;">
 				 				<center>
 				 					RAQUETAS DE TENNIS
 				 				</center>
 				 			</td>


 				 		</tr>


 				 		<tr>

 				 			<td>
 				 				<center><div class="nombre__bicicletas"></div></center>
 				 			</td>


 				 			<td>
 				 				<center><div class="pelotas__de__tennis"></div></center>
 				 			</td>


 				 			<td>
 				 				<center><div class="cadenas__de__rodillos"></div></center>
 				 			</td>


 				 			<td>
 				 				<center><div class="raquetas__de__tennis"></div></center>
 				 			</td>

 				 		</tr>


 				 		<tr>

 				 			<td style="font-weight: bold;">
 				 				<center>
 				 					SILLINES
 				 				</center>
 				 			</th>


 				 			<td style="font-weight: bold;">
 				 				<center>
 				 					PELOTAS INFLABLES
 				 				</center>
 				 			</th>

 				 			<td style="font-weight: bold;">
 				 				<center>
 				 					CALZADO DEPORTIVO
 				 				</center>
 				 			</th>

 				 			<td style="font-weight: bold;">
 				 				<center>
 				 					MATERIALES DE BEISBOL
 				 				</center>
 				 			</th>


 				 		</tr>


 				 		<tr>

 				 			<td>
 				 				<center><div class="nombre__sillines"></div></center>
 				 			</td>


 				 			<td>
 				 				<center><div class="pelotas__de__pelotas__inflables"></div></center>
 				 			</td>


 				 			<td>
 				 				<center><div class="cadenas__de__calzado__deportivo"></div></center>
 				 			</td>


 				 			<td>
 				 				<center><div class="materiales__de__beisbol"></div></center>
 				 			</td>

 				 		</tr>

 				 		<tr>

 				 			<td style="font-weight: bold;">
 				 				<center>
 				 					CASCOS
 				 				</center>
 				 			</th>


 				 			<td style="font-weight: bold;">
 				 				<center>
 				 					MATERIALES DE TENNIS DE MESA
 				 				</center>
 				 			</th>


 				 		</tr>

 				 		<tr>

 				 			<td>
 				 				<center><div class="nombres__cascos"></div></center>
 				 			</td>


 				 			<td>
 				 				<center><div class="materiales__de__tennis__de__mesas"></div></center>
 				 			</td>

 				 		</tr>

 				 	</tbody>


 				 </table>


		          <table style="border: hidden;" class="tabla__revisiones__usuarios">

		          	<tr>

		          		<td>
		          			<center><label> NOMBRE DOCUMENTO</label></center>
		          		</td>

		          		<td>
		          			<center><label>VISUALIZAR</label></center>
		          		</td>

		          		<td>
		          			<center><label>SI</label></center>
		          		</td>

						<td>
		          			<center><label>NO</label></center>
		          		</td>

		          	</tr>

		          	<tr>

		          		<td>
		          			<label>Documento Escaneado del RUC</label>
		          		</td>

		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-info' data-dismiss="modal" data-toggle='modal' data-target='#nommbrRuc'><i class='fas fa-search'></i></button>
		          		</td>

						<form action="#">

			          		<td>
			          			<center><input type="radio" name="rucOption" value="SI"></center>
			          		</td>
			          		<td>
			          			<center><input type="radio" name="rucOption" value="NO"></center>
			          		</td>

		          		</form>

		          	</tr>

		          	<tr>

		          		<td>
		          			<label>Certificado Vigente de Distribuidor Autorizado</label>
		          		</td>

		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-info' data-dismiss="modal" data-toggle='modal' data-target='#nocertifica'><i class='fas fa-search'></i></button>
		          		</td>

						<form action="#">
			          		<td>
			          			<center><input type="radio" name="certificadoOption" value="SI"></center>
			          		</td>
			          		<td>
			          			<center><input type="radio" name="certificadoOption" value="NO"></center>
			          		</td>
		          		</form>

		          	</tr>

		          	<tr>
		          		<td>
		          			<label>Carta De Adhesion De Intencion De Los Importadores</label>
		          		</td>

		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-info' data-dismiss="modal" data-toggle='modal' data-target='#nomCartaaa'><i class='fas fa-search'></i></button>
		          		</td>

		          		<form action="#">
			          		<td>
			          			<center><input type="radio" name="cartaOption" value="SI"></center>
			          		</td>
			          		<td>
			          			<center><input type="radio" name="cartaOption" value="NO"></center>
			          		</td>
		          		</form>

		          	</tr>

		          	<tr>
		          		<td>
		          			<label>Ingrese Nombramiento del Representante Legal de la Empresa (Si Aplica)</label>
		          		</td>

		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-info' data-dismiss="modal" data-toggle='modal' data-target='#nombram'><i class='fas fa-search'></i></button>
		          		</td>

						<form action="#">
			          		<td>
			          			<center><input type="radio" name="nombramientoOption" value="SI"></center>
			          		</td>
			          		<td>
			          			<center><input type="radio" name="nombramientoOption" value="NO"></center>
			          		</td>
		          		</form>

		          	</tr>

		          	<tr>
		          		<td>
		          			<label>Declaración de impuesto a la renta del año anterior</label>
		          		</td>

		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-info' data-dismiss="modal" data-toggle='modal' data-target='#declaracionModalAnterior '><i class='fas fa-search'></i></button>
		          		</td>

						<form action="#">
			          		<td>
			          			<center><input type="radio" name="declaracionInpuestoAnioAnterior" value="SI"></center>
			          		</td>
			          		<td>
			          			<center><input type="radio" name="declaracionInpuestoAnioAnterior" value="NO"></center>
			          		</td>
		          		</form>

		          	</tr>

		          	<tr>

		          		<td>
		          			<label>Declaración aduanera de importación de una operación de comercio exterior, ejecutada hace al menos los 24 meses anteriores a la fecha de presentación del formulario, en el rubro de las subpartidas beneficiarias.</label>
		          		</td>

		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-info' data-dismiss="modal" data-toggle='modal' data-target='#modalAdunaeraImportacion '><i class='fas fa-search'></i></button>
		          		</td>

						<form action="#">
			          		<td>
			          			<center><input type="radio" name="declaracionImpuestoComercioExterior" value="SI"></center>
			          		</td>
			          		<td>
			          			<center><input type="radio" name="declaracionImpuestoComercioExterior" value="NO"></center>
			          		</td>
		          		</form>

		          	</tr>

		          	<tr>

		          		<td>
		          			<label>Emisión para documentos electrónicos para la producción debidamente aprobada por el SRI.</label>
		          		</td>

		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-info' data-dismiss="modal" data-toggle='modal' data-target='#modalDocumentosElectronicos'><i class='fas fa-search'></i></button>
		          		</td>

						<form action="#">
			          		<td>
			          			<center><input type="radio" name="documentosElectronicosSeleccion" value="SI"></center>
			          		</td>
			          		<td>
			          			<center><input type="radio" name="documentosElectronicosSeleccion" value="NO"></center>
			          		</td>
		          		</form>

		          	</tr>


		          	<tr>

		          		<td>
		          			<label>Certificado de no adeudar al servicio nacional de aduana del Ecuador.</label>
		          		</td>

		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-info' data-dismiss="modal" data-toggle='modal' data-target='#modalNoAdeudar'><i class='fas fa-search'></i></button>
		          		</td>

						<form action="#">
			          		<td>
			          			<center><input type="radio" name="noAdeudarNacional" value="SI"></center>
			          		</td>
			          		<td>
			          			<center><input type="radio" name="noAdeudarNacional" value="NO"></center>
			          		</td>
		          		</form>

		          	</tr>

		          	<tr>

		          		<td>
		          			<label>Certificado de cumplimiento de obligaciones emitido por la superintendencia  de compañías.</label>
		          		</td>

		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-info' data-dismiss="modal" data-toggle='modal' data-target='#certificadoObligacionesEmitido'><i class='fas fa-search'></i></button>
		          		</td>

						<form action="#">
			          		<td>
			          			<center><input type="radio" name="obligacionesEmitidoSuper" value="SI"></center>
			          		</td>
			          		<td>
			          			<center><input type="radio" name="obligacionesEmitidoSuper" value="NO"></center>
			          		</td>
		          		</form>

		          	</tr>



		          </table>

		          <div class="modal-footer">

		          	<div class="observaNega">

		          		<label>Motivo de Negación</label>

		          		<textarea class="form-control" id="observacionNegacion" name="observacionNegacion"></textarea>

		          		<br>

		          	</div>

		          	<button class='btn btn-info' name="negarRegistro" id="negarRegistro">NEGAR</button>
		          	<button class='btn btn-info' name="aprobarRegistro" id="aprobarRegistro">APROBAR</button>

		           	<button type="button" class="fa fa-save btn btn-link" data-dismiss="modal" name="guardarNegacionDir" id="guardarNegacionDir">GUARDAR</button>

                 	<button type="button" class="fa fa-save btn btn-link" data-dismiss="modal" name="CancelarNega" id="CancelarNega">Cancelar</button> 

		          	
		          </div>

        	</div>

          </div>

	  	</div>
 
	</div>

</div>


<div id="copiaCedul" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">

	       <button type="button" class="close" data-dismiss="modal"  data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>
	        <h4 class="modal-title">COPIA DE LA CEDULA</h4>

	      </div>

	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="nombreCopCed" id="nombreCopCed" readonly>
        		<embed id="copiaCed" type="application/pdf" height="700" name="copiaCed" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>


<div id="nombram" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>
	        <h4 class="modal-title">NOMBRAMIENTO</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="nombramient" id="nombramient" readonly>
        		<embed id="nombraminennto" type="application/pdf" height="700" name="nombraminennto" style="width: 100%"></embed>
        		
      		</div>

          </div>

	  	</div>

	</div>

</div>


<div id="nommbrRuc" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>
	        <h4 class="modal-title">RUC</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="nombreRuc" id="nombreRuc" readonly>
        		<embed id="nombrederuc" type="application/pdf" height="700" name="nombrederuc" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>

<div id="nocertifica" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>
	        <h4 class="modal-title">CERTIFICADO VIGENTE EMITIDO POR EL PROVEEDOR</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="nombreCertificado" id="nombreCertificado" readonly>
        		<embed id="nocertifi" type="application/pdf" height="700" name="nocertifi" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>


<div id="nomCartaaa" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>
	        <h4 class="modal-title">CARTA DE ADHESIÓN DE INTENCIÓN </h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="nombreCarta" id="nombreCarta" readonly>
        		<embed id="nocartainten" type="application/pdf" height="700" name="nocartainten" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>


<div id="docuAdici" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>
	        <h4 class="modal-title">DOCUMENTO EXTRA </h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="docuAdiExtra" id="docuAdiExtra" readonly>
        		<embed id="extraDocuAdi" type="application/pdf" height="700" name="extraDocuAdi" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>

<div id="declaracionModalAnterior" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>
	        <h4 class="modal-title">DECLARACIÓN DE IMPUESTO A LA RENTA DEL AÑO ANTERIOR</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="docuDeclaracionAnioAnterior" id="docuDeclaracionAnioAnterior" readonly>
        		<embed id="extraDocuDeclaracionAnioAnterior" type="application/pdf" height="700" name="extraDocuDeclaracionAnioAnterior" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>


<div id="modalAdunaeraImportacion" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>
	        <h4 class="modal-title">DECLARACION ADUANERA DE IMPORTACIÓN DE UNA OPERACIÓN DE COMERCIO EXTERIOR, EJECUTADA HACE AL MENOS LOS 24 MESES ANTERIORES A LA FECHA DE PRESENTACIÓN DE FORMULARIO, EN EL RUBRO DE LAS SUBPARTIDAS BENEFICIARIAS</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="docuAduaneraImportacion" id="docuAduaneraImportacion" readonly>
        		<embed id="extraAduaneraImportacion" type="application/pdf" height="700" name="extraAduaneraImportacion" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>

<div id="modalDocumentosElectronicos" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>
	        <h4 class="modal-title">EMISIÓN PARA DOCUMENTOS ELECTRÓNICOS PARA LA PRODUCCIÓN DEBIDAMENTE APROBADA POR EL SRI</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="docuDocumentosElectronicos" id="docuDocumentosElectronicos" readonly>
        		<embed id="extraDocumentosElectronicos" type="application/pdf" height="700" name="extraDocumentosElectronicos" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>

<div id="modalNoAdeudar" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>
	        <h4 class="modal-title">CERTIFICADO DE NO ADEUDAR AL SERVICIO NACIONAL DE ADUANA DEL ECUADOR</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="docuNoAdeudarServicio" id="docuNoAdeudarServicio" readonly>
        		<embed id="extraNoAdeudar" type="application/pdf" height="700" name="extraNoAdeudar" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>

<div id="certificadoObligacionesEmitido" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #3c8dbc; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>
	        <h4 class="modal-title">CERTIFICADO DE CUMPLIMIENTO DE OBLIGACIONES EMITIDO POR LA SUPERINTENDENCIA DE COMPAÑÍAS</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="docuObligacionesEmitidas" id="docuObligacionesEmitidas" readonly>
        		<embed id="extraObligacionesEmitidas" type="application/pdf" height="700" name="extraObligacionesEmitidas" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>