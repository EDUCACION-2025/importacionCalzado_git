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
     
    <table id="tablaCertiAprobadosGeneral" name="tablaCertiAprobadosGeneral">
      <thead>
          <tr> 
            <th>FECHA DE EMISIÓN</th>
            <th>FECHA DE APROBACIÓN</th>
            <th>RAZÓN SOCIAL</th>
            <th>RUC</th>
            <th>NÚMERO CERTIFICADO</th>
            <th>Revisar</th>
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


<div id="edicionCalificaGeneral" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #c96969; color: white">
        
        <button type="button" class="close" id="certifiAproModal" data-dismiss="modal">&times;</button>
        
     
        <h4 class="modal-title">CERTIFICADO</h4>

        
      
      </div>

      <div class="modal-body"> 
          
	      <div class="box-body">
         
	      	<input type="hidden" name="nomFoto" id="nomFoto" class="form-control">
          <embed id="verCertificado" type="application/pdf" height="700" name="verCertificado" style="width: 100%"></embed>	

	      </div>

  	  </div>

	</div>
  </div>
</div>
