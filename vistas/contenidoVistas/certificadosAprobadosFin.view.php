<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  
?>
<div class="wrapper row3">
   
    <input type="hidden" name="codigodeUsuario" value="<?php   echo $IdCompletoUsuario; ?>" id="codigodeUsuario">
  

    <div class="contenedor__principal__de__formularios">
      
      <div class="contenedor__principal">
        
        
   
  	<table id="tablaCalificaCertiAproFin" name="tablaCalificaCertiAproFin">
    	<thead> 
        	<tr> 
            <th>NUMERO DE CERTIFICADO</th>
            <th>RUC</th>
        		<th>RAZON SOCIAL</th>
           
          	<th>REVISAR</th>
            <th>SUBIR DOCUMENTO FIRMADO</th>
        	</tr>
        </thead> 
    	<tfoot> 
        	<tr> 
            <th>NUMERO DE CERTIFICADO</th>
            <th>RUC</th>
		        <th>RAZON SOCIAL</th>
          
		        <th>-</th>
            <th>-</th>
        	</tr>
      	</tfoot>
    </table> 

  </div> 

</div>


<div id="edicionCalificaCertiAproFin" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #c96969; color: white">
        
        <button type="button" class="close" id="cerrarFormularioPdfFin" data-dismiss="modal">&times;</button>
        <input type="hidden" name="calificaFirma" id="calificaFirma" class="form-control">
        <input type="hidden" name="codigoimportador" id="codigoimportador" class="form-control">
        <input type="hidden" name="recuperaCodigoCertificado" id="recuperaCodigoCertificado" class="form-control">
        <h4 class="modal-title">CERTIFICADO</h4>

        
      
      </div>

      <div class="modal-body">
          
	      <div class="box-body">
          <input type="hidden" name="nombreRasonSocial" id="nombreRasonSocial">
          <input type="hidden" name="codigoLupialesCarlos" id="codigoLupialesCarlos">
	      	
	      		<table id="tablafinalCertificadofin" name="tablafinalCertificadofin">
			    	<thead>
			        	<tr>
							<th>ITEM</th>
							<th>Código Arancelario</th>
							<th>Código de Calzado e Implementos Especializados</th>
							<th>Cantidad  (Pares/Unidades)</th>
							<th>Peso Neto</th>
							<th>Peso Bruto</th>
							<th>Valor en USD FOB</th>
							<th>Descripción Comercial</th>
							<th>Disciplina Deportiva Actividad Física</th>
							<th>Marca</th>
							<th>Modelo</th>
							<th>Precio USD (FOB/PAR O FOB/UNIDAD)</th>
							<th>País de Origen</th>
							<th>País de Procedencia:</th>
							<th>Nombre/Razòn Social/ del Proveedor:</th>
							<th>Número de identificación/RUC del Proveedor:</th>
              <th>Producto Aprobado por:</th>
						</tr>
					</thead>

				</table>

	      </div>

  	  </div>

	</div>
  </div>
</div>


<div id="emitirCertificadoSubida" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #69a3c9; color: white">
        
        <button type="button" class="close" id="cerrarFormularioPdfFin" data-dismiss="modal">&times;</button>
        
        
        <h4 class="modal-title">INGRESE DOCUMENTO</h4>

      </div>

      <div class="modal-body">
          
        <div class="box-body">
          <input type="hidden" name="codigoimportador1" id="codigoimportador1" class="form-control">

          <input type="hidden" name="recuperaCodigoCertificado1" id="recuperaCodigoCertificado1" class="form-control">



          <table style="border: hidden;">
            <tr>
              <td><label>INGRESE DOCUMENTO FIRMADO</label></td>
              <td><input type="file" name="certificadoFirmado" id="certificadoFirmado" class="form-control"></td>
            </tr>
          </table>

          
         
        </div>

      </div>


      <div class="modal-footer">
        
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal">CANCELAR</button>
        
          <button type="submit" id="ingresoDocumentoFin" name="ingresoDocumentoFin" class="btn btn-primary">GUARDAR</button>
        
      </div>

    </div>

  </div>

</div>




