/*===============================================================
=            Validaciones Generales para el proyecto            =
===============================================================*/

/*=================================================
=            Autocompletado del SELECT            =
=================================================*/
$(document).ready(function () {


$('.reload__modal').on('click', function (e){

  location.reload();

});

  /*=================================================
  =            Llamando al archivo excel            =
  =================================================*/


  function filePreview111(input){

    var fileName = input.files[0].name;

    var ext = fileName.split('.').pop();

    if (input.files && input.files[0]) {

      var reader= new FileReader();

      reader.onload= function(e){

     if(ext=="xlsx" || ext=="xls"){

        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('selectorArchivoExcel', $('#selectorArchivoExcel')[0].files[0]); 

        var destino = "funciones/selectorTablas/visorExcel.php";

        $.ajax({
            url: destino,
            type: 'POST',
            contentType: false,
            data: paqueteDeDatos, 
            processData: false,
            cache: false, 

            success: function(response){

                var archivoExcel=JSON.parse(response);

                var stringNombre=archivoExcel['stringNombre'];
                var stringPrecio=archivoExcel['stringPrecio'];
                var stringExistencia=archivoExcel['stringExistencia'];
                var stringPesoNeto=archivoExcel['stringPesoNeto'];
                var stringPesoBruto=archivoExcel['stringPesoBruto'];
                var stringValorfob=archivoExcel['stringValorfob'];
                var stringDescripcionComercial=archivoExcel['stringDescripcionComercial'];
                var stringDisciplinaDeportiva=archivoExcel['stringDisciplinaDeportiva'];
                var stringMarca=archivoExcel['stringMarca'];
                var stringModelo=archivoExcel['stringModelo'];
                var stringPreciofob=archivoExcel['stringPreciofob'];
                var stringPaisOrigen=archivoExcel['stringPaisOrigen'];
                var stringPaisProcedencia=archivoExcel['stringPaisProcedencia'];
                var stringNombreProveedor=archivoExcel['stringNombreProveedor'];
                var stringRucProveedor=archivoExcel['stringRucProveedor'];
                var stringPrecioPeru=archivoExcel['stringPrecioPeru'];
                var stringPrecioColombia=archivoExcel['stringPrecioColombia'];
                var stringComposicionProducto=archivoExcel['stringComposicionProducto'];
                var stringTecnologia=archivoExcel['stringTecnologia'];
                var stringMaterial=archivoExcel['stringMaterial'];
                var stringPorcentaje=archivoExcel['stringPorcentaje'];
                var stringLink=archivoExcel['stringLink'];

                var mensaje=archivoExcel['mensaje'];

                if (stringNombre!="") {

                  arrayNombre = stringNombre.split('__');
                  arrayPrecio = stringPrecio.split('__');
                  arrayExistencia = stringExistencia.split('__');
                  arrayPesoNeto = stringPesoNeto.split('__');
                  arrayPesoBruto = stringPesoBruto.split('__');
                  arrayValorfob = stringValorfob.split('__');
                  arrayDescripcionComercial = stringDescripcionComercial.split('__');
                  arrayDisciplinaDeportiva = stringDisciplinaDeportiva.split('__');
                  arrayMarca = stringMarca.split('__');
                  arrayModelo = stringModelo.split('__');
                  arrayPreciofob = stringPreciofob.split('__');
                  arrayPaisOrigen = stringPaisOrigen.split('__');
                  arrayPaisProcedencia = stringPaisProcedencia.split('__');
                  arrayNombreProveedor = stringNombreProveedor.split('__');
                  arrayRucProveedor = stringRucProveedor.split('__');
                  arrayPrecioPeru = stringPrecioPeru.split('__');
                  arrayPrecioColombia = stringPrecioColombia.split('__');
                  arrayComposicionProducto = stringComposicionProducto.split('__');
                  arrayTecnologia = stringTecnologia.split('__');
                  arrayMaterial = stringMaterial.split('__');
                  arrayPorcentaje = stringPorcentaje.split('__');
                  arraylink = stringLink.split('__');  


                  $(".visorTableCuerpo").show();

                  var adicional=0;

                  for (var i =0; i<arrayNombre.length ;  i++) {


                    
                    $("#traerDatosDeExcel").append("<tr><td>"+arrayNombre[i]+"<input class='excelitem' type='hidden' style='font-size: 8px' name='itemImportExcel' id='itemImportExcel' value='"+arrayNombre[i]+"'></td><td>"+arrayPrecio[i]+"<input class='excelcodigoArancel' type='hidden' name='codigoArancelarioImportExcel' id='codigoArancelarioImportExcel' value='"+arrayPrecio[i]+"'></td><td>"+arrayExistencia[i]+"<input class='excelcodigoInternacional' type='hidden' name='codigoUnicoImportExcel' id='codigoUnicoImportExcel' value='"+arrayExistencia[i]+"'></td><td>"+arrayPesoNeto[i]+"<input class='excelperosneto' type='hidden' name='pesoNetoImportExcel' id='pesoNetoImportExcel' value='"+arrayPesoNeto[i]+"'></td><td>"+arrayPesoBruto[i]+"<input class='excelperobruto' type='hidden' name='pesoBrutoImportExcel' id='pesoBrutoImportExcel' value='"+arrayPesoBruto[i]+"'></td><td>"+arrayValorfob[i]+"<input class='excelvalorfob' type='hidden' name='valorfobImportExcel' id='valorfobImportExcel' value='"+arrayValorfob[i]+"'></td><td>"+arrayDescripcionComercial[i]+"<input class='exceldescripcionComercial' type='hidden' name='descripcionComercialImportExcel' id='descripcionComercialImportExcel' value='"+arrayDescripcionComercial[i]+"'></td><td>"+arrayDisciplinaDeportiva[i]+"<input class='exceldisciplina' type='hidden' name='disciplinaDeportivaImportExcel' id='disciplinaDeportivaImportExcel' value='"+arrayDisciplinaDeportiva[i]+"'></td><td>"+arrayMarca[i]+"<input class='excelmarca' type='hidden' name='marcaImportExcel' id='marcaImportExcel' value='"+arrayMarca[i]+"'></td><td>"+arrayModelo[i]+"<input class='excelmodelo' type='hidden' name='modeloImportExcel' id='modeloImportExcel' value='"+arrayModelo[i]+"'></td><td>"+arrayPreciofob[i]+"<input class='excelprecio' type='hidden' name='preciofobImportExcel' id='preciofobImportExcel' value='"+arrayPreciofob[i]+"'></td><td>"+arrayPaisOrigen[i]+"<input class='excelpaisOrigen' type='hidden' name='paisOrigenImportExcel' id='paisOrigenImportExcel' value='"+arrayPaisOrigen[i]+"'></td><td>"+arrayPaisProcedencia[i]+"<input class='excelpaisProcedencia' type='hidden' name='paisProcedenciaImportExcel' id='paisProcedenciaImportExcel' value='"+arrayPaisProcedencia[i]+"'></td><td>"+arrayNombreProveedor[i]+"<input class='excelnomProveedor' type='hidden' name='nombreProveedorImportExcel' id='nombreProveedorImportExcel' value='"+arrayNombreProveedor[i]+"'></td><td>"+arrayRucProveedor[i]+"<input class='excelrucProveedor' type='hidden' name='rucProveedorImportExcel' id='rucProveedorImportExcel' value='"+arrayRucProveedor[i]+"'></td><td>"+arrayPrecioPeru[i]+"<input class='excelprecioPeru' type='hidden' name='precioPeruImportExcel' id='precioPeruImportExcel' value='"+arrayPrecioPeru[i]+"'></td><td>"+arrayPrecioColombia[i]+"<input class='excelprecioColombia' type='hidden' name='precioColombiaImportExcel' id='precioColombiaImportExcel' value='"+arrayPrecioColombia[i]+"'></td><td>"+arrayComposicionProducto[i]+"<input class='excelcomposicion' type='hidden' name='composicionProductoImportExcel' id='composicionProductoImportExcel' value='"+arrayComposicionProducto[i]+"'></td><td>"+arrayTecnologia[i]+"<input class='exceltecnologia' type='hidden' name='tecnologiaImportExcel' id='tecnologiaImportExcel' value='"+arrayTecnologia[i]+"'></td><td>"+arrayMaterial[i]+"<input class='excelmaterial' type='hidden' name='materialImportExcel' id='materialImportExcel' value='"+arrayMaterial[i]+"'></td><td>"+arrayPorcentaje[i]+"<input class='excelporcentaje' type='hidden' name='porcentajeImportExcel' id='porcentajeImportExcel' value='"+arrayPorcentaje[i]+"'></td><td>"+arraylink[i]+"<input class='excellink' type='hidden' name='linkImportExcel' id='linkImportExcel' value='"+arraylink[i]+"'></td><td><input id='varlorImagen"+i+"' class='excelImagen' type='file' name=''></td></tr>");
                    
                    adicional=adicional+1;

                  }


                }

                if (mensaje==1) {
                    
                    swal({

                         type: "info",
                         title: "NO PUEDE EXISTIR ESPACIOS EN BLANCO",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    })

                }

                
              
            },

               error: function (){ 
               alert("Algo ha fallado.");
            }

         });

         

       }else{

            swal({

                type: "info",
                title: "Solo se aceptan archivos en formato excel",
                showConfirmButton: false,
                confirmButtonText: "Cerrar",
                timer: 3000

            })

            $("#selectorArchivoExcel").val("");

       }

      }

      reader.readAsDataURL(input.files[0]);

    }

  }

  $("#selectorArchivoExcel").change(function(){

    filePreview111(this);
 
 });
 
  
  /*=====  End of Llamando al archivo excel  ======*/
  


	// ocultar datos del formulario inicial


$('#encuestaSatisfac').modal('show');

	/*=====  End of Autocompletado del SELECT  ======*/

/*=======================================
=            Reinicio Página            =
=======================================*/

$(".close__reinicio").click(function(event) {

   location.reload();

});


/*=====  End of Reinicio Página  ======*/



	/*============================================================
	=            Validación para aceptar solo números            =
	============================================================*/



$("#cedulaUsuario").keydown(function(event) {

 this.value = this.value.replace(/[^0-9]/g,'');

});


$(".validacionesNumericas").on('input', function () {

    this.value = this.value.replace(/[^0-9,.]/g, '').replace(',','.');


  });





$("#telefonoHistoria").keydown(function(event) {


if($(this).val().length==2){

  	$(this).val($(this).val()+" ");

  }else if($(this).val().length==7){

  	$(this).val($(this).val()+"-");

  }

});


$("#celularHistoria").keydown(function(event) {

 if($(this).val().length==2){

  	$(this).val($(this).val()+" ");

  }else if($(this).val().length==6){

  	$(this).val($(this).val()+"-");

  }

});



	/*=====  End of Validación para aceptar solo números  ======*/

	/*=====================================
	=            Slider script            =
	=====================================*/
	
	// $(window).on('load', function() {
		
	// 	$('#slider').nivoSlider(); 
	
	// }); 
	
	/*=====  End of Slider script  ======*/



	/*============================================
	=            Recoger escogimiento            =
	============================================*/

  $("#codigoCalzado").blur(function(e){
  
        e.preventDefault(); 

        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('codigoCalzado', $('#codigoCalzado').prop('value'));
        paqueteDeDatos.append('idImportador', $('#idImportador').prop('value'));

        var destino = "funciones/selector/traerCodigoUnico.php";

        $.ajax({
            url: destino,
            type: 'POST',
            contentType: false,
            data: paqueteDeDatos, 
            processData: false,
            cache: false, 
            success: function(response){

                var usuarios=JSON.parse(response);
                var codigoCalzadoImplemento=usuarios['codigoCalzadoImplemento'];

                if (codigoCalzadoImplemento!=null) {

                        $("#guardarProducto").hide();

                         swal({

                           type: "info",
                           title: "El código ya ha sido ingresado anteriomente para este usuario",
                           showConfirmButton: true,
                           confirmButtonText: "Cerrar"
                        })
                    
                 


                    }else{

                        $("#guardarProducto").show();

                    }
         
            },

               error: function (){ 
               alert("Algo ha fallado.");
            }

         });

  });
	
	$("#password2").blur(function(){

    if ($("#password").val()!=$("#password2").val()) {

      swal({
        type: "info",
        title: "La primera y la segunda contraseña no coinciden",
        showConfirmButton: true,
        confirmButtonText: "Cerrar"
        
      });

      $(".password__validacion").addClass("error");
      $(".password2__validacion").addClass("error");

    }else{

      $(".password__validacion").removeClass("error");
      $(".password2__validacion").removeClass("error");

    }

 });


$('#personaNatu').on('change', function (e){

  var condicionesSuperadas = $("#personaNatu").is(":checked");

    if (condicionesSuperadas) {
      
      $(".soloRuc").show();

      $(".conruc").hide();

      $(".datosRestantes").show();

      $(".documentosRucCarga").show();

    }else{
      $(".soloRuc").hide();

      $(".conruc").hide();

      $(".datosRestantes").hide();

      $(".documentosRucCarga").hide();
    }


});


$('.natural__juridica').on('click', function (e){

  $("#registroDocumentos").show();

});


$('#personaJudi').on('change', function (e){

  var condicionesSuperadas = $("#personaJudi").is(":checked");

    if (condicionesSuperadas) {
      
      $(".soloRuc").show();

      $(".conruc").show();

      $(".datosRestantes").show();

      $(".documentosRucCarga").show();

    }else{

      $(".soloRuc").hide();

      $(".conruc").hide();

      $(".datosRestantes").hide();

      $(".documentosRucCarga").hide();
      
    }


});



  $(".validacionesNumericas").on('input', function () {

    this.value = this.value.replace(/[^0-9,.]/g, '').replace(',','.');


  });

  $(".validacionLetrasMayusculas").on('input', function () {

    this.value = this.value.replace(/[^a-zA-Z- ]/g, '').toUpperCase();

  });    




$("#cambiarImaDocu1").on("click", function (e){

  $(".cambioImage1").show();

  $(".image1").hide();
  
});

$("#ingresoDocumentoFin").on("click", function (e){

  $("#ingresoDocumentoFin").hide();
  
});



$("#cambiarItem").on("click", function (e){

  $("#selectItem11").show();

  $("#item").hide();
  
});


$("#cambiarMarca").on("click", function (e){

  $("#marca123").show();

  $("#marcaImplemento").hide();
  
});

$("#cambiarDisciplina").on("click", function (e){

  $("#disiplinaDeportiva1").show();

  $("#disciplinaDeport").hide();
  
});




$("#aceptarInformacion1").on("click", function (e){

        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('idCatalogoAbsorvido', $('#idCatalogoAbsorvido').prop('value'));
        
        var destino = "funciones/funcionesActualiza/actualizaCheck.php";

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
          
                    swal({

                         type: "success",
                         title: "Se selecciono el producto",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "solicitaCertificado";
                      }
                    });

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

});


$("#aceptarInformacionAdicional").on("click", function (e){

        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('idImportador', $('#idImportador').prop('value'));
        paqueteDeDatos.append('idCatalogoAbsorvido1', $('#idCatalogoAbsorvido1').prop('value'));
        
        var destino = "funciones/funcionesActualiza/actualizaCheckAdicional.php";

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
                    alertify.notify("Registro ingresado satisfactoriamente.", "success", 2, function(){});

                    window.setTimeout(function(){ 
                      window.location = "solicitaCertificadoAdicional";
                    } ,2000);  

                }

                if (mensaje==2) {
          
                   alertify.set("notifier","position", "top-right");
                   alertify.notify("Es obligatorio seleccionar al menos un producto", "error", 5, function(){});

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });
    

});


  $('#cerrarFormularioPdf').on('click', function (e){

    window.location = "certificadosAprobados";

  }); 


  $('#cerrarFormularioPdfAdiciona').on('click', function (e){

    window.location = "certificadosAprobadosAdicionales";

  }); 



  $('#cerrarFormularioEmision').on('click', function (e){

    window.location = "emitirCertificado";

  }); 

  $('#cerrarFormularioPdfFin').on('click', function (e){

    window.location = "certificadosAprobadosFin";

  }); 
  


