$(document).ready(function () {

/*==============================================
=            Validación formularios            =
==============================================*/

	function validacionRegistro(parametro1,parametro2){

		switch (parametro2) {

		  case 1:

		  	var sumadorErrores=0;
		  				
		     $(parametro1).each(function(index) {
		          if($(this).val()==""){
		             sumadorErrores++;
		          }
		     });

		  break;

		  case 2:

		  	var sumadorErrores=0;
		  				
		     $(parametro1).each(function(index) {
		          if($(this).text()=="Seleccionar archivo"){
		             sumadorErrores++;
		          }
		     });

		  break;

		  case 3:

		  	  var sumadorErrores=0;
		  			
	  		  var personaJudi = $("#personaJudi").is(":checked");
		  			
			  if (personaJudi) {

			  	 $(parametro1).each(function(index) {
			        if($(this).val()==""){
			             sumadorErrores++;
			        }
			     });

			  }

		  break;

		  case 4:

		  	 var sumadorErrores=0;
		  				
		     $(parametro1).each(function(index) {
		          if($(this).text()!=""){
		             sumadorErrores++;
		          }
		     });

		  break;

		  case 5:

		  	var sumadorErrores=1;
		  				
		     $(parametro1).each(function(index) {

		     	var selector = $(this).is(":checked");

		     	if(selector) {
		     		sumadorErrores=0;
		     	}
		
		     });

		  break;

		  case 6:

		  	  var sumadorErrores=0;
		  			
	  		  var personaJudi = $("#personaJudi").is(":checked");
		  			
			  if (personaJudi) {

			     $(parametro1).each(function(index) {
			          if($(this).text()=="Seleccionar archivo"){
			             sumadorErrores++;
			          }
			     });

			  }

		  break;

		}

	    if (sumadorErrores==0) {
	     return true;
	    }else{
	     return false;
	    }

	}

	var validacionRegistroMostrarErrores=function(parametro1,parametro2){

		var sumadorErrores=0;

		switch (parametro2) {

		  case 1:
		  				
		     $(parametro1).each(function(index) {
		          if($(this).val()==""){
		            $(this).addClass('error');
		          }else{
		          	$(this).removeClass('error');
		          }
		     });

		  break;

		  case 2:
		  				
		     $(parametro1).each(function(index) {
		          if($(this).text()=="Seleccionar archivo"){
		            $(this).addClass('error');
		          }else{
		          	$(this).removeClass('error');
		          }
		     });
		     
		  break;

		  case 3:

		  	  var personaJudi = $("#personaJudi").is(":checked");
		  			
			  if (personaJudi) {

			     $(parametro1).each(function(index) {
			          if($(this).val()==""){
			            $(this).addClass('error');
			          }else{
			          	$(this).removeClass('error');
			          }
			     });

			  }

		  break;


		  case 4:
		  			
		     $(parametro1).each(function(index) {
		          if($(this).text()!=""){
		            $(this).addClass('error2');
		          }else{
		          	$(this).removeClass('error2');
		          }
		     });

		  break;


		  case 6:
		  			
		  	  var personaJudi = $("#personaJudi").is(":checked");
		  			
			  if (personaJudi) {

			     $(parametro1).each(function(index) {
			          if($(this).text()=="Seleccionar archivo"){
			            $(this).addClass('error');
			          }else{
			          	$(this).removeClass('error');
			          }
			     });

			  }


		  break;



		}


	}




/*=====  End of Validación formularios  ======*/


/*================================================
=            Llamar clases recorridas            =
================================================*/

function concatenarFunciones(parametro1){
	
	var arrayProductos = new Array(); 

	var stringProductos="";

    $(parametro1).each(function(index) {

        arrayProductos.push($(this).val());

    });

   stringProductos= arrayProductos.toString();

    return stringProductos;

}

/*=====  End of Llamar clases recorridas  ======*/


/*=====================================
=            Error Seccion            =
=====================================*/

function concatenarFuncionesContador(parametro1){

	var contador=0;
	
    $(parametro1).each(function(index) {

    	if ($(this).val()=="" || $(this).val()=="0" || $(this).val()==0) {
    		contador=contador+1;
    	}

    });

    return contador;

}

/*=====  End of Error Seccion  ======*/


/*==============================================
=            Envío de error mostrar            =
==============================================*/

var longitudCaracteres=function(parametro1){

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


/*==========================================
=            Generar Trimestres            =
==========================================*/

$('#generarTrimestre').on('click', function (e){

		$(this).hide();

		var destino = "funciones/funcionesInserta/insertaTrimestres.php";

        $.ajax({

            url: destino,
            type: 'POST',
            contentType: false,
            processData: false,
            cache: false, 

            success: function(response){

                var elementos=JSON.parse(response);
                var mensaje=elementos['mensaje'];

	            alertify.set("notifier","position", "top-right");
				alertify.notify("El trimestre se generó correctamente.", "success", 5, function(){});

	            window.setTimeout(function(){ 
	               location.reload();
	            } ,5000);  


            },
          	error: function (){ 
             	alert("Algo ha fallado.");
             	$('#enviarProductosTrimestrales').show();
          	}

        });    	

});

/*=====  End of Generar Trimestres  ======*/


/*=======================================================
=            Insertar productos trimestrales            =
=======================================================*/

$('#enviarProductosTrimestrales').on('click', function (e){

	var paqueteDeDatos = new FormData();

	$(this).hide();

	$('.reload__cargar2').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');



	 var stringIdProductos= concatenarFunciones($(".id__ocultos"));

	 var contadorIdProductos= concatenarFuncionesContador($(".id__ocultos"));

	 longitudCaracteres($(".id__ocultos"));	


	 var stringProductosVendidos= concatenarFunciones($(".claseProductosVendidos"));

	 var contadorProductosVendidos= concatenarFuncionesContador($(".claseProductosVendidos"));

	 longitudCaracteres($(".claseProductosVendidos"));	


	 var stringPrecioDeVentaPublico= concatenarFunciones($(".clasePrecioVentaPublico"));

	 var contadorPrecioDeVentaPublico= concatenarFuncionesContador($(".clasePrecioVentaPublico"));

	 longitudCaracteres($(".clasePrecioVentaPublico"));	


	 var stringTotalEvaluos= concatenarFunciones($(".claseTotalEvaluos"));

	 var contadorTotalEvaluos= concatenarFuncionesContador($(".claseTotalEvaluos"));

	 longitudCaracteres($(".claseTotalEvaluos"));	



	 var stringCantidadRestantes= concatenarFunciones($(".cantidad__restantes"));

	 var contadorCantidadRestantes= concatenarFuncionesContador($(".cantidad__restantes"));

	 longitudCaracteres($(".cantidad__restantes"));	


	 var stringIdProductosOcultos= concatenarFunciones($(".idProductos__ocultos"));

	 var contadorIdProductosOcultos= concatenarFuncionesContador($(".idProductos__ocultos"));

	 longitudCaracteres($(".idProductos__ocultos"));	


	 var stringCantidadInicial= concatenarFunciones($(".cantidad__inicial"));

	 var contadorCantidadInicial= concatenarFuncionesContador($(".cantidad__inicial"));

	 longitudCaracteres($(".cantidad__inicial"));	


	 // if (contadorProductosVendidos>0 || contadorPrecioDeVentaPublico>0 || contadorTotalEvaluos>0 || contadorIdProductosOcultos>0) {

		// alertify.set("notifier","position", "top-right");
		// alertify.notify("Los campos no pueden ser valor 0 ni tampoco estar vacíos", "error", 7, function(){});

		// $(this).show();

	 // }else{

	 	var nombresPeriodos=$("#nombresPeriodos").val();

	 	paqueteDeDatos.append('idImportador', $('#idImportador').prop('value'));
	 	paqueteDeDatos.append('nombresPeriodos', nombresPeriodos);

		paqueteDeDatos.append('stringIdProductos', stringIdProductos);
        paqueteDeDatos.append('stringProductosVendidos', stringProductosVendidos);
        paqueteDeDatos.append('stringPrecioDeVentaPublico', stringPrecioDeVentaPublico);
        paqueteDeDatos.append('stringTotalEvaluos', stringTotalEvaluos);
        paqueteDeDatos.append('stringCantidadRestantes', stringCantidadRestantes);
        paqueteDeDatos.append('stringIdProductosOcultos', stringIdProductosOcultos);
        paqueteDeDatos.append('stringCantidadInicial', stringCantidadInicial);

        var destino = "funciones/funcionesActualiza/actualizarProductosTrimestrales.php";

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
					alertify.notify("La cantidad que vendió es superior al valor que quedaba por vender", "error", 7, function(){});
					$('#enviarProductosTrimestrales').show();

	             }

 
	             if (mensaje==1) {

	             	alertify.set("notifier","position", "top-right");
					alertify.notify("Se guardo correctamente la información.", "success", 3, function(){});

	                window.setTimeout(function(){ 
	                   window.location = "ingresoDocumentos";
	                } ,3000);  

	             }

            },
          	error: function (){ 
             	alert("Algo ha fallado.");
             	$('#enviarProductosTrimestrales').show();
          	}

        });             

	 // }


});

