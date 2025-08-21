<!--=======================================
=            Sección Principal            =
========================================-->
<div class="wrapper row3">
  
  <main class="container clear">
    
    <div class="contenedor__principal__de__formularios">
    	

      <form method="post" class="formulario__inicial">
    		
    		<div class="form-group">

	         <div class="input-group">

	           <span class="input-group-addon"><i class="fa fa-user"></i></span>

	           <input class="form-control inpunt-lg" type="text" name="usuario" id="usuario"  placeholder="Ingresar usuario">

	         </div>

        </div>

        <div class="form-group"> 

         	<div class="input-group">

           	<span class="input-group-addon"><i class="fa fa-key"></i></span>

             <input class="form-control inpunt-lg" type="password" name="password" id="password" placeholder="Ingresar password">

         	</div>

        </div>
           
            <button type="submit" name="ingresarUsuario" id="ingresarUsuario" class="btn registro">Acceder  <i class="fa fa-hdd-o"></i></button>
            
            <?php
               $ingreso= new ControladorIngreso();
               $ingreso->ctrIngreso();
            ?>

    	</form>

      <table style="border: hidden; background-color: #000000;">

        <tr>

          <td style="border: hidden;">

            <p align="left">

              <button class="btn btn-link" data-toggle="modal" data-target="#documentosDescargar">
            
                <i class="far fa-file-pdf"></i>

                FORMULARIOS A DESCARGAR

              </button>

            </p>

            <br>

            <img src="images/pdfImage.png" style="width: 4%"><a href="images/DocumentosDescargar/ACUERDO.pdf" download="ACUERDO">REGLAMENTO PARA LA OBTENCIÓN DEL CERTIFICADO </a>

          </td>

        </tr>

        <tr>

        	<td>

        		<center>

        			<a  style="font-size: 12px; font-weight:bold; margin-top: 1em;" href="https://encuestas.gobiernoelectronico.gob.ec/index.php/271194?lang=s" target="_blank">Evaluación de los Servicios</a>

        		</center>

        	</td>

        </tr>

      </table>

    </div>
   
  </main>

</div>