$('#CodArancelario').on('blur', function (e){
         
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();
        paqueteDeDatos.append('selectItem1', $('#selectItem1').prop('value'));
        paqueteDeDatos.append('CodArancelario', $('#CodArancelario').prop('value'));

      
        var destino = "funciones/datatables/llamarProductos.php";

        $.ajax({
            url: destino,
            type: 'POST',
            contentType: false,
            data: paqueteDeDatos, 
            processData: false,
            cache: false, 
            success: function(response){

                var usuarios=JSON.parse(response);
                var mensaje=usuarios['mensaje'];
                var id_item=usuarios['id_item'];
                var marca=usuarios['marca'];
                var modelo=usuarios['modelo'];

                if (mensaje==2) {
                    
                    swal({

                         type: "error",
                         title: "Ingrese código para Continuar",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    })

                }
               
                if (mensaje==1) {
                    
                  $("#traeMarca").val(marca);
                  $("#traeModelo").val(modelo);

                }
            },

               error: function (){ 
               alert("Algo ha fallado.");
            }

         });

    });
	
	/*=====  End of Recoger escogimiento  ======*/
	
	$.ajax({
    type:'POST',
    url:'funciones/selector/selectorItem.php'
  }).done(function(lista__item){

  $("#selectItem").html(lista__item);

  }).fail(function(){

    alert("hubo un error");

  });


