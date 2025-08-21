<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  
?>
<div class="wrapper row3">
   
    <input type="hidden" name="codigodeUsuario" value="<?php   echo $IdCompletoUsuario; ?>" id="codigodeUsuario">
    <div class="contenedor__principal__de__formularios">
      
      <div class="contenedor__principal">
  
    <center>

      <label style="text-transform: uppercase;">

        Formularios emitidos

      </label>

    </center>



  	<table id="tablaCalificaCertiApro" name="tablaCalificaCertiApro">
    	<thead>
        	<tr> 
            <th>RUC</th>
            <th>RAZÓN SOCIAL</th>
        		<th>NÚMERO CERTIFICADO</th>
          	<th>REVISAR</th>
        	</tr>
        </thead>
    	<tfoot> 
        	<tr> 
            <th>RUC</th>
            <th>RAZÓN SOCIAL</th>
		        <th>NÚMERO CERTIFICADO</th>
		        <th>-</th>
        	</tr>
      	</tfoot>
    </table> 
 
  </div> 

</div>


<div id="edicionCalificaCertiApro" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #c96969; color: white">
        
        <button type="button" class="close" id="cerrarFormularioPdf" data-dismiss="modal">&times;</button>
        
        <input type="hidden" name="codigoimportador" id="codigoimportador" class="form-control">
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
                  <th>Corregir</th>
                  <th>Quitar</th>
    						</tr>
					</thead>

				</table>

	      </div> 

  	  </div>

	</div>
  </div>
</div>


<div id="edicionCertiArmado" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #69bcc9; color: white">
        
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        
     
        <h4 class="modal-title">CORREGIR PRODUCTO</h4>

        
      
      </div>

      <div class="modal-body">
          
        <div class="box-body">
         
          <table  class="table table-bordered">

            <tr>
              <td colspan="3"><center><h3>Datos del Producto</h3></center></td>
            </tr> 
            <tr>
              <td>
                <input type="hidden" class="form-control" name="llamaridDeProducto" id="llamaridDeProducto" readonly="">
                ITEM
                <input type="text" class="form-control" name="llamarItem" id="llamarItem" readonly="">
              </td>
              <td>
                Código Arancelario
                 <input type="text" class="form-control" name="llamarCodigoArancelario" id="llamarCodigoArancelario" readonly="">
              </td>
              <td>
                Código de Calzado e <br> Implementos Especializados
                 <input type="text" class="form-control" name="llamarCodigoUnico" id="llamarCodigoUnico" readonly="">
              </td>
            </tr>
          </table>
          <table  class="table table-bordered">

            <tr>
              <td>
                Cantidad  (Pares/Unidades)
                <input type="text" class="form-control validacionesNumericas" name="llamarCantidad" id="llamarCantidad">
              </td>
              <td>
                Peso Neto
                 <input type="text" class="form-control" name="llamarPesoNeto" id="llamarPesoNeto">
              </td>
              <td>
                Peso Bruto
                 <input type="text" class="form-control" name="llamarPesoBruto" id="llamarPesoBruto">
              </td>
              <td>
                Valor en USD FOB
                <input type="text" class="form-control validacionesNumericas" name="llamarValorFob" id="llamarValorFob">
              </td>
            </tr>
          </table>
          <table  class="table table-bordered">


            <tr>
              
              <td style="width: 70%">
                Descripción Comercial
                <textarea rows="4" type="text" class="form-control" name="llamarDescripcion" id="llamarDescripcion" readonly=""></textarea>
                
              </td>
              <td>
                Disciplina Deportiva Actividad Física
                 <input type="text" class="form-control" name="llamarDisciplina" id="llamarDisciplina" readonly="">
              </td>
            </tr>
          </table>
          <table  class="table table-bordered">

             <tr>
              <td>
                Marca
                <input type="text" class="form-control" name="llamarMarca" id="llamarMarca" readonly="">
              </td>
              <td>
                Modelo
                 <input type="text" class="form-control" name="llamarModelo" id="llamarModelo" readonly="">
              </td>
              <td>
                Precio USD (FOB/PAR O FOB/UNIDAD)
                 <input type="text" class="form-control" name="llamarPrecio" id="llamarPrecio">
              </td>
              <td>
                País de Origen
                <input type="text" class="form-control validacionLetrasMayusculas" name="llamarPaisOrigen" id="llamarPaisOrigen">
              </td>

            </tr>
          </table>
          <table  class="table table-bordered">

            <tr>
              
              <td>
                País de Procedencia
                 <input type="text" class="form-control validacionLetrasMayusculas" name="llamarPaisProce" id="llamarPaisProce">
              </td>
              <td>
                Nombre/Razòn Social/ del Proveedor
                 <input type="text" class="form-control validacionLetrasMayusculas" name="llamarNomProve" id="llamarNomProve">
              </td>
              <td>
                Número de identificación/RUC del Proveedor
                <input type="text" class="form-control" name="llamarRucProve" id="llamarRucProve">
              </td>
             
            </tr>


                  

          </table>

        </div>

      </div>

      <div class="modal-footer">
          
          <button type="button" class="btn btn-default" data-dismiss="modal">CANCELAR</button>
          <button type="button" class="btn btn-info" id="guardarActualizarCertificado" name="guardarActualizarCertificado">GUARDAR</button>
        
      </div>


    </div>
  </div> 
</div>



<div id="quitarProducto" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #ffed7d; color: black">
        
        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionCalificaCertiApro'>&times;</button>
        
     
        <h4 class="modal-title">QUITAR DE LA LISTA</h4>

        
      
      </div>

      <div class="modal-body">
          
        <div class="box-body">
         
         <center><label>¿Está seguro que desea eliminar este producto?</label></center>
         <input type="hidden" name="llamaridDeProductoEliminar" id="llamaridDeProductoEliminar">

        </div>

      </div>

      <div class="modal-footer">
          
          <button type="button" class="btn btn-default" data-dismiss="modal" data-toggle='modal' data-target='#edicionCalificaCertiApro'>CANCELAR</button>
          <button type="button" class="btn btn-danger pull-left" id="quitarElProducto" name="quitarElProducto">QUITAR PRODUCTO</button>
        
      </div>


    </div>
  </div> 
</div>


