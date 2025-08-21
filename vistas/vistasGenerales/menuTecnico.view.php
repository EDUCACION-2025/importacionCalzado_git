<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  $idRol=$nombreObjeto->recuperandoIdFormulario();
  $id_encuesta=$nombreObjeto->recuperandoEncuesta();

  $modalProductos=$nombreObjeto->recuperandoModalProductos();
  $certificadoProductos=$nombreObjeto->recuperandoCertificadosProductos();

  $periodosConcatenadores=$nombreObjeto->recuperPeriodosConcatenadores();

  $nombresPeriodos=$nombreObjeto->recuperarPeriodosIngresas();

  $comparadorFormularioVacios=$nombreObjeto->recuperandoFormularioVacioTrimestrales();

?>

<body id="top">

  <!--===================================================
  =            Sección de las redes sociales            =
  ====================================================-->
  
  
  <div class="wrapper row0">

    <div id="topbar" class="clear"> 

      <div class="fl_left">

        <ul class="nospace inline">
          <li></li>
        </ul>

      </div>

      <div class="fl_right">

        <ul class="nospace faico clear">

          <li>

            <a class="faicon-facebook" href="https://www.facebook.com/MinisterioDeporteEcuador" target="_blank">
              <i class="fab fa-facebook-f"></i>
            </a>

          </li>

          <li>

            <a class="faicon-twitter" href="https://twitter.com/DeporteEc" target="_blank">
              <i class="fab fa-twitter-square"></i>
            </a>

          </li>

          <li>
            <a class="faicon-dribble" href="https://www.youtube.com/user/DeporteEc" target="_blank">
              <i class="fab fa-youtube-square"></i>
            </a>
          </li>

          <li>
            <a class="faicon-linkedin" href="https://www.flickr.com/photos/MinisterioDeporteEcuador/" target="_blank">
              <i class="fab fa-flickr"></i></a>
          </li>

        </ul>

      </div>

    </div>

  </div>
  
  <!--====  End of Sección de las redes sociales  ====-->
  

  <!--=================================================================
  =            Imagen central de la Secretaría del Deporte   d         =
  ==================================================================-->

  <div class="wrapper row1">
    
    <header id="header" class="clear" style="width: 60%">
      
      <div id="logo" class="fl_left">
        
          <a href="http://www.deporte.gob.ec/" target="_blank">
            <img src="images/nuevoMinisterio.png" style="width: 100%">
          </a>

          <?php if($idRol==4){?>
              <h9>REVISIÓN:</h9> &nbsp;
           <?php }else if($idRol==2){ ?>
              <h9>TECNICO:</h9> &nbsp;
           <?php }else{ ?>
              <h9>IMPORTADOR:</h9> &nbsp;
          <?php } ?>

          <h9><?php   echo $NombreUsuario; ?></h9>

              
      </div>

    </header>
    
  </div>
  
  <!--====  End of Imagen central de la Secretaría del Deporte  ====-->
  

  <!--================================================
  =            Menú de la Sección Iniciald            =
  =================================================-->

  <input type="hidden" name="idImportador" id="idImportador" value="<?php   echo $IdCompletoUsuario; ?>">

  <input type="hidden" name="nombresPeriodos" id="nombresPeriodos" value="<?php   echo $nombresPeriodos; ?>">
   
  <div class="wrapper row2">
    
    <nav id="mainav" class="clear menu__moviendo"> 

      <input type="hidden" name="nombreIntregrado" id="nombreIntregrado" value="<?php echo $NombreUsuario;?>">

        <ul class="clear">

          <?php if($idRol==4){?>

            <li><a class="drop" href="#">Certificados</a>

              <ul>

                <li>
                  <a href="certificadosTecniAprobados">Aprobados</a>
                </li>

                <li>
                  <a href="certificadosTecniNegados">Negados</a>
                </li>

              </ul>

            </li>

          <?php }else if($idRol==2){ ?>

              
            <li><a class="drop" href="#">Registros</a>

              <ul>

                <li>
                  <a href="registroUsuarios">Registro de Usuarios</a>
                </li>

                <li>
                  <a href="registroProductos">Registro de Productos</a>
                </li>

              </ul>

            </li>

            <li>
              <a href="marcaGlosario">MARCAS / GLOSARIO</a>
            </li>
                
            <li><a href="#">CERTIFICADOS</a>

              <ul>

                <li>
                    <a href="certificadosTecniPendientes">Pendientes</a>
                </li>

                <li>
                  <a href="certificadosAprobadosFin">Certificados Emitidos</a>
                </li>

              </ul>

            </li>

            <li><a href="#">Estado Tramites</a>

              <ul>

                <li><a href="#">Usuarios</a>

                  <ul>

                    <li>
                      <a href="registrosAprobados">Aprobados</a>
                    </li>

                    <li>
                      <a href="registrosNegados">Negados</a>
                    </li>

                  </ul>

                </li>

                <li><a href="#">Productos</a>

                  <ul>

                    <li>
                      <a href="productosAceptados">Aprobados</a>
                    </li>

                    <li>
                      <a href="productosNegados">Negados</a>
                    </li>

                  </ul>

                </li>

                <li><a href="#">Certificados</a>

                  <ul>

                    <li>
                      <a href="certificadosTecniAprobados">Aprobados</a>
                    </li>

                    <li>
                      <a href="certificadosTecniNegados">Negados</a>
                    </li>

                  </ul>

                </li>
                             
                <li>
                  <a href="reporteriaImportaciones">REPORTERÍA</a>
                </li>

                <li>
                  <a href="reporteriaImportacionesTrimestral">REPORTERÍA TRIMESTRAL</a>
                </li>

              </ul>

            </li>

              
            <?php }else{ ?>
              
            <li>
              <a href="ingresoDocumentos">Ingreso Documentos</a>
            </li>
                
            <li>
              <a href="ingresoMercaderia">Ingreso Material</a>
            </li>

            <li><a href="#">CATÁLOGO</a>

              <ul>

                <li>
                  <a href="catalogo">Catálogo Pendientes / Negados</a>
                </li>

                <li>
                  <a href="catalogoHistorico">Catálogo Aprobados</a>
                </li>

              </ul>

            </li>
                

            <li><a href="#">Certificados </a>

              <ul>
                    
                <li>
                  <a href="certificadosAprobados">Productos Aprobados </a>
                </li>

                <li><a href="documentosParaCertificado">Solicitar Certificado </a>

                  <ul>

                    <li>
                      <a href="corregirDocumentos">Corregir Documentos</a>
                    </li>

                  </ul>

                </li>
                    
                <li>
                  <a href="emitirCertificado">Certificado Final </a>
                </li>

                <li>
                  <a href="certificadosAprobados">Certificados </a>
                </li>

              </ul>

            </li>
<!-- 
            <li>
              <a href="productosIngresados" target="_blank">Productos Trimestrales</a>
            </li>
 -->

        <?php if(empty($id_encuesta)){?>

        <div id="encuestaSatisfac" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

          <div class="modal-dialog modal-lg">

            <div class="modal-content">

              <div class="modal-header" style="background: #3c8dbc; color: white">

                <button type="button" class="close" data-dismiss="modal" data-toggle='modal' data-target='#edicionUsuarioDocu '>&times;</button>

                <header class="encuesta__nuevecita__anadida">
                               
                    <h1 id="titulo" class="titulo__encuesta__de__satisfaccion__analizando">
                      ENCUESTA DE SATISFACCIÓN DEL SERVICIO VIRTUAL
                    </h1>

                </header>

              </div>

              <div  class="modal-body">
                
                <img src="images/logomintrabajo.jpg" class="imagenMovidita">

                <nav>

                    <p class="parrafo__encuesta__de__satisfactoria">

                      <em>Estimado usuario, su opinion es importante para nosotros.<br>Sus respuestas seran tratadas de forma conficdencial y sera utilizadas para mejorar el servicio que le proporcionamos.</em>

                    </p>

                </nav>

                <nav>

                  <p class="parrafo__encuesta__de__satisfactoria">

                    <strong>

                      Usando una escala de 0 a 5 en dónde 0 es Para nada satisfecho y 5 es Completamente satisfecho.<br> Por favor califique su nivel de satisfacción con respecto a:

                    </strong>

                  </p>

                </nav>

                <section>

                  <table border="3", cellpadding="5", cellspacing="1" class="tabla__de__satisfaccion">

                    <tr>

                      <td  class="Centrar" rowspan="2" colspan="1">CARACTERÍSTICAS DEL SERVICIO</td>
                      <td  class="Centrar" colspan="10">¿Qué tan satisfecho se encuentra Ud?</td>

                    </tr>

                    <tr>

                      <td class="Centrar">1</td>
                      <td class="Centrar">2</td>
                      <td class="Centrar">3</td>
                      <td class="Centrar">4</td>
                      <td class="Centrar">5</td>

                    </tr>

                    <tr>

                      <td>1.  ¿Qué tan satisfecho estás con la facilidad para encontrar este servicio en internet?</td>
                      <td><input type="radio" name="disponiblidadPagina" value="1"></td>
                      <td><input type="radio" name="disponiblidadPagina" value="2"></td>
                      <td><input type="radio" name="disponiblidadPagina" value="3"></td>
                      <td><input type="radio" name="disponiblidadPagina" value="4"></td>
                      <td><input type="radio" name="disponiblidadPagina" value="5"></td>

                    </tr>

                    <tr>

                      <td>2.  ¿Qué tan satisfecho estás con la facilidad de navegación dentro esta página web?</td>
                      <td><input type="radio" name="facilidadNavegacion" value="1"></td>
                      <td><input type="radio" name="facilidadNavegacion" value="2"></td>
                      <td><input type="radio" name="facilidadNavegacion" value="3"></td>
                      <td><input type="radio" name="facilidadNavegacion" value="4"></td>
                      <td><input type="radio" name="facilidadNavegacion" value="5"></td>

                    </tr>

                    <tr>

                      <td>3.  ¿Qué tan satisfecho estás con los pasos que realizaste para obtener este servicio?</td>
                      <td><input type="radio" name="actualizacionInformacion" value="1"></td>
                      <td><input type="radio" name="actualizacionInformacion" value="2"></td>
                      <td><input type="radio" name="actualizacionInformacion" value="3"></td>
                      <td><input type="radio" name="actualizacionInformacion" value="4"></td>
                      <td><input type="radio" name="actualizacionInformacion" value="5"></td>

                    </tr>

                    <tr>

                      <td>4.  ¿Qué tan satisfecho estás con la asistencia al usuario que presta este servicio?</td>
                      <td><input type="radio" name="claridadPresicion" value="1"></td>
                      <td><input type="radio" name="claridadPresicion" value="2"></td>
                      <td><input type="radio" name="claridadPresicion" value="3"></td>
                      <td><input type="radio" name="claridadPresicion" value="4"></td>
                      <td><input type="radio" name="claridadPresicion" value="5"></td>

                    </tr>

                    <tr>

                      <td>5.  ¿Qué tan satisfecho estás con que éste servicio se preste de manera virtual?</td>
                      <td><input type="radio" name="facilidadPagina" value="1"></td>
                      <td><input type="radio" name="facilidadPagina" value="2"></td>
                      <td><input type="radio" name="facilidadPagina" value="3"></td>
                      <td><input type="radio" name="facilidadPagina" value="4"></td>
                      <td><input type="radio" name="facilidadPagina" value="5"></td>

                    </tr>

                    <footer>

                      <p>
                                  
                        <button id="enviarRespuestasEncuestas" type="button" class="btn btn-success">Enviar Respuestas</button>

                      </p>

                    </footer>

                  </table>

                </section>

              </div>

            </div>

          </div>

        </div>

       <?php } ?>

              
      <?php } ?>

      <?php if (empty($periodosConcatenadores) && $idRol==2): ?>
        
<!--         <li>
          <a id="generarTrimestre" name="generarTrimestre" style="background:#1565c0; color:white; cursor:pointer;" style="cursor: pointer; text-align: center;line-height: 1em;">Generar Trimestral</a>
        </li>        -->

      <?php endif ?>        

      <li><a href="salir">Salir</a></li>

    </ul>

  </nav>
        
</div>
  
<!--====  End of Menú de la Sección Inicial  ====-->
  
<!--==============================================================
=            Modal para registrar productos de ventas            =
===============================================================-->

<input type="hidden" name="modalProductos" id="modalProductos" value="<?php echo $modalProductos?>">

<input type="hidden" name="certificadoProductos" id="certificadoProductos" value="<?php echo $certificadoProductos?>">

<input type="hidden" name="comparadorFormularioVacios" id="comparadorFormularioVacios" value="<?php echo $comparadorFormularioVacios?>">

<!--====  End of Modal para registrar productos de ventas  ====-->
