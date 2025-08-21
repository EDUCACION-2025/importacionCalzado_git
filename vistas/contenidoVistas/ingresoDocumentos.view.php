<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
  
?>

<!--=======================================
=            Sección Principal            =
========================================-->

<div class="wrapper row3">
      
    <div class="contenedor__principal__de__formularios">
    	
  		<div class="contenedor__principal">

  				<div class="modal-body">
        
        			<div class="box-body"><center>
        				
        				<table style="width: 80%; border: hidden; color: #ff0033"class="tabla__elementos__permitidos">

                  <thead>

                      <th colspan="3">

                        <center>FORMATO DE DESCARGA PARA REGISTRO DE MARCA</center>

                      </th>

                  </thead>


                  <tbody>
                
                    <tr>

                      <td colspan="2">

                        <label style="color: #263238; font-size: 12px;">

                          <p align="justify" style="font-size: 14px;">

                             El glosario de tecnologías debe cargarse previo a la carga de productos, caso contrario, los productos no serán validados. 

                             <br>
                             <br>

                          </p>

                        </label>

                      </td>

                      <td style="border: hidden;" colspan="1">

                          &nbsp;&nbsp;&nbsp;
                           <img src="images/docu.png" style="width: 8%"><a href="images/DocumentosDescargar/GLOSARIO.docx" download="Glosario_Tecnologia" style="font-size:10px; font-weight:bold;">MODELO DE GLOSARIO DE TECNOLOGÍAS</a>

                      </td>

                    </tr>

                  </tbody>

        				</table>
						
     					
		  				  <input type="hidden" name="idImportador" id="idImportador" value="<?php   echo $IdCompletoUsuario; ?>">

				    	 <table class="tabla__elementos__permitidos" style="width: 80%">

                  <thead>

                      <th colspan="4">

                        <center>DOCUMENTOS ADICIONALES</center>

                      </th>

                  </thead>

                  <tbody>

                    <tr>

                      <td style="color: #263238; font-size: 12px; font-weight:bold;">NOMBRE DE LA MARCA</td>

                      <td style="color: #263238; font-size: 12px; font-weight:bold;">INGRESE CERTIFICADO DE AUTORIZACIÓN</td> 

                      <td  colspan="2" style="color: #263238; font-size: 12px; font-weight:bold;">INGRESE GLOSARIO DE TECNOLOGÍAS </td> 

                    </tr> 

                    <tr>

                        <td>

                          <input type="text" name="marcaAdicioNew" id="marcaAdicioNew" class="form-control" placeholder="Digite nombre de la marca porfavor" style="text-transform: uppercase;">

                        </td>

                        <td>

                          <input type="file" name="docuAdiocio1" id="docuAdiocio1">

                        </td>

                        <td colspan="2">

                          <input type="file" name="docuGlosario" id="docuGlosario">
                          
                        </td>

                    </tr>


                    <tr>

                      <td style="color: #263238; font-size: 12px; font-weight:bold;">SELECCIONAR VIGENCIA EN AÑOS O MESES</td>

                      <td style="color: #263238; font-size: 12px; font-weight:bold;">PERIODO VIGENCIA DE MARCAS</td> 

                      <td style="color: #263238; font-size: 12px; font-weight:bold;">FECHA INICIO</td> 

                      <td  style="color: #263238; font-size: 12px; font-weight:bold;">FECHA FIN</td> 

                    </tr> 


                    <tr>

                        <td>

                          <select class="periodos__anios__meses" style="height:35px;">

                            <option value="">--Seleccione el tipo--</option>
                            <option value="1">Años</option>
                            <option value="2">Meses</option>

                          </select>


                        </td>

                        <td>

                           <input type="text" class="form-control inpunt-lg input__ancho obligatorios" name="periodoAniosMarca" id="periodoAniosMarca" disabled="" />

                           <div class="periodo__de__anios"></div>

                        </td>

                        <td>

                          <input type="text" class="inpunt-lg input__ancho obligatorios" name="fechaInicioMarca" id="fechaInicioMarca"  readonly="" />
                          
                        </td>

                        <td>

                           <input type="text" class="form-control inpunt-lg input__ancho obligatorios" name="fechaFinMarca" id="fechaFinMarca" readonly="" disabled="" />
                          
                        </td>


                    </tr>


                  </tbody>

							
						    </table>

				    	 <input type="submit" name="guardarDocumentoAdicional" id="guardarDocumentoAdicional" class="btn btn-success" value="Guardar" style="background:#1565c0; font-weight:bold; padding:1em; color:white; font-weight:bold; border-radius:.5em;">

				    </div>

				 </div>

		  </div>    	

    </div>

 </div>

 <br>
 <br>
 <br>
 <br>
 <br>
 <br>


<!--====  End of Sección Principal  ====-->


<div id="corregirMarca" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

    <div class="modal-dialog modal-lg">

      <div class="modal-content">

        <div class="modal-header" style="background: #3083a1; color: white">
          <button type="button" class="close" data-dismiss="modal">&times;</button>

          <h4 class="modal-title">CORREGIR</h4>
        </div>
        
        <div class="modal-body">
        
          <div class="box-body">

            <center>

              <label> Listado de Marcas y Observaciones</label>

            </center>

            <table id="tablaCorregirMarca" name="tablaCorregirMarca">

    	          <thead>
    	 
    	              <tr>
    	                
    	                <th>MARCA</th>
    	                <th>OBSERVACION</th>
    	                <th>REVISAR</th>

    	              </tr>

    	          </thead>

    	          <tfoot>

    	              <tr>
    	                
    	                <th>MARCA</th>
    	                <th>OBSERVACION</th>
    	                <th>-</th>

    	              </tr>

    	          </tfoot>

    	      </table>
  	 
          </div>

        </div>

      </div>

   </div>

</div>







