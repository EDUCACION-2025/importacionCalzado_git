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

      <table style="border: hidden; background-color: transparent; width: 7% ">

        <tr style="border: hidden;">

          <td style="border: hidden; padding: 1em;"><button class="btn btn-danger"><i class='fas fa-eye'></i></button></td>
          <td style="border: hidden; padding: 1em;"> NEGADO</td>

          <td></td>

          <td style="border: hidden; padding: 1em;"><button class="btn btn-warning"><i class='fas fa-eye'></i></button></td>
          <td style="border: hidden; padding: 1em;"> PENDIENTE</td>

        </tr>

        <tr style="border: hidden;">


        </tr>

      </table>

    </center>


      <table id="tablaCatalogo" name="tablaCatalogo">

        <thead>

          <tr>

            <th>FECHA</th>
            <th>CÓDIGO</th>
            <th>MARCA</th>
            <th>MODELO</th>
            <th>DISCIPLINA DEPORTIVA</th>
            <th>REVISAR</th>

          </tr>

       </thead>

       <tfoot> 

            <tr>
              
              <th>FECHA</th>
              <th>CÓDIGO</th>
              <th>MARCA</th>
              <th>MODELO</th>
              <th>DISCIPLINA DEPORTIVA</th>
              <th>-</th>

            </tr>

        </tfoot>

      </table>  

   </div>

</div>


<center>
  <input type="hidden" name="idCatalogoAbsorvido" id="idCatalogoAbsorvido">
</center>

<br>