/*========================================
=            Selector de Item            =
========================================*/

  $("#selectItem").change(function(){

    var ItemId=$("#selectItem").val();

    $.ajax({
      data: {ItemId:ItemId},
      dataType: 'html',
      type:'POST',
      url:'funciones/selector/selectorItem2.php'
    }).done(function(lista__canton){
      $("#selectItem2").html(lista__canton);
      $("#selectItem2").change(function(){
      var valor=$(this).val(); 
      

    }); 

    }).fail(function(){

      alert("hubo un error");

    })
   
  });

/*=====  End of Selector de Item  ======*/

  $.ajax({

    type:'POST',
    url:'funciones/selector/selectorItem.php'
  }).done(function(lista__provincia){

  $("#selectItem1").html(lista__provincia);

  }).fail(function(){

    alert("hubo un error");

  });


 $.ajax({

    type:'POST',
    url:'funciones/selector/selectorItem.php'
  }).done(function(lista__provincia){

  $("#selectItem11").html(lista__provincia);

  }).fail(function(){

    alert("hubo un error");

  });



  $("#selectItem11").change(function(){
    $("#selectItem21").show();
    $("#codigoArancelario").hide();
    var ItemId=$("#selectItem11").val();

    $.ajax({
      data: {ItemId:ItemId},
      dataType: 'html',
      type:'POST',
      url:'funciones/selector/selectorItem2.php'
    }).done(function(lista__canton){
      $("#selectItem21").html(lista__canton);
      $("#selectItem21").change(function(){
      var valor=$(this).val(); 
      

    }); 

    }).fail(function(){

      alert("hubo un error");

    })
   
  });


