<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
?>

<div class="wrapper row3">
    <br><center><label>Importador: <?php   echo $NombreUsuario; ?></label></center>

    <input type="hidden" name="codigodeUsuario" value="<?php   echo $IdCompletoUsuario; ?>" id="codigodeUsuario">
  <div class="contenedor__tablas contenedor__tablas__polifacetico__usuarios" style="width:90%;"> 
  
  	<table id="tablaCalificaCertiAproAdicion" name="tablaCalificaCertiAproAdicion">
    	<thead>
        	<tr> 
            <th>RUC</th>
            <th>RAZON SOCIAL</th>
        		<th>NÚMERO CERTIFICADO</th>
          		<th>Revisar</th>
        	</tr>
        </thead>
    	<tfoot> 
        	<tr> 
            <th>RUC</th>
            <th>RAZON SOCIAL</th>
		        <th>NÚMERO CERTIFICADO</th>
		        <th>-</th>
        	</tr>
      	</tfoot>
    </table> 
 
  </div> 

</div>


<div id="edicionCalificaCertiAproAdicion" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #c96969; color: white">
        
        <button type="button" class="close" id="cerrarFormularioPdfAdiciona" data-dismiss="modal">&times;</button>
        
        <input type="hidden" name="codigomportador" id="codigoimportador" class="form-control">
        <input type="hidden" name="recuperaCodigoCertificado" id="recuperaCodigoCertificado" class="form-control">
        <h4 class="modal-title">CERTIFICADO</h4>

        
      
      </div>

      <div class="modal-body">
          
	      <div class="box-body">
          <input type="hidden" name="nombreRasonSocial" id="nombreRasonSocial">
          <input type="hidden" name="codigoLupialesCarlos" id="codigoLupialesCarlos">
	      	
	      		<table id="tablafinalCertificado" name="tablafinalCertificado">
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
						</tr>
					</thead>

				</table>

	      </div>

  	  </div>

	</div>
  </div>
</div>


