$(document).ready(function () {

	if($("#recuperaCantidTable").val()==""){

		var paqueteDeDatos = new FormData();

				// declarando arrays
		var arrayId_producto = new Array(); 
		var arrayItem= new Array();
		var arrayCodigArancelar = new Array(); 
		var arrayCodigoCalzadoImplemento = new Array(); 
		var arrayDisciplinaDeportiva= new Array();
		var arrayDescripcionComercial= new Array();
		var arrayMarca= new Array();
		var arraygModelo= new Array();
		// var arraygPreColom= new Array();
		// var arraygPrePeru= new Array();

		paqueteDeDatos.append('idImportador', $('#idImportador').prop('value'));

		 var destino = "funciones/selectorTablas/tablaSolicitud.php";

		  $.ajax({
            url: destino,
            type: 'POST',
            contentType: false,
            data: paqueteDeDatos, 
            processData: false,
            cache: false, 

            success: function(response){

            	var elemento=JSON.parse(response);
	            var stringId_producto=elemento['stringId_producto'];
	            var stringCodigoCalzadoImplemento=elemento['stringCodigoCalzadoImplemento'];
	            var stringMarca=elemento['stringMarca'];
	            var stringItem=elemento['stringItem'];
	            var stringDisciplinaDeportiva=elemento['stringDisciplinaDeportiva'];
	            var stringDescripcionComercial=elemento['stringDescripcionComercial'];
	            var stringCodiArancel = elemento['stringcodigoArancelario'];
	            var stringModelo=elemento['stringModelo'];
	            // var stringPreColo=elemento['stringPreColom'];
	            // var stringPrePer=elemento['stringPrePeru'];
 
	           	arrayId_producto = stringId_producto.split('------');
	            arrayCodigoCalzadoImplemento = stringCodigoCalzadoImplemento.split('------');
	            arrayMarca = stringMarca.split('------');
	            arrayItem = stringItem.split('------');
	            arrayDisciplinaDeportiva = stringDisciplinaDeportiva.split('------');
	            arrayDescripcionComercial= stringDescripcionComercial.split('------');
	            arrayCodigArancelar=stringCodiArancel.split('------');
	            arraygModelo = stringModelo.split('------');
	            // arraygPreColom = stringPreColo.split('------');
	            // arraygPrePeru = stringPrePer.split('------');


	            for (var w=0;w<arrayId_producto.length;w++) {

	            	$(".cabeceradetablaMercaderia").append('<tr><td style="display:none;"><input name="idProductoo" id="idProductoo" class="ClaIdProducto" value="'+arrayId_producto[w]+'"></td><td><textarea type="text" readOnly="" name="actuCantidad" id="actuCantidad" class="form-control contenedor__de__palabras2 itemClas" style="width:250px">'+arrayItem[w]+'</textarea></td><td><input type="text" readOnly="" class="form-control contenedor__de__palabras2" id="codigoArance" name="codigoArance" value="'+arrayCodigArancelar[w]+'"></td><td><input type="text" readOnly="" class="form-control contenedor__de__palabras2" id="CodigoCalzadoImpl" name="CodigoCalzadoImpl" value="'+arrayCodigoCalzadoImplemento[w]+'"></td><td><input type="text" name="actuCantidad" id="actuCantidad" placeholder="Ingrese Cantidad" class="form-control clacantidad validacionesNumericas"></td><td><input type="text" name="actupesoNeto" id="actupesoNeto" placeholder="Ingrese Peso Neto" class="form-control clapesoNe"></td><td><input type="text" name="actuperoBruto" id="actuperoBruto" placeholder="Ingrese Peso Bruto" class="form-control claPesoBr"></td><td><input type="text" name="actuvalorFOB" id="actuvalorFOB" placeholder="Ingrese Valor FOB" class="form-control validacionesNumericas ClaValor"></td><td><input type="text" readOnly="" class="form-control contenedor__de__palabras2" id="DescripcionComer" name="DescripcionComer" value="'+arrayDescripcionComercial[w]+'"></td><td><input type="text" readOnly="" class="form-control contenedor__de__palabras2" id="DisciplinaDeport" name="DisciplinaDeport" value="'+arrayDisciplinaDeportiva[w]+'"></td><td><input type="text" readOnly="" class="form-control contenedor__de__palabras2" id="Marc" name="Marc" value="'+arrayMarca[w]+'"></td><td><input type="text" readOnly="" class="form-control contenedor__de__palabras2" id="Model" name="Model" value="'+arraygModelo[w]+'"></td><td><input type="text" name="actuPrecio" id="actuPrecio" placeholder="Ingrese Precio USD" class="form-control claPrecio validacionesNumericas"></td><td><input type="text" name="actupaisOrigen" id="actupaisOrigen" placeholder="Ingrese País Origen" class="form-control claPaisOri validacionLetrasMayusculas"></td><td><input type="text" name="actupaisProceden" id="actupaisProceden" placeholder="Ingrese País Procedencia" class="form-control claPaisProce validacionLetrasMayusculas"></td><td><input type="text" name="acturazonSocialProvee" id="acturazonSocialProvee" placeholder="Ingrese Razon Social Proveedor" class="form-control claProvRaz validacionLetrasMayusculas"></td><td><input type="text" name="acturucProvee" id="acturucProvee" placeholder="Ingrese Ruc Proveedor" class="form-control clarProRuc "></td><tr>');
	           
	            	$(".validacionesNumericas").on('input', function () {

					    this.value = this.value.replace(/[^0-9,.]/g, '').replace(',','.');


					 });

	            	$(".validacionLetrasMayusculas").on('input', function () {

					    this.value = this.value.replace(/[^a-zA-Z- ]/g, '').toUpperCase();

					 });    


	            }

            },
            error: function (){ 
              alert("Algo ha fallado.");
            }

        });


	}

});



/*========================================================
=            tabla para articulos adicionales
========================================================*/


$(document).ready(function () {

	if($("#recuperaCantidTable1").val()==""){

		var paqueteDeDatos = new FormData();

		// declarando arrays
		var arrayId_producto = new Array(); 
		var arrayItem= new Array();
		var arrayCodigArancelar = new Array(); 
		var arrayCodigoCalzadoImplemento = new Array(); 
		var arrayDisciplinaDeportiva= new Array();
		var arrayDescripcionComercial= new Array();
		var arrayMarca= new Array();
		var arraygModelo= new Array();

		paqueteDeDatos.append('idImportador1', $('#idImportador1').prop('value'));

		 var destino = "funciones/selectorTablas/tablaSolicitudAdicional.php";

		  $.ajax({
            url: destino,
            type: 'POST',
            contentType: false,
            data: paqueteDeDatos, 
            processData: false,
            cache: false, 

            success: function(response){

            	var elemento=JSON.parse(response);
	            var stringId_producto=elemento['stringId_producto'];
	            var stringCodigoCalzadoImplemento=elemento['stringCodigoCalzadoImplemento'];
	            var stringMarca=elemento['stringMarca'];
	            var stringItem=elemento['stringItem'];
	            var stringDisciplinaDeportiva=elemento['stringDisciplinaDeportiva'];
	            var stringDescripcionComercial=elemento['stringDescripcionComercial'];
	            var stringCodiArancel = elemento['stringcodigoArancelario'];
	            var stringModelo=elemento['stringModelo'];

	           	arrayId_producto = stringId_producto.split('------');
	            arrayCodigoCalzadoImplemento = stringCodigoCalzadoImplemento.split('------');
	            arrayMarca = stringMarca.split('------');
	            arrayItem = stringItem.split('------');
	            arrayDisciplinaDeportiva = stringDisciplinaDeportiva.split('------');
	            arrayDescripcionComercial= stringDescripcionComercial.split('------');
	            arrayCodigArancelar=stringCodiArancel.split('------');
	            arraygModelo = stringModelo.split('------');


	            for (var w=0;w<arrayId_producto.length;w++) {

	            	$(".cabeceradetablaMercaderia1").append('<tr class="fila__productos__adicionales clases__unanimes'+w+'"><th class="colores__headers">No</th><th class="colores__headers"><center>ITEM</center></th><th class="colores__headers"><center>Código Arancelario</center></th><th class="colores__headers"><center>Código de Calzado e <br/>Implementos Especializados</center></th><th class="colores__headers"><center>Descripción <br/>Comercial</center></th><th class="colores__headers"><center>Disciplina Deportiva /<br/>Actividad Física</center></th><th class="colores__headers"><center>Marca</center></th><th class="colores__headers"><center>Modelo</center></th><th class="colores__headers"><center>País de Origen</center></th><th class="colores__headers">GUARDAR</th></tr><tr class="clases__unanimes'+w+'"><td rowspan="3" style="font-size:12px;"><center>'+(w+1)+'</center></td><td style="display:none;"><input name="idProductoo'+w+'" id="idProductoo'+w+'" class="ClaIdProducto" value="'+arrayId_producto[w]+'"></td><td style="font-size:12px;"><textarea type="text" style="display:none;" readOnly="" name="actuCantidad" id="actuCantidad" class="form-control contenedor__de__palabras2 itemClas" style="width:250px">'+arrayItem[w]+'</textarea><center>'+arrayItem[w]+'</center></td><td style="font-size:12px;"><input type="hidden" readOnly="" class="form-control contenedor__de__palabras2" id="codigoArance" name="codigoArance" value="'+arrayCodigArancelar[w]+'"><center>'+arrayCodigArancelar[w]+'</center></td><td style="font-size:12px;"><center><input type="hidden" readOnly="" class="form-control contenedor__de__palabras2" id="CodigoCalzadoImpl" name="CodigoCalzadoImpl" value="'+arrayCodigoCalzadoImplemento[w]+'">'+arrayCodigoCalzadoImplemento[w]+'</center></td><td style="font-size:12px;"><center><input type="hidden" readOnly="" class="form-control contenedor__de__palabras2" id="DescripcionComer" name="DescripcionComer" value="'+arrayDescripcionComercial[w]+'">'+arrayDescripcionComercial[w]+'</center></td><td style="font-size:12px;"><center><input type="hidden" readOnly="" class="form-control contenedor__de__palabras2" id="DisciplinaDeport" name="DisciplinaDeport" value="'+arrayDisciplinaDeportiva[w]+'">'+arrayDisciplinaDeportiva[w]+'</center></td><td style="font-size:12px;"><center><input type="hidden" readOnly="" class="form-control contenedor__de__palabras2" id="Marc" name="Marc" value="'+arrayMarca[w]+'">'+arrayMarca[w]+'</center></td><td style="font-size:12px;"><center><input type="hidden" readOnly="" class="form-control contenedor__de__palabras2" id="Model" name="Model" value="'+arraygModelo[w]+'">'+arraygModelo[w]+'</center></td><td><select name="actupaisOrigen'+w+'" id="actupaisOrigen'+w+'" class="form-control claPaisOri validacionLetrasMayusculas clases__filas'+w+'"></select></td><td rowspan="3" style="vertical-align:middle;"><center><button style="padding:.5em; border-radius:.5em; font-weight:bold; color:white; text-align:center; background:#1565c0; font-size:8px;" id="guardarUnitarios'+w+'" name="guardarUnitarios'+w+'" idContador="'+w+'">GUARDAR</button></center></td></tr><tr class="clases__unanimes'+w+'"><th class="colores__headers"><center>País de Procedencia:</center></th><th class="colores__headers"><center>Número de identificación/RUC del Proveedor:</center></th><th class="colores__headers"><center>Nombre/Razòn Social/ del Proveedor:</center></th><th class="colores__headers"><center>Cantidad<br/> (Pares/Unidades)</center></th><th class="colores__headers"><center>Precio USD (FOB/PAR O FOB/UNIDAD)</center></th><th class="colores__headers"><center>Valor en USD FOB</center></th><th class="colores__headers"><center>Peso Neto</center></th><th class="colores__headers"><center>Peso Bruto</center></th></tr><tr class="clases__unanimes'+w+'"><td><select name="actupaisProceden'+w+'" id="actupaisProceden'+w+'" class="form-control claPaisProce validacionLetrasMayusculas clases__filas'+w+'"></select></td><td><input type="text" name="acturucProvee'+w+'" id="acturucProvee'+w+'" placeholder="Ingrese Ruc Proveedor" class="form-control clarProRuc clases__filas'+w+'"></td><td><input type="text" name="acturazonSocialProvee'+w+'" id="acturazonSocialProvee'+w+'" placeholder="Ingrese Razon Social Proveedor" class="form-control claProvRaz validacionLetrasMayusculas clases__filas'+w+'" style="text-transform:uppercase;"></td><td style="font-size:12px;"><center><input type="text" name="actuCantidad'+w+'" id="actuCantidad'+w+'" placeholder="Ingrese Cantidad" class="form-control clacantidad validacionesNumericas validandoParaProgramacionFinanciera clases__filas'+w+'" value="0"></center></td><td><input type="text" name="actuPrecio'+w+'" id="actuPrecio'+w+'" placeholder="Ingrese Precio USD" value="0" class="form-control claPrecio validacionesNumericas validandoParaProgramacionFinanciera clases__filas'+w+'"></td><td><input type="text" name="actuvalorFOB'+w+'" id="actuvalorFOB'+w+'" placeholder="Ingrese Valor FOB" class="form-control validacionesNumericas ClaValor clases__filas'+w+'" value="0" readonly=""></td><td style="font-size:12px;"><input type="text" name="actupesoNeto'+w+'" id="actupesoNeto'+w+'" placeholder="Ingrese Peso Neto" class="form-control clapesoNe validandoParaProgramacionFinanciera clases__filas'+w+'" value="0"></td><td><input type="text" name="actuperoBruto'+w+'" id="actuperoBruto'+w+'" placeholder="Ingrese Peso Bruto" class="form-control claPesoBr validandoParaProgramacionFinanciera clases__filas'+w+'" value="0"></td></tr><tr class="clases__unanimes'+w+'"><td style="padding:.3em; background:#039be5;" colspan="10"></td></tr>');
						

	            		/*===========================================
	            		=            Campos Obligatorios            =
	            		===========================================*/

						function concatenarFuncionesUnitarias(parametro1){

							var contador=0;
							
						    $(parametro1).each(function(index) {

						    	if ($(this).val()=="" || $(this).val()=="0" || $(this).val()==0) {
						    		contador=contador+1;
						    	}

						    });

						    return contador;

						}            		
							            		
	            		
	            		/*=====  End of Campos Obligatorios  ======*/
	            		
						/*==============================================
						=            Envío de error mostrar            =
						==============================================*/

						var longitudCaracteresUnitarias=function(parametro1){

						    $(parametro1).each(function(index) {

						    	if ($(this).val()=="" || $(this).val()=="0" || $(this).val()==0) {
						    		$(this).attr('style','border:1px solid red');
						    	}else{
						    		$(this).removeAttr('style');
						    	}

						    });

							$(parametro1).keyup(function(e){

								$(this).removeAttr('style');

							});
						  

						}

						/*=====  End of Envío de error mostrar  ======*/

						/*=========================================================
						=            Ingresar productos unitariamentes            =
						=========================================================*/
						
						$('#guardarUnitarios'+w).on('click', function (e){

							$(this).hide();

							var idContador=$(this).attr('idContador');

							var contadorProductos= concatenarFuncionesUnitarias($(".clases__filas"+idContador));

							longitudCaracteresUnitarias($(".clases__filas"+idContador));

							var clasesIguales = $(".fila__productos__adicionales").toArray().length;

							if (contadorProductos>0) {

								alertify.set("notifier","position", "top-right");
								alertify.notify("Los campos no pueden ser valor 0 ni tampoco estar vacíos", "error", 7, function(){});

								$(this).show();

							}else{


								 var idProductoo=$("#idProductoo"+idContador).val();
						         var actupaisOrigen=$("#actupaisOrigen"+idContador).val();
						         var actupaisProceden=$("#actupaisProceden"+idContador).val();
						         var acturucProvee=$("#acturucProvee"+idContador).val();
						         var acturazonSocialProvee=$("#acturazonSocialProvee"+idContador).val();
						         var actuCantidad=$("#actuCantidad"+idContador).val();
						         var actuPrecio=$("#actuPrecio"+idContador).val();
						         var actuvalorFOB=$("#actuvalorFOB"+idContador).val();
						         var actupesoNeto=$("#actupesoNeto"+idContador).val();
						         var actuperoBruto=$("#actuperoBruto"+idContador).val();

						         paqueteDeDatos.append('clasesIguales', clasesIguales);

						         paqueteDeDatos.append('numeroFinRecuperr', $('#numeroFinRecuperr').prop('value')); 
						         paqueteDeDatos.append('numeroRucRecuperr', $('#numeroRucRecuperr').prop('value'));
						         paqueteDeDatos.append('idImportador1', $('#idImportador1').prop('value'));
						         paqueteDeDatos.append('codioRecupera', $('#codioRecupera').prop('value'));


						         paqueteDeDatos.append('idProductoo', idProductoo);
						      	 paqueteDeDatos.append('actupaisOrigen', actupaisOrigen);
						         paqueteDeDatos.append('actupaisProceden', actupaisProceden);
						         paqueteDeDatos.append('acturucProvee', acturucProvee);
						         paqueteDeDatos.append('acturazonSocialProvee', acturazonSocialProvee);
						         paqueteDeDatos.append('actuCantidad', actuCantidad);
						         paqueteDeDatos.append('actuPrecio', actuPrecio);
						         paqueteDeDatos.append('actuvalorFOB', actuvalorFOB);
						         paqueteDeDatos.append('actupesoNeto', actupesoNeto);
						         paqueteDeDatos.append('actuperoBruto', actuperoBruto);
	
						         var destino = "funciones/funcionesActualiza/actualizarCertificadoAdicionalUnitarios.php";

						         $.ajax({

						            url: destino,
						            type: 'POST',
						            contentType: false,
						            data: paqueteDeDatos, 
						            processData: false,
						            cache: false, 

						            success: function(response){

						                var elementos=JSON.parse(response);
						                var mensaje=elementos['mensaje'];

						 
							             if (mensaje==1) {

							             	alertify.set("notifier","position", "top-right");
											alertify.notify("Se guardo correctamente la información", "success", 1, function(){});

											$(".clases__unanimes"+idContador).remove();
	
								
							             }

							             if (mensaje==2) {

							             	alertify.set("notifier","position", "top-right");
											alertify.notify("Se guardo correctamente la información", "success", 1, function(){});

											window.setTimeout(function(){ 
							                   window.location = "certificadosAprobados";
							                } ,1000);  
														
							             }


						            },
						          	error: function (){ 
						             	alert("Algo ha fallado.");
						             	$(this).show();
						          	}

						        });      						         


							}


						});
						
						/*=====  End of Ingresar productos unitariamentes  ======*/
						


	            		/*============================================
	            		=            Seleccionando Países            =
	            		============================================*/

						var listarPaisesSelecciones=function(parametro1){

						    $.ajax({

								type:'POST',
								url:'funciones/selector/paisSelector.php'

							}).done(function(lista__paises__solicitados){

								$(parametro1).html(lista__paises__solicitados);


							}).fail(function(){

								alert("hubo un error");

							});

						}

						listarPaisesSelecciones($("#actupaisOrigen"+w));	
						listarPaisesSelecciones($("#actupaisProceden"+w));            		
	            		
	            		
	            		/*=====  End of Seleccionando Países  ======*/
	            		


	            		/*=========================================
	            		=            Validando números            =
	            		=========================================*/
	            		
						var validacionCaracteresNumericos=function(parametro1,parametro2){

						switch (parametro2) {

						  case 1:
						  				
					    	$(parametro1).on('input', function () {

								this.value = this.value.replace(/[^0-9,.]/g, '').replace(',','.');	

							});

						  break;

						  case 2:
						  				
					    	$(parametro1).on('input', function () {

								this.value = this.value.replace(/[^0-9]/g, '');

							});

						  break;

						  case 3:
						  				
					    	$(parametro1).on('input', function () {

								this.value = this.value.replace(/[^0-9]/g, '');

							});

						  break;

						}

	            		$(parametro1).keyup(function(e){

	            			if (parametro2!=3) {

								if (parseFloat($(this).val())==0 || parseFloat($(this).val())<=1) {

								}else{

									this.value = this.value.replace(/^0+/, '');		

								}

						      	if ($(this).val()=="") {
			            			$(this).val(0);
			            		}

	            			}


						});

	            		$(parametro1).blur(function(e){

	            			if (parametro2!=3) {

			            		if ($(this).val()=="") {
			            			$(this).val(0);
			            		}

		            		}

						});

						}

						validacionCaracteresNumericos($("#actuCantidad"+w),2);
						validacionCaracteresNumericos($("#actuPrecio"+w),1);
						validacionCaracteresNumericos($("#actupesoNeto"+w),1);
						validacionCaracteresNumericos($("#actuperoBruto"+w),1);
						// validacionCaracteresNumericos($("#acturucProvee"+w),3);


	            		/*=====  End of Validando números  ======*/
	            		
	            		/*=========================================================
	            		=            Vadlidando cantidad de caracteres            =
	            		=========================================================*/
						var longitudCaracteresEvaluadosConcatenados=function(parametro1,parametro2){

							$(parametro1).keyup(function(e){

							   if($(this).val().length > parametro2){

							        $(this).val($(this).val().substr(0, parametro2));

							    }

							});

						}

						longitudCaracteresEvaluadosConcatenados($("#acturucProvee"+w),20);
	            		
	            		/*=====  End of Vadlidando cantidad de caracteres  ======*/
	            		

	            		/*==========================================
	            		=            Validando Formulas            =
	            		==========================================*/
						var validandoFormulaFob=function(parametro1,parametro2,parametro3){

		            		$(parametro1).keyup(function(e){

		            			var sumatores=0;

		            			sumatores=parseFloat($(this).val()) * parseFloat($(parametro2).val());

		            			$(parametro3).val(parseFloat(sumatores).toFixed(2));

							});

						}	            		
	            		
	            		validandoFormulaFob($("#actuCantidad"+w),$("#actuPrecio"+w),$("#actuvalorFOB"+w));
	            		validandoFormulaFob($("#actuPrecio"+w),$("#actuCantidad"+w),$("#actuvalorFOB"+w));

	            		/*=====  End of Validando Formulas  ======*/
	            		

	            		/*================================================
	            		=            Valdiando los dos puntos            =
	            		================================================*/
	            		
	            		$('.validandoParaProgramacionFinanciera').keypress(function(event) {

							var $this = $(this);
										    
							if ((event.which != 46 || $this.val().indexOf('.') != -1) && ((event.which < 48 || event.which > 57) && (event.which != 0 && event.which != 8))) {

								event.preventDefault();

							}

							var text = $(this).val();

							if ((event.which == 46) && (text.indexOf('.') == -1)) {

								setTimeout(function() {

									if ($this.val().substring($this.val().indexOf('.')).length > 3) {

										$this.val($this.val().substring(0, $this.val().indexOf('.') + 3));

									}

								}, 1);

							}

							if ((text.indexOf('.') != -1) && (text.substring(text.indexOf('.')).length > 2) && (event.which != 0 && event.which != 8) && ($(this)[0].selectionStart >= text.length - 2)) {

								event.preventDefault();

							}

						});
	            		
	            		
	            		/*=====  End of Valdiando los dos puntos  ======*/
	            		


	            }

            },
            error: function (){ 
              alert("Algo ha fallado.");
            }

        });


	}

});