<div id="agregarUsuario1" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">
  
  <div class="modal-dialog modal-lg">

    <div class="modal-content" style="width: 90%!important;">
  
      <div class="modal-header" style="background: #3c8dbc; color: white">

        <button type="button" class="close" data-dismiss="modal">&times;</button>

        <h4 class="modal-title">Ingreso Importador</h4>

      </div>

      <div class="modal-body">
        
        <div class="box-body body__adaptable__flex">

          <label class="label__titulos">
              SELECCIONE TIPO DE PERSONA
          </label> 

          <div class="contenedor__secciones">


              <label class="posicion__rotulos">PERSONA NATURAL  </label>


              <input type="radio" name="personaJudiNatu" id="personaNatu" value="Natural" class="natural__juridica posicion__rotulos2">


              <label class="posicion__rotulos">PERSONA JURIDICA </label>


              <input type="radio" name="personaJudiNatu" id="personaJudi" value="Juridica" class="natural__juridica posicion__rotulos2">
                  

          </div>

          <br>

          <div class="contenedor__secciones soloRuc">

            <label class="label__titulos">INFORMACIÓN PERSONAL</label>

          </div> 


          <div class="contenedor__secciones soloRuc">

            <div class="contenedor__secciones2">

              <label>RUC</label>

            </div>

            <div class="contenedor__secciones2">

              <label>RAZÓN SOCIAL</label>

            </div>


          </div>

          <div class="contenedor__secciones soloRuc">

              <div class="contenedor__secciones2">

                  <div class="input-group">

                      <input type="text" class="form-control input__ancho obligatorios"  name="cedula" id="cedula"  placeholder="Ingrese RUC">

                      <span class="input-group-addon" id="verificarcedula"><i class="fa fa-search"></i>  Buscar</span>

                  </div>

                  <div class="mensaje__ruc"></div>


              </div>


             <div class="contenedor__secciones2">

                  <div class="input-group">

                      <span class="input-group-addon"><i class="fas fa-building"></i></span>

                      <input class="form-control inpunt-lg input__ancho obligatorios" name="agregaRasonSocial" id="agregaRasonSocial"   />

                  </div>

              </div>

          </div>

          <div class="contenedor__secciones soloRuc">

            <div class="contenedor__secciones2">

              <label>ACTIVIDAD ECONOMICA PRINCIPAL</label>

            </div>

            <div class="contenedor__secciones2">

              <label>ACTIVIDAD ECONOMICA RELACIONADA CON EL BENEFICIO ARANCELARIO</label>

            </div>


          </div>


          <div class="contenedor__secciones soloRuc">

              <div class="contenedor__secciones2">


                <div class="form-group input__ancho">
                      
                    <textarea class="form-control inpunt-lg obligatorios" name="agregaActividadPrincipal" id="agregaActividadPrincipal" rows="4" ></textarea>
                                       
                </div>


              </div>


             <div class="contenedor__secciones2">

                <div class="form-group input__ancho">
                      
                  <textarea class="form-control inpunt-lg obligatorios" name="agregaActividadBeneficio" id="agregaActividadBeneficio" rows="4" ></textarea>
                                       
                </div>
            
              </div>

          </div>


          <div class="contenedor__secciones conruc">

            <div class="contenedor__secciones2">

               <label>CÉDULA DE REPRESENTANTE LEGAL</label>

            </div>

            <div class="contenedor__secciones2">

              <label>NOMBRE REPRESENTANTE LEGAL</label>

            </div>


          </div>

          <div class="contenedor__secciones conruc">

              <div class="contenedor__secciones2">

                  <div class="input-group">

                      <input type="text" class="form-control obligatorios2"  name="cedulaIdentidad" id="cedulaIdentidad"  placeholder="Ingrese Número de Cedula">

                      <span class="input-group-addon" id="verificarcedulaIdentidad"><i class="fa fa-search"></i>  Buscar</span>

                  </div>

                  <div class="mensaje__cedula"></div>


              </div>


             <div class="contenedor__secciones2">

                  <div class="input-group">

                      <span class="input-group-addon"><i class="fas fa-building"></i></span>

                      <input class="form-control obligatorios2" name="nomRepresentanteLegal" id="nomRepresentanteLegal"  />

                  </div>

              </div>

          </div>

          <div class="contenedor__secciones datosRestantes">

            <div class="contenedor__secciones2">

              <label>EMAIL</label>

            </div>


            <div class="contenedor__secciones2">

              <label>CELULAR</label>

            </div>

            <div class="contenedor__secciones2">

              <label>TELÉFONO</label>
              
            </div>

          </div>

          <div class="contenedor__secciones datosRestantes">

              <div class="contenedor__secciones2">

                  <div class="input-group">

                     <span class="input-group-addon"><i class="fas fa-envelope"></i></span>

                     <input class="form-control inpunt-lg cedula__ingresando__foco__responsive obligatorios" name="agregaEmail" id="agregaEmail" placeholder="Ingrese Email" />

                  </div>

                  <div class="counter__correo mensajes__unanimes"></div>

              </div>

              <div class="contenedor__secciones2">

                  <div class="input-group">

                      <span class="input-group-addon"><i class="fas fa-mobile"></i></span>

                      <input class="form-control inpunt-lg obligatorios" name="agregaCelular" id="agregaCelular" placeholder="Ingrese Celular" />

                  </div>

                  <div class="counter__celular"></div>

              </div>

              <div class="contenedor__secciones2">

                  <div class="input-group">

                        <span class="input-group-addon"><i class="fas fa-phone"></i></span>

                        <input class="form-control inpunt-lg obligatorios" name="agregaTelefono" id="agregaTelefono" placeholder="Ingrese Teléfono" />

                  </div>

                  <div class="counter__convencional"></div>

              </div>


          </div>

          <br>

          <div class="contenedor__secciones documentosRucCarga">

            <label class="label__titulos">DOCUMENTOS PARA SUBIR</label>

          </div> 



          <div class="contenedor__secciones documentosRucCarga">

            <div class="contenedor__secciones2">

              <label>INGRESE DOCUMENTO ESCANEADO DEL RUC</label>

            </div>


            <div class="contenedor__secciones2">

              <label>INGRESE CERTIFICADO VIGENTE DE DISTRIBUIDOR AUTORIZADO</label>

            </div>

            <div class="contenedor__secciones2">

             <label>INGRESE CARTA DE ADHESIÓN DE LOS IMPORTADORES</label>
              
            </div>


          </div>

          <div class="contenedor__secciones documentosRucCarga">

            <div class="contenedor__secciones2">

              <label for="docuRuc">

                <div class="clases__archivos obligatorios3" id="textoRuc" name="textoRuc" data-text="Seleccionar archivo">Seleccionar archivo</div>

              </label>

              <div class="archivo__escondido">

                <input type="file" name="docuRuc" id="docuRuc" class="archivos__anadidos">

              </div>

            </div>


            <div class="contenedor__secciones2">

               <label for="CertificadoVigente">

                <div class="clases__archivos obligatorios3" id="textoCertificadoVigente" name="textoCertificadoVigente" data-text="Seleccionar archivo">Seleccionar archivo</div>

              </label>

              <div class="archivo__escondido">

                <input type="file" name="CertificadoVigente" id="CertificadoVigente" class="archivos__anadidos">

              </div>

            </div>

            <div class="contenedor__secciones2">

              <label for="cartaIntencion">

                <div class="clases__archivos obligatorios3" id="textoCartaDeAdheción" name="textoCartaDeAdheción" data-text="Seleccionar archivo">Seleccionar archivo</div>

              </label>

              <div class="archivo__escondido">

                <input type="file" name="cartaIntencion" id="cartaIntencion" class="archivos__anadidos">

              </div>

            </div>

          </div>


          <div class="contenedor__secciones documentosRucCarga">

            <div class="contenedor__secciones2">

              <label>Certificado de no adeudar al Servicio Nacional de Aduana del Ecuador</label>

            </div>

            <div class="contenedor__secciones2">

              <label>Declaración de impuesto a la renta del año anterior</label>

            </div>

            <div class="contenedor__secciones2">

              <label>Declaracion Aduanera de Importación de una operación de comercio exterior, ejecutada hace al menos los 24 meses anteriores a la fecha de presentación de formulario.</label>

            </div>


          </div>




          <div class="contenedor__secciones documentosRucCarga">


            <div class="contenedor__secciones2">

              <label for="noAdeudarServicio">

                <div class="clases__archivos obligatorios3" id="textoNoAdeudarServicio" name="textoNoAdeudarServicio" data-text="Seleccionar archivo">Seleccionar archivo</div>

              </label>

              <div class="archivo__escondido">

                <input type="file" name="noAdeudarServicio" id="noAdeudarServicio" class="archivos__anadidos">

              </div>

            </div>


            <div class="contenedor__secciones2">

              <label for="declaracionInpuesto">

                <div class="clases__archivos obligatorios3" id="textoDeclaracionImpuesto" name="textoDeclaracionImpuesto" data-text="Seleccionar archivo">Seleccionar archivo</div>

              </label>

              <div class="archivo__escondido">

                <input type="file" name="declaracionInpuesto" id="declaracionInpuesto" class="archivos__anadidos">

              </div>

            </div>


            <div class="contenedor__secciones2">

               <label for="declaracionAduaneraDeImportacion">

                <div class="clases__archivos obligatorios3" id="textoDeclaracionAduanera" name="textoDeclaracionAduanera" data-text="Seleccionar archivo">Seleccionar archivo</div>

              </label>

              <div class="archivo__escondido">

                <input type="file" name="declaracionAduaneraDeImportacion" id="declaracionAduaneraDeImportacion" class="archivos__anadidos">

              </div>

            </div>

          </div>



          <div class="contenedor__secciones documentosRucCarga">

            <div class="contenedor__secciones2">

              <label>Emisión para documentos electrónicos para la producción debidamente aprobada por el SRI</label>
              
            </div>


            <div class="contenedor__secciones2 conruc">

              <label>INGRESE NOMBRAMIENTO DEL REPRESENTANTE LEGAL DE LA EMPRESA (SI APLICA)</label>

            </div>

            <div class="contenedor__secciones2 conruc">

              <label>Certificado de Cumplimiento de Obligaciones emitido por la Superintendencia de Compañías</label>

            </div>

          </div>


          <div class="contenedor__secciones documentosRucCarga">

            <div class="contenedor__secciones2">

              <label for="emisionDocumentosElectronicos">

                <div class="clases__archivos obligatorios3" id="textoSeleccionDocumentosElectronicos" name="textoSeleccionDocumentosElectronicos" data-text="Seleccionar archivo">Seleccionar archivo</div>

              </label>

              <div class="archivo__escondido">

                <input type="file" name="emisionDocumentosElectronicos" id="emisionDocumentosElectronicos" class="archivos__anadidos">

              </div>

            </div>

            <div class="contenedor__secciones2 conruc">

              <label for="nombramiento">

                <div class="clases__archivos obligatorios4" id="textoNombramiento" name="textoNombramiento" data-text="Seleccionar archivo">Seleccionar archivo</div>

              </label>

              <div class="archivo__escondido">

                <input type="file" name="nombramiento" id="nombramiento" class="archivos__anadidos">

              </div>

            </div>


            <div class="contenedor__secciones2 conruc">

              <label for="certificadoDeCumplimiento">

                <div class="clases__archivos obligatorios4" id="textoCertificadoCumplimientos" name="textoCertificadoCumplimientos" data-text="Seleccionar archivo">Seleccionar archivo</div>

              </label>

              <div class="archivo__escondido">

                <input type="file" name="certificadoDeCumplimiento" id="certificadoDeCumplimiento" class="archivos__anadidos">

              </div>

            </div>

          </div>


          <div class="contenedor__secciones documentosRucCarga">

            <p class="letras__pequenias">Nota: Los documentos deben ser actuales o del mes inmediato anterior.</p>

          </div>

          <br>

          <div class="contenedor__secciones soloRuc">

            <label class="label__titulos">REGISTRO DE MARCA</label>

          </div> 


          <div class="contenedor__secciones documentosRucCarga">

            <div class="contenedor__secciones2">

              <label>Nombre de la marca</label>

            </div>


            <div class="contenedor__secciones2">

              <label>Certicado de distribución autorizado</label>

            </div>


            <div class="contenedor__secciones2">

              <label>Glosorario de Tecnologías</label>

            </div>


          </div>


          <div class="contenedor__secciones documentosRucCarga">

             <div class="contenedor__secciones2">

                  <div class="input-group">

                      <span class="input-group-addon"><i class="fas fa-building"></i></span>

                      <input type="text" name="marcaAdicioNew" id="marcaAdicioNew" placeholder="Ingrese el nombre del otro tipo de marca porfavor" class="form-control inpunt-lg input__ancho obligatorios" style="text-transform: uppercase;">

                  </div>

                  <div class="contenedor__otros">
                    
                  </div>

              </div>

              <div class="contenedor__secciones2">

                <label for="certificadoDistribucion">

                  <div class="clases__archivos obligatorios3" id="textoDistribucion" name="textoDistribucion" data-text="Seleccionar archivo">Seleccionar archivo</div>

                </label>

                <div class="archivo__escondido">

                  <input type="file" name="certificadoDistribucion" id="certificadoDistribucion" class="archivos__anadidos">

                </div>

              </div>

              <div class="contenedor__secciones2">

                <label for="glosarioDeTecnologias">

                  <div class="clases__archivos obligatorios3" id="textoGlosarioDeTecnologias" name="textoGlosarioDeTecnologias" data-text="Seleccionar archivo">Seleccionar archivo</div>

                </label>

                <div class="archivo__escondido">

                  <input type="file" name="glosarioDeTecnologias" id="glosarioDeTecnologias" class="archivos__anadidos">

                </div>

              </div>


          </div>

          <div class="contenedor__secciones documentosRucCarga">

            <div class="contenedor__secciones2">

              <label>Seleccionar vigencia en años o meses</label>

            </div>

            <div class="contenedor__secciones2">

              <label>Periodo vigencia de marcas</label>

            </div>


            <div class="contenedor__secciones2">

              <label>Fecha Inicio</label>

            </div>


            <div class="contenedor__secciones2">

              <label>Fecha Fin</label>

            </div>

          </div>

          <div class="contenedor__secciones documentosRucCarga">

             <div class="contenedor__secciones2">


                  <select class="periodos__anios__meses" style="height:35px;">

                    <option value="">--Seleccione el tipo--</option>
                    <option value="1">Años</option>
                    <option value="2">Meses</option>

                  </select>

              </div>


             <div class="contenedor__secciones2">

                  <div class="input-group">

                      <span class="input-group-addon"><i class="fas fa-building"></i></span>

                      <input type="text" class="form-control inpunt-lg input__ancho obligatorios" name="periodoAniosMarca" id="periodoAniosMarca" disabled="" />

                  </div>

                  <div class="periodo__de__anios"></div>

              </div>

              <div class="contenedor__secciones2">

                  <div class="input-group">

                      <span class="input-group-addon"><i class="fas fa-building"></i></span>

                      <input type="text" class="inpunt-lg input__ancho obligatorios" name="fechaInicioMarca" id="fechaInicioMarca"   />

                  </div>

               </div>

              <div class="contenedor__secciones2">

                  <div class="input-group">

                      <span class="input-group-addon"><i class="fas fa-building"></i></span>

                      <input type="text" class="form-control inpunt-lg input__ancho obligatorios" name="fechaFinMarca" id="fechaFinMarca"  disabled="" />

                  </div>

               </div>


          </div>


          <br>

          <div class="contenedor__secciones soloRuc">

            <label class="label__titulos">PRODUCTOS A IMPORTAR</label>

          </div> 

          <div class="contenedor__secciones__dos documentosRucCarga">

             <div class="contenedor__secciones5">

                <input type="checkbox" class="form-control  estilos__checkeboxes" name="bicicleta" id="bicicleta" />

             </div>

             <div class="contenedor__secciones4">

               Bicicleta

             </div>

             <div class="contenedor__secciones5">

                <input type="checkbox" class="form-control  estilos__checkeboxes" name="pelotasTennis" id="pelotasTennis" />

             </div>

             <div class="contenedor__secciones4">

               Pelotas de tenis

             </div>

             <div class="contenedor__secciones5">

                <input type="checkbox" class="form-control  estilos__checkeboxes" name="cadenasDeRodillos" id="cadenasDeRodillos" />

             </div>

             <div class="contenedor__secciones4">

               Cadenas de rodillos

             </div>

             <div class="contenedor__secciones5">

                <input type="checkbox" class="form-control  estilos__checkeboxes" name="raquetasDeTennis" id="raquetasDeTennis" />

             </div>

             <div class="contenedor__secciones4">

               Raquetas de tenis

             </div>


          </div>


          <div class="contenedor__secciones__dos documentosRucCarga">

             <div class="contenedor__secciones5">

                <input type="checkbox" class="form-control  estilos__checkeboxes" name="sillines" id="sillines" />

             </div>

             <div class="contenedor__secciones4">

               Sillines

             </div>

             <div class="contenedor__secciones5">

                <input type="checkbox" class="form-control  estilos__checkeboxes" name="pelotasInflables" id="pelotasInflables" />

             </div>

             <div class="contenedor__secciones4">

               Pelotas inflables

             </div>

             <div class="contenedor__secciones5">

                <input type="checkbox" class="form-control  estilos__checkeboxes" name="calzadoDeportivo" id="calzadoDeportivo" />

             </div>

             <div class="contenedor__secciones4">

                Calzado deportivo

             </div>

             <div class="contenedor__secciones5">

                <input type="checkbox" class="form-control  estilos__checkeboxes" name="materialesBeisbol" id="materialesBeisbol" />

             </div>

             <div class="contenedor__secciones4">

                Materiales de béisbol y sóftbol (excepto pelotas )

             </div>

          </div>


          <div class="contenedor__secciones__dos documentosRucCarga">

             <div class="contenedor__secciones5">

                <input type="checkbox" class="form-control  estilos__checkeboxes" name="cascosProductos" id="cascosProductos" />

             </div>

             <div class="contenedor__secciones4">

               Casco

             </div>

             <div class="contenedor__secciones5">

                <input type="checkbox" class="form-control  estilos__checkeboxes" name="articulosMaterialTenisDeMesa" id="articulosMaterialTenisDeMesa" />

             </div>

             <div class="contenedor__secciones4">

               Artículos y material para tenis de mesa

             </div>

          </div>

          <p align="right">
           
            <button name="registroDocumentos" id="registroDocumentos"  class="botones__de__registros">ENVIAR INFORMACIÓN</button>

            <div class="reload__cargar"></div>
            
          </p>

        </div>

      </div>

    </div>

  </div>

