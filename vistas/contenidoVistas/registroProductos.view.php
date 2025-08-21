<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
?>


<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
      
      <div class="contenedor__principal">
        
        <input type="hidden" name="id_ingresoLogin" id="id_ingresoLogin" value="<?php  echo $IdCompletoUsuario; ?>" >
        
        <div style="width: 97%;">

          <table id="tablaCatalogoTodos" name="tablaCatalogoTodos"> 
            <thead>

                  <tr>
                  <th>FECHA DE INGRESO</th>
                  <th>IMPORTADOR</th>
                  <th>CÓDIGO</th>
                  <th>DISCIPLINA DEPORTIVA</th>
                  <th>MARCA</th>
                  <th>AJUSTAR LOS DÍAS RESTANTES</th>
                  <th>GÉNERO</th>
                  <th>GRUPO ETÁRIO</th>
                  <th>ESTADO</th>
                  <th>Revisar</th>
                </tr>

            </thead>

            <tfoot>

                  <tr> 
                  <th>FECHA DE INGRESO</th>
                  <th>IMPORTADOR</th>  
                  <th>CÓDIGO</th> 
                  <th>DISCIPLINA DEPORTIVA</th>
                  <th>MARCA</th>
                  <th>AJUSTAR LOS DÍAS RESTANTES</th>
                  <th>GÉNERO</th>
                  <th>GRUPO ETÁRIO</th>
                  <th>ESTADO</th>
                  <th>-</th>

                  </tr>

            </tfoot>

        </table>  

        </div>

      </div>
    
    </div>

</div>


<div id="edicionCatalogoTodos" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #3c8dbc; color: white">
        
        <button type="button" class="close reload__modal" data-dismiss="modal">&times;</button>
        
        <h4 class="modal-title">Detalles del Producto</h4>
      
      </div>

      <!-- AQUI EMPIEZA LA TABLA -->
        <div class="modal-body">
          
          <div class="box-body">

            <table>
              <tr>
                
                <td style="width: 60%">
                  <table class="table table-bordered">
                    <tr>
                        <td colspan="2">
                           <label>ITEM</label>
                               <input type="text" name="item" id="item" readonly="" class="form-control">

                               <input type="hidden" name="idProducto" id="idProducto" readonly="" class="form-control">
                        </td>
                        </tr>
                    <tr>
                        <td colspan="2">
                           <label>CODIGO</label>
                               <input type="text" name="CodigoImplemento" readonly="" id="CodigoImplemento" class="form-control">
                        </td>
                    </tr>
                    <tr>

                        <td colspan="2">
                           <label>DESCRIPCION COMERCIAL</label>
                           <textarea rows="4" type="text" name="descripcionComercial" readonly="" id="descripcionComercial" class="form-control"></textarea>
                        
                        </td>
                      </tr>
                      <tr>
                        <td colspan="2">
                          <label>MARCA</label>
                                 <input type="text" name="marcaImplemento" readonly="" id="marcaImplemento" class="form-control">
                        </td>
                      </tr>
                       <tr>
                        <td colspan="2">
                          <label>MODELO</label>
                                 <input type="text" name="modeloImplemento" readonly="" id="modeloImplemento" class="form-control">
                        </td>
                        </tr>
                       <tr>
                        <td colspan="2">
                          <label>DISCIPLINA DEPORTIVA</label>
                               <input type="text" name="disciplinaDeport" readonly="" id="disciplinaDeport" class="form-control">
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label>PRECIO PERÚ</label>
                                 <input type="text" name="preciPerr" readonly="" id="preciPerr" class="form-control">
                        </td>
                        <td>
                          <label>PRECIO COLOMBIA</label>
                                 <input type="text" name="preColomm" readonly="" id="preColomm" class="form-control">
                        </td>
                      </tr>
                       <tr>
                        <td colspan="2">
                          <label>MATERIAL/ES Y COMPOSICIÓN DEL PRODUCTO</label>
                            <input type="text" name="materialesComposicionUpdates" readonly="" id="materialesComposicionUpdates" class="form-control">
                        </td>
                      </tr>

                    </table>
 
          </td>
          	<td>

             <table class="table table-bordered">

              	<tr>

                    <td colspan="3">
                        <center><label> VISOR DOCUMENTOS</label></center>
                    </td>
                </tr>

                <tr>

                  <td style="width: 5%">

                      <center>Imagen 1</center>
                      <button class='edicionDeRol alineacion__de__elemento btn btn-link' data-dismiss="modal" data-toggle='modal' data-target='#vistaDocumento ' name="mostrarImagen1" id="mostrarImagen1"><i class='fas fa-eye'></i></button>

                      
                  </td>
                     	
              </table>


              <table class="table table-bordered">

                  <tr>
                        <td colspan="3">
                          <center><label> EVALUACIÓN DEL PRODUCTO</label></center>
                        </td>
                  </tr>

                  <tr>

                      <td><center>DESCRIPCION</center></td>

                      <form action="#">

	                        <td><center>SI</center></td>
	                        <td><center>NO</center></td>

                      </form>

                  </tr>

                  <tr>

                      <td>Es Implemento Especializado?</td>

                      <form action="#">
	                       <td><center><input type="radio" name="itemDeportivo" value="SI"></center></td>
	                       <td><center><input type="radio" name="itemDeportivo" value="NO"></center></td>
                      </form>

                  </tr> 
                     
                </table>

                <center>
                  <label>OBSERVACIONES:</label>
                </center>

                <textarea class="form-control" rows="5" id="observacionesCalificaProducto" name="observacionesCalificaProducto"></textarea>
                   

          		</td>   

              </tr>
              
            </table>

          </div>
      

        <div class="modal-footer">
		   

		        <button class='btn btn-info' name="botonNegarProducto" id="botonNegarProducto">NEGAR</button>
		        <button class='btn btn-info' name="botonAprobarProducto" id="botonAprobarProducto">APROBAR</button>
	          <button type="button" class="fa fa-save btn btn-link" data-dismiss="modal" name="guardarNegacionProducto" id="guardarNegacionProducto">GUARDAR</button>
            <button type="button" class="fa fa-save btn btn-link" data-dismiss="modal" name="CancelarNega1" id="CancelarNega1">Cancelar</button> 

		          	
		</div>
 

 

  		</div>

	</div>
  </div>
