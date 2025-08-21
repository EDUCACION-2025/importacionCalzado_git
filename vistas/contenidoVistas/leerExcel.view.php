<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
 
?>

<!--=========================================
=            Evaluador de vacios            =
==========================================-->

<!--====  End of Evaluador de vacios  ====-->


<!--=======================================
=            Sección Principal            =
========================================-->

<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
    	
  		<div class="contenedor__principal">
  			
  			<div class="modal-body">
        
        		<div class="box-body">
					
			  		<input type="hidden" name="idImportador" id="idImportador" value="<?php echo $IdCompletoUsuario; ?>">
			  		
			  		<center><label>SUBIR ARCHIVO EXCEL</label><br>

			  			<input type="file" name="selectorArchivoExcel" id="selectorArchivoExcel">

			  		</center>

			  		<br><br>
			  		<div class="visorTableCuerpo">
			  			
			  			<div class=" div2" id="tableArchivo">
			  			
				  			<table id="traerDatosDeExcel" class="table table-bordered">
					  			
					  			<tr><th>ITEM</th>
					  				<th>CODIGO ARANCELARIO</th>
					  				<th>CODIGO INTERNACIONAL</th>
					  			  	<th>PESO NETO</th>
					  				<th>PESO BRUTO</th>
					  				<th>VALOR FOB</th>
					  				<th>DESCRIPCION COMERCIAL</th>
					  				<th>DISCIPLINA DEPORTIVA</th>
					  				<th>MARCA</th>
					  				<th>MODELO</th>
					  				<th>PRECIO FOB (PAR O UNIDAD)</th>
					  				<th>PAIS ORIGEN</th>
					  				<th>PAIS PROCEDENCIA</th>
					  				<th>NOMBRE PROVEEDOR</th>
					  				<th>RUC PROVEEDOR</th>
					  				<th>PRECIO PERU</th>
					  				<th>PRECIO COLOMBIA</th>
					  				<th>MATERIAL</th>
					  				<th>PORCENTAJE %</th>
					  				<th>MATERIAL1</th>
					  				<th>PORCENTAJE1 %</th>
					  				<th>LINK</th>
					  				<th>IMAGEN PRODUCTO</th>
					  			</tr>

					  		</table>

					  		<button type="submit" id="enviarDatosExcel" name="enviarDatosExcel" class="btn btn-info ">Guardar</button>
				  		</div>

			  		</div>
			  		
			  	</div>

			</div>

		</div>

	</div>

</div> 