</div>


<div id="corregirDocumentos" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">
  
       <div class="modal-header" style="background: #65bfb4; color: white">
        
        <button type="button" class="close" data-dismiss="modal">&times;</button>

        <h4 class="modal-title">CORREGIR DOCUMENTOS</h4>

       </div>

      <div class="modal-body">
        
        <div class="box-body">

          <table class="table table-bordered">

            <tr>

              <td style="width: 45%">

                <label>RUC</label>

                <div class="form-group">

                  <div class="input-group">

                        <input type="text" class="form-control"  name="numeroRucBase" id="numeroRucBase"  placeholder="Ingrese Número de Identificación RUC">

                         <span class="input-group-addon" id="BuscarBasecedula"><i class="fa fa-search"></i>  Buscar</span>

                  </div>

                </div>

              </td>
          
            </tr>

          </table>

          <table style="border: hidden;">

            <tr>

              <td>

                <label>Ingrese Documento Extra</label>
                <input type="hidden" name="cedulaBuscada" id="cedulaBuscada">
                <input type="file" name="documento1" id="documento1">

              </td>

              <td>

                <label>Seleccione Tipo de Documento</label>

                <select class="form-control" name="selectTipoDocumento" id="selectTipoDocumento">
                  <option value="0">--Selecione Tipo de Documento--</option>
                  <option value="1">Documento Escaneado del RUC</option>
                  <option value="2">Certificado Vigente de Distribuidor Autorizado</option>
                  <option value="3">Carta De Adhesion De Intencion De Los Importadores</option>
                  <option value="4">Certificado de no adeudar al servicio de aduana del Ecuador</option>
                  <option value="5">Declaración de impuesto a la renta del año anterior</option>
                  <option value="6">Declaración aduanera de importación de una operación de comercio exterior, ejecutada hace al menos los 24 meses anteriores a la fecha de presentación del formulario</option>
                  <option value="7">Emisión para documentos electrónicos para la producción debidamente aprobada por el SRI</option>
                  <option value="8">Certificado de cumplimiento de obligaciones emitido por la super intendencia de compañías</option>
                </select>

              </td>

            </tr>

          </table>

          <input type="submit" name="corregirDocumentoss" id="corregirDocumentoss" value="ENVIAR DOCUMENTACIÓN" class="btn btn-info">

        </div>

      </div>
    
    </div>

  </div>

