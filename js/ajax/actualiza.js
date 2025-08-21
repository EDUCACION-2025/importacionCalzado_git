/*=================================================================
=            Actualiza todos los campos del aplicativo            =
=================================================================*/

$(document).ready(function () {


/*==========================================================
=            Actualiza los roles del aplicativo            =
==========================================================*/

	$('#edicionDeRolAdmin').on('click', function (e){
	    
	  	e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('id_rol', $('#id_rol').prop('value'));
        paqueteDeDatos.append('nombreRol', $('#nombreRol').prop('value'));
        paqueteDeDatos.append('estadoRol', $('#estadoRol').prop('value'));
        
        var destino = "funciones/funcionesActualiza/actualizaRoles.php";

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

                if (mensaje==1) {
					
                    swal({

                         type: "success",
                         title: "Se actualizó correctamente el rol",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "administracionRoles";
                      }
                    });

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

	 });

/*=====  End of Actualiza los roles del aplicativo  ======*/

	
/*=========================================================
=            Actualiza información del Usuario            =
=========================================================*/

  $('#edicionUsuario').on('click', function (e){
      
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('idUsuarios', $('#idUsuarios').prop('value'));
        paqueteDeDatos.append('rol2', $('#rol2').prop('value'));
        paqueteDeDatos.append('usuarioModificado', $('#usuarioModificado').prop('value'));
        paqueteDeDatos.append('emailModificado', $('#emailModificado').prop('value'));
        paqueteDeDatos.append('celularModificado', $('#celularModificado').prop('value'));
        paqueteDeDatos.append('telefonoModificado', $('#telefonoModificado').prop('value'));
        paqueteDeDatos.append('modalidadActualiza', $('#modalidadActualiza').prop('value'));
        paqueteDeDatos.append('cargoActualiza', $('#cargoActualiza').prop('value'));
        paqueteDeDatos.append('grupoOcuActualiza', $('#grupoOcuActualiza').prop('value'));
        paqueteDeDatos.append('estructura11', $('#estructura11').prop('value'));
        paqueteDeDatos.append('estructura2Actualiza', $('#estructura2Actualiza').prop('value'));
        paqueteDeDatos.append('estructuraFisiActualiza', $('#estructuraFisiActualiza').prop('value'));
        paqueteDeDatos.append('zonalActualiza', $('#zonalActualiza').prop('value'));
        paqueteDeDatos.append('nacionalidadActualiza', $('#nacionalidadActualiza').prop('value'));
        paqueteDeDatos.append('hijosActualiza', $('#hijosActualiza').prop('value'));
        paqueteDeDatos.append('etniaActualiza', $('#etniaActualiza').prop('value'));
        
        var destino = "funciones/funcionesActualiza/actualizaUsuarios.php";

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

                if (mensaje==1) {
          
                    swal({

                         type: "success",
                         title: "Se actualizó correctamente el usuario",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "administracionUsuarios";
                      }
                    });

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

   });

/*=====  End of Actualiza información del Usuario  ======*/

/*========================================================
=            Actualiza Contraseña del usuario            =
========================================================*/


  $('#edicionPassword').on('click', function (e){
      
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('idUsuariosPassword', $('#idUsuariosPassword').prop('value'));
        paqueteDeDatos.append('passwordModificado', $('#passwordModificado').prop('value'));
        
        var destino = "funciones/funcionesActualiza/actualizaPassword.php";

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

                if (mensaje==1) {
          
                    swal({

                         type: "success",
                         title: "Se actualizó correctamente la contraseña del usuario",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "administracionUsuarios";
                      }
                    });

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

   });


  $('#CancelarNega').on('click', function (e){

    window.location = "registroUsuarios";

  });

  $('#CancelarNega1').on('click', function (e){

    window.location = "registroProductos";

  });

  $('#certifiAproModal').on('click', function (e){

      window.location = "certificadosTecniAprobados";

    });





  $('#cancalarCatalogo').on('click', function (e){

    window.location = "catalogo";

  });

$('#botonAprobarProducto').on('click', function (e){
      
  e.preventDefault(); 

  let mensaje="¿Está seguro de aprobar el producto?";

  alertify.confirm(mensaje, function (e) {

    var paqueteDeDatos = new FormData();

    var itemdeport=$('input:radio[name=itemDeportivo]:checked').val();

    paqueteDeDatos.append('itemDep', itemdeport);
    paqueteDeDatos.append('idProducto', $('#idProducto').prop('value'));
    paqueteDeDatos.append('id_ingresoLogin', $('#id_ingresoLogin').prop('value'));
    paqueteDeDatos.append('observacionesCalificaProducto', $('#observacionesCalificaProducto').prop('value'));
        
    var destino = "funciones/funcionesActualiza/actualizaProductoCalificacion.php";
 
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
            title: "Los datos son obligatorios",
            showConfirmButton: true,
            confirmButtonText: "Cerrar"

          });

        }

        if (mensaje==1) {
          
          swal({

            type: "success",
            title: "Se guardo correctamente la información",
            showConfirmButton: true,
            confirmButtonText: "Cerrar"

          }).then(function(result){

            if(result.value){
              window.location = "registroProductos";
            }

          });

        }

      },

      error: function (){ 
        alert("Algo ha fallado.");
      }

    });


  },function(){ 

    alertify.set("notifier","position", "top-right");
    alertify.notify("Se canceló la acción  de aprobación", "error", 2, function(){});
               
  });


});
 

 $('#guardarNegacionProducto').on('click', function (e){
      
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        var implemento=$('input:radio[name=itemDeportivo]:checked').val();

        paqueteDeDatos.append('idProducto', $('#idProducto').prop('value'));
        paqueteDeDatos.append('id_ingresoLogin', $('#id_ingresoLogin').prop('value'));
        paqueteDeDatos.append('observacionesCalificaProducto', $('#observacionesCalificaProducto').prop('value'));
        paqueteDeDatos.append('implemento', implemento);

        var destino = "funciones/funcionesActualiza/actualizaProductoCalificacionNegado.php";

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
                         title: "Los datos son obligatorios",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    })

                }
                
                if (mensaje==1) {
          
                    swal({

                         type: "success",
                         title: "Se guardo correctamente la información",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "registroProductos";
                      }
                    });

                }


            },

            error: function (){  
              alert("Algo ha fallado.");
            }

        });

   });

 $('#emitirCertificadoFinal').on('click', function (e){
      
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('idCodigoCalifi', $('#idCodigoCalifi').prop('value'));
        paqueteDeDatos.append('codigoImporta', $('#codigoImporta').prop('value'));
        paqueteDeDatos.append('id_ingresoLogin', $('#id_ingresoLogin').prop('value'));
        paqueteDeDatos.append('razonImportador', $('#razonImportador').prop('value'));
        paqueteDeDatos.append('agregaEmail', $('#agregaEmail').prop('value'));
        paqueteDeDatos.append('observacionEmitirCertificado', $('#observacionEmitirCertificado').prop('value'));
        
        var destino = "funciones/funcionesActualiza/actualizaCalificaCertificado.php";
 
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

                if (mensaje==1) {
          
                    swal({

                         type: "success",
                         title: "Se Aprobo el Certificado",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "certificadosTecniPendientes";
                      }
                    });

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

   });

 $('#enviarCertificadoNegado').on('click', function (e){

     $(this).hide();
      
     if ($("#cuantosCorregir").val()=="") {

        alertify.set("notifier","position", "top-right");
        alertify.notify("Es necesario ingresar una observación del porque se niega y cuantos documentos debe corregir", "error", 5, function(){});

        $('#enviarCertificadoNegado').show();

     }else{

        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('idCodigoCalifi', $('#idCodigoCalifi').prop('value'));
        paqueteDeDatos.append('codigoImporta', $('#codigoImporta').prop('value'));
        paqueteDeDatos.append('id_ingresoLogin', $('#id_ingresoLogin').prop('value'));
        paqueteDeDatos.append('agregaEmail', $('#agregaEmail').prop('value'));
        paqueteDeDatos.append('razonImportador', $('#razonImportador').prop('value'));
        paqueteDeDatos.append('observacionEmitirCertificado', $('#observacionEmitirCertificado').prop('value'));
        paqueteDeDatos.append('cuantosCorregir', $('#cuantosCorregir').prop('value'));
        
        var destino = "funciones/funcionesActualiza/actualizaCalificaCertificadoNegado.php";
 
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

                if (mensaje==1) {
         
                   alertify.set("notifier","position", "top-right");
                   alertify.notify("Se Nego el Certificado", "success", 5, function(){});

                    window.setTimeout(function(){ 
                        location.reload();
                    } ,2000);  

                    $(this).hide();


                }

                if (mensaje==2) {
          
                  alertify.set("notifier","position", "top-right");
                  alertify.notify("Es necesario ingresar una observación del porque se niega y cuantos documentos debe corregir", "error", 5, function(){});

                  $('#enviarCertificadoNegado').show();

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });


     }

   });

  $('#eliminarRegistro').on('click', function (e){
      
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('id_aEliminar', $('#id_aEliminar').prop('value'));
        paqueteDeDatos.append('id_ingresoLogin', $('#id_ingresoLogin').prop('value'));
        paqueteDeDatos.append('observacionMarca', $('#observacionMarca').prop('value'));
                
        var destino = "funciones/funcionesActualiza/actualizaEstadoMarca.php";

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

                if (mensaje==1) {
          
                    swal({

                         type: "success",
                         title: "Se Elimino correctamente",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "marcaGlosario";
                      }
                    });

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

   });
   
     

  $('#ingresoDocumentoFin').on('click', function (e){
      
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('codigoimportador1', $('#codigoimportador1').prop('value'));
        paqueteDeDatos.append('recuperaCodigoCertificado1', $('#recuperaCodigoCertificado1').prop('value'));
        paqueteDeDatos.append('codigodeUsuario', $('#codigodeUsuario').prop('value'));
        paqueteDeDatos.append('certificadoFirmado', $('#certificadoFirmado')[0].files[0]); 
        
        var destino = "funciones/funcionesActualiza/actualizaCertificado.php";

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
                         title: "Los datos son obligatorios",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    })

                }

                if (mensaje==1) {
          
                    swal({

                         type: "success",
                         title: "Se Ingreso Correctamente el Documento FIN DEL PROCESO",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "certificadosAprobadosFin";
                      }
                    });

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

   });


    $('#documentosCorregidos').on('click', function (e){

        e.preventDefault(); 

        var arrayCodigosCertificados = new Array(); 

        var stringCodigosCertificados = "";

        var contadorVaciosErrores=0;

        var contadorVaciosErrores2=0;

        $(this).hide();

        $(".opciones__documentos").each(function(index) {

            if ($(this).val()=="") {

              contadorVaciosErrores=contadorVaciosErrores+1;

              $(this).attr('style','border:1px solid red;');

            }else{

              $(this).removeAttr('style');

            }

            arrayCodigosCertificados.push($(this).val());
            

        });

        var stringCodigosCertificados = arrayCodigosCertificados.toString();


        $(".archivos__comunes").each(function(index) {

            if ($(this).val()=="") {

              contadorVaciosErrores2=contadorVaciosErrores2+1;

            }

        });


        if (contadorVaciosErrores>0) {

          alertify.set("notifier","position", "top-right");
          alertify.notify("Es necesario seleccionar todas las opciones de documentos a corregir", "error", 5, function(){});

           $("#documentosCorregidos").show();

        }else if (contadorVaciosErrores2>0) {

          alertify.set("notifier","position", "top-right");
          alertify.notify("Se deben cargar todos los archivos requeridos para corregir", "error", 5, function(){});

          $("#documentosCorregidos").show();


        }else if ($(".documentos__corregidos__filas").length > 0) {

          var contadorDocumentos=0;

          var paqueteDeDatos = new FormData();

          paqueteDeDatos.append('idImportador', $('#idImportador').prop('value'));
          paqueteDeDatos.append('codigoCertificado', $('#codigoCertificado').prop('value'));
          paqueteDeDatos.append('stringCodigosCertificados',stringCodigosCertificados);

          $.each($(".archivos__comunes"), function(i, obj) {

             $.each(obj.files,function(j, file){
                 paqueteDeDatos.append('archivosCorregidos'+contadorDocumentos+'', file);
                 contadorDocumentos=contadorDocumentos+1;
             });

          });

          paqueteDeDatos.append('contadorDocumentos', contadorDocumentos);    

          
          var destino = "funciones/funcionesActualiza/actualizaDocumento.php";

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

                  if (mensaje==1) {
            

                      alertify.set("notifier","position", "top-right");
                      alertify.notify("Correcciones realizadas satisfactoriamente.", "success", 2, function(){});

                      window.setTimeout(function(){ 
                         location.reload();
                      } ,2000);  

                  }


              },

              error: function (){ 
                alert("Algo ha fallado.");
              }

          });

        }else{


          alertify.set("notifier","position", "top-right");
          alertify.notify("Seleccionar por lo menos un documento a corregir", "error", 5, function(){});

          $("#documentosCorregidos").show();

        }


   });

    $('#apruebaMarca').on('click', function (e){
      
      e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('idMarcaAdiciona', $('#idMarcaAdiciona').prop('value'));
        paqueteDeDatos.append('id_ingresoLogin', $('#id_ingresoLogin').prop('value'));
        
                
        var destino = "funciones/funcionesActualiza/actualizaMarcaEstado.php";

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
                         title: "Los datos son obligatorios",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    })

                }
                if (mensaje==1) {
          
                    swal({

                         type: "success",
                         title: "Se actualizó correctamente la Marca",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "marcaGlosario";
                      }
                    });

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

   });

    $('#actualizaInformacionProducto').on('click', function (e){
      
      e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('id_producto', $('#id_producto').prop('value'));
        paqueteDeDatos.append('CodigoImplemento', $('#CodigoImplemento').prop('value'));
        paqueteDeDatos.append('selectItem11', $('#selectItem11').prop('value'));
        paqueteDeDatos.append('selectItem21', $('#selectItem21').prop('value'));
        paqueteDeDatos.append('descripcionComercial', $('#descripcionComercial').prop('value'));
        paqueteDeDatos.append('nombreMarccca', $('#nombreMarccca').prop('value'));
        paqueteDeDatos.append('modeloImplemento', $('#modeloImplemento').prop('value'));
        paqueteDeDatos.append('disiplinaDeportiva1', $('#disiplinaDeportiva1').prop('value'));
        paqueteDeDatos.append('preciPerr', $('#preciPerr').prop('value'));
        paqueteDeDatos.append('preColomm', $('#preColomm').prop('value'));
        paqueteDeDatos.append('marca123', $('#marca123').prop('value'));
        paqueteDeDatos.append('marcaImplemento', $('#marcaImplemento').prop('value'));
        paqueteDeDatos.append('nomFoto', $('#nomFoto').prop('value'));
        paqueteDeDatos.append('traeItemOriginal', $('#traeItemOriginal').prop('value'));
        paqueteDeDatos.append('traeCodigoArancelarioOriginal', $('#traeCodigoArancelarioOriginal').prop('value'));
        paqueteDeDatos.append('traeDisciplinaOriginal', $('#traeDisciplinaOriginal').prop('value'));
        paqueteDeDatos.append('materialesEdicion', $('#materialesEdicion').prop('value'));

        paqueteDeDatos.append('generoCambiante', $('#generoCambiante').prop('value'));
        paqueteDeDatos.append('grupoEtarioCambiantes', $('#grupoEtarioCambiantes').prop('value'));

        paqueteDeDatos.append('cambioImagenExtra', $('#cambioImagenExtra')[0].files[0]); 
                
        var destino = "funciones/funcionesActualiza/actualizaProductoIngresado.php";

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
                         title: "Los datos son obligatorios",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    })

                }
                if (mensaje==1) {
          
                    swal({

                         type: "success",
                         title: "Se actualizó correctamente la información",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "catalogo";
                      }
                    });

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

   });


  $('#guardarActualizarCertificado').on('click', function (e){
      
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('llamaridDeProducto', $('#llamaridDeProducto').prop('value'));
        paqueteDeDatos.append('codigoimportador', $('#codigoimportador').prop('value'));
        paqueteDeDatos.append('recuperaCodigoCertificado', $('#recuperaCodigoCertificado').prop('value'));
        paqueteDeDatos.append('llamarCantidad', $('#llamarCantidad').prop('value'));
        paqueteDeDatos.append('llamarPesoNeto', $('#llamarPesoNeto').prop('value'));
        paqueteDeDatos.append('llamarPesoBruto', $('#llamarPesoBruto').prop('value'));
        paqueteDeDatos.append('llamarValorFob', $('#llamarValorFob').prop('value'));
        paqueteDeDatos.append('llamarPrecio', $('#llamarPrecio').prop('value'));
        paqueteDeDatos.append('llamarPaisOrigen', $('#llamarPaisOrigen').prop('value'));
        paqueteDeDatos.append('llamarPaisProce', $('#llamarPaisProce').prop('value'));
        paqueteDeDatos.append('llamarNomProve', $('#llamarNomProve').prop('value'));
        paqueteDeDatos.append('llamarRucProve', $('#llamarRucProve').prop('value'));
       

        var destino = "funciones/funcionesActualiza/actualizaProductoFinal.php";
 
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

                if (mensaje==1) {
          
                    swal({

                         type: "success",
                         title: "Se Actualizó Correctamente el Producto",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "certificadosAprobados";
                      }
                    });

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

   });


  $('#quitarElProducto').on('click', function (e){
      
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

        paqueteDeDatos.append('llamaridDeProductoEliminar', $('#llamaridDeProductoEliminar').prop('value'));
        paqueteDeDatos.append('codigoimportador', $('#codigoimportador').prop('value'));
        paqueteDeDatos.append('recuperaCodigoCertificado', $('#recuperaCodigoCertificado').prop('value'));
            

        var destino = "funciones/funcionesActualiza/actualizaProductoQuitado.php";
 
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

                if (mensaje==1) {
          
                    swal({

                         type: "success",
                         title: "El Producto se Elimino Correctamente",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "certificadosAprobados";
                      }
                    });

                }


            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

   });

 // no borrar la ultima linea
  
});

/*=====  End of Actualiza todos los campos del aplicativo  ======*/
