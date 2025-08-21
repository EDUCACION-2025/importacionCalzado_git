<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  
?>
<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
      
      <div class="contenedor__principal">
        
        <input type="hidden" name="id_ingresoLogin" id="id_ingresoLogin" value="<?php  echo $IdCompletoUsuario; ?>" >
       
        <table id="tablaTecniPendiente" name="tablaTecniPendiente">
          <thead>

                <tr>
                <th>FECHA INGRESO</th>  
                <th>RUC</th>
                <th>RAZÓN SOCIAL</th>
                <th>CODIGO-IMPORTACIÓN</th>
                 
                <th>Revisar</th>
              </tr>

          </thead>

          <tfoot>

                <tr>
                <th>FECHA INGRESO</th>
                <th>RUC</th>  
                <th>RAZÓN SOCIAL</th>
                <th>CODIGO-IMPORTACIÓN</th>
                <th>-</th>

                </tr>

          </tfoot>

      </table>  

      </div>
    
    </div>

</div>

<div id="edicionTecniPendiente" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

    <div class="modal-dialog modal-lg">

      <div class="modal-content">

        <div class="modal-header" style="background: #59b5d4; color: white">
          <button type="button" class="close close__reinicio" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">DOCUMENTACIÓN DE CALIFICACIÓN CERTIFICADO</h4>
        </div>
        
        <div class="modal-body">
        
          <div class="box-body">

            <table class="table table-bordered">
              <tr>
                <td>
                  <label>RUC</label>
                  <input type="hidden" name="idCodigoCalifi" id="idCodigoCalifi">
                  <input type="text" name="rucImportador" id="rucImportador" class="form-control" readonly="">
                  <input type="hidden" name="agregaEmail" id="agregaEmail" class="form-control" readonly="">

                </td>
                <td>
                  <label>RAZÓN SOCIAL</label>
                  <input type="text" name="razonImportador" id="razonImportador" class="form-control" readonly="">
                </td>
                <td>
                  <label>CODIGO-IMPORTACIÓN</label>
                  <input type="text" name="codigoImporta" id="codigoImporta" class="form-control" readonly=""> 
                </td>
              </tr>
            </table>

            <table class="table table-bordered">


              <tr>
                <td>
                  <label>Declaración Juramentada incluida en la Resolución 019-2019 del COMEX</label>
                </td>
                <td style="width: 7%">
                  <button class='edicionDeRol btn btn-light' data-dismiss='modal' data-toggle='modal' data-target='#comex '><i class="far fa-eye"></i></button>
                </td>
              </tr>


              <tr>  
                <td>
                  <label>Certificado de encontrarse en Listas Blancas con el Servicio de Rentas Internas (SRI)</label>
                </td>
                <td style="width: 7%">
                  <button class='edicionDeRol btn btn-light' data-dismiss='modal' data-toggle='modal' data-target='#listasBlancas '><i class="far fa-eye"></i></button>
                </td>
              </tr>



              <tr>  
                <td>
                  <label>Certificado de Cumplimiento de Obligaciones emitido por el Instituto Ecuatoriano de Seguridad Social(IESS)</label>
                </td>
                <td style="width: 7%">
                  <button class='edicionDeRol btn btn-light' data-dismiss='modal' data-toggle='modal' data-target='#IESScumplimientos '><i class="far fa-eye"></i></button>
                </td>
              </tr>


              <tr>  
                <td>
                  <label>CERTIFICADO DE NO ADEUDAR AL SERVICIO NACIONAL DE ADUANA DEL ECUADOR</label>
                </td>
                <td style="width: 7%">
                  <button class='edicionDeRol btn btn-light' data-dismiss='modal' data-toggle='modal' data-target='#noAdeudarServiciosAduanas'><i class="far fa-eye"></i></button>
                </td>
              </tr>

              <tr>
                <td colspan="2">
                  <label>OBSERVACIONES</label>
                  <textarea class="form-control" rows="3" name="observacionEmitirCertificado" id="observacionEmitirCertificado"></textarea>
                </td>
              </tr>

              <tr>

                <td colspan="2">
                  <div style="display:flex;">
                    <label>¿CUANTOS DOCUMENTOS DEBE CORREGIR?</label>
                    &nbsp;
                    <input type="text" class="cuantosCorregir" id="cuantosCorregir" name="cuantosCorregir" style="width:80%; height:35px;">
                  </div>
                  <div class="periodo__de__documentos"></div>
                </td>

              </tr>


            </table>



             

          </div>

        </div>

        <div class="modal-footer">

          <input type="submit" name="enviarCertificadoNegado" id="enviarCertificadoNegado" class=" btn btn-danger" value="NEGAR">
          <input type="submit" name="emitirCertificadoFinal" id="emitirCertificadoFinal" class=" btn btn-info" value="EMITIR CERTIFICADO">
                  
        </div>

      </div>

    </div>
 
