<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  
?>

<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
      
      <div class="contenedor__principal">

    <input type="hidden" name="idImportador" id="idImportador" value="<?php   echo $IdCompletoUsuario; ?>">

    <center>

      <label style="text-transform: uppercase;">

        Historial de Productos Aprobados

      </label>

    </center>

    <table id="tablaCatalogoHistorial" name="tablaCatalogoHistorial">

      <thead>

        <tr>

          <th>CÓDIGO</th>
          <th>MARCA</th> 
          <th>MODELO</th>
          <th>DISCIPLINA DEPORTIVA</th>
          <th>REVISAR</th>
          <th>SELECCIONAR</th>

        </tr>

      </thead>

      <tfoot> 

        <tr>
          
          <th>CÓDIGO</th>
          <th>MARCA</th>
          <th>MODELO</th>
          <th>DISCIPLINA DEPORTIVA</th>
          <th>-</th>
          <th>-</th>

        </tr>

      </tfoot>

    </table>  

   	</div>

</div>

<center><input type="hidden" name="idCatalogoAbsorvido1" id="idCatalogoAbsorvido1"><br></center>

<center><input type="submit" name="aceptarInformacionAdicional" id="aceptarInformacionAdicional" value="ESCOGER PRODUCTOS" style="background:#1565c0; color:white; font-weight:bold; padding:1em; border-radius:.5em; margin-bottom:2em;"></center>

<div id="editarCatalogoHistorial" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

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
          			<td colspan="2">
          				<label>Item</label>
          				<input type="text" name="importadoItem" id="importadoItem" class="form-control" readonly="">
          			</td>
          			
          			<td colspan="2">
          				<label>Código Arancelario</label>
          				<input type="text" name="importadoCodigoArancel" id="importadoCodigoArancel" class="form-control" readonly="">
          			</td>
          			
          		</tr>
          		<tr>
          			<td colspan="4">
          				<label>Código de Calzado/Implementos Especializados</label>
          				<input type="text" name="importadoCodigoCalzado" id="importadoCodigoCalzado" class="form-control" readonly="">
          			</td>
          			
          		</tr>
          		<tr>
          			<td>
          				<label>Cantidad</label>
          				<input type="text" name="importadoCantidad" id="importadoCantidad" class="form-control" readonly="">
          			</td>
          			<td>
          				<label>Peso Neto</label>
          				<input type="text" name="importadoPesoN" id="importadoPesoN" class="form-control" readonly="">
          			</td>
          			<td>
          				<label>Peso Bruto</label>
          				<input type="text" name="importadoPesoB" id="importadoPesoB" class="form-control" readonly="">
          			</td>
          			<td>
          				<label>Valor en USD FOB</label>
          				<input type="text" name="importadoValor" id="importadoValor" class="form-control" readonly="">
          			</td>
          		</tr>
          		<tr>
          			<td colspan="4">
          				<label>Descripción Comercial</label>
          				<textarea  name="importadoDescripcion" id="importadoDescripcion" class="form-control" readonly="" rows="5">
          					
          				</textarea>

          				
          			</td>
          			
          		</tr>
          		<tr>
          			<td colspan="2">
          				<label>Disciplina Deportiva </label>
          				<input type="text" name="importadoDisciplina" id="importadoDisciplina" class="form-control" readonly="">
          			</td>
          			<td>
          				<label>Marca</label>
          				<input type="text" name="importadoMarca" id="importadoMarca" class="form-control" readonly="">
          			</td>
          			<td>
          				<label>Modelo</label>
          				<input type="text" name="importadoModelo" id="importadoModelo" class="form-control" readonly="">
          			</td>
          		</tr>
          		<tr>
          			<td colspan="4">
          				<table class="table table-bordered" style="border: hidden;">
          					<tr>
          						<td>
			          				<label>Precio USD (FOB PAR/UNIDAD)</label>
			          				<input type="text" name="importadoPrecio" id="importadoPrecio" class="form-control" readonly="">
			          			</td>
			          			<td>
			          				<label>Pais de Origen </label>
			          				<input type="text" name="importadoPaisOri" id="importadoPaisOri" class="form-control" readonly="">
			          			</td>
			          			<td>
			          				<label>Pais de Procedencia </label>
			          				<input type="text" name="importadoPaisPro" id="importadoPaisPro" class="form-control" readonly="">
			          			</td>
          					</tr>
          				</table>
          			</td>
          		</tr>
          		<tr>
          			<td colspan="2">
          				<label>Proveedor Nombre/Razon Social</label>
          				<input type="text" name="importadoProveedorNombre" id="importadoProveedorNombre" class="form-control" readonly="">
          			</td>
          			<td colspan="2">
          				<label>Proveedor Ruc</label>
          				<input type="text" name="importadoProveRuc" id="importadoProveRuc" class="form-control" readonly="">
          			</td>
          		</tr>
          	</table>

          </div>

        </div>

    </div>

  </div>

</div>