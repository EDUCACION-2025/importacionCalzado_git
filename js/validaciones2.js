$(document).ready(function () {


	/*=========================================================
	=            Validación de números telefonicos            =
	=========================================================*/
	
	var numerosTelefonicos=function(parametro1,parametro2){
	
		$(parametro1).click(function(){

			if (parametro2==1) {
				$(this).val('09');
			}else{
				$(this).val('02');
			}

		});

		$(parametro1).keyup(function(e){

		 	if($(this).val().length<=2){

		 		if(e.keyCode == 8){

		 			if (parametro2==1) {
						$(this).val('09');
					}else{
						$(this).val('02');
					}


		 		}

		 	}

	  });

	}

	numerosTelefonicos($("#agregaCelular"),1);
	numerosTelefonicos($("#agregaTelefono"),2);


	/*=====  End of Validación de números telefonicos  ======*/
	


	/*================================================================================
	=            Validación de número de caracteres y si es númerico o no            =
	================================================================================*/
	
	var longitudCaracteres=function(parametro1,parametro2,counter,parametro4){

	switch (parametro4) {

	  case 1:
	  				
    	$(parametro1).on('input', function () {

			this.value = this.value.replace(/[^0-9]/g, '');

		});

	  break;

	  case 2:
	  				
    	$(parametro1).on('input', function () {

			this.value = this.value.replace(/[^0-9]/g, '');

		});

		$(parametro1).keyup(function(e){

			if (parseInt($(this).val(), 10)>4) {

				alertify.set("notifier","position", "top-right");
                alertify.notify("La cantidad no puede ser mayor a 4", "error", 5, function(){});

                $(this).val(" ");

			}

	 	});


	  break;

	}

	$(parametro1).keyup(function(e){

	   if($(this).val().length > parametro2){

	        $(this).val($(this).val().substr(0, parametro2));

	        counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");

	        counter.css("color","red");

	    }else{

	      counter.css("color","black");

	      counter.css("font-size","10px");

	    }


	 });

	}

	longitudCaracteres($("#cedula"),13,$(".mensaje__ruc"),1);

	longitudCaracteres($("#cedulaIdentidad"),10,$(".mensaje__cedula"),1);

	longitudCaracteres($("#agregaCelular"),10,$(".counter__celular"),1);

	longitudCaracteres($("#agregaTelefono"),10,$(".counter__convencional"),1);

	longitudCaracteres($("#periodoAniosMarca"),3,$(".periodo__de__anios"),1);
	
	longitudCaracteres($("#cuantosCorregir"),1,$(".periodo__de__documentos"),2);


	/*=====  End of Validación de número de caracteres y si es númerico o no  ======*/
	


	/*===============================================================
	=            Validación de letras por caja de textos            =
	===============================================================*/
	
	var validarCaracteres=function(parametro1,parametro2,parametro3,parametro4){

	 $(parametro1).keyup(function(e){

		 if (parametro2.test($(this).val().trim())){

		    	$(parametro3).html("");


		  }else {

		  		switch (parametro4) {

		  			case 0:
		  				$(parametro3).html("Correo electrónico no válido debe tener @ y un punto (.)");
		  			break;

		  			case 1:
		  				$(parametro3).html("El usuario debe comenzar con letras y no debe tener caracteres especiales, debe tener un mínimo de 4 caracteres y máximo de 16 caracteres (Solo se acepta @,punto,- y _)");
		  			break;

		  			case 2:
		  				$(parametro3).html("La contraseña debe comenzar con letras y no puede tener caracteres especiales y debe tener un mínimo de 5 caracteres y máximo de 16");
		  			break;

		  			case 3:
		  				$(parametro3).html("La contraseña debe comenzar con letras y no puede tener caracteres especiales y debe tener un mínimo de 5 caracteres y máximo de 16");
		  			break;

		  		}

		    	

		        $(parametro3).css("color","red");

		        $(parametro3).css("font-size","10px");

		  }


	 });

	}

	validarCaracteres($("#agregaEmail"),/[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/,$(".counter__correo"),0);	
	
	/*=====  End of Validación de letras por caja de textos  ======*/
	
	/*===================================================================
	=            Validaciones de Documentos con un parametro            =
	===================================================================*/
	
	var selectorInputFileUnParametros=function(parametro1){

		$(parametro1).change(function(e){

			var archivoRuta=$(this).val();

            var exPermitiadas= /(.pdf)$/i;


            if (!exPermitiadas.exec(archivoRuta)) {

                alertify.set("notifier","position", "top-right");
                alertify.notify("El archivo debe ser formato .pdf", "error", 5, function(){});

               	this.value = '';

            }

		 });

	}

	selectorInputFileUnParametros($("#docuAdiocio1"));	
	selectorInputFileUnParametros($("#docuGlosario"));	
	
	/*=====  End of Validaciones de Documentos con un parametro  ======*/
	

	/*===================================================
	=            Validaciondes de Documentos            =
	===================================================*/

	var selectorInputFile=function(parametro1,parametro2){

		$(parametro1).change(function(e){

			var archivoRuta=$(this).val();

            var exPermitiadas= /(.pdf)$/i;

            var imgsize = $(this)[0].files[0].size;

            if (!exPermitiadas.exec(archivoRuta)) {

                alertify.set("notifier","position", "top-right");
                alertify.notify("El archivo debe ser formato .pdf", "error", 5, function(){});

                $(parametro2).text($(parametro2).text());



            }else if(imgsize>250000){

                alertify.set("notifier","position", "top-right");
                alertify.notify("El peso máximo por archivo es de 250 KB; puede menorar el tamaño desde cualquier herramienta online", "error", 10, function(){});

                $(parametro2).text($(parametro2).text());

            }else{

                var documento=$(this).val();
                var filenameWithExtension = documento.replace(/^.*[\\\/]/, '');

                $(parametro2).text(filenameWithExtension);

            }

		 });

	}

	selectorInputFile($("#docuRuc"),$("#textoRuc"));
	selectorInputFile($("#CertificadoVigente"),$("#textoCertificadoVigente"));
	selectorInputFile($("#cartaIntencion"),$("#textoCartaDeAdheción"));
	selectorInputFile($("#nombramiento"),$("#textoNombramiento"));
	selectorInputFile($("#declaracionInpuesto"),$("#textoDeclaracionImpuesto"));
	selectorInputFile($("#declaracionAduaneraDeImportacion"),$("#textoDeclaracionAduanera"));
	selectorInputFile($("#emisionDocumentosElectronicos"),$("#textoSeleccionDocumentosElectronicos"));
	selectorInputFile($("#noAdeudarServicio"),$("#textoNoAdeudarServicio"));
	selectorInputFile($("#certificadoDeCumplimiento"),$("#textoCertificadoCumplimientos"));
	selectorInputFile($("#certificadoDistribucion"),$("#textoDistribucion"));
	selectorInputFile($("#glosarioDeTecnologias"),$("#textoGlosarioDeTecnologias"));
	
	/*=====  End of Validaciondes de Documentos  ======*/
	

	/*=============================================
	=            Calculo de datapicker            =
	=============================================*/
	
	var selectorDatepicker=function(parametro1,parametro2,parametro3,parametro4){


	  $(parametro1).datepicker({

	    language: 'es',
	    inline:true,
	    dateFormat: 'yy-mm-dd', 

	    onSelect: function(date) {

	  		switch (parametro4) {

	  			case 1:
	  				
	  				if ($(parametro2).val()=="") {

	  					alertify.set("notifier","position", "top-right");
	                	alertify.notify("Obligatorio ingresar periodo de años", "error", 4, function(){});	

	                	$(this).val(" ");

	  				}if($(".periodos__anios__meses").val()==2){

	  				    var entero=parseInt($(parametro2).val());

	  					var fecha=$(parametro1).val();

	  					var fechaCalculante=new Date(fecha);

	  					fechaCalculante.setMonth(fechaCalculante.getMonth() + entero)

	  					var resultadoFechas = fechaCalculante.toISOString().slice(0,10).replace("/", "-");

	  					$(parametro3).val(resultadoFechas);

	  				}else{

	  					var entero=parseInt($(parametro2).val());

	  					var fecha=$(parametro1).val();

	  					var fechaCalculante=new Date(fecha);

	  					fechaCalculante.setFullYear(fechaCalculante.getFullYear()+entero);

	  					var resultadoFechas = fechaCalculante.toISOString().slice(0,10).replace("/", "-");

	  					$(parametro3).val(resultadoFechas);

	  				}

	  			break;

	  		}

	    }

	  });
	  

	}

	selectorDatepicker($("#fechaInicioMarca"),$("#periodoAniosMarca"),$("#fechaFinMarca"),1);	
	
	/*=====  End of Calculo de datapicker  ======*/
	

	/*================================================
	=            Selector de marcas otras            =
	================================================*/
	
	var selectorOtrasMarcas=function(parametro1){

	  $.ajax({

	    type:'POST',
	    url:'funciones/selector/selectorMarca.php'

	  }).done(function(lista__marca){


	  $(parametro1).html(lista__marca);

	  $(parametro1).change(function(){

	      var valor=$(this).val(); 

	      var idRecuperado = $('valor:selected');

	      var idRecuperado =$('#marcaIngresos>option:selected').attr('idRecuperado');
	      
	      var marcaNum=$("#marcaAtribuidas").val(idRecuperado);

	      if(idRecuperado=='100'){

			$(".contenedor__otros").append('<div class="contenedor__otros__ingresos"><br><input type="text" name="marcaAdicioNew" id="marcaAdicioNew" placeholder="Ingrese el nombre del otro tipo de marca porfavor" class="obligatorios" style="width:120%; height:35px;"></div>');

	      }else{
       
           $(".contenedor__otros__ingresos").remove();


         }

	  }); 


	  }).fail(function(){

	    alert("hubo un error");

	  });

	}

	selectorOtrasMarcas($("#marcaIngresos"));	
	
	/*=====  End of Selector de marcas otras  ======*/
	

	/*==================================================
	=            Selectores Estandarizados            =
	==================================================*/
	
	var selectorEstandarizadoCertificados=function(parametro1){


		$(parametro1).change(function(e){

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('codigoCertificado', $(parametro1).prop('value'));

			var destino = "funciones/selector/selectorCertificadosNumeros.php"; 

	    	$.ajax({

		       url: destino,
		       type: 'POST',
		       contentType: false,
		       data: paqueteDeDatos, 
		       processData: false,
		       cache: false, 

		       success: function(response){

	             var elementos=JSON.parse(response);
	             var cuantosCorregir=elementos['cuantosCorregir'];

	             $(".documentos__corregidos__filas").remove();

	             $(".tablas__corregir__documentos").append('<tr class="documentos__corregidos__filas"><td>Seleccione Tipo de Archivo</td><td>Archivo</td></tr>');

	             for (var i = 0; i < cuantosCorregir; i++) {
	             	
	             	$(".cuantos__corregir").append('<tr class="documentos__corregidos__filas"><td><select id="opcionesDocu'+i+'" name="opcionesDocu'+i+'" class="form-control opciones__documentos"><option value="">---Seleccione una Opción---</option><option value="1">Declaración Juramentada incluida en la Resolución 019-2019 del COMEX</option><option value="3">Certificado de encontrarse en Listas Blancas con el Servicio de Rentas Internas (SRI)</option><option value="7">Certificado de Cumplimiento de Obligaciones emitido por el Instituto Ecuatoriano de Seguridad Social(IESS)</option><option value="8">Certificado de no adeudar al Servicio Nacional de Aduana del Ecuador (SENAE)</option></select></td><td><input type="file" name="archivoDocum'+i+'" id="archivoDocum'+i+'" class="archivos__comunes"/></td></tr>');

						$("#archivoDocum"+i).change(function(e){

							var archivoRuta=$(this).val();

				            var exPermitiadas= /(.pdf)$/i;


				            if (!exPermitiadas.exec(archivoRuta)) {

				                alertify.set("notifier","position", "top-right");
				                alertify.notify("El archivo debe ser formato .pdf", "error", 5, function(){});

				               this.value = '';

				            }

						});	             	


	             }

		       },

		       error: function (){ 
		          alert("Algo ha fallado.");
		       }

		    });			


		});	

	}

	selectorEstandarizadoCertificados($("#codigoCertificado"));		
	
	/*=====  End of Selectores Estandarizados  ======*/

	/*===================================================
	=            Selector de productos modal           =
	===================================================*/
	
	var selectorModalesCertificados=function(parametro1,parametro2){


		var paqueteDeDatos = new FormData();


		$(parametro2).html('<tr><td colspan="8"><center><img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;"><br><div style="font-size:10px; font-weight:bold;">Cargando</div></td></tr>');

		$("#enviarProductosTrimestrales").hide();

		paqueteDeDatos.append('idImportador', $(parametro1).prop('value'));

		var destino = "funciones/selector/selectorProductosCertificados.php"; 

	    	$.ajax({

		       url: destino,
		       type: 'POST',
		       contentType: false,
		       data: paqueteDeDatos, 
		       processData: false,
		       cache: false, 

		       success: function(response){

	             var elementos=JSON.parse(response);

	             var stringid_producto=elementos['stringid_producto'];
	             var stringproducto=elementos['stringproducto'];
	             var stringcantidadAdicional=elementos['stringcantidadAdicional'];
	             var stringcantidadrestante=elementos['stringcantidadrestante'];
	             var stringid_productoDos=elementos['stringid_productoDos'];
	             var stringcodigoCalzado=elementos['stringcodigoCalzado'];
	             var stringcodigoGenerado=elementos['stringcodigoGenerado'];
	             var stringnombreItemsGenerados=elementos['stringnombreItemsGenerados'];

	             arraystringid_producto = stringid_producto.split('------');
	             arraystringproducto = stringproducto.split('------');
	             arraystringcantidadAdicional = stringcantidadAdicional.split('------');
	             arraystringcantidadrestante = stringcantidadrestante.split('------');
	             arraystringid_productoDos = stringid_productoDos.split('------');
	             arraystringcodigoCalzado = stringcodigoCalzado.split('------');

	             arraystringcodigoGenerado = stringcodigoGenerado.split('------');
	             arraystringnombreItemsGenerados = stringnombreItemsGenerados.split('------');

	             $("#enviarProductosTrimestrales").show();


	             $(parametro2).html(' ');

	             if(stringid_producto!=""){

		             for (var i = 0; i < arraystringid_producto.length; i++) {

		             	if (arraystringcantidadrestante[i]=="") {

		             		var valor=arraystringcantidadAdicional[i];

		             	}else{

		             		var valor=arraystringcantidadrestante[i];

		             	}


		             	$(parametro2).append('<tr class="fila__productos__adicionales__trimestrales clases__unanimes'+i+'"><td><center>'+(i+1)+'</center></td><td style="display:none;"><input type="hidden" id="idOcultos'+i+'" name="idOcultos'+i+'" class="id__ocultos" value="'+arraystringid_producto[i]+'"/></td><td style="display:none;"><input type="hidden" id="idOcultosProductos'+i+'" name="idOcultosProductos'+i+'" class="idProductos__ocultos" value="'+arraystringid_productoDos[i]+'"/></td><td><center style="text-transform:uppercase;">'+arraystringcodigoGenerado[i]+'</center></td><td><center style="text-transform:uppercase;">'+arraystringnombreItemsGenerados[i]+'</center></td><td><center style="text-transform:uppercase;">'+arraystringproducto[i]+'</center></td><td><center><input type="hidden" id="cantidadInicial'+i+'" name="cantidadInicial'+i+'" value="'+arraystringcantidadAdicional[i]+'" class="cantidad__inicial"/>'+arraystringcantidadAdicional[i]+'</center></td><td><center>'+valor+'</center><input type="hidden" id="restante'+i+'" name"restante'+i+'" class="cantidad__restantes" value="'+valor+'"/></td><td><input type="text" name="productosVendidos'+i+'" id="productosVendidos'+i+'" class="form-control claseProductosVendidos validandoParaProgramacionFinanciera clases__filas'+i+'" value="0" style="text-transform:uppercase;"></td><td><input type="text" name="precioVentaPublico'+i+'" id="precioVentaPublico'+i+'" class="form-control clasePrecioVentaPublico validandoParaProgramacionFinanciera clases__filas'+i+'" value="0" style="text-transform:uppercase;"></td><td><input type="text" name="totalEvaluos'+i+'" id="totalEvaluos'+i+'" class="form-control claseTotalEvaluos clases__filas'+i+'" readonly="" value="0" style="text-transform:uppercase;"></td><td style="vertical-align:middle;"><center><button style="padding:.5em; border-radius:.5em; font-weight:bold; color:white; text-align:center; background:#1565c0; font-size:8px;" id="guardarUnitariosTrimestrales'+i+'" name="guardarUnitariosTrimestrales'+i+'" idContador="'+i+'">GUARDAR</button></center></td></tr>');	


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
						
						$('#guardarUnitariosTrimestrales'+i).on('click', function (e){

							$(this).hide();

							var idContador=$(this).attr('idContador');

							var contadorProductos= concatenarFuncionesUnitarias($(".clases__filas"+idContador));

							longitudCaracteresUnitarias($(".clases__filas"+idContador));


							// if (contadorProductos>0) {

							// 	alertify.set("notifier","position", "top-right");
							// 	alertify.notify("Los campos no pueden ser valor 0 ni tampoco estar vacíos", "error", 7, function(){});

							// 	$(this).show();

							// }else{
         
								var clasesIguales = $(".fila__productos__adicionales__trimestrales").toArray().length;

								var nombresPeriodos=$("#nombresPeriodos").val();


								var productosVendidos=$("#productosVendidos"+idContador).val();
						        var precioVentaPublico=$("#precioVentaPublico"+idContador).val();
						        var totalEvaluos=$("#totalEvaluos"+idContador).val();
						        var restante=$("#restante"+idContador).val();
								var idOcultosProductos=$("#idOcultosProductos"+idContador).val();

								var idOcultos=$("#idOcultos"+idContador).val();

								var cantidadInicial=$("#cantidadInicial"+idContador).val();


								 paqueteDeDatos.append('clasesIguales', clasesIguales);

								 paqueteDeDatos.append('cantidadInicial', cantidadInicial);
								 paqueteDeDatos.append('idOcultos', idOcultos);
								 paqueteDeDatos.append('idOcultosProductos', idOcultosProductos);
								 paqueteDeDatos.append('restante', restante);
						         paqueteDeDatos.append('productosVendidos', productosVendidos); 
						         paqueteDeDatos.append('precioVentaPublico', precioVentaPublico);
						         paqueteDeDatos.append('totalEvaluos', totalEvaluos);


							 	paqueteDeDatos.append('idImportador', $('#idImportador').prop('value'));
							 	paqueteDeDatos.append('nombresPeriodos', nombresPeriodos);

						          var destino = "funciones/funcionesActualiza/actualizarTrimestralesUnitarios.php";


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

						 
							             if (mensaje==2) {

							             	alertify.set("notifier","position", "top-right");
											alertify.notify("El valor vendido debe ser menor o igual a la cantidad restante", "error", 5, function(){});

											$("#guardarUnitariosTrimestrales"+idContador).show();
								
							             }

							             if (mensaje==1) {

							             	alertify.set("notifier","position", "top-right");
											alertify.notify("Se guardo correctamente la información", "success", 1, function(){});

											window.setTimeout(function(){ 
							                   window.location = "productosIngresados";
							                } ,1000);  

							                $(".clases__unanimes"+idContador).remove();
														
							             }


							             if (mensaje==3) {

							             	alertify.set("notifier","position", "top-right");
											alertify.notify("Se guardo correctamente la información", "success", 1, function(){});

							                window.setTimeout(function(){ 
							                   window.location = "ingresoDocumentos";
							                } ,1000);  

							                $(".clases__unanimes"+idContador).remove();
														
							             }



						            },
						          	error: function (){ 
						             	alert("Algo ha fallado.");
						             	$(this).show();
						          	}

						        });      						         


							// }


						});
						
						/*=====  End of Ingresar productos unitariamentes  ======*/
						



		            		/*==========================================
		            		=            Validando Formulas            =
		            		==========================================*/
							var validandoFormulasProductosImportados=function(parametro1,parametro2,parametro3){

			            		$(parametro1).keyup(function(e){

			            			var sumatores=0;

			            			sumatores=parseFloat($(this).val()) * parseFloat($(parametro2).val());

			            			$(parametro3).val(parseFloat(sumatores).toFixed(2));

								});

							}	            		
		            		
		            		validandoFormulasProductosImportados($("#productosVendidos"+i),$("#precioVentaPublico"+i),$("#totalEvaluos"+i));
		            		validandoFormulasProductosImportados($("#precioVentaPublico"+i),$("#productosVendidos"+i),$("#totalEvaluos"+i));

		            		/*=====  End of Validando Formulas  ======*/
		            		
		             		/*=========================================
		             		=            Validando Números            =
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


		            		$(parametro1).click(function(e){
		            
				            	$(this).val(0);
				           
							});

		            		$(parametro1).blur(function(e){

		            			if (parametro2!=3) {

				            		if ($(this).val()=="") {
				            			$(this).val(0);
				            		}

			            		}

							});

							}

							validacionCaracteresNumericos($("#precioVentaPublico"+i),1);
							validacionCaracteresNumericos($("#productosVendidos"+i),2);		             		
		             		
		             		/*=====  End of Validando Números  ======*/

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

	             }else{

	             	$(".head__destruido").remove();
	             	$("#enviarProductosTrimestrales").remove();

	             	$(".tabla__modales").append('<tr><td style="font-size:20px; font-weight:bold;"><center>NO EXISTEN PRODUCTOS RELACIONADO A UN CERTIFICADO APROBADO</td></center></tr>');

	             }



		       },

		       error: function (){ 
		          alert("Algo ha fallado.");
		       }

		    });			

	}

	selectorModalesCertificados($("#idImportador"),$(".contenedor__productos__accecibles"));			
	
	/*=====  End of Selector de productos modal  ======*/
	
	
	/*===========================================
	=            Modales automaticos            =
	===========================================*/
	
	var llamarModalesAutomaticos=function(parametro1){

		$(window).on('load',function(){

		  $(parametro1).modal('show');

		});

	}
	
	llamarModalesAutomaticos($("#modalComoInscribirse"));		
	
	/*=====  End of Modales automaticos  ======*/
	

	/*=====================================
	=            Redireccionar            =
	=====================================*/
	
	var llamarPaginaAutomatica=function(parametro1,parametro2,parametro3){


		if ($(parametro1).val()=="" && $(parametro2).val()!="" && $(parametro3).val()!="" && $("#idImportador").val()!="70" && $("#idImportador").val()!="78" && $("#idImportador").val()!="79" && $("#idImportador").val()!="96" && $("#idImportador").val()!="108" && $("#idImportador").val()!="66" && $("#idImportador").val()!="194" && 3>4) {

			window.location = "productosIngresados";

		}

	}
	
	llamarPaginaAutomatica($("#modalProductos"),$("#certificadoProductos"),$("#comparadorFormularioVacios"));			
	
	/*=====  End of Redireccionar  ======*/
	

	/*=====================================
	=            Desacativador            =
	=====================================*/
	
	var llamarDesactivaciones=function(parametro1,parametro2){

		$(parametro1).change(function(e){

			if ($(this).val()==1 || $(this).val()==2) {

				$(parametro2).removeAttr('disabled');

			}else{

				$(parametro2).attr('disabled','disabled');

			}

		});

	}
	
	llamarDesactivaciones($(".periodos__anios__meses"),$("#periodoAniosMarca"));	
	
	/*=====  End of Desacativador  ======*/
	


});

