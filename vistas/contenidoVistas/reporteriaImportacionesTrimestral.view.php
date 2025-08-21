
<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
?>

<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
    	
  		<div class="contenedor__principal" style="width: 80%;">
  			
  			<table id="tablaReporteriasTotalesTrimestrales" name="tablaReporteriasTotalesTrimestrales" class="cell-border row-border display">

				<thead>

				   	<tr>

				   		<th>FECHA</th>
				   		<th>IMPORTADOR</th>
				   		<th>CÓDIGO</th>
				   		<th>ITEM</th>
				   		<th>PRODUCTO</th>
				     	<th>CANTIDAD IMPORTADA</th>
			            <th>CANTIDAD VENDIDA</th> 
				     	<th>PRECIO DE VENTA AL PÚBLICO</th>
				     	<th>TOTAL (Multiplicación entre cantidad vendida y PVP)</th>
				     	<th>CANTIDAD RESTANTE (Cantidad Importada - Cantidad Vendida)</th>
				     	<th>PERIODO</th>

					</tr>

		        </thead>

		        <tfoot>
		        	
				   	<tr>

				   		<th>FECHA</th>
				   		<th>IMPORTADOR</th>
				   		<th>CÓDIGO</th>
				   		<th>ITEM</th>
				   		<th>PRODUCTO</th>
				     	<th>CANTIDAD RESTANTE</th>
			            <th>CANTIDAD VENDIDA</th> 
				     	<th>PRECIO DE VENTA AL PÚBLICO</th>
				     	<th>TOTAL (Multiplicación entre cantidad vendida y PVP)</th>
				     	<th>CANTIDAD RESTANTE (Cantidad Importada - Cantidad Vendida)</th>
				     	<th>PERIODO</th>

					</tr>
		        	
		        </tfoot>


			</table>  

  		</div>
  	
  	</div>

</div>