/*=====  Marca  ======*/

  $.ajax({

    type:'POST',
    url:'funciones/selector/selectorMarca.php'
  }).done(function(lista__marca){

  $("#marca").html(lista__marca);
  $("#marca").change(function(){
      var valor=$(this).val(); 

      var idRecuperado = $('valor:selected');
      var idRecuperado =$('#marca>option:selected').attr('idRecuperado');
      
  
      var marcaNum=$("#marcaNumInici").val(idRecuperado);
      if(idRecuperado=='100'){

          $(".marcaAdicional").show();

      }else{
       
           $(".marcaAdicional").hide();
        }
  }); 


  }).fail(function(){

    alert("hubo un error");

  });

  /*=====  Códigos para empatar  ======*/

  var importer=$("#idImportador").val();

  $.ajax({
    data: {importer:importer},
    type:'POST',
    url:'funciones/selector/selectorCertificado.php'
  }).done(function(lista__cert){

    $("#codigoParaEmpatar").html(lista__cert);

  }).fail(function(){

    alert("hubo un error");

  });

  /*=====  Códigos certificado  ======*/

  var importer=$("#idImportador").val();

  $.ajax({
    data: {importer:importer},
    type:'POST',
    url:'funciones/selector/selectorCertificado1.php'
  }).done(function(lista__cert){

    $("#codigoCertificado").html(lista__cert);

  }).fail(function(){

    alert("hubo un error");

  });


  /*=====  disciplina  ======*/

  /*========================================
  =            marca adicionarl            =
  ========================================*/
  
  var ItemId12=$("#idImportador").val();

  $.ajax({
     data: {ItemId12:ItemId12},
    type:'POST',
    url:'funciones/selector/selectorMarca1.php'
  }).done(function(lista__marca){

  $("#marca1").html(lista__marca);
  $("#marca1").change(function(){
      var valor=$(this).val(); 
      var idRecuperado = $('valor:selected');
      var idRecuperado =$('#marca1>option:selected').attr('idRecuperado');
      var idRecodigo =$('#marca1>option:selected').attr('idRecodigo');
      var marcaN=$("#marcaNombreCuadro").val(idRecodigo);
      var marcaNum=$("#marca159").val(idRecuperado);

    }); 

  }).fail(function(){

    alert("hubo un error");

  });


  $.ajax({
     data: {ItemId12:ItemId12},
    type:'POST',
    url:'funciones/selector/selectorMarca1.php'
  }).done(function(lista__marca){

  $("#marca123").html(lista__marca);
  $("#marca123").change(function(){
      var valor1=$(this).val(); 

      
      var idRecuperado = $('valor:selected');
      var idRecuperado =$('#marca123>option:selected').attr('idRecuperado');
      var idRecodigo =$('#marca123>option:selected').attr('idRecodigo');
      var nombreMarccca=$("#nombreMarccca").val(idRecodigo);
      var marca160=$("#marca160").val(idRecuperado);

    });
    

  }).fail(function(){

    alert("hubo un error");

  });
  
  
  /*=====  End of marca adicionarl  ======*/
  


  $.ajax({

    type:'POST',
    url:'funciones/selector/selectorDisciplina.php'
  }).done(function(lista__marca){

  $("#disiplinaDeportiva").html(lista__marca);

  }).fail(function(){

    alert("hubo un error");

  });



  $.ajax({

    type:'POST',
    url:'funciones/selector/selectorDisciplina.php'
  }).done(function(lista__marca){

  $("#disiplinaDeportiva1").html(lista__marca);

  }).fail(function(){

    alert("hubo un error");

  });



/*=====================================================
=            para visualizar las imagenes             =
=====================================================*/

 function filePreview(input){

    if (input.files && input.files[0]) {

      var reader= new FileReader();

      reader.onload = function(e){

        $('#imagenPrevia').html("<img src='"+e.target.result+"'/>")

      }

      reader.readAsDataURL(input.files[0]);

    }

  }

  $("#foto").change(function(){

    filePreview(this);
 
 });

 function filePreview1(input){

    if (input.files && input.files[0]) {

      var reader= new FileReader();

      reader.onload = function(e){

        $('#imagenPrevia1').html("<img src='"+e.target.result+"' />")

      }

      reader.readAsDataURL(input.files[0]);

    }

  }

  $("#foto1").change(function(){

    filePreview1(this);
 
 });

 function filePreview2(input){

    if (input.files && input.files[0]) {

      var reader= new FileReader();

      reader.onload = function(e){

        $('#imagenPrevia2').html("<img src='"+e.target.result+"' />")

      }

      reader.readAsDataURL(input.files[0]);

    }

  }

  $("#foto2").change(function(){

    filePreview2(this);
 
 });

 function filePreview3(input){

    if (input.files && input.files[0]) {

      var reader= new FileReader();

      reader.onload = function(e){

        $('#imagenPrevia3').html("<img src='"+e.target.result+"' />")

      }

      reader.readAsDataURL(input.files[0]);

    }

  }

  $("#foto3").change(function(){

    filePreview3(this);
 
 });

/*=====  End of para visualizar las imagenes   ======*/


 function filePreview(input){ 

    if (input.files && input.files[0]) {

      var reader= new FileReader();

      reader.onload = function(e){


        var expresion = '/(application)/i';
        var expresion1 = '/(image)/i';

        if ((e.target.result).match("application")){
          $('#verPdfq').html("<embed src='"+e.target.result+"' width='550' height='350'/>")
          $("#imagenPrevia").hide();
          $("#verPdfq").show();
          // alert('pdf');
        }else {
          $('#imagenPrevia').html("<img src='"+e.target.result+"' />")
          $("#verPdfq").hide();
          $("#imagenPrevia").show();
          // alert('image');

        }

       // ******************************************************
        
      }

      reader.readAsDataURL(input.files[0]);

    } 

  }


  $("#documentoDias").change(function(){

    filePreview(this);
    // alert(this);
 
 });

$('#negarRegistro').on('click', function (e){
 
   $(".observaNega").show();
   $("#CancelarNega").show();
   $("#guardarNegacionDir").show();
   $("#negarRegistro").hide();
   $("#aprobarRegistro").hide();

});


$('#botonNegarProducto').on('click', function (e){
 
   $(".observaNega1").show();
   $("#CancelarNega1").show();
   $("#guardarNegacionProducto").show();
   $("#botonNegarProducto").hide();
   $("#botonAprobarProducto").hide();

});



/*=============================================
=            Documentos selectores            =
=============================================*/

$(".tabla__productos").hide();