/*=====  End of Insertar productos trimestrales  ======*/



/*============================================
=            Insertar Mercaderías            =
============================================*/

$('#enviarCertificadoAdicional').on('click', function (e){

	 var paqueteDeDatos = new FormData();

	 $(this).hide();


	 var stringidProductoo= concatenarFunciones($(".ClaIdProducto"));

	 var contadorIdProducto= concatenarFuncionesContador($(".ClaIdProducto"));

	 longitudCaracteres($(".ClaIdProducto"));


	 var stringClacantidad= concatenarFunciones($(".clacantidad"));

	 var contadorCantidad= concatenarFuncionesContador($(".clacantidad"));

	 longitudCaracteres($(".clacantidad"));


	 var stringClapesoNeto= concatenarFunciones($(".clapesoNe"));

	 var contadorPesoNeto= concatenarFuncionesContador($(".clapesoNe"));

	 longitudCaracteres($(".clapesoNe"));


	 var stringClaperoBrto= concatenarFunciones($(".claPesoBr"));

	 var contadorPesoBruto= concatenarFuncionesContador($(".claPesoBr"));

	 longitudCaracteres($(".claPesoBr"));


	 var stringClavalorfob= concatenarFunciones($(".ClaValor"));

	 var contadorValorFob= concatenarFuncionesContador($(".ClaValor"));

	 longitudCaracteres($(".ClaValor"));


	 var stringClapreciofb= concatenarFunciones($(".claPrecio"));

	 var contadorPrecioFb= concatenarFuncionesContador($(".claPrecio"));

	 longitudCaracteres($(".claPrecio"));



	 var stringClapaisOrig= concatenarFunciones($(".claPaisOri"));

	 var contadorPaisOrigen= concatenarFuncionesContador($(".claPaisOri"));

	 longitudCaracteres($(".claPaisOri"));


	 var stringClapaisProc= concatenarFunciones($(".claPaisProce"));

	 var contadorPaisProce= concatenarFuncionesContador($(".claPaisProce"));

	 longitudCaracteres($(".claPaisProce"));


	 var stringClaproveRaz= concatenarFunciones($(".claProvRaz"));

	 var contadorClpProveRaz= concatenarFuncionesContador($(".claProvRaz"));

	 longitudCaracteres($(".claProvRaz"));


	 var stringClaproveRuc= concatenarFunciones($(".clarProRuc"));

	 var contadorRucProveedores= concatenarFuncionesContador($(".clarProRuc"));

	 longitudCaracteres($(".clarProRuc"));

	 if(contadorIdProducto>0 || contadorCantidad>0 || contadorPesoNeto>0 || contadorPesoBruto>0 || contadorValorFob>0 || contadorPrecioFb>0 || contadorPaisOrigen>0 || contadorPaisProce>0 || contadorClpProveRaz>0 || contadorRucProveedores>0){

		alertify.set("notifier","position", "top-right");
		alertify.notify("Los campos no pueden ser valor 0 ni tampoco estar vacíos", "error", 7, function(){});

		$(this).show();

	 }else{

	 	$('.reload__cargar2').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

         paqueteDeDatos.append('numeroFinRecuperr', $('#numeroFinRecuperr').prop('value')); 
         paqueteDeDatos.append('numeroRucRecuperr', $('#numeroRucRecuperr').prop('value'));
         paqueteDeDatos.append('idImportador1', $('#idImportador1').prop('value'));
         paqueteDeDatos.append('codioRecupera', $('#codioRecupera').prop('value'));
            

         paqueteDeDatos.append('stringidProductoo', stringidProductoo);
         paqueteDeDatos.append('stringClacantidad', stringClacantidad);
         paqueteDeDatos.append('stringClapesoNeto', stringClapesoNeto);
         paqueteDeDatos.append('stringClaperoBrto', stringClaperoBrto);
         paqueteDeDatos.append('stringClavalorfob', stringClavalorfob);
         paqueteDeDatos.append('stringClapreciofb', stringClapreciofb);
         paqueteDeDatos.append('stringClapaisOrig', stringClapaisOrig);
         paqueteDeDatos.append('stringClapaisProc', stringClapaisProc);
         paqueteDeDatos.append('stringClaproveRaz', stringClaproveRaz);
         paqueteDeDatos.append('stringClaproveRuc', stringClaproveRuc);	 

         var destino = "funciones/funcionesActualiza/actualizarCertificadoAdicional.php";


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
					alertify.notify("Se guardo correctamente la información", "success", 5, function(){});

	                window.setTimeout(function(){ 
	                   window.location = "certificadosAprobados";
	                } ,5000);  

	             }

            },
          	error: function (){ 
             	alert("Algo ha fallado.");
             	$(this).show();
          	}

        });        

	 }


});

