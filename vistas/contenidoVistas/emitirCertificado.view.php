<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
?>

<div class="wrapper row3">
   

    <input type="hidden" name="codigodeUsuario" value="<?php   echo $IdCompletoUsuario; ?>" id="codigodeUsuario">
     <div class="contenedor__principal__de__formularios">
      
      <div class="contenedor__principal">
  
  	<table id="tablaCertificadoEntrega" name="tablaCertificadoEntrega">
    	<thead>
        	<tr> 
        		<th>NÚMERO CERTIFICADO</th>
          		<th>REVISAR</th>
        	</tr>
        </thead>
    	<tfoot> 
        	<tr> 
		        <th>NÚMERO CERTIFICADO</th>
		        <th>-</th>
        	</tr>
      	</tfoot>
    </table> 

  </div> 

</div>


<div id="edicionCatalogoEntrega" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">

      <div class="modal-header" style="background: #c96969; color: white">
        
        <button type="button" class="close" id="cerrarFormularioEmision" data-dismiss="modal">&times;</button>
           
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


