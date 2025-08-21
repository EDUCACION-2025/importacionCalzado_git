<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
?>


<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
      
      <div class="contenedor__principal">
        
        <input type="hidden" name="id_ingresoLogin" id="id_ingresoLogin" value="<?php  echo $IdCompletoUsuario; ?>" >
        
        <button id="marcaAprobadaN" name="marcaAprobadaN"  data-toggle='modal' data-target='#modalAprobadasNegadas'  style="background:#01579b; color:white; padding: .8em; position: relative; left: 40%; margin-bottom:2em; border-radius:.5em;">MARCAS APROBADAS / NEGADAS</button>
      

        <div style="width: 95%;">

          <table id="tablaMarcasGlosario" name="tablaMarcasGlosario">

            <thead>
   
                <tr>
                  <th>FECHA INGRESO</th>
                  <th>IMPORTADOR</th>
                  <th>MARCA</th>
                  <th>AUTORIZACIÓN DE LA MARCA</th>
                  <th>GLOSARIO TECNOLÓGICO</th>
                  <th>VIGENCIA DE MARCA</th>
                  <th>REVISAR</th>
                  <th>ELIMINAR</th>
                </tr>

            </thead>

            <tfoot>

                <tr>

                  <th>-</th>
                  <th>IMPORTADOR</th>  
                  <th>MARCA</th>
                  <th>AUTORIZACIÓN DE LA MARCA</th>
                  <th>GLOSARIO TECNOLÓGICO</th>
                  <th>VIGENCIA DE MARCA</th>
                  <th>-</th>
                  <th>-</th>

                </tr>

            </tfoot>

        </table>  

      </div>

      </div>
    
    </div>

</div>

<!--=========================================================
=            Modal de Marcas aprobadas y Negadas            =
==========================================================-->

<div id="modalAprobadasNegadas" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #3c8dbc; color: white">
        
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        
        <h4 class="modal-title">MARCAS APROBADAS / NEGADAS</h4>
      
      </div>

      <!-- AQUI EMPIEZA LA TABLA -->
        <div class="modal-body">
          
          <div class="box-body">

          <div style="width:100%;">

          <table id="marcaAtridas" name="marcaAtridas" style="width:100%;">

            <thead>
     
                  <tr>
                    
                    <th>FECHA INGRESO</th>
                    <th>FECHA APROBACIÓN</th>
                    <th>IMPORTADOR</th>
                    <th>RUC</th>
                    <th>MARCA</th>
                    <th>AUTORIZACIÓN DE LA MARCA</th>
                    <th>GLOSARIO TECNOLÓGICO</th>
                    <th>VIGENCIA DE MARCA</th>
                    <th>ESTADO</th>
                    <th>RESPONSABLE APROBACIÓN</th>
                    <th>MOTIVO NEGACIÓN</th>
                  
                  </tr>

              </thead>


          </table>

          </div>

          </div>

          <div class="modal-footer">
         
            <button type="button" class="btn btn-link pull-left" data-dismiss="modal" name="cerrarVentana" id="cerrarVentana">CERRAR</button> 
                  
          </div>

      </div>

  </div>

  </div>

</div>



<!--====  End of Modal de Marcas aprobadas y Negadas  ====-->



<div id="edicionMarcasGlosario" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #3c8dbc; color: white">
        
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        
        <h4 class="modal-title">Detalles del Producto</h4>
      
      </div>

      <!-- AQUI EMPIEZA LA TABLA -->
        <div class="modal-body">
          
	        <div class="box-body">

	          	<table class="table table-bordered">
	          		<tr>
	          			<td>
	          				<label>IMPORTADOR</label>
	          				<input type="text" name="importadorName" id="importadorName" class="form-control" readonly="">

                    <input type="hidden" name="idMarcaAdiciona" id="idMarcaAdiciona" class="form-control" readonly="">
	          			</td>
	          			<td>
	          				<label>MARCA</label>
	          				<input type="text" name="marcaName" id="marcaName" class="form-control" readonly="">
	          			</td>
	          		</tr>
	          		<tr>
	          			<td>
	          				<label>CERTIFICADO</label>
	          				<button class='alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#verCertificado '><i class="far fa-eye"></i></button>
	          			</td>
	          			<td>
	          				<label>GLOSARIO</label>
	          				<button class='verGlosario alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#verGlosario '><i class="far fa-eye"></i></button>
	          			</td>
	          		</tr>
	          	</table> 
              

	        </div>

	        <div class="modal-footer">
			   
				<button type="button" class="btn btn-link pull-left" data-dismiss="modal" name="cerrarVentana" id="cerrarVentana">CERRAR</button> 

        <button type="submit" id="apruebaMarca" name="apruebaMarca" class="btn btn-success">APROBAR</button>
			          	
			</div>

  		</div>

	</div>

  </div>

</div>


<div id="verCertificado" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #51cf96; color: black">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">CERTIFICADO</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="certificadoMarca" id="certificadoMarca" readonly>
        		<embed id="verCerti" type="application/pdf" height="700" name="verCerti" style="width: 100%"></embed>
        		
      		</div>

        </div>



	  	</div>

	  </div>

</div>


<div id="verGlosario" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content">

	      <div class="modal-header" style="background: #51cf96; color: black">
	        <button type="button" class="close" data-dismiss="modal">&times;</button>
	        <h4 class="modal-title">GLOSARIO</h4>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">

        		<input class="form-control inpunt-lg" type="hidden" name="glosarioMarca" id="glosarioMarca" readonly>
        		<embed id="verGlosa" type="application/pdf" height="700" name="verGlosa" style="width: 100%"></embed>
        		
      		</div>

          </div>



	  	</div>

	 </div>

</div>


<div id="eliminarRegistro123" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

    <div class="modal-dialog modal-lg">

      <div class="modal-content">

        <div class="modal-header" style="background: #a13032; color: white">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">¡ADVERTENCIA!</h4>
        </div>
        
        <div class="modal-body">
        
          <div class="box-body">

          <input class="form-control inpunt-lg" type="hidden" name="id_aEliminar" id="id_aEliminar" readonly>
          
          <center><label> Esta seguro que desea eliminar</label></center>

          <label>OBSERVACIÓN</label> 
              <textarea class="form-control" rows="4" id="observacionMarca" name="observacionMarca"></textarea>   
            
          </div>

        </div>

        <div class="modal-footer">
        
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">No</button>
        
          <button type="submit" id="eliminarRegistro" name="eliminarRegistro" class="btn btn-warning">Si</button>
        
        </div>


      </div>

   </div>

</div>