</div>

<div id="comex" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">
   
    <div class="modal-content"  style="width: 120%">

        <div class="modal-header" style="background: #d45980; color: white">
          <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionTecniPendiente '>&times;</button>

          <center><h4 class="modal-title">COMEX</h4></center>
        </div>
        
        <div class="modal-body">
        
          <div class="box-body">
            
           <input class="form-control inpunt-lg" type="hidden" name="vercomex" id="vercomex">
           <embed id="verpdfComex" type="application/pdf" width="570" height="800"  name="verpdfComex" style="width: 100%"></embed>
     
         
          </div>

        </div>

    </div>

  </div>

</div>


<div id="listasBlancas" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

    <div class="modal-dialog modal-lg">
     
      <div class="modal-content"  style="width: 120%">

          <div class="modal-header" style="background: #d45980; color: white">
            <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionTecniPendiente'>&times;</button>
            <center><h4 class="modal-title">SRI Listas Blancas</h4></center>
          </div>
          
          <div class="modal-body">
          
            <div class="box-body">
              
             <input class="form-control inpunt-lg" type="hidden" name="verlistasBlancas" id="verlistasBlancas">
             <embed id="verpdflistasBlancas" type="application/pdf" width="570" height="800"  name="verpdflistasBlancas" style="width: 100%"></embed>
       
           
            </div>

          </div>

      </div>

    </div>

</div>


<div id="IESScumplimientos" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

    <div class="modal-dialog modal-lg">
     
      <div class="modal-content"  style="width: 120%">

          <div class="modal-header" style="background: #d45980; color: white">
            <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionTecniPendiente'>&times;</button>
            <center><h4 class="modal-title">Cumplimiento IESS</h4></center>
          </div>
          
          <div class="modal-body">
          
            <div class="box-body">
              
             <input class="form-control inpunt-lg" type="hidden" name="verIESScumplimientos" id="verIESScumplimientos">
             <embed id="verpdfIESScumplimientos" type="application/pdf" width="570" height="800"  name="verpdfIESScumplimientos" style="width: 100%"></embed>
       
           
            </div>

          </div>

      </div>

    </div>

</div>

<div id="noAdeudarServiciosAduanas" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

    <div class="modal-dialog modal-lg">
     
      <div class="modal-content"  style="width: 120%">

          <div class="modal-header" style="background: #d45980; color: white">
            <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionTecniPendiente'>&times;</button>
            <center><h4 class="modal-title">CERTIFICADO DE NO ADEUDAR AL SERVICIO NACIONAL DE ADUANA DEL ECUADOR</h4></center>
          </div>
          
          <div class="modal-body">
          
            <div class="box-body">
              
             <input class="form-control inpunt-lg" type="hidden" name="verNoAdeudarServiciosDeAduanas" id="verNoAdeudarServiciosDeAduanas">
             <embed id="verpdfNoAdeudarServiciosDeAduanas" type="application/pdf" width="570" height="800"  name="verpdfNoAdeudarServiciosDeAduanas" style="width: 100%"></embed>
       
           
            </div>

          </div>

      </div>

    </div>

</div>

