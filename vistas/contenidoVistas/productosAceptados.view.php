<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
?>


<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
      
      <div class="contenedor__principal">
        
        <input type="hidden" name="id_ingresoLogin" id="id_ingresoLogin" value="<?php  echo $IdCompletoUsuario; ?>" >
        
        <div style="width: 95%;">
          
          <table id="tablaCatalogoAprobados" name="tablaCatalogoAprobados">
            <thead>

                  <tr>
                    <th style="display:none;">ID</th>
                    <th>FECHA DE APROBACIÓN</th>
                    <th>IMPORTADOR</th>
                    <th>CÓDIGO</th>
                    <th>ESTADO</th>
                    <th>DEPORTE</th>
                    <th>MARCA</th>
                    <th>FECHA INGRESO</th>
                    <th>Revisar</th>
                    
                  </tr>

            </thead>

            <tfoot>
   
                  <tr>
                    <th style="display:none;">ID</th>
                    <th>FECHA DE APROBACIÓN</th>
                    <th>IMPORTADOR</th>
                    <th>CÓDIGO</th>
                    <th>ESTADO</th>
                    <th>DEPORTE</th>
                    <th>MARCA</th>
                    <th>FECHA INGRESO</th>
                    <th>-</th>

                  </tr>

            </tfoot>

        </table>  

      </div>

      </div>
    
    </div>

</div>


<div id="edicionCatalogoAprobados" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #c96969; color: white">
        
        <button type="button" class="close reload__modal" data-dismiss="modal">&times;</button>
        
        <h4 class="modal-title">Detalles del Producto</h4>
      
      </div>

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
                        
                           <input type="text" name="descripcionComercial" readonly="" id="descripcionComercial" class="form-control">
                        
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

                  </tr>

                </table>
                         
                <center><label>OBSERVACIONES:</label></center>

                <textarea class="form-control" rows="7" id="observacionesCalProducto" name="observacionesCalProducto" readonly=""></textarea>
                   

              </td>   

              </tr>

            </table>

            <table>

              <tr>

                <td>
                  <label>PERSONA QUIEN CALIFICÓ</label>
                </td>

                <td>
                  <input type="text" name="personaCalifica" readonly="" id="personaCalifica" class="form-control">
                </td>

              </tr>

            </table>

          </div>

      </div>

    </div>

  </div>

</div>


<div id="vistaDocumento" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">
   
    <div class="modal-content"  style="width: 120%">

        <div class="modal-header" style="background: #fff59a; color: white">

          <button type="button" class="close reload__modal" data-dismiss="modal" data-toggle='modal' data-target='#edicionCatalogoNegados '>&times;</button>
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