</div>


<div id="vistaDocumento" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">
   
	  <div class="modal-content"  style="width: 120%">

	      <div class="modal-header" style="background: #61ad90; color: white">
	        <button type="button" class="close reload__modal__2" data-dismiss="modal" data-toggle='modal' data-target='#edicionCatalogoTodos '>&times;</button>
	        <center><h4 class="modal-title">IMAGEN 1</h4></center>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">
            
        		<input type="hidden" name="nomFoto" id="nomFoto" class="form-control inpunt-lg">
            <center><img class="anadir_foto" id="imagg" name="imagg"></center>
            
           
           <input class="form-control inpunt-lg" type="hidden" name="lkj1" id="lkj1">
           <embed id="lulitaEtiquetada" type="application/pdf" width="570" height="400"  name="lulitaEtiquetada" style="width: 100%"></embed>
     
         
      		</div>

        </div>

	  </div>

	</div>

</div>






<div id="vistaDocumento1" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content"  style="width: 120%">

	      <div class="modal-header" style="background: #61ad90; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionCatalogoTodos '>&times;</button>
	        <center><h4 class="modal-title">IMAGEN 2</h4></center>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">
        		<input class="form-control inpunt-lg" type="hidden" name="nomFoto1" id="nomFoto1" readonly>
            <center><img class="anadir_foto1" id="imagg1" name="imagg1"></center>
              <!-- aqui se muestra pdf -->
           <input class="form-control inpunt-lg" type="hidden" name="lkj2" id="lkj2" readonly>
           <embed id="lulitaEtiquetada2" type="application/pdf" width="570" height="400"  name="lulitaEtiquetada2" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>

<div id="vistaDocumento2" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content"  style="width: 120%">

	      <div class="modal-header" style="background: #61ad90; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionCatalogoTodos '>&times;</button>
	        <center><h4 class="modal-title">IMAGEN 3</h4></center>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">
        		 <input class="form-control inpunt-lg" type="hidden" name="nomFoto2" id="nomFoto2" readonly>
              <center><img class="anadir_foto2" id="imagg2" name="imagg2"></center>
              
              <input class="form-control inpunt-lg" type="hidden" name="lkj3" id="lkj3" readonly>
           <embed id="lulitaEtiquetada3" type="application/pdf" width="570" height="400"  name="lulitaEtiquetada3" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>

<div id="vistaDocumento3" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  	<div class="modal-dialog modal-lg">

	    <div class="modal-content"  style="width: 120%">

	      <div class="modal-header" style="background: #61ad90; color: white">
	        <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionCatalogoTodos '>&times;</button>
	        <center><h4 class="modal-title">IMAGEN 4</h4></center>
	      </div>
	      
	      <div class="modal-body">
        
        	<div class="box-body">
        		<input class="form-control inpunt-lg" type="hidden" name="nomFoto3" id="nomFoto3" readonly>
            <center><img class="anadir_foto3" id="imagg3" name="imagg3"></center>
                          
        		<input class="form-control inpunt-lg" type="hidden" name="lkj4" id="lkj4" readonly>
           <embed id="lulitaEtiquetada4" type="application/pdf" width="570" height="400"  name="lulitaEtiquetada4" style="width: 100%"></embed>

      		</div>

          </div>

	  	</div>

	</div>

</div>