$("#documentoExcelProductos").change(function(){

  $(".tabla__productos").hide();

    var input = document.getElementById('documentoExcelProductos');

    var archivoRuta=input.value;

    var exPermitiadas2= /(.xlsx)$/i;

    if (!exPermitiadas2.exec(archivoRuta)) {

        alertify.set("notifier","position", "top-right");
        alertify.notify("El archivo debe ser formato .xlsx obligatoriamente", "error", 5, function(){});

        $("#direccionDocumentoExcel").val(" ");

        $(".tabla__productos").hide();

        $("#documentoExcelProductos").val(''); 

    }else{

      /*========================================
      =            Obtener el label            =
      ========================================*/

      var documento=$("#documentoExcelProductos").val();
      var filenameWithExtension = documento.replace(/^.*[\\\/]/, '');

      $("#direccionDocumentoExcel").val(filenameWithExtension);
      
      /*=====  End of Obtener el label  ======*/
      
      /*======================================
      =            Llamar el Ajax            =
      ======================================*/

      var paqueteDeDatos = new FormData();

      var idImportadorExcel=$("#idImportador").val();

      paqueteDeDatos.append('idImportadorExcel', idImportadorExcel); 
      paqueteDeDatos.append('documentoExcelProductos', $('#documentoExcelProductos')[0].files[0]); 

      var destino = "funciones/selector/seleccionaExcel.php";
   
        $.ajax({

            url: destino,
            type: 'POST',
            contentType: false,
            data: paqueteDeDatos, 
            processData: false,
            cache: false, 
            success: function(response){

                var elementos=JSON.parse(response);

                /*=================================
                =            Variables            =
                =================================*/
                        
                var mensaje=elementos['mensaje'];
                var columnaA=elementos['columnaA'];
                var columnaB=elementos['columnaB'];
                var columnaC=elementos['columnaC'];
                var columnaD=elementos['columnaD'];
                var columnaE=elementos['columnaE'];
                var columnaF=elementos['columnaF'];
                var columnaG=elementos['columnaG'];
                var columnaH=elementos['columnaH'];
                var columnaI=elementos['columnaI'];
                var columnaJ=elementos['columnaJ'];
                var columnaK=elementos['columnaK'];
                var columnaL=elementos['columnaL'];

                var dataItemString=elementos['dataItemString'];
                var dataCodigoArrancelarioString=elementos['dataCodigoArrancelarioString'];
                var dataDescripcionComercialString=elementos['dataDescripcionComercialString'];
                var dataDisciplinaDeportivaString=elementos['dataDisciplinaDeportivaString'];
                var dataMarcaString=elementos['dataMarcaString'];
                var dataModeloString=elementos['dataModeloString'];
                var dataPrecioPeruString=elementos['dataPrecioPeruString'];
                var dataPrecioColombiaString=elementos['dataPrecioColombiaString'];
                var dataGeneroString=elementos['dataGeneroString'];
                var dataGrupoEtarioString=elementos['dataGrupoEtarioString'];
                var dataCodigoInternacionalString=elementos['dataCodigoInternacionalString'];
                var dataMaterialesComposicionString=elementos['dataMaterialesComposicionString'];

                var dataItemEscrituraString=elementos['dataItemEscrituraString'];

                var dataItemsCalzadosFilasString=elementos['dataItemsCalzadosFilasString'];
                var dataItemsCalzadosString=elementos['dataItemsCalzadosString'];

                var dataItemsImplementosFilasString=elementos['dataItemsImplementosFilasString'];
                var dataItemsImplementos2String=elementos['dataItemsImplementos2String'];

                var dataFilasDeportesString=elementos['dataFilasDeportesString'];
                var dataCompletosDeportesString=elementos['dataCompletosDeportesString'];
                
                var dataFilasMarcasString=elementos['dataFilasMarcasString'];
                var dataMarcasCompletasString=elementos['dataMarcasCompletasString'];

                var dataFilasPeruString=elementos['dataFilasPeruString'];

                var dataFilasColombiaString=elementos['dataFilasColombiaString'];

                var dataFilasGeneroString=elementos['dataFilasGeneroString'];

                var dataFilasGrupoEtarioString=elementos['dataFilasGrupoEtarioString'];

                var dataFilasDescripcionesString=elementos['dataFilasDescripcionesString'];

                var dataFilasDescripcionesTodasString=elementos['dataFilasDescripcionesTodasString'];

                /*=====  End of Variables  ======*/


                if(columnaA=="si__si"){

                  alertify.set("notifier","position", "top-right");
                  alertify.notify("Se debe ingresar máximo 20 productos", "error", 15, function(){});

                }else if (mensaje==1) {

                  alertify.set("notifier","position", "top-right");
                  alertify.notify("Es obligatorio que todas las columnas y filas del archivo tengan valor ingresado", "error", 15, function(){});

                  if (dataItemString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna A filas"+dataItemString+" están vacías", "error", 15, function(){});

                  }

                  if (dataCodigoArrancelarioString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna B filas "+dataCodigoArrancelarioString+" están vacías", "error", 15, function(){});

                  }


                  if (dataDescripcionComercialString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna C filas "+dataDescripcionComercialString+" están vacías", "error", 15, function(){});

                  }



                  if (dataDisciplinaDeportivaString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna D filas "+dataDisciplinaDeportivaString+" están vacías", "error", 15, function(){});

                  }



                  if (dataMarcaString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna E filas "+dataMarcaString+" están vacías", "error", 15, function(){});

                  }



                  if (dataModeloString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna F filas "+dataModeloString+" están vacías", "error", 15, function(){});

                  }


                  if (dataPrecioPeruString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna G filas "+dataPrecioPeruString+" están vacías", "error", 15, function(){});

                  }



                  if (dataPrecioColombiaString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna H filas "+dataPrecioColombiaString+" están vacías", "error", 15, function(){});

                  }


                  if (dataGeneroString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna I filas "+dataGeneroString+" están vacías", "error", 15, function(){});

                  }


                  if (dataGrupoEtarioString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna J filas "+dataGrupoEtarioString+" están vacías", "error", 15, function(){});

                  }

                  if (dataCodigoInternacionalString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna K filas "+dataCodigoInternacionalString+" están vacías", "error", 15, function(){});

                  }


                  if (dataMaterialesComposicionString!="") {

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Columna L filas "+dataMaterialesComposicionString+" están vacías", "error", 15, function(){});

                  }


                  $("#direccionDocumentoExcel").val(" ");    

                  $(".tabla__productos").hide();

                  $("#documentoExcelProductos").val(''); 

                }else if(mensaje==2){

                  alertify.set("notifier","position", "top-right");
                  alertify.notify("La columna A filas "+dataItemEscrituraString+" no contiene los valores permitidos que son: CALZADO o IMPLEMENTOS DEPORTIVOS", "error", 15, function(){});

                  $("#direccionDocumentoExcel").val(" ");    

                  $(".tabla__productos").hide();

                  $("#documentoExcelProductos").val(''); 

                }else if(mensaje==3){

                    if (dataItemsCalzadosFilasString!="") {

                        alertify.set("notifier","position", "top-right");
                        alertify.notify("Columna B filas "+dataItemsCalzadosFilasString+" no posee códigos permitidos para Calzado. Los códigos permitidos son: "+dataItemsCalzadosString, "error", 15, function(){});

                    }

                    $("#direccionDocumentoExcel").val(" ");    

                    $(".tabla__productos").hide();   

                    $("#documentoExcelProductos").val('');               

                }else if(mensaje==4){

                    if (dataItemsImplementosFilasString!="") {

                        alertify.set("notifier","position", "top-right");
                        alertify.notify("Columna B filas "+dataItemsImplementosFilasString+" no posee códigos permitidos para Implementos Deportivos. Los códigos permitidos son: "+dataItemsImplementos2String, "error", 15, function(){});

                    }

                    $("#direccionDocumentoExcel").val(" ");    

                    $(".tabla__productos").hide();  

                    $("#documentoExcelProductos").val('');                

                }else if(mensaje==5){

                    if (dataFilasDeportesString!="") {

                        alertify.set("notifier","position", "top-right");
                        alertify.notify("Columna D filas "+dataFilasDeportesString+" no poseen deportes permitidos. Los deportes permitidos son: "+dataCompletosDeportesString, "error", 15, function(){});

                    }

                    $("#direccionDocumentoExcel").val(" ");    

                    $(".tabla__productos").hide();  

                    $("#documentoExcelProductos").val('');   

                }else if(mensaje==6){

                    if (dataFilasMarcasString!="") {

                        alertify.set("notifier","position", "top-right");
                        alertify.notify("Columna E filas "+dataFilasMarcasString+" no poseen marcas permitidas. Las marcas permitidas son: "+dataMarcasCompletasString, "error", 15, function(){});

                    }

                    $("#direccionDocumentoExcel").val(" ");    

                    $(".tabla__productos").hide();  

                    $("#documentoExcelProductos").val('');   

                }else if(mensaje==7){

                    if (dataFilasPeruString!="") {

                        alertify.set("notifier","position", "top-right");
                        alertify.notify("Columna G filas "+dataFilasPeruString+" no son valores númericos ni tampoco pueden ser 0", "error", 15, function(){});

                    }

                    $("#direccionDocumentoExcel").val(" ");    

                    $(".tabla__productos").hide();  

                    $("#documentoExcelProductos").val('');  

                }else if(mensaje==8){


                    if (dataFilasColombiaString!="") {

                        alertify.set("notifier","position", "top-right");
                        alertify.notify("Columna H filas "+dataFilasColombiaString+" no son valores númericos ni tampoco pueden ser 0", "error", 15, function(){});

                    }

                    $("#direccionDocumentoExcel").val(" ");    

                    $(".tabla__productos").hide();  

                    $("#documentoExcelProductos").val('');  

                }else if(mensaje==9){

                    if (dataFilasGeneroString!="") {

                        alertify.set("notifier","position", "top-right");
                        alertify.notify("Columna I filas "+dataFilasGeneroString+" no son valores permitidos para el género los cuales pueden ser: MASCULINO,FEMENINO O MIXTO", "error", 15, function(){});

                    }

                    $("#direccionDocumentoExcel").val(" ");    

                    $(".tabla__productos").hide();  

                    $("#documentoExcelProductos").val('');  

                }else if(mensaje==10){

                    if (dataFilasGrupoEtarioString!="") {

                        alertify.set("notifier","position", "top-right");
                        alertify.notify("Columna J filas "+dataFilasGrupoEtarioString+" no son valores permitidos para el Grupo Etario los cuales pueden ser: NIÑOS o ADULTOS", "error", 15, function(){});

                    }

                    $("#direccionDocumentoExcel").val(" ");    

                    $(".tabla__productos").hide();  

                    $("#documentoExcelProductos").val('');  

                }else if(mensaje==11){

                    if (dataFilasDescripcionesString!="") {

                        alertify.set("notifier","position", "top-right");
                        alertify.notify("Columna C filas "+dataFilasDescripcionesString+" no son valores permitidos los valores permitidos son: "+dataFilasDescripcionesTodasString, "error", 15, function(){});

                    }

                    $("#direccionDocumentoExcel").val(" ");    

                    $(".tabla__productos").hide();  

                    $("#documentoExcelProductos").val('');  


                }else{

                $("#documentoExcelProductos").val('');  

                $(".filas__anadidas").remove();

                /*================================
                =            Arreglos            =
                ================================*/

                arrayColumnaA = columnaA.split('_________________');
                arrayColumnaB = columnaB.split('_________________');
                arrayColumnaC = columnaC.split('_________________');
                arrayColumnaD = columnaD.split('_________________');
                arrayColumnaE = columnaE.split('_________________');
                arrayColumnaF = columnaF.split('_________________');
                arrayColumnaG = columnaG.split('_________________');
                arrayColumnaH = columnaH.split('_________________');
                arrayColumnaI = columnaI.split('_________________');
                arrayColumnaJ = columnaJ.split('_________________');
                arrayColumnaK = columnaK.split('_________________');
                arrayColumnaL = columnaL.split('_________________');
                
                /*=====  End of Arreglos  ======*/
                


                  $(".tabla__productos").show();

                  var variableDeportiva=0;

                   for (var i = 0; i < arrayColumnaA.length; i++) {
                    
                    if (arrayColumnaA[i]=="CALZADO") {

                      var itemValores=1;

                    }else{

                      var itemValores=2;

                    }

                    switch (arrayColumnaD[i]) {
                      case 'ANDINISMO':
                          variableDeportiva=1;
                      break;

                      case 'ATLETISMO':
                        variableDeportiva=2;
                      break;

                      case 'AUTOMOVILISMO Y KARTISMO':
                        variableDeportiva=3;
                      break;

                      case 'BALONCESTO':
                        variableDeportiva=4;
                      break;
                      
                      case 'BALONMANO':
                        variableDeportiva=5;
                      break;

                      case 'BEISBOL':
                        variableDeportiva=6;
                      break;

                      case 'BOXEO':
                        variableDeportiva=7;
                      break;

                      case 'CICLISMO':
                        variableDeportiva=8;
                      break;

                      case 'ESCALADA':
                        variableDeportiva=9;
                      break;

                      case 'FUTBOL':
                        variableDeportiva=10;
                      break;

                      case 'GOLF':
                        variableDeportiva=11;
                      break;

                      case 'HOCKEY SOBRE CESPED':
                        variableDeportiva=12;
                      break;

                      case 'LEVANTAMIENTO DE PESAS':
                        variableDeportiva=13;
                      break;
      
                      case 'MOTOCICLISMO':
                        variableDeportiva=14;
                      break;     

                      case 'PADEL':
                        variableDeportiva=15;
                      break;

                      case 'RAQUET':
                        variableDeportiva=16;
                      break;

                      case 'RUGBY':
                        variableDeportiva=17;
                      break;               

                      case 'SOFTBALL':
                        variableDeportiva=18;
                      break;

                      case 'SQUASH':
                        variableDeportiva=19;
                      break;

                      case 'TENIS':
                        variableDeportiva=20;
                      break;

                      case 'TRIATLON':
                        variableDeportiva=21;
                      break;

                      case 'VOLEIBOL':
                        variableDeportiva=22;
                      break;

                      case 'ACTIVIDAD DEPORTIVA':
                        variableDeportiva=23;
                      break;

                      case 'EQUITACION':
                        variableDeportiva=24;
                      break;

                      case 'TENIS DE MESA':
                        variableDeportiva=25;
                      break;


                      case 'SKATE':
                        variableDeportiva=26;
                      break;

                    }

                    var codigosSubceptibles=arrayColumnaB[i].substr(0,13);

                     $(".body__tabla__productos").append('<tr class="filas__anadidas"><td style="font-size:10px;"><center>'+(i+1)+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__item" style="border:none; text-align:center;" readonly="" value="'+itemValores+'" />'+arrayColumnaA[i]+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__codigo" style="border:none; text-align:center;" readonly="" value="'+codigosSubceptibles+'" />'+arrayColumnaB[i]+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__descripcion" style="border:none; text-align:center;" readonly="" value="'+arrayColumnaC[i]+'" />'+arrayColumnaC[i]+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__disciplina" style="border:none; text-align:center;" readonly="" value="'+variableDeportiva+'" />'+arrayColumnaD[i]+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__marca" style="border:none; text-align:center;" readonly="" value="'+arrayColumnaE[i]+'" />'+arrayColumnaE[i]+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__modelo" style="border:none; text-align:center;" readonly="" value="'+arrayColumnaF[i]+'" />'+arrayColumnaF[i]+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__precio__peru" style="border:none; text-align:center;" readonly="" value="'+parseFloat(arrayColumnaG[i]).toFixed(2)+'" />'+parseFloat(arrayColumnaG[i]).toFixed(2)+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__precio__colombia" style="border:none; text-align:center;" readonly="" value="'+parseFloat(arrayColumnaH[i]).toFixed(2)+'" />'+parseFloat(arrayColumnaH[i]).toFixed(2)+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__genero" style="border:none; text-align:center;" readonly="" value="'+arrayColumnaI[i]+'" />'+arrayColumnaI[i]+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__etario" style="border:none; text-align:center;" readonly="" value="'+arrayColumnaJ[i]+'" />'+arrayColumnaJ[i]+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__unico__internacional" style="border:none; text-align:center;" readonly="" value="'+arrayColumnaK[i]+'" />'+arrayColumnaK[i]+'</center></td><td style="font-size:10px;"><center><input type="hidden" class="conjunto__materiales__composicion" style="border:none; text-align:center;" readonly="" value="'+arrayColumnaL[i]+'" />'+arrayColumnaL[i]+'</center></td><td><label for="archivo'+i+'"><div class="boxFile" id="boxFile'+i+'" name="boxFile'+i+'" data-text="Seleccionar archivo" contador="'+i+'" style="font-size:10px; background:#0091ea;color:white; padding:.5em;">Seleccionar archivo</div></label><div class="archivo__escondido"><input type="file" id="archivo'+i+'" name="archivo'+i+'" contador="'+i+'" class="archivos__imagenes__conjuntos"><input type="hidden" id="restriccion'+i+'" name="restriccion'+i+'" class="obligatorios obligatorios__dos"></td></div></tr>');

                     $("#archivo"+i).change(function(){

                         var imgsize = $(this)[0].files[0].size;

                          var contador=$(this).attr('contador');

                          var archivoRuta=$(this).val();

                          var exPermitiadas= /(.jpeg)$/i;

                          var exPermitiadas2= /(.png)$/i;

                          var exPermitiadas3= /(.jpg)$/i;

                          if(imgsize > 900000){

                            alertify.set("notifier","position", "top-right");
                            alertify.notify("El archivo supera los 90 KB", "error", 5, function(){});
                            $("#boxFile"+contador).text("Seleccionar archivo");

                          }else if (!exPermitiadas.exec(archivoRuta) && !exPermitiadas2.exec(archivoRuta) && !exPermitiadas3.exec(archivoRuta)) {

                            alertify.set("notifier","position", "top-right");
                            alertify.notify("El archivo debe ser formato .jpeg o .png o .jpg obligatoriamente", "error", 5, function(){});
                            $("#boxFile"+contador).text("Seleccionar archivo");


                          }else{

                            var documento=$(this).val();
                            var filenameWithExtension = documento.replace(/^.*[\\\/]/, '');

                            $("#boxFile"+contador).text(filenameWithExtension);
                            $("#restriccion"+contador).text(filenameWithExtension);

                          }


                     });


                   }

                   $(".body__tabla__productos").append('<tr style="padding:.5em;" class="filas__anadidas"><td colspan="14" style="padding:3em;" ><center><button class="guardar__productos__excel" id="guardarExelProductos" style="padding:2em;" name="guardarExelProductos">GUARDAR</button><div class="reload__cargar2"></div></center></td></tr>');

                    /*==========================================
                    =            Insertar Productos            =
                    ==========================================*/

                    /*========================================
                    =            Guardar proyecto            =
                    ========================================*/

                    var itemArray=new Array();
                    var codigoArrancelarioArray=new Array();
                    var descripcionArray=new Array();
                    var disciplinaDeportivaArray=new Array();
                    var marcaArray=new Array();
                    var modeloArray=new Array();
                    var precioVentaPeruArray=new Array();
                    var precioVentaColombiaArray=new Array();
                    var generoArray=new Array();
                    var grupoEtarioArray=new Array();
                    var codigoUnicoInternacionalArray=new Array();
                    var materialeslArray=new Array();
                    var imagenesArray=new Array();

                    $('#guardarExelProductos').on('click', function (e){

                        e.preventDefault(); 
                        var paqueteDeDatos = new FormData();

                         $('#guardarExelProductos').hide();

                         $('.reload__cargar2').html('<img src="images/reloadGit.webp" style="width:50px; height:50px; border-radius:1em;">');

                        var contadorImagenes=0;


                        $(".conjunto__item").each(function(index) {

                            itemArray.push($(this).val());

                        });


                        var stringItem = itemArray.toString();



                        $(".conjunto__codigo").each(function(index) {

                            codigoArrancelarioArray.push($(this).val());

                        });


                        var stringcodigoArrancelario = codigoArrancelarioArray.toString();



                        $(".conjunto__descripcion").each(function(index) {

                            descripcionArray.push($(this).val());

                        });


                        var stringdescripcion = descripcionArray.toString();


                        $(".conjunto__disciplina").each(function(index) {

                            disciplinaDeportivaArray.push($(this).val());

                        });


                        var stringdisciplinaDeportiva = disciplinaDeportivaArray.toString();


                        $(".conjunto__marca").each(function(index) {

                            marcaArray.push($(this).val());

                        });


                        var stringmarca= marcaArray.toString();


                        $(".conjunto__modelo").each(function(index) {

                            modeloArray.push($(this).val());

                        });


                        var stringmodelo= modeloArray.toString();


                        $(".conjunto__precio__peru").each(function(index) {

                            precioVentaPeruArray.push($(this).val());

                        });


                        var stringprecioVentaPeru= precioVentaPeruArray.toString();



                        $(".conjunto__precio__colombia").each(function(index) {

                            precioVentaColombiaArray.push($(this).val());

                        });


                        var stringprecioVentaColombia= precioVentaColombiaArray.toString();


                        $(".conjunto__genero").each(function(index) {

                            generoArray.push($(this).val());

                        });


                        var stringgeneroArray= generoArray.toString();



                        $(".conjunto__etario").each(function(index) {

                            grupoEtarioArray.push($(this).val());

                        });


                        var stringgrupoEtario= grupoEtarioArray.toString();


                        $(".conjunto__unico__internacional").each(function(index) {

                            codigoUnicoInternacionalArray.push($(this).val());

                        });

                        var stringcodigoUnicoInternacional= codigoUnicoInternacionalArray.toString();


                        $(".conjunto__materiales__composicion").each(function(index) {

                            materialeslArray.push($(this).val());

                        });

                        var stringMaterialesArray= materialeslArray.toString();


                        $(".boxFile").each(function(index) {

                            if ($(this).text()=="Seleccionar archivo") {

                               contadorImagenes=contadorImagenes+1;

                               $(this).addClass('error');

                            }else{

                               imagenesArray.push($(this).val());

                               $(this).removeClass('error');

                            }

                         });

                         var stringImagenes = imagenesArray.toString();

                         if (contadorImagenes>0) {

                            alertify.set("notifier","position", "top-right");
                            alertify.notify("Es obligatorio subir una imagen por producto", "error", 5, function(){});

                             $('#guardarExelProductos').show();

                              $('.reload__cargar2').html('');

                         }else{

                             var imagenProductos=0;

                             paqueteDeDatos.append('stringItem', stringItem);
                             paqueteDeDatos.append('stringcodigoArrancelario', stringcodigoArrancelario);
                             paqueteDeDatos.append('stringdescripcion', stringdescripcion);
                             paqueteDeDatos.append('stringdisciplinaDeportiva', stringdisciplinaDeportiva);
                             paqueteDeDatos.append('stringmarca', stringmarca);
                             paqueteDeDatos.append('stringmodelo', stringmodelo);
                             paqueteDeDatos.append('stringprecioVentaPeru', stringprecioVentaPeru);
                             paqueteDeDatos.append('stringprecioVentaColombia', stringprecioVentaColombia);
                             paqueteDeDatos.append('stringgeneroArray', stringgeneroArray);
                             paqueteDeDatos.append('stringgrupoEtario', stringgrupoEtario);
                             paqueteDeDatos.append('stringcodigoUnicoInternacional', stringcodigoUnicoInternacional);
                             paqueteDeDatos.append('stringMaterialesArray', stringMaterialesArray);
                             var idImportador=$("#idImportador").val();
                             paqueteDeDatos.append('idImportador', idImportador);

                              $.each($(".archivos__imagenes__conjuntos"), function(i, obj) {
                                 $.each(obj.files,function(j, file){

                                     paqueteDeDatos.append('photoProductos'+imagenProductos+'', file);
                                     imagenProductos=imagenProductos+1;
                                 });
                              });

                              paqueteDeDatos.append('imagenProductos', imagenProductos);

                              var destino = "funciones/funcionesInserta/insertaProducto.php";

                              $.ajax({

                                  url: destino,
                                  type: 'POST',
                                  contentType: false,
                                  data: paqueteDeDatos, 
                                  processData: false,
                                  cache: false, 

                                  success: function(response){

                                     $('#guardarExelProductos').hide();

                                    var elementos=JSON.parse(response);

                                    var mensaje=elementos['mensaje'];

                                    if (mensaje==1) {


                                      alertify.set("notifier","position", "top-right");
                                      alertify.notify("Productos ingresados satisfactoriamente", "success", 3, function(){});  

                                     
                                       window.setTimeout(function(){ 
                                            window.location = "ingresoMercaderia";
                                       } ,3000);     

                                    }


                                  },

                                  error: function (){ 
                                     alert("Algo ha fallado.");
                                     location.reload();
                                  }

                               });    

                         }


                    }); 

                    /*=====  End of Insertar Productos  ======*/



                }

            },

            error: function (){ 
              alertify.set("notifier","position", "top-right");
              alertify.notify("Archivo no corresponde con lo requerido, favor tener en cuenta el formato de descarga obligatoria", "error", 15, function(){});
            }

         });


      /*=====  End of Llamar el Ajax  ======*/
      

    }

 });

/*=====  End of Documentos selectores  ======*/



$('#BuscarBasecedula').on('click', function (e){

    e.preventDefault(); 
    var paqueteDeDatos = new FormData();
    paqueteDeDatos.append('numeroRucBase', $('#numeroRucBase').prop('value')); 
    var destino = "funciones/datatables/buscarRuc.php";
    $.ajax({
            url: destino,
            type: 'POST',
            contentType: false,
            data: paqueteDeDatos, 
            processData: false,
            cache: false, 
            success: function(response){

                var usuarios=JSON.parse(response);
                var mensaje=usuarios['mensaje'];

                if (mensaje==2) {
                    
                    swal({

                         type: "error",
                         title: "USUARIO NO REGISTRADO ANTERIORMENTE",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "ingreso";
                      }
                    });

                }

                if (mensaje==1) {
                    
                    swal({

                         type: "success",
                         title: "El Usuario Encontrado",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result, data){
                      if(result.value){
                        $("#corregirDocumentoss").show();
                        
                      }
                    });

                }
               
                var id_Actor=usuarios['id_Actor'];
                $("#cedulaBuscada").val(id_Actor);
                
            },

               error: function (){ 
               alert("Algo ha fallado.");
            }

         });



});

