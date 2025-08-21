<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
?>


<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
    	
  		<div class="contenedor__principal" style="width: 80%;">
  			
  			<table id="tablaReporteriasTotales" name="tablaReporteriasTotales" class="cell-border row-border display">

				<thead>

				   	<tr>

				   		<th>FECHA EMISIÓN CERTIFICADO</th>
				     	<th>IMPORTADOR</th>
			            <th>NÚMERO CERTIFICADO</th> 
				     	<th>CÓDIGO PRODUCTO</th>
				     	<th>CÓDIGO ARRANCELARIO</th>
				     	<th>TIPO</th>
				     	<th>DEPORTE</th>
				     	<th>DESCRIPCIÓN</th>
				     	<th>SEXO</th>
				     	<th>GRUPO ETARIO</th>
				     	<th>ORIGEN</th>
				     	<th>PROCEDENCIA</th>
				     	<th>CANTIDAD IMPORTADA</th>
				     	<th>PRECIO UNIDAD</th>
				     	<th>FOB</th>

					</tr>

		        </thead>

		        <tfoot>
		        	
				   	<tr>

				   		<th>FECHA EMISIÓN CERTIFICADO</th>
				     	<th>IMPORTADOR</th>
			            <th>NÚMERO CERTIFICADO</th> 
				     	<th>CÓDIGO PRODUCTO</th>
				     	<th>CÓDIGO ARRANCELARIO</th>
				     	<th>TIPO</th>
				     	<th>DEPORTE</th>
				     	<th>DESCRIPCIÓN</th>
				     	<th>SEXO</th>
				     	<th>GRUPO ETARIO</th>
				     	<th>ORIGEN</th>
				     	<th>PROCEDENCIA</th>
				     	<th>CANTIDAD IMPORTADA</th>
				     	<th>PRECIO UNIDAD</th>
				     	<th>FOB</th>
				     	
					</tr>
		        	
		        </tfoot>


			</table>  

  		</div>
  	
  	</div>

</div>