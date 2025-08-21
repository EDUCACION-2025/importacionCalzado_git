<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  $idRol=$nombreObjeto->recuperandoIdFormulario();
  $id_encuesta=$nombreObjeto->recuperandoEncuesta();

  $modalProductos=$nombreObjeto->recuperandoModalProductos();
  $certificadoProductos=$nombreObjeto->recuperandoCertificadosProductos();


  $nombresPeriodos=$nombreObjeto->recuperarPeriodosIngresas();

?>

<input type="hidden" name="idImportador" id="idImportador" value="<?php   echo $IdCompletoUsuario; ?>">

<input type="hidden" name="nombresPeriodos" id="nombresPeriodos" value="<?php   echo $nombresPeriodos; ?>">

<div id="modalComoInscribirse" class="modal fade" data-backdrop="static" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog" style="width:80%;">

    <div class="modal-content">

     <div class="modal-header" style="background: #3c8dbc; color: white">


        <header class="elementos__flexibles__modales">

          <a href="salir" style="color:white; font-size:15px; font-weight: bold;">SALIR</a>
                               
          <h1 class="titulo__principal__modales" style="text-align: center; line-height: 1.5em;">
            INGRESO DE PRODUCTOS TRIMESTRALES<br>
            (No podrá realizar ninguna acción mientras no complete la información requerida)
          </h1>

        </header>

      </div>

      <div class="modal-body">

        <div class="box-body elementos__flexibles__modales">

          <table class="tabla__elementos__permitidos tabla__modales">
            
            <thead class="head__destruido">

              <tr>

                <th><center>No</center></th>
                <th><center>Código</center></th>
                <th><center>Item</center></th>   
                <th><center>Producto</center></th>
                <th><center>Cantidad importada</center></th>
                <th><center>Cantidad restante</center></th>
                <th><center>Cantidad vendida</center></th>
                <th><center>Precio de venta al público (PVP)</center></th>
                <th><center>Total (Multiplicación entre cantidad vendida y PVP)</center></th>
                <th><center>GUARDAR<br><div style="font-size: 10px; font-weight: bold; color:white;">Está sección permitirá guardar por fila</div></center></th>
              
              </tr>

            </thead>

            <tbody class="contenedor__productos__accecibles">


            </tbody>

            <tfoot>

              <tr>

                <td colspan="10" style="padding-top: 2em; padding-bottom: 1em;">

                  <center>

                    <button id="enviarProductosTrimestrales" name="enviarProductosTrimestrales" style="padding:.8em; border-radius:.5em; color:white; background:#1565c0;">Enviar</button>
                    <div class="reload__cargar2"></div>

                  </center>

                </td>
              
              </tr>

            </tfoot>

          </table>


        </div>

      </div>

    </div>

  </div>

</div>
