<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  
?>
<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
      
    	<div class="contenedor__principal">
        
        	<input type="hidden" name="id_ingresoLogin" id="id_ingresoLogin" value="<?php  echo $IdCompletoUsuario; ?>" >

      

    	</div>

      <div style="width: 95%;">

        <table id="certificadosNegados" name="certificadosNegados">
            <thead>
              <tr>
                  <th>FECHA DE EMISIÓN</th>
                  <th>FECHA DE APROBACIÓN</th>
                  <th>RAZÓN SOCIAL</th>
                  <th>RUC</th>
                  <th>NÚMERO CERTIFICADO</th>
                  <th>MOTIVO</th>
              </tr>

            </thead>

            <tfoot>
              <tr>
                  <th>FECHA DE EMISIÓN</th>
                  <th>FECHA DE APROBACIÓN</th>
                  <th>RAZÓN SOCIAL</th>
                  <th>RUC</th>
                  <th>NÚMERO CERTIFICADO</th>
                  <th>-</th>
              </tr>

            </tfoot>

        </table>  

       </div>

	</div>
</div>

<div id="edicionCatalogoEntregaNegados" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

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