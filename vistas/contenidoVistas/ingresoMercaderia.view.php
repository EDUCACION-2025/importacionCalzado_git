<?php 

  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  $marcaStrings=$nombreObjeto->recuperandoMarcaMarcadas();
  $marcaStringsDoces=$nombreObjeto->recuperandoMarcaMarcadasDoces();

  $calzadosConretos=$nombreObjeto->recuperandoCalzadosContretos();
  $implementosConcretos=$nombreObjeto->recuperandoImplementosDeportivosContretos();
  $deportesConcretos=$nombreObjeto->recuperandoDeportesContretos();

  $descripcionesConcretas=$nombreObjeto->recuperandoDescripcionesConcretas();
  
?>


<!--=======================================
=            Sección Principal            =
========================================-->

<div class="wrapper row3">

    <div class="contenedor__principal__de__formularios2">

        <br>

        <table class="tabla__elementos__permitidos">

            <thead>


                <tr>
                    
                    <th colspan="4"><center>FORMATO EXCEL</center></th>

                </tr>

                <tr>

                    <td colspan="2" class="descargas__paddings"  rowspan="2"><center>Descargar formato excel para el ingreso de productos</center></td>
                    <td colspan="2" class="descargas__paddings"  rowspan="1"><center><a href="formatosExcel/FormatoProductos.xlsx" class="descarga__formato">Descargar Formato <i class="fas fa-upload"></i> (Dar clic aquí para descargar el formato obligatorio)</a></center></td>

                </tr>

                <tr>

                    <td colspan="2" class="descargas__paddings" style="    font-size: 15px;font-weight: bold; color: red;"><center>"Ingresar máximo 20 productos por Exce"</center></td>

                </tr>

            </thead>

          </table>

          <br>



          <table class="tabla__elementos__permitidos">


            <thead>

              <tr>
                    
                <th colspan="4"><center>PARAMETROS PERMITIDOS PARA CADA CAMPO DEL ARCHIVO EXCEL</center></th>

              </tr>

            </thead>


            <tbody>

                <tr>

                    <th class="rotulos__titulos" style="background: #b0bec5; color:black;"><center>ITEMS PERMITIDOS</center></th>
                    <th class="rotulos__titulos" style="background: #b0bec5; color:black;"><center>CÓDIGOS ARANCELARIOS PERMITIDOS PARA EL ITEM CALZADO</center></th>
                    <th class="rotulos__titulos" style="background: #b0bec5; color:black;"><center>CÓDIGOS ARANCELARIOS PERMITIDOS PARA EL ITEM IMPLEMENTOS DEPORTIVOS</center></th>
                    <th class="rotulos__titulos" style="background: #b0bec5; color:black;"><center>DISCIPLINA DEPORTIVA/ACTIVIDAD FÍSICA PERMITIDA</center></th>

                </tr>

                <tr>

                    <td class="rotulos__contenidos" style="padding: .8em;"><center>IMPLEMENTOS DEPORTIVOS, CALZADO</center></td>
                    <td class="rotulos__contenidos" style="padding: .8em;"><center><a type="submit" class="modales__exceles" data-toggle='modal' data-target='#codigosCalzados'><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;VER</a></center></td>
                    <td class="rotulos__contenidos" style="padding: .8em;"><center><a type="submit" class="modales__exceles" data-toggle='modal' data-target='#codigosImplementos'><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;VER</a></center></td>
                    <td class="rotulos__contenidos" style="padding: .8em;"><center><a type="submit" class="modales__exceles" data-toggle='modal' data-target='#deportesModales'><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;VER</a></center></td>

                </tr>

                <tr>

                    <th class="rotulos__titulos" style="background: #b0bec5; color:black;"><center>DESCRIPCIÓN COMERCIAL</center></th>
                    <th class="rotulos__titulos" style="background: #b0bec5; color:black;"><center>MARCA PERMITIDA</center></th>
                    <th class="rotulos__titulos" style="background: #b0bec5; color:black;"><center>GÉNERO PERMITIDO</center></th>
                    <th class="rotulos__titulos" style="background: #b0bec5; color:black;"><center>GRUPO ETARIO PERMITIDO</center></th>

                </tr>

                <tr>

                    <td class="rotulos__contenidos" style="padding: .8em;"><center><a type="submit" class="modales__exceles" data-toggle='modal' data-target='#descripcionContenidos'><i class="fa fa-eye" aria-hidden="true"></i>&nbsp;&nbsp;VER</a></center></td>
                    <td class="rotulos__contenidos"><center><?php echo $marcaStringsDoces;?></center></td>
                    <td class="rotulos__contenidos"><center>MASCULINO, FEMENINO, MIXTO</center></td>
                    <td class="rotulos__contenidos"><center>NIÑOS, ADULTOS</center></td>

                </tr>

            </tbody>

        </table>

        <div class="formulario__display__flex">

        <!-- <div>
          Carga de productos desactivada por mantenimiento
        </div> -->

            <input  type="text" name="direccionDocumentoExcel" id="direccionDocumentoExcel" disabled="">
            <label for="documentoExcelProductos" class="documentos__excel__productos">
                <i class="fas fa-cloud-upload-alt color__subidas"></i>&nbsp;&nbsp;Subir Documento Excel
            </label>

            <div class="archivo__escondido">

                <input type="file" name="documentoExcelProductos" id="documentoExcelProductos">

            </div>

        </div>

        <br>
        <br>
        <br>

        <input type="hidden" name="idImportador" id="idImportador" value="<?php   echo $IdCompletoUsuario; ?>">
        <input type="hidden" name="marcasStringers" id="marcasStringers" value="<?php   echo $marcaStrings; ?>">

        <table class="tabla__productos" border="1">

            <thead>

                <tr>

                    <th class="rotulos__tabla__productos"><center>No</center></th>
                    <th class="rotulos__tabla__productos"><center>ITEM</center></th>
                    <th class="rotulos__tabla__productos"><center>CODIGO ARRANCELARIO</center></th>
                    <th class="rotulos__tabla__productos"><center>DESCRIPCIÓN COMERCIAL</center></th>
                    <th class="rotulos__tabla__productos"><center>DISCIPLINA DEPORTIVA/ACTIVIDAD FÍSICA</center></th>
                    <th class="rotulos__tabla__productos"><center>MARCA</center></th>
                    <th class="rotulos__tabla__productos"><center>MODELO</center></th>
                    <th class="rotulos__tabla__productos"><center>PRECIO DE VENTA AL PUBLICO PERÚ (USD)</center></th>
                    <th class="rotulos__tabla__productos"><center>PRECIO DE VENTA AL PUBLICO COLOMBIA (USD)</center></th>
                    <th class="rotulos__tabla__productos"><center>GÉNERO</center></th>
                    <th class="rotulos__tabla__productos"><center>GRUPO ETÁRIO</center></th>
                    <th class="rotulos__tabla__productos"><center>CÓDIGO ÚNICO INTERNACIONAL DE CALZADO E IMPLEMENTOS ESPECIALIZADOS</center></th>   
                    <th class="rotulos__tabla__productos"><center>MATERIAL/ES Y COMPOSICIÓN DEL PRODUCTO</center></th>  
                    <th class="rotulos__tabla__productos"><center>IMAGÉN</center></th>  

                </tr>

            </thead>

            <tbody class="body__tabla__productos"></tbody>

        </table>


    </div>

</div>

<!--====  End of Sección Principal  ====-->

<!--======================================
=            Modales Boostrap            =
=======================================-->

<!--=====================================================
=            Modal Items Calzados Deportivos            =
======================================================-->

<div id="codigosCalzados" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

      <div class="modal-dialog modal-lg">

        <div class="modal-content">

          <div class="modal-header">
            
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h6><strong><center>CÓDIGOS ARRANCELARIOS PERMITDOS PARA EL ITEM CALZADO</center></strong></h6>
            
          </div>
          
          <div class="modal-body">
          
            <div class="box-body">
                
              <div class="form-group agrupador__containers">
            
                <?php echo $calzadosConretos;?>

              </div>
            
            </div>
          
          </div>

        </div>
      
      </div>

</div>


<!--====  End of Modal Items Calzados Deportivos  ====-->


<!--==================================================
=            Items Implementos deportivos            =
===================================================-->


<div id="codigosImplementos" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

      <div class="modal-dialog modal-lg">

        <div class="modal-content">

          <div class="modal-header">
            
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h6><strong><center>CÓDIGOS ARRANCELARIOS PERMITDOS PARA EL ITEM IMPLEMENTOS DEPORTIVOS</center></strong></h6>
            
          </div>
          
          <div class="modal-body">
          
            <div class="box-body">
                
              <div class="form-group agrupador__containers">
            
                <?php echo $implementosConcretos;?>

              </div>
            
            </div>
          
          </div>

        </div>
      
      </div>

</div>


<!--====  End of Items Implementos deportivos  ====-->


<!--===========================================
=            Descripción Comercial            =
============================================-->

<div id="descripcionContenidos" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

      <div class="modal-dialog modal-lg">

        <div class="modal-content">

          <div class="modal-header">
            
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h6><strong><center>DESCRIPCIÓN COMERCIAL</center></strong></h6>
            
          </div>
          
          <div class="modal-body">
          
            <div class="box-body">
                
              <div class="form-group agrupador__containers">
            
                <?php echo $descripcionesConcretas;?>

              </div>
            
            </div>
          
          </div>

        </div>
      
      </div>

</div>

<!--====  End of Descripción Comercial  ====-->


<!--==============================
=            Deportes            =
===============================-->

<div id="deportesModales" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

      <div class="modal-dialog modal-lg">

        <div class="modal-content">

          <div class="modal-header">
            
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h6><strong><center>DEPORTES PERMITIDOS</center></strong></h6>
            
          </div>
          
          <div class="modal-body">
          
            <div class="box-body">
                
              <div class="form-group agrupador__containers">
            
                <?php echo $deportesConcretos;?>

              </div>
            
            </div>
          
          </div>

        </div>
      
      </div>

</div>


<!--====  End of Deportes  ====-->


<!--====  End of Modales Boostrap  ====-->
