<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  
?>
<div class="wrapper row3">
    
    <div class="contenedor__principal__de__formularios">
      
      <div class="contenedor__principal">

        <input type="hidden" name="idImportador" id="idImportador" value="<?php   echo $IdCompletoUsuario; ?>">

        <div style="width: 80%; position:relative; left:8%;">

            <center>
              <label>CORREGIR DOCUMENTOS</label>
            </center>

            <center>

              <table class="table table-bordered">

                <tr>
                  <td><label>SELECCIONE CÓDIGO</label></td>
                  <td> <select class="form-control" name="codigoCertificado" id="codigoCertificado"></select></td>
                </tr>

              </table>

            </center>
            
            <center>

              <table class="table table-bordered tablas__corregir__documentos">

                <tbody class="cuantos__corregir">


                </tbody>

              </table>

            </center>

            <center>
              <input type="submit" name="documentosCorregidos" id="documentosCorregidos" style="background:#1565c0; color:white; padding:1em; border-radius:.5em;">
            </center>

         </div>

        </div>

         <div style="width: 50%;">

            <table id="certificadosNegadosUsuario" name="certificadosNegadosUsuario">
                <thead>
                  <tr>
                      <th>CÓDIGO</th>
                      <th>RUC</th>
                      <th>RAZÓN SOCIAL</th>
                      <th>REVISAR</th>
                  </tr>

                </thead>

                <tfoot>
                  <tr>
                      <th>CÓDIGO</th>
                      <th>RUC</th>  
                      <th>RAZÓN SOCIAL</th>
                      <th>-</th>
                  </tr>

                </tfoot>

            </table>

           </div>


  	</div>

</div>



<div id="edicionCatalogoEntregaNegadosUsuario" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #6999c9; color: white">

        <button type="button" class="close" id="" data-dismiss="modal">&times;</button>

        <h4 class="modal-title">CERTIFICADOS NEGADOS</h4>

      </div>

      <div class="modal-body">
          
        <div class="box-body">
          <label>Motivo de Negacion</label>
          <textarea id="comentariodeNegacion" name="comentariodeNegacion" class="form-control" readonly="" rows="4"></textarea>

        </div>



      </div>

      <div class="modal-footer">
        
          <button type="button" class="btn btn-default" data-dismiss="modal">CERRAR</button>
        
          
        
      </div>

    </div>

  </div>

</div>