/*=====  End of Aparece y desaparece divs  ======*/

 $(".check-seguridad").strength({
                templates: {
                toggle: '<span class="input-group-addon"><span class="glyphicon glyphicon-eye-open {toggleClass}"></span></span>'
                 
                },
                scoreLables: {
                        empty: 'Vacío',
                        invalid: 'Invalido',
                        weak: 'Débil',
                        good: 'Bueno',
                        strong: 'Fuerte'
                    }, 
                scoreClasses: {
                        empty: '',
                        invalid: 'label-danger',
                        weak: 'label-warning',
                        good: 'label-info',
                        strong: 'label-success'
                    },
 
            });



});
/*=====  End of Validaciones Generales para el proyecto  ======*/


/*=============================================
=            gestor de contenidos             =
=============================================*/


function cambiarPestanna(pestannas,pestanna) {
    
    // Obtiene los elementos con los identificadores pasados.
    pestanna = document.getElementById(pestanna.id);
    listaPestannas = document.getElementById(pestannas.id);
    
    // Obtiene las divisiones que tienen el contenido de las pestañas.
    cpestanna = document.getElementById('c'+pestanna.id);
    listacPestannas = document.getElementById('contenido'+pestannas.id);
    
    i=0;
    // Recorre la lista ocultando todas las pestañas y restaurando el fondo 
    // y el padding de las pestañas.
    while (typeof listacPestannas.getElementsByTagName('div')[i] != 'undefined'){
        $(document).ready(function(){
            $(listacPestannas.getElementsByTagName('div')[i]).css('display','none');
            $(listaPestannas.getElementsByTagName('li')[i]).css('background','');
            $(listaPestannas.getElementsByTagName('li')[i]).css('padding-bottom','');
        });
        i += 1;
    }

    $(document).ready(function(){
        // Muestra el contenido de la pestaña pasada como parametro a la funcion,
        // cambia el color de la pestaña y aumenta el padding para que tape el  
        // borde superior del contenido que esta juesto debajo y se vea de este 
        // modo que esta seleccionada.
        $(cpestanna).css('display','');
        $(pestanna).css('background','dimgray');
        $(pestanna).css('padding-bottom','2px'); 
    });

}

/*=====  End of gestor de contenidos   ======*/