/*=====  End of Insertar Mercaderías  ======*/


/*=============================================================
=            Inserción formulario inicio de seción            =
=============================================================*/

$('#registroDocumentos').on('click', function (e){

	$(this).hide();

	var validador= validacionRegistro($(".obligatorios"),1);

	validacionRegistroMostrarErrores($(".obligatorios"),1);

	var validador2= validacionRegistro($(".obligatorios3"),2);

	validacionRegistroMostrarErrores($(".obligatorios3"),2);

	var validador3= validacionRegistro($(".obligatorios2"),3);

	validacionRegistroMostrarErrores($(".obligatorios2"),3);

	var validador6= validacionRegistro($(".obligatorios4"),6);

	validacionRegistroMostrarErrores($(".obligatorios4"),6);

	var validador4= validacionRegistro($(".mensajes__unanimes"),4);

	validacionRegistroMostrarErrores($(".mensajes__unanimes"),4);

	var validador5= validacionRegistro($(".estilos__checkeboxes"),5);


	if(validador4==false){

		alertify.set("notifier","position", "top-right");
		alertify.notify("Campos no validos (fijarse subrayado azul)", "error", 5, function(){});

		$(this).show();

	}else if(validador5==false){


		alertify.set("notifier","position", "top-right");
		alertify.notify("Es obligatorios seleccionar por lo menos un producto a importar", "error", 5, function(){});

		$(this).show();

	}else if (validador==false || validador2==false || validador3==false || validador6==false) {

		alertify.set("notifier","position", "top-right");
		alertify.notify("Datos obligatorios (percatarse campos subrayados)", "error", 5, function(){});

		$(this).show();

	}else{

		var paqueteDeDatos = new FormData();
		var paqueteDeDatos2 = new FormData();

		$('.reload__cargar').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

		var personaNatu = $("#personaNatu").is(":checked");
		var personaJudi = $("#personaJudi").is(":checked");

		if (personaNatu) {

			paqueteDeDatos.append('tipoPersona', 'Natural');

		}else if(personaJudi){

			paqueteDeDatos.append('tipoPersona', 'Juridica');

		}


		paqueteDeDatos.append('cedula', $('#cedula').prop('value'));
		paqueteDeDatos.append('agregaRasonSocial', $('#agregaRasonSocial').prop('value'));
		paqueteDeDatos.append('agregaActividadPrincipal', $('#agregaActividadPrincipal').prop('value'));
		paqueteDeDatos.append('agregaActividadBeneficio', $('#agregaActividadBeneficio').prop('value'));
		paqueteDeDatos.append('cedulaIdentidad', $('#cedulaIdentidad').prop('value'));
		paqueteDeDatos.append('nomRepresentanteLegal', $('#nomRepresentanteLegal').prop('value'));
		paqueteDeDatos.append('agregaEmail', $('#agregaEmail').prop('value'));
		paqueteDeDatos.append('agregaCelular', $('#agregaCelular').prop('value'));
		paqueteDeDatos.append('agregaTelefono', $('#agregaTelefono').prop('value'));
		paqueteDeDatos.append('periodoAniosMarca', $('#periodoAniosMarca').prop('value')); 
		paqueteDeDatos.append('fechaInicioMarca', $('#fechaInicioMarca').prop('value')); 
		paqueteDeDatos.append('fechaFinMarca', $('#fechaFinMarca').prop('value')); 
		paqueteDeDatos.append('marcaAdicioNew', $('#marcaAdicioNew').prop('value')); 

		var docuRuc=$('#docuRuc')[0].files[0];
		paqueteDeDatos.append('docuRuc', docuRuc); 

		var CertificadoVigente=$('#CertificadoVigente')[0].files[0];
		paqueteDeDatos.append('CertificadoVigente',CertificadoVigente); 

		var cartaIntencion=$('#cartaIntencion')[0].files[0];
		paqueteDeDatos.append('cartaIntencion', cartaIntencion); 

		var nombramiento=$('#nombramiento')[0].files[0];
		paqueteDeDatos.append('nombramiento', nombramiento); 

		var declaracionInpuesto=$('#declaracionInpuesto')[0].files[0];
		paqueteDeDatos.append('declaracionInpuesto', declaracionInpuesto); 

		var declaracionAduaneraDeImportacion=$('#declaracionAduaneraDeImportacion')[0].files[0];
		paqueteDeDatos.append('declaracionAduaneraDeImportacion', declaracionAduaneraDeImportacion); 

		var emisionDocumentosElectronicos=$('#emisionDocumentosElectronicos')[0].files[0];
		paqueteDeDatos.append('emisionDocumentosElectronicos', emisionDocumentosElectronicos);

		var noAdeudarServicio=$('#noAdeudarServicio')[0].files[0];
		paqueteDeDatos.append('noAdeudarServicio', noAdeudarServicio); 

		var certificadoDeCumplimiento=$('#certificadoDeCumplimiento')[0].files[0];
		paqueteDeDatos2.append('certificadoDeCumplimiento', certificadoDeCumplimiento);

		var certificadoDistribucion=$('#certificadoDistribucion')[0].files[0];
		paqueteDeDatos.append('certificadoDistribucion', certificadoDistribucion); 

		var glosarioDeTecnologias=$('#glosarioDeTecnologias')[0].files[0];
		paqueteDeDatos.append('glosarioDeTecnologias', glosarioDeTecnologias);


		var bicicleta = $("#bicicleta").is(":checked");
		var pelotasTennis = $("#pelotasTennis").is(":checked");
		var cadenasDeRodillos = $("#cadenasDeRodillos").is(":checked");
		var raquetasDeTennis = $("#raquetasDeTennis").is(":checked");
		var sillines = $("#sillines").is(":checked");
		var pelotasInflables = $("#pelotasInflables").is(":checked");
		var calzadoDeportivo = $("#calzadoDeportivo").is(":checked");
		var materialesBeisbol = $("#materialesBeisbol").is(":checked");
		var cascosProductos = $("#cascosProductos").is(":checked");
		var articulosMaterialTenisDeMesa = $("#articulosMaterialTenisDeMesa").is(":checked");

		if (bicicleta) {
			paqueteDeDatos.append('bicicleta', 'si');
		}else{
			paqueteDeDatos.append('bicicleta', 'no');
		}


		if (pelotasTennis) {
			paqueteDeDatos.append('pelotasTennis', 'si');
		}else{
			paqueteDeDatos.append('pelotasTennis', 'no');
		}


		if (cadenasDeRodillos) {
			paqueteDeDatos.append('cadenasDeRodillos', 'si');
		}else{
			paqueteDeDatos.append('cadenasDeRodillos', 'no');
		}


		if (raquetasDeTennis) {
			paqueteDeDatos.append('raquetasDeTennis', 'si');
		}else{
			paqueteDeDatos.append('raquetasDeTennis', 'no');
		}


		if (sillines) {
			paqueteDeDatos.append('sillines', 'si');
		}else{
			paqueteDeDatos.append('sillines', 'no');
		}


		if (pelotasInflables) {
			paqueteDeDatos.append('pelotasInflables', 'si');
		}else{
			paqueteDeDatos.append('pelotasInflables', 'no');
		}

		if (calzadoDeportivo) {
			paqueteDeDatos.append('calzadoDeportivo', 'si');
		}else{
			paqueteDeDatos.append('calzadoDeportivo', 'no');
		}

		if (materialesBeisbol) {
			paqueteDeDatos.append('materialesBeisbol', 'si');
		}else{
			paqueteDeDatos.append('materialesBeisbol', 'no');
		}

		if (cascosProductos) {
			paqueteDeDatos.append('cascosProductos', 'si');
		}else{
			paqueteDeDatos.append('cascosProductos', 'no');
		}

		if (articulosMaterialTenisDeMesa) {
			paqueteDeDatos.append('articulosMaterialTenisDeMesa', 'si');
		}else{
			paqueteDeDatos.append('articulosMaterialTenisDeMesa', 'no');
		}


		var destino = "funciones/funcionesInserta/registroDocumentos2.php"; 


    	$.ajax({

	       url: destino,
	       type: 'POST',
	       data: paqueteDeDatos, 
	       contentType: false,
	       processData: false,
	       cache: false, 

	       success: function(response){

             var elementos=JSON.parse(response);
             var mensaje=elementos['mensaje'];

             if (mensaje==2) {

             	alertify.set("notifier","position", "top-right");
				alertify.notify("El ruc ya se encuentra registrado en el aplicativo.", "error", 5, function(){});

				$('#registroDocumentos').show();

				$('.reload__cargar').html('');

             }

             if (mensaje==1) {

             	alertify.set("notifier","position", "top-right");
				alertify.notify("Registro ingresado satisfactoriamente.", "success", 5, function(){});

                window.setTimeout(function(){ 
                   location.reload();
                } ,5000);  

             }


	       },

	       error: function (){ 
	          alert("Algo ha fallado.");
	       }

	    });


	}


});

/*=====  End of Inserción formulario inicio de seción  ======*/


});