</div>




<div id="documentosDescargar" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">
  
       <div class="modal-header" style="background: #65bfb4; color: white">
        
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Formularios A Descargar</h4>

       </div>

      <div class="modal-body">
        
        <div class="box-body">

          <a href="images/DocumentosDescargar/CARTADEINTENCION.pdf" download="CARTADEINTENCION">Descargar FORMATO CARTA DE INTENCIÓN DE IMPORTADORES</a>

          <br>

          <a href="images/DocumentosDescargar/DECLARACIONJURAMENTADA.pdf" download="DECLARACIONJURAMENTADA">Descargar FORMATO DECLARACIÓN JURAMENTADA</a>

          <br>
          <a href="images/DocumentosDescargar/GLOSARIO.pdf" download="DECLARACIONJURAMENTADA">GLOSARIO TECNOLÓGICO</a>

          <br>

          <a href="images/DocumentosDescargar/COMEX.pdf" download="RESOLUCION_COMEX">Resolución COMEX </a><br>

        </div>

      </div>

    </div>
      
  </div>

</div>

<!--====  End of Sección Principal  ====-->

<!--=========================================
=            Manuales de usuario            =
==========================================-->

<div id="modalAparecimientoRegistroUsuarioInicial" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog">

    <div class="modal-content">

      <div class="modal-body">

          <div class="box-body">

            <div class="contenedor__de__manuales">
              
              <p style="font-size: 15px;">DEBIDO A CAMBIOS RELAIZADOS EN LA PLATAFORMA SE NOTIFICA A LOS USUARIOS PRESIONAR LA TECLA <span style="color:red;font-weight:bold;">CONTROL y F5</span> AL MISMO TIEMPO CON LA FINALIDAD QUE PUEDAN VISUALIZARSE LOS CAMBIOS REFERIDOS.</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>



<!--====  End of Manuales de usuario  ====-->

<script  type="text/javascript">

$(window).on('load',function(){

  $('#modalAparecimientoRegistroUsuarioInicial').modal('show');

});

</script>