<div id="edicionCatalogo" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #3c8dbc; color: white">
        
        <button type="button" class="close close__reinicio" data-dismiss="modal">&times;</button>
        
        <h4 class="modal-title">Detalles del Producto</h4>
      
      </div>

      <div class="modal-body">
          
         <div class="box-body">

            <table class="table table-bordered">

              <tr>

                <td style="width: 60%">

                  <table style="border: hidden;">

                    <tr>

                      <td>

                         <label>CODIGO UNICO</label>

                          <div class="form-group">

                            <div class="input-group">

                               <span class="input-group-addon"><i class="fa fa-list-ol col-lg-4"></i></span>
                               <input type="text" name="CodigoImplemento" id="CodigoImplemento" class="form-control">
                               <input type="hidden" name="id_producto" id="id_producto" class="form-control">
                               
                            </div>

                          </div>

                      </td>

                    </tr>


                    <tr>

                      <td>

                        <table style="border: hidden;">

                          <tr>

                            <td>

                              <label>ITEM</label>

                              <div class="form-group">

                                <div class="input-group">

                                   <span class="input-group-addon"><i class="fab fa-superpowers"></i></span>

                                   <input type="text" name="item" id="item" class="form-control" readonly="">

                                   <select class="form-control" id="selectItem11" name="selectItem11"></select>

                                </div> 

                              </div>

                              <input type="hidden" name="traeItemOriginal" id="traeItemOriginal">

                            </td>

                            <td style="border: hidden;">

                              <br>

                              <button class='edicionDeRol alineacion__de__elemento btn btn-link' title="CAMBIAR" name="cambiarItem" id="cambiarItem"><i class="fas fa-sync"></i></button>

                            </td>

                          </tr>

                        </table>
                         
                      </td>

                    </tr>

                    <tr>

                      <td>

                         <label>CODIGO ARANCELARIO</label>

                          <div class="form-group">

                            <div class="input-group">

                               <span class="input-group-addon"><i class="fas fa-code"></i></span>

                               <input type="text" name="codigoArancelario" id="codigoArancelario" class="form-control" readonly="">

                               <select class="form-control" id="selectItem21" name="selectItem21"></select>

                            </div>

                          </div>

                          <input type="hidden" name="traeCodigoArancelarioOriginal" id="traeCodigoArancelarioOriginal">

                      </td>

                    </tr>

                    <tr>

                      <td>

                         <label>DESCRIPCION COMERCIAL</label>

                          <div class="form-group">

                            <div class="input-group">

                               <span class="input-group-addon"><i class="far fa-file-alt"></i></span>

                               <textarea  type="text" name="descripcionComercial" id="descripcionComercial" class="form-control"></textarea>
                              
                            </div>

                          </div>

                      </td>

                    </tr>

                    <tr>

                      <td>
                         <table style="border: hidden;">

                          <tr>

                            <td>

                                <label>MARCA</label>

                                <div class="form-group">

                                  <div class="input-group">

                                     <span class="input-group-addon"><i class="fa fa-tags"></i></span>

                                     <input type="text" name="marcaImplemento" id="marcaImplemento" class="form-control" readonly="">

                                     <select id="marca123" name="marca123"  class="form-control"></select>

                                     <input type="hidden" name="marca160" id="marca160">

                                     <input type="hidden" name="nombreMarccca" id="nombreMarccca">

                                  </div>

                                </div>

                              </td>

                              <td style="border: hidden;">

                                <br>

                                <button class='edicionDeRol alineacion__de__elemento btn btn-link' title="CAMBIAR" name="cambiarMarca" id="cambiarMarca"><i class="fas fa-sync"></i></button>

                              </td>

                            </tr>

                          </table>

                      </td>

                    </tr>

                    <tr>

                      <td>

                        <label>MODELO</label>

                          <div class="form-group">

                            <div class="input-group">

                               <span class="input-group-addon"><i class="fa fa-pie-chart"></i></span>

                               <input type="text" name="modeloImplemento" id="modeloImplemento" class="form-control">

                            </div>

                          </div>

                      </td>

                    </tr>

                    <tr>

                      <td>

                        <table style="border: hidden;">

                          <tr>

                              <td>

                                  <label>DISCIPLINA DEPORTIVA</label>

                                  <div class="form-group">

                                    <div class="input-group">

                                       <span class="input-group-addon"><i class="fa fa-futbol-o" aria-hidden="true"></i></span>

                                       <input type="text" name="disciplinaDeport" id="disciplinaDeport" class="form-control" readonly="">

                                        <select class="form-control" id="disiplinaDeportiva1" name="disiplinaDeportiva1"></select>
                                       
                                    </div>

                                   </div>

                                 <input type="hidden" name="traeDisciplinaOriginal" id="traeDisciplinaOriginal">

                              </td>

                              <td style="border: hidden;">

                                <br>

                                <button class='edicionDeRol alineacion__de__elemento btn btn-link' title="CAMBIAR" name="cambiarDisciplina" id="cambiarDisciplina"><i class="fas fa-sync"></i></button>

                              </td>

                            </tr>

                          </table>

                        </td>

                    </tr>

                    <tr>

                      <td>

                        <table style="border: hidden;">

                          <tr>

                            <td>

                              <label>GÉNERO</label>

                                <div class="form-group">

                                  <div class="input-group">

                                     <span class="input-group-addon"><i class="fa fa-futbol-o" aria-hidden="true"></i></span>
                                     <select class="form-control" id="generoCambiante" name="generoCambiante">
                                        
                                        <option value="MASCULINO">Masculino</option>
                                        <option value="FEMENINO">Femenino</option>
                                        <option value="MIXTO">Mixto</option>

                                     </select>
                                     
                                  </div>

                                </div>

                              </td>

                            </tr>

                          </table>

                        </td>

                    </tr>

                    <tr>

                      <td>

                        <table style="border: hidden;">

                          <tr>

                            <td>

                              <label>GRUPO ETÁRIO</label>

                                <div class="form-group">

                                  <div class="input-group">

                                     <span class="input-group-addon"><i class="fa fa-futbol-o" aria-hidden="true"></i></span>
                                     <select class="form-control" id="grupoEtarioCambiantes" name="grupoEtarioCambiantes">
                                        
                                        <option value="Ninos">Niños</option>
                                        <option value="Adultos">Adultos</option>

                                     </select>
                                     
                                  </div>

                                </div>

                              </td>

                            </tr>

                          </table>

                        </td>

                    </tr>

                    <tr>

                      <td>

                        <label>PRECIO PERÚ</label>

                          <div class="form-group">

                            <div class="input-group">

                               <span class="input-group-addon"><i class="fa fa-usd"></i></span>

                               <input type="text" name="preciPerr" id="preciPerr" class="form-control">

                            </div>

                          </div>

                      </td>

                    </tr>

                    <tr>

                      <td>

                          <label>PRECIO COLOMBIA</label>

                          <div class="form-group">

                            <div class="input-group">

                               <span class="input-group-addon"><i class="fa fa-usd" aria-hidden="true"></i></span>

                               <input type="text" name="preColomm" id="preColomm" class="form-control">

                            </div>

                          </div>

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

                              <div class="image1">
                                
                                 <center>Imagen o Documento 1</center>

                                  <button class='edicionDeRol alineacion__de__elemento btn btn-link' title="VER" data-toggle='modal' data-target='#vistaDocumento ' name="mostrarImagen1" id="mostrarImagen1"><i class='fas fa-eye'></i></button>

                                  <button class='edicionDeRol alineacion__de__elemento btn btn-link' title="CAMBIAR" name="cambiarImaDocu1" id="cambiarImaDocu1"><i class="fas fa-sync"></i></button>

                              </div>

                              <div class="cambioImage1">
                                
                                <input type="file" name="cambioImagenExtra" id="cambioImagenExtra">

                              </div>
                          
                          </td>

                      </tr>

                      <tr>

                         <td>

                            <center>
                              MOTIVO
                            </center>

                         </td>
                         
                      </tr>


                    <tr>

                      <td>

                        <label>MATERIAL/ES Y COMPOSICIÓN DEL PRODUCTO</label>

                          <div class="form-group">

                            <div class="input-group">

                               <span class="input-group-addon"><i class="fa fa-usd"></i></span>

                               <input type="text" name="materialesEdicion" id="materialesEdicion" class="form-control">

                            </div>

                          </div>

                      </td>

                    </tr>

                      <tr>

                          <td>

                              <textarea rows="7" id="observacion" name="observacion" class="form-control" readonly=""></textarea>

                          </td>

                      </tr>

                  </table>

                </td>

              </tr>

            </table>

          </div>

        </div>


       <div class="modal-footer">
        
          <button type="button" class="btn btn-default pull-left" data-dismiss="modal" id="cancalarCatalogo" name="cancalarCatalogo">CANCELAR</button>
        
          <button type="submit" id="actualizaInformacionProducto" name="actualizaInformacionProducto" class="btn btn-info">ACTUALIZAR</button>
        
       </div>

    </div>

  </div>

</div>



<div id="vistaDocumento" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">
   
    <div class="modal-content"  style="width: 120%">

        <div class="modal-header" style="background: #61ad90; color: white">

          <button type="button" class="close" data-dismiss="modal">&times;</button>

          <center><h4 class="modal-title">IMAGEN 1</h4></center>

        </div>
        
        <div class="modal-body">
        
          <div class="box-body">
            
            <input type="hidden" name="nomFoto" id="nomFoto" class="form-control inpunt-lg">

            <center><img class="anadir_foto" id="imagg" name="imagg"></center>
            
          </div>

        </div>

    </div>

  </div>

</div>

