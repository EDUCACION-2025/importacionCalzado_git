<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
?>


<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
    	
  		<div class="contenedor__principal">
  			
  			<input type="hidden" name="id_ingresoLogin" id="id_ingresoLogin" value="<?php  echo $IdCompletoUsuario; ?>" >
  			
  			<table id="tablaDocumentosUsuariosAprobados" name="tablaDocumentosUsuariosAprobados">
				<thead>
				   	<tr>
				   		<th>FECHA DE APROBACIÓN</th>
				     	<th>RUC</th>
			            <th>RAZÓN SOCIAL</th>
				     	<th>E-MAIL</th>
						<th>Revisar</th>
					</tr>
		        </thead>

				<tfoot>
				   	<tr>
				   		<th>FECHA DE APROBACIÓN</th>
						<th>RUC</th>
			          	<th>RAZÓN SOCIAL</th>
				      	<th>E-MAIL</th>
				       	<th>-</th>
				   	</tr>
			    </tfoot>
			</table>  

  		</div>
  	
  	</div>

</div>


<div id="edicionUsuarioDocuAprobados" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #cc473b; color: white">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">INFORMACIÓN IMPORTADOR Y MOTIVO DE ACEPTACIÓN</h4>
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

		          <table style="border: hidden;">
		          	<tr>
		          		<td>
		          			<center><label> NOMBRE DOCUMENTO</label></center>
		          		</td>
		          		<td>
		          			<center><label>VISUALIZAR</label></center>
		          		</td>
		          		
		          	</tr>
		        

		          	<tr>
		          		<td>
		          			<label>Documento Escaneado del RUC</label>
		          		</td>
		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#nommbrRuc '><i class="far fa-eye"></i></button>
		          		</td>
						
		          	</tr>

		          	<tr>
		          		<td>
		          			<label>Certificado Vigente de Distribuidor Autorizado</label>
		          		</td>
		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#nocertifica '><i class="far fa-eye"></i></i></button>
		          		</td>
						
		          	</tr>


		          	<tr>
		          		<td>
		          			<label>Carta De Adhesión De Intención De Los Importadores</label>
		          		</td>
		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#nomCartaaa '><i class="far fa-eye"></i></button>
		          		</td>
		          	
		          	</tr>


		          	<tr>
		          		<td>
		          			<label>Nombramiento del Representante Legal de la Empresa (Si Aplica)</label>
		          		</td>
		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#nombram '><i class="far fa-eye"></i></button>
		          		</td>
						
		          	</tr>



		          	<tr>
		          		<td>
		          			<label>CERTIFICADO DE NO ADEUDAR AL SERVICIO NACIONAL DE ADUANA DEL ECUADOR</label>
		          		</td>
		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#noAdeudarServicio '><i class="far fa-eye"></i></button>
		          		</td>
		          	
		          	</tr>

		          	<tr>
		          		<td>
		          			<label>DECLARACIÓN DE IMPUESTO A LA RENTA DEL AÑO ANTERIOR</label>
		          		</td>
		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#declaracionImpuesto '><i class="far fa-eye"></i></button>
		          		</td>
		          	
		          	</tr>

		          	<tr>
		          		<td>
		          			<label>DECLARACION ADUANERA DE IMPORTACIÓN DE UNA OPERACIÓN DE COMERCIO EXTERIOR, EJECUTADA HACE AL MENOS LOS 24 MESES ANTERIORES A LA FECHA DE PRESENTACIÓN DE FORMULARIO</label>
		          		</td>
		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#declaracionAduanera '><i class="far fa-eye"></i></button>
		          		</td>
		          	
		          	</tr>

		          	<tr>
		          		<td>
		          			<label>EMISIÓN PARA DOCUMENTOS ELECTRÓNICOS PARA LA PRODUCCIÓN DEBIDAMENTE APROBADA POR EL SRI</label>
		          		</td>
		          		<td>
		          			<button class='edicionDeRol alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#revisionDocumentosSri'><i class="far fa-eye"></i></button>
		          		</td>
		          	
		          	</tr>


		          </table>

		         <!-- <label style="color: #cc473b">MOTIVO DE NEGACIÓN</label>
			                <div class="form-group">
			                  <div class="input-group">
			                      <span class="input-group-addon"><i class="fas fa-ban"></i></span>
			                      <textarea class="form-control inpunt-lg" name="observacionNega" id="observacionNega" row="4" readonly="" /></textarea>
			                  </div>
			                </div> -->
			     	<table style="border: hidden;">
		          	<tr>
		          		<td style="width: 25%">
		          			<label style="color: #cc473b">PERSONA QUIEN APROBÓ</label>
		          		</td>
		          		<td>
		          			<input type="text" class="form-control" name="nombreTecnico" id="nombreTecnico" readonly="">
		          		</td>
		          	</tr>
		          </table>
			               

        	</div>

          </div>



	  	</div>

	</div>

</div>




<div id="noAdeudarServicio" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #cfb151; color: black">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">CERTIFICADO DE NO ADEUDAR AL SERVICIO NACIONAL DE ADUANA DEL ECUADOR</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<embed id="noAdeudarServiciosAduanas" type="application/pdf" height="700" name="noAdeudarServiciosAduanas" style="width: 100%"></embed>
        		
      		</div>

          </div>

	  	</div>

	</div>

</div>


<div id="declaracionImpuesto" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #cfb151; color: black">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">DECLARACIÓN DE IMPUESTO A LA RENTA DEL AÑO ANTERIOR</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<embed id="declaracionImpuestoDocumento" type="application/pdf" height="700" name="declaracionImpuestoDocumento" style="width: 100%"></embed>
        		
      		</div>

          </div>

	  	</div>

	</div>

</div>


<div id="declaracionAduanera" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #cfb151; color: black">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">DECLARACION ADUANERA DE IMPORTACIÓN DE UNA OPERACIÓN DE COMERCIO EXTERIOR, EJECUTADA HACE AL MENOS LOS 24 MESES ANTERIORES A LA FECHA DE PRESENTACIÓN DE FORMULARIO</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<embed id="declaracionAduaneraDocumento" type="application/pdf" height="700" name="declaracionAduaneraDocumento" style="width: 100%"></embed>
        		
      		</div>

          </div>

	  	</div>

	</div>

</div>

<div id="revisionDocumentosSri" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #cfb151; color: black">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">EMISIÓN PARA DOCUMENTOS ELECTRÓNICOS PARA LA PRODUCCIÓN DEBIDAMENTE APROBADA POR EL SRI</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<embed id="revisionDocumentosSriDocumentos" type="application/pdf" height="700" name="revisionDocumentosSriDocumentos" style="width: 100%"></embed>
        		
      		</div>

          </div>

	  	</div>

	</div>

</div>


<div id="nombram" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #cfb151; color: black">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
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

	      <div class="modal-header" style="background: #cfb151; color: black">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
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

	      <div class="modal-header" style="background: #cfb151; color: black">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
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

	      <div class="modal-header" style="background: #cfb151; color: black">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
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