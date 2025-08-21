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
        
        		<div class="box-body">
					
			  		<input type="hidden" name="idImportador" id="idImportador" value="<?php   echo $IdCompletoUsuario; ?>">
			  			
			  			<center>
					    	<table class="mercaderiaTabla textoCalzado table table-bordered">
					    		<tr>
					    			<td colspan="6">
					    			<center>
										<div class="modal-header" style="background: #78a1ad; color: white">
									       <h4 class="modal-title">Registro de Productos a Importar</h4>
									    </div>
									</center>
							     	</td>
					    		</tr>
					    			<tr>
						    			<td>ITEM</td>
						    			<td><select class="form-control" id="selectItem" name="selectItem"></select> </td>
						    			<td>CODIGO ARANCELARIO</td>
						    			<td><select class="form-control" id="selectItem2" name="selectItem2"></select></td>
						    		</tr>
					    			<!-- <tr>
						    			<td>DESCRIPCIÓN ARANCELARIO</td>
						    			<td colspan="3">
						    				<input type="hidden" name="idArancelaria" id="idArancelaria" class="form-control">
						    				<input type="text" name="descripcionArancelaria" id="descripcionArancelaria" class="form-control">
						    			</td>
					    			</tr> -->
					    			<tr>
						    			<td>DESCRIPCIÓN COMERCIAL</td>
										<td><input type="text" name="descripcionComercial" id="descripcionComercial" class="form-control"></td>
						    			<td>DISCIPLINA DEPORTIVA/ACTIVIDAD FISICA</td>
										<td><select name="disiplinaDeportiva" id="disiplinaDeportiva" class="form-control"></select></td>
						    			
					    			</tr>
					    			<tr>
					    				<td>MARCA</td>
										<td><select class="form-control" name="marca1" id="marca1"></select>
											<input type="hidden" name="marca159" id="marca159">

											
										</td>
						    			<td>MODELO</td>
						    			<td><input type="text" name="modelo" id="modelo" class="form-control"></td>
						    		</tr>
						    		<tr>
					    				<td>PRECIO DE VENTA AL PUBLICO PERÚ (USD)</td>
										<td><input type="text" class="form-control validacionesNumericas" name="precioPeru" id="precioPeru">
										</td>
						    			<td>PRECIO DE VENTA AL PUBLICO COLOMBIA (USD)</td>
						    			<td><input type="text" name="precioColombia" id="precioColombia" class="form-control validacionesNumericas"></td>
						    		</tr>

						    		<tr>
					    				<td>GÉNERO</td>
										<td><select name="genero" id="genero" class="form-control">
											<option value="Masculino">Masculino</option>
											<option value="Femenino">Femenino</option>
											<option value="Mixto">Mixto</option>
										</select></td>
						    			<td>GRUPO ETÁRIO</td>
						    			<td><select name="grupoEtario" id="grupoEtario" class="form-control">
											<option value="Niños">Niños</option>
											<option value="Adultos">Adultos</option>
										</select></td>
						    		</tr>
						    		
					    			<tr>
						    			<td>CODIGO ÚNICO INTERNACIONAL <br>DE CALZADO E IMPLEMENTOS  ESPECIALIZADOS</td>
						    			<td><input type="text" name="codigoCalzado" id="codigoCalzado" class="form-control"></td>
						    		
						    		

						    			<td class="ocultando">Nombre de la marca</td>
						    			<td class="ocultando"><input type="text" name="marcaNombreCuadro" id="marcaNombreCuadro" class="form-control"></td>

						    		
						    			
						    		</tr>
						    			
					    	</table>
				    	
					    	<table class="table table-bordered">
					    		<tr>
						    		<td colspan="4">
										<center>
											<div class="modal-header" style="background: #78a1ad; color: white">
								        		<h4 class="modal-title">FICHA TÉCNICA/CATÁLOGO (Únicamente PDF)</h4>
								     		</div>
								     	</center>

						    		</td>
						    	</tr>
								<tr>
									<td><center><input type="file" name="foto" id="foto"></center></td>  		
									<td><center><input type="file" name="foto1" id="foto1"></center></td>  		
								</tr> 
								<tr>
									<td id="imagenPrevia" style="width: 10%;"></td>  		
									<td id="imagenPrevia1" style="width: 10%;"></td>	
								</tr> 
								<tr>
									<td><center><input type="file" name="foto2" id="foto2"></center></td>  		
									<td><center><input type="file" name="foto3" id="foto3"></center></td>  	
								</tr> 
								<tr>
									<td id="imagenPrevia2" style="width: 10%;"></td>
									<td id="imagenPrevia3" style="width: 10%;"></td>
								</tr>
							</table>

				    		<input type="submit" name="guardarProducto" id="guardarProducto" class="btn btn-success" value="Guardar">

				    	</center><br>
				</div>

			</div>

		</div>    	

    </div>

 </div>



<!--====  End of Sección Principal  ====-->