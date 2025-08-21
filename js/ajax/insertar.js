/*======================================================================
=            Sección de inserc0ión general por medio de ajax            =
======================================================================*/
$(document).ready(function () {


// /*=======================================
// =            Agregar Usuario            =
// =======================================*/

    $('#registrarse').on('click', function (e){
        
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();
        paqueteDeDatos.append('cedula', $('#cedula').prop('value'));
        paqueteDeDatos.append('nombreRaSocial', $('#nombreRaSocial').prop('value'));
        paqueteDeDatos.append('descripcionRaSocial', $('#descripcionRaSocial').prop('value'));
        paqueteDeDatos.append('email', $('#email').prop('value'));
        paqueteDeDatos.append('telefono', $('#telefono').prop('value'));
        paqueteDeDatos.append('celular', $('#celular').prop('value'));
        paqueteDeDatos.append('usuario', $('#usuario').prop('value'));
        paqueteDeDatos.append('password', $('#password').prop('value'));
      
        var destino = "funciones/funcionesInserta/registro.php";

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

                if (mensaje==3) {
                    
                    swal({

                         type: "error",
                         title: "Nombre de usuario ya Registrado",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    })

                }

                if (mensaje==1) {
                    
                    swal({

                         type: "success",
                         title: "El Usuario se ha creado con exito",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "ingreso";
                      }
                    });

                }
            },

               error: function (){ 
               alert("Algo ha fallado.");
            }

         });

    });

// /*=====  End of Agregar Usuario  ======*/


// /*=======================================
// =            Agregar registoDocumentos            =
// =======================================*/

    // $('#registroDocumentos').on('click', function (e){
        
    //     e.preventDefault(); 
    //     var paqueteDeDatos = new FormData();
    //     paqueteDeDatos.append('agregaRuc', $('#cedula').prop('value'));
    //     paqueteDeDatos.append('agregaRasonSocial', $('#agregaRasonSocial').prop('value'));
    //     paqueteDeDatos.append('agregaActividadPrincipal', $('#agregaActividadPrincipal').prop('value'));
    //     paqueteDeDatos.append('agregaActividadBeneficio', $('#agregaActividadBeneficio').prop('value'));
    //     paqueteDeDatos.append('agregaEmail', $('#agregaEmail').prop('value'));
    //     paqueteDeDatos.append('agregaCelular', $('#agregaCelular').prop('value'));
    //     paqueteDeDatos.append('cedulaIdentidad', $('#cedulaIdentidad').prop('value'));
    //     paqueteDeDatos.append('nomRepresentanteLegal', $('#nomRepresentanteLegal').prop('value'));
    //     paqueteDeDatos.append('agregaTelefono', $('#agregaTelefono').prop('value'));
    //     // paqueteDeDatos.append('copiaCedula', $('#copiaCedula')[0].files[0]); 
    //     paqueteDeDatos.append('nombramiento', $('#nombramiento')[0].files[0]); 
    //     paqueteDeDatos.append('docuRuc', $('#docuRuc')[0].files[0]); 
    //     paqueteDeDatos.append('CertificadoVigente', $('#CertificadoVigente')[0].files[0]); 
    //     paqueteDeDatos.append('cartaIntencion', $('#cartaIntencion')[0].files[0]); 

      
    //     var destino = "funciones/funcionesInserta/registroDocumentos.php";

    //     $.ajax({
    //         url: destino,
    //         type: 'POST',
    //         contentType: false,
    //         data: paqueteDeDatos, 
    //         processData: false,
    //         cache: false, 
    //         success: function(response){

    //             var usuarios=JSON.parse(response);
    //             var mensaje=usuarios['mensaje'];

    //             if (mensaje==2) {
                    
    //                 swal({

    //                      type: "error",
    //                      title: "Los datos son obligatorios",
    //                      showConfirmButton: true,
    //                      confirmButtonText: "Cerrar"
    //                 });

    //             }

    //             if (mensaje==3) {
                    
    //                 swal({

    //                      type: "warning",
    //                      title: "Los archivos tienen que ser en formato PDF",
    //                      showConfirmButton: true,
    //                      confirmButtonText: "Cerrar"
    //                 });

    //             }


    //             if (mensaje==4) {
                    
    //                 swal({

    //                      type: "warning",
    //                      title: "El RUC ya fue ingresado anteriormente",
    //                      showConfirmButton: true,
    //                      confirmButtonText: "Cerrar"
    //                 });

    //             }

    //            if (mensaje==1) {
                    
    //                 swal({

    //                      type: "success",
    //                      title: "Los datos han sido enviados para su revisión, en el transcurso de 48 horas recibirá un correo con el estado de su registro.",
    //                      showConfirmButton: true,
    //                      confirmButtonText: "Cerrar"
    //                 }).then(function(result){
    //                   if(result.value){
    //                     window.location = "ingreso";
    //                   }
    //                 });

    //             }
    //         },

    //            error: function (){ 
    //            alert("Algo ha fallado.");
    //         }

    //      });

    // });

// /*=====  End of Agregar registoDocumentos  ======*/

// /*=======================================
// =            Agregar Usuario            =
// =======================================*/

    $('#guardarProducto').on('click', function (e){
        
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();
        paqueteDeDatos.append('selectItem', $('#selectItem').prop('value'));
        paqueteDeDatos.append('selectItem2', $('#selectItem2').prop('value'));
        paqueteDeDatos.append('descripcionComercial', $('#descripcionComercial').prop('value'));
        paqueteDeDatos.append('disiplinaDeportiva', $('#disiplinaDeportiva').prop('value'));
        paqueteDeDatos.append('marca', $('#marcaNombreCuadro').prop('value'));
        paqueteDeDatos.append('modelo', $('#modelo').prop('value'));
        paqueteDeDatos.append('codigoCalzado', $('#codigoCalzado').prop('value'));
        paqueteDeDatos.append('precioPeru', $('#precioPeru').prop('value'));
        paqueteDeDatos.append('precioColombia', $('#precioColombia').prop('value'));
        paqueteDeDatos.append('genero', $('#genero').prop('value'));
        paqueteDeDatos.append('grupoEtario', $('#grupoEtario').prop('value'));        
        paqueteDeDatos.append('foto', $('#foto')[0].files[0]);      
        paqueteDeDatos.append('foto1', $('#foto1')[0].files[0]);      
        paqueteDeDatos.append('foto2', $('#foto2')[0].files[0]);       
        paqueteDeDatos.append('foto3', $('#foto3')[0].files[0]);   
        paqueteDeDatos.append('idImportador', $('#idImportador').prop('value'));   
        
        

        // faltan las imagenes
       
        var destino = "funciones/funcionesInserta/insertaProducto.php";

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
                
                if (mensaje==3) {
                    
                    swal({

                         type: "warning",
                         title: "Los archivos tienen que ser en formato PDF",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    });

                }
               
                if (mensaje==1) {
                    
                    swal({

                         type: "success",
                         title: "Datos Guardados con exito",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "ingresoMercaderia";
                      }
                    });

                }
            },

               error: function (){ 
               alert("Algo ha fallado.");
            }

         });

    });

// /*=====  End of Agregar Usuario  ======*/


// /*=======================================
// =            Agregar Usuario            =
// =======================================*/

    $('#aprobarRegistro').on('click', function (e){
        
        e.preventDefault(); 

        var paqueteDeDatos = new FormData();
        
        var nombramientoOption=$('input:radio[name=nombramientoOption]:checked').val();
        var rucOption=$('input:radio[name=rucOption]:checked').val();
        var certificadoOption=$('input:radio[name=certificadoOption]:checked').val();
        var cartaOption=$('input:radio[name=cartaOption]:checked').val();

        var declaracionInpuestoAnioAnterior=$('input:radio[name=declaracionInpuestoAnioAnterior]:checked').val();
        var declaracionImpuestoComercioExterior=$('input:radio[name=declaracionImpuestoComercioExterior]:checked').val();
        var documentosElectronicosSeleccion=$('input:radio[name=documentosElectronicosSeleccion]:checked').val();
        var noAdeudarNacional=$('input:radio[name=noAdeudarNacional]:checked').val();
        var obligacionesEmitidoSuper=$('input:radio[name=obligacionesEmitidoSuper]:checked').val();


        paqueteDeDatos.append('razonTabla', $('#razonTabla').prop('value'));
        paqueteDeDatos.append('emaiTable', $('#emaiTable').prop('value'));
        paqueteDeDatos.append('passUser', $('#passUser').prop('value'));
        paqueteDeDatos.append('id_ingresoLogin', $('#id_ingresoLogin').prop('value'));
        paqueteDeDatos.append('emaiSeparado', $('#emaiSeparado').prop('value'));
        paqueteDeDatos.append('id_ingresoInfo', $('#id_ingresoInfo').prop('value'));


        paqueteDeDatos.append('nombramientoOption', nombramientoOption);
        paqueteDeDatos.append('rucOption', rucOption);
        paqueteDeDatos.append('certificadoOption', certificadoOption);
        paqueteDeDatos.append('cartaOption', cartaOption);

        paqueteDeDatos.append('declaracionInpuestoAnioAnterior', declaracionInpuestoAnioAnterior);
        paqueteDeDatos.append('declaracionImpuestoComercioExterior', declaracionImpuestoComercioExterior);
        paqueteDeDatos.append('documentosElectronicosSeleccion', documentosElectronicosSeleccion);
        paqueteDeDatos.append('noAdeudarNacional', noAdeudarNacional);
        paqueteDeDatos.append('obligacionesEmitidoSuper', obligacionesEmitidoSuper);
        
        // faltan las imagenes
      
        var destino = "funciones/funcionesInserta/calificacionUsuario.php";

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
                         title: "Los Datos Fueron Almacenados, y fue Enviado el Usuario y la Contraseña",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "registroUsuarios";
                      }
                    });

                }
            },

               error: function (){ 
               alert("Algo ha fallado.");
            }

         });

    });

// /*=====  End of Agregar Usuario  ======*/


 $('#guardarNegacionDir').on('click', function (e){
        
        e.preventDefault(); 

        var paqueteDeDatos = new FormData();
        
        var cedulaOption=$('input:radio[name=cedulaOption]:checked').val();
        var nombramientoOption=$('input:radio[name=nombramientoOption]:checked').val();
        var rucOption=$('input:radio[name=rucOption]:checked').val();
        var certificadoOption=$('input:radio[name=certificadoOption]:checked').val();
        var cartaOption=$('input:radio[name=cartaOption]:checked').val();

        var declaracionInpuestoAnioAnterior=$('input:radio[name=declaracionInpuestoAnioAnterior]:checked').val();
        var declaracionImpuestoComercioExterior=$('input:radio[name=declaracionImpuestoComercioExterior]:checked').val();
        var documentosElectronicosSeleccion=$('input:radio[name=documentosElectronicosSeleccion]:checked').val();
        var noAdeudarNacional=$('input:radio[name=noAdeudarNacional]:checked').val();
        var obligacionesEmitidoSuper=$('input:radio[name=obligacionesEmitidoSuper]:checked').val();



        paqueteDeDatos.append('razonTabla', $('#razonTabla').prop('value'));
        paqueteDeDatos.append('emaiTable', $('#emaiTable').prop('value'));
        paqueteDeDatos.append('passUser', $('#passUser').prop('value'));
        paqueteDeDatos.append('id_ingresoLogin', $('#id_ingresoLogin').prop('value'));
        paqueteDeDatos.append('emaiSeparado', $('#emaiSeparado').prop('value'));
        paqueteDeDatos.append('id_ingresoInfo', $('#id_ingresoInfo').prop('value'));
        paqueteDeDatos.append('cedulaOption', cedulaOption);
        paqueteDeDatos.append('nombramientoOption', nombramientoOption);
        paqueteDeDatos.append('rucOption', rucOption);
        paqueteDeDatos.append('certificadoOption', certificadoOption);
        paqueteDeDatos.append('cartaOption', cartaOption);
        paqueteDeDatos.append('observacionNegacion', $('#observacionNegacion').prop('value'));
        

        paqueteDeDatos.append('declaracionInpuestoAnioAnterior', declaracionInpuestoAnioAnterior);
        paqueteDeDatos.append('declaracionImpuestoComercioExterior', declaracionImpuestoComercioExterior);
        paqueteDeDatos.append('documentosElectronicosSeleccion', documentosElectronicosSeleccion);
        paqueteDeDatos.append('noAdeudarNacional', noAdeudarNacional);
        paqueteDeDatos.append('obligacionesEmitidoSuper', obligacionesEmitidoSuper);
        
        
        // faltan las imagenes
      
        var destino = "funciones/funcionesInserta/calificacionUsuarioNegado.php";

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
                         title: "La información fue enviada exitosamente",
                         showConfirmButton: true,
                         confirmButtonText: "Cerrar"
                    }).then(function(result){
                      if(result.value){
                        window.location = "registroUsuarios";
                      }
                    });

                }
            },

               error: function (){ 
               alert("Algo ha fallado.");
            }

         });

    });

// /*=====  End of Agregar Usuario  ======*/


/*===========================================
=            documentosAdionales            =
===========================================*/
 
$('#guardarDocumentoAdicional').on('click', function (e){
        
        e.preventDefault(); 

        var paqueteDeDatos = new FormData();
        paqueteDeDatos.append('idImportador', $('#idImportador').prop('value'));
        paqueteDeDatos.append('docuAdiocio1', $('#docuAdiocio1')[0].files[0]);      
        paqueteDeDatos.append('docuGlosario', $('#docuGlosario')[0].files[0]);      
        paqueteDeDatos.append('marcaAdicioNew', $('#marcaAdicioNew').prop('value')); 
        
        paqueteDeDatos.append('periodoAniosMarca', $('#periodoAniosMarca').prop('value')); 
        paqueteDeDatos.append('fechaInicioMarca', $('#fechaInicioMarca').prop('value')); 
        paqueteDeDatos.append('fechaFinMarca', $('#fechaFinMarca').prop('value')); 
      
        var destino = "funciones/funcionesInserta/ingresoDocumentosAdicionales.php";

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
                    
                    alertify.set("notifier","position", "top-right");
                    alertify.notify("Los datos son obligatorios", "error", 2, function(){});

                }
               
                if (mensaje==1) {
                    
                   alertify.set("notifier","position", "top-right");
                   alertify.notify("La información fue enviada exitosamente.", "success", 2, function(){});

                   window.setTimeout(function(){ 
                      location.reload();
                   } ,2000);       

                }

            },
            
              error: function (){ 
              alert("Algo ha fallado.");

            }

         });

    });

/*=====  End of documentosAdionales  ======*/


   $('#corregirDocumentoss').on('click', function (e){
      
        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

       
        paqueteDeDatos.append('cedulaBuscada', $('#cedulaBuscada').prop('value'));
        paqueteDeDatos.append('documento1', $('#documento1')[0].files[0]); 
        paqueteDeDatos.append('selectTipoDocumento', $('#selectTipoDocumento').prop('value'));
        
        var destino = "funciones/funcionesInserta/ingresaDocuAdiciona.php";

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
                        window.location = "ingreso";
                      }
                    });

                }

            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

   });



$("#enviarRespuestasEncuestas").on('click', function (e){

        e.preventDefault(); 
        var paqueteDeDatos = new FormData();

      var disponiblidadPagina=$('input:radio[name=disponiblidadPagina]:checked').val();
      var facilidadNavegacion=$('input:radio[name=facilidadNavegacion]:checked').val();
      var actualizacionInformacion=$('input:radio[name=actualizacionInformacion]:checked').val();
      var claridadPresicion=$('input:radio[name=claridadPresicion]:checked').val();
      var facilidadPagina=$('input:radio[name=facilidadPagina]:checked').val();

         paqueteDeDatos.append('usuarioEnviado', $('#idImportador').prop('value'));
         paqueteDeDatos.append('disponiblidadPagina', disponiblidadPagina);
         paqueteDeDatos.append('facilidadNavegacion', facilidadNavegacion);
         paqueteDeDatos.append('actualizacionInformacion', actualizacionInformacion);
         paqueteDeDatos.append('claridadPresicion', claridadPresicion);
         paqueteDeDatos.append('facilidadPagina', facilidadPagina);

         var destino = "funciones/funcionesInserta/guardarEncuesta.php";

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
                        window.location = "ingresoDocumentos";
                      }
                    });

                }

            },

            error: function (){ 
              alert("Algo ha fallado.");
            }

        });

})







// declarando arrays
var arrayidProductoo = new Array(); 
var arrayClacantidad = new Array(); 
var arrayClapesoNeto = new Array(); 
var arrayClaperoBrto = new Array(); 
var arrayClavalorfob = new Array(); 
var arrayClapreciofb = new Array(); 
var arrayClapaisOrig = new Array(); 
var arrayClapaisProc = new Array(); 
var arrayClaproveRaz = new Array(); 
var arrayClaproveRuc = new Array(); 


   $('#enviarCertificado').on('click', function (e){
      

        var paqueteDeDatos = new FormData();

        $(".ClaIdProducto").each(function(index) {

            if($(this).val()==""){

                $("#cantidadEvaluadorVaciosProducto").val("si");

                $(this).addClass('errorFormularios');

            }else{

                $("#cantidadEvaluadorVaciosProducto").val("");

                $(this).removeClass('errorFormularios');

            }

                arrayidProductoo.push($(this).val());

        });

        
        $(".clacantidad").each(function(index) {

            if($(this).val()==""){

                $("#cantidadEvaluadorVacios").val("si");

                $(this).addClass('errorFormularios');

            }else{

                $("#cantidadEvaluadorVacios").val("");

                $(this).removeClass('errorFormularios');

            }

                arrayClacantidad.push($(this).val());

        });

        $(".clapesoNe").each(function(index) {

            if($(this).val()==""){

                $("#cantidadEvaluadorVaciosPesoNeto").val("si");

                $(this).addClass('errorFormularios');

            }else{

                $("#cantidadEvaluadorVaciosPesoNeto").val("");

                $(this).removeClass('errorFormularios');

            }

                arrayClapesoNeto.push($(this).val());

        });

        $(".claPesoBr").each(function(index) {

            if($(this).val()==""){

                $("#cantidadEvaluadorVaciosPesoBrut").val("si");

                $(this).addClass('errorFormularios');

            }else{

                $("#cantidadEvaluadorVaciosPesoBrut").val("");

                $(this).removeClass('errorFormularios');

            }

                arrayClaperoBrto.push($(this).val());

        });

        $(".ClaValor").each(function(index) {

            if($(this).val()==""){

                $("#cantidadEvaluadorVaciosValor").val("si");

                $(this).addClass('errorFormularios');

            }else{

                $("#cantidadEvaluadorVaciosValor").val("");

                $(this).removeClass('errorFormularios');

            }

                arrayClavalorfob.push($(this).val());

        });

        $(".claPrecio").each(function(index) {

            if($(this).val()==""){

                $("#cantidadEvaluadorVaciosPrecio").val("si");

                $(this).addClass('errorFormularios');

            }else{

                $("#cantidadEvaluadorVaciosPrecio").val("");

                $(this).removeClass('errorFormularios');

            }

                arrayClapreciofb.push($(this).val());

        });

        $(".claPaisOri").each(function(index) {

            if($(this).val()==""){

                $("#cantidadEvaluadorVaciosPairOri").val("si");

                $(this).addClass('errorFormularios');

            }else{

                $("#cantidadEvaluadorVaciosPairOri").val("");

                $(this).removeClass('errorFormularios');

            }

                arrayClapaisOrig.push($(this).val());

        });

        $(".claPaisProce").each(function(index) {

            if($(this).val()==""){

                $("#cantidadEvaluadorVaciosPaisPro").val("si");

                $(this).addClass('errorFormularios');

            }else{

                $("#cantidadEvaluadorVaciosPaisPro").val("");

                $(this).removeClass('errorFormularios');

            }

                arrayClapaisProc.push($(this).val());

        });

        $(".claProvRaz").each(function(index) {

            if($(this).val()==""){

                $("#cantidadEvaluadorVaciosProvRaz").val("si");

                $(this).addClass('errorFormularios');

            }else{

                $("#cantidadEvaluadorVaciosProvRaz").val("");

                $(this).removeClass('errorFormularios');

            }

                arrayClaproveRaz.push($(this).val());

        });

        $(".clarProRuc").each(function(index) {

            if($(this).val()==""){

                $("#cantidadEvaluadorVaciosProvRuc").val("si");

                $(this).addClass('errorFormularios');

            }else{

                $("#cantidadEvaluadorVaciosProvRuc").val("");

                $(this).removeClass('errorFormularios');

            }

                arrayClaproveRuc.push($(this).val());

        });


        var stringidProductoo = arrayidProductoo.toString();
        var stringClacantidad = arrayClacantidad.toString();
        var stringClapesoNeto = arrayClapesoNeto.toString();
        var stringClaperoBrto = arrayClaperoBrto.toString();
        var stringClavalorfob = arrayClavalorfob.toString();
        var stringClapreciofb = arrayClapreciofb.toString();
        var stringClapaisOrig = arrayClapaisOrig.toString();
        var stringClapaisProc = arrayClapaisProc.toString();
        var stringClaproveRaz = arrayClaproveRaz.toString();
        var stringClaproveRuc = arrayClaproveRuc.toString();




        if ($("#cantidadEvaluadorVaciosProvRuc").val()=="si") {


                stringClacantidad="";
                arrayClacantidad.length = 0;
 
                stringClapesoNeto="";
                arrayClapesoNeto.length = 0;

                stringClaperoBrto="";
                arrayClaperoBrto.length = 0;

                stringClavalorfob="";
                arrayClavalorfob.length = 0;

                stringClapreciofb="";
                arrayClapreciofb.length = 0;

                stringClapaisOrig="";
                arrayClapaisOrig.length = 0;

                stringClapaisProc="";
                arrayClapaisProc.length = 0;

                stringClaproveRaz="";
                arrayClaproveRaz.length = 0;

                stringClaproveRuc="";
                arrayClaproveRuc.length = 0;

        }else{


            
            paqueteDeDatos.append('numeroFinRecuperr', $('#numeroFinRecuperr').prop('value')); 
            paqueteDeDatos.append('numeroRucRecuperr', $('#numeroRucRecuperr').prop('value'));
            paqueteDeDatos.append('idImportador', $('#idImportador').prop('value'));
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

                var destino = "funciones/funcionesInserta/actualizarCertificado.php";

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
                                window.location = "certificadosAprobados";
                              }
                            });

                        }

                    },

                    error: function (){ 
                      alert("Algo ha fallado.");
                    }

                });
 
        }

   });


    
    $('#enviarInfoAdicio').on('click', function (e){
          
            e.preventDefault(); 
            var paqueteDeDatos = new FormData();

            $("#marcaImplemento").hide();

            $('#enviarInfoAdicio').hide();
            
            paqueteDeDatos.append('idImportador', $('#idImportador').prop('value'));
            paqueteDeDatos.append('codigoParaEmpatar', $('#codigoParaEmpatar').prop('value'));

            paqueteDeDatos.append('documentoCalificaCertificado1', $('#documentoCalificaCertificado1')[0].files[0]);
            paqueteDeDatos.append('documentoCalificaCertificado3', $('#documentoCalificaCertificado3')[0].files[0]); 
            paqueteDeDatos.append('documentoCalificaCertificado7', $('#documentoCalificaCertificado7')[0].files[0]);
            paqueteDeDatos.append('certificadoAduanas', $('#certificadoAduanas')[0].files[0]);

            var destino = "funciones/funcionesInserta/ingresaDocuCertificadoFin.php";

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
                                
                                alertify.set("notifier","position", "top-right");
                                alertify.notify("Los datos son obligatorios", "error", 2, function(){});

                                $("#marcaImplemento").show();

                                $('#enviarInfoAdicio').show();

                            }

                            if (mensaje==3) {
                    

                                alertify.set("notifier","position", "top-right");
                                alertify.notify("El código ingresado ya se ha registrado en el sistema", "error", 2, function(){});

                                $("#marcaImplemento").show();

                                 $('#enviarInfoAdicio').show();

                            }

                            if (mensaje==1) {
                      
                                alertify.set("notifier","position", "top-right");
                                alertify.notify("Se guardo Correctamente la información.", "success", 2, function(){});

                                window.setTimeout(function(){ 
                                   location.reload();
                                } ,2000);  

                            }

                        },

                        error: function (){ 
                          alert("Algo ha fallado.");
                        }

                    });

    });

    

/*==================================================
=            para el guardado del excel            =
==================================================*/

    var arrayNombre = new Array(); 
    var arrayPrecio = new Array(); 
    var arrayExistencia = new Array(); 
    var arrayPesoNeto = new Array(); 
    var arrayPesoBruto = new Array(); 
    var arrayValorfob = new Array(); 
    var arrayDescripcionComercial = new Array(); 
    var arrayDisciplinaDeportiva = new Array(); 
    var arrayMarca = new Array(); 
    var arrayModelo = new Array(); 
    var arrayPreciofob = new Array();
    var arrayPaisOrigen = new Array();
    var arrayPaisProcedencia = new Array();
    var arrayNombreProveedor = new Array();
    var arrayRucProveedor = new Array();
    var arrayPrecioPeru = new Array();
    var arrayPrecioColombia = new Array();
    var arrayComposicionProducto = new Array();
    var arrayTecnologia = new Array();
    var arrayMaterial = new Array();
    var arrayPorcentaje = new Array();
    var arraylink = new Array();
    var arrayimagen = new Array();
   
    var acumuladorDeSi = new Array();

    var auxiliarItem="";

    var contadorBasico=0;


    $('#enviarDatosExcel').on('click', function (e){

        var paqueteDeDatos = new FormData();

            $(".excelitem").each(function(index) { 

                    if ($(this).val()=="CALZADO") {

                         var calzadoItem=1;

                         arrayNombre.push(calzadoItem);

                         auxiliarItem="si";

                         acumuladorDeSi.push(auxiliarItem);

                    }else if($(this).val()=="IMPLEMENTOS DEPORTIVOS"){

                        var calzadoItem=2;

                         arrayNombre.push(calzadoItem);

                        auxiliarItem="si";

                         acumuladorDeSi.push(auxiliarItem);

                    }else{

                        auxiliarItem="no";

                         acumuladorDeSi.push(auxiliarItem);

                    }

            });

            $(".excelcodigoArancel").each(function(index) { 
                
                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayPrecio.push($(this).val()); 

                }
                
            });

            $(".excelcodigoInternacional").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayExistencia.push($(this).val()); 

                }    

            });

            $(".excelperosneto").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayPesoNeto.push($(this).val()); 

                }    

            });

            $(".excelperobruto").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayPesoBruto.push($(this).val()); 

                }    

            });

            $(".excelvalorfob").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayValorfob.push($(this).val()); 

                }    

            });

            $(".exceldescripcionComercial").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayDescripcionComercial.push($(this).val()); 

                } 

            });

            $(".exceldisciplina").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayDisciplinaDeportiva.push($(this).val()); 

                }

            });

            $(".excelmarca").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayMarca.push($(this).val()); 

                }

            });

            $(".excelmodelo").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayModelo.push($(this).val()); 

                }

            });

            $(".excelprecio").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayPreciofob.push($(this).val()); 

                }

            });

            $(".excelpaisOrigen").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayPaisOrigen.push($(this).val()); 

                }

            });

            $(".excelpaisProcedencia").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayPaisProcedencia.push($(this).val()); 

                }

            });

            $(".excelnomProveedor").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayNombreProveedor.push($(this).val()); 

                }

            });

            $(".excelrucProveedor").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayRucProveedor.push($(this).val()); 

                }

            });

            $(".excelprecioPeru").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayPrecioPeru.push($(this).val()); 

                }

            });

            $(".excelprecioColombia").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayPrecioColombia.push($(this).val()); 

                }

            });

            $(".excelcomposicion").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayComposicionProducto.push($(this).val()); 

                }

            });

            $(".exceltecnologia").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayTecnologia.push($(this).val()); 

                }

            });

            $(".excelmaterial").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayMaterial.push($(this).val()); 

                }

            });

            $(".excelporcentaje").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arrayPorcentaje.push($(this).val()); 

                }

            });

            $(".excellink").each(function(index) {

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                    arraylink.push($(this).val()); 

                }

                 contadorBasico=contadorBasico+1;

            });

            $(".excelImagen").each(function(file) {

                // alert($(this).val());

                if ($(this).val()=="") {

                    auxiliarItem="no";

                    acumuladorDeSi.push(auxiliarItem);

                }else{

                    auxiliarItem="si";

                    acumuladorDeSi.push(auxiliarItem);

                }

                 contadorBasico=contadorBasico+1;

            });



            /*==================================================
            =            Variable Indicie Recorrido            =
            ==================================================*/
            
            var resultante= acumuladorDeSi.indexOf("no");
            
            /*=====  End of Variable Indicie Recorrido  ======*/
            
            var stringClaNombre = arrayNombre.toString();
            var stringClaPrecio = arrayPrecio.toString();
            var stringClaExistencia = arrayExistencia.toString();
            var stringClaPesoNeto = arrayPesoNeto.toString();
            var stringClaPesoBruto = arrayPesoBruto.toString();
            var stringClaValorfob = arrayValorfob.toString();
            var stringClaDescripcionComercial = arrayDescripcionComercial.toString();
            var stringClaDisciplinaDeportiva = arrayDisciplinaDeportiva.toString();
            var stringClaMarca = arrayMarca.toString();
            var stringClaModelo = arrayModelo.toString();
            var stringClaPreciofob = arrayPreciofob.toString();
            var stringClaPaisOrigen = arrayPaisOrigen.toString();
            var stringClaPaisProcedencia = arrayPaisProcedencia.toString();
            var stringClaNombreProveedor = arrayNombreProveedor.toString();
            var stringClaRucProveedor = arrayRucProveedor.toString();
            var stringClaPrecioPeru = arrayPrecioPeru.toString();
            var stringClaPrecioColombia = arrayPrecioColombia.toString();
            var stringClaComposicionProducto = arrayComposicionProducto.toString();
            var stringClaTecnologia = arrayTecnologia.toString();
            var stringClaMaterial = arrayMaterial.toString();
            var stringClaPorcentaje = arrayPorcentaje.toString();
            var stringClalink = arraylink.toString();
            // var stringClaimagen = arrayimagen.toString();


           /*============================================
            =            Empieza Comparación             =
            ============================================*/
            
            if(resultante>=1){

                contadorBasico=0;

                acumuladorDeSi.length = 0;

                stringClaNombre="";
                arrayNombre.length = 0;

                stringClaPrecio="";
                arrayPrecio.length = 0;

                stringClaExistencia="";
                arrayExistencia.length = 0;

                stringClaPesoNeto="";
                arrayPesoNeto.length = 0;

                stringClaPesoBruto="";
                arrayPesoBruto.length = 0;

                stringClaValorfob="";
                arrayValorfob.length = 0;

                stringClaDescripcionComercial="";
                arrayDescripcionComercial.length = 0;

                stringClaDisciplinaDeportiva="";
                arrayDisciplinaDeportiva.length = 0;

                stringClaMarca="";
                arrayMarca.length = 0;

                stringClaModelo="";
                arrayModelo.length = 0;

                stringClaPreciofob="";
                arrayPreciofob.length = 0;

                stringClaPaisOrigen="";
                arrayPaisOrigen.length = 0;

                stringClaPaisProcedencia="";
                arrayPaisProcedencia.length = 0;

                stringClaNombreProveedor="";
                arrayNombreProveedor.length = 0;

                stringClaRucProveedor="";
                arrayRucProveedor.length = 0;

                stringClaPrecioPeru="";
                arrayPrecioPeru.length = 0;

                stringClaPrecioColombia="";
                arrayPrecioColombia.length = 0;

                stringClaComposicionProducto="";
                arrayComposicionProducto.length = 0;

                stringClaTecnologia="";
                arrayTecnologia.length = 0;

                stringClaMaterial="";
                arrayMaterial.length = 0;

                stringClaPorcentaje="";
                arrayPorcentaje.length = 0;

                stringClalink="";
                arraylink.length = 0;

                stringClaimagen="";
                arrayimagen.length = 0;
                                
                $("#traerDatosDeExcel").remove();

                $("#selectorArchivoExcel").val("");



                swal({

                    type: "error",
                    title: "Los datos son obligatorios",
                    showConfirmButton: true,
                    confirmButtonText: "Cerrar"
                }).then(function(result){
                                  if(result.value){
                                    window.location = "leerExcel";
                                  }
                                });

            }else{

                paqueteDeDatos.append('idImportador', $('#idImportador').prop('value'));

                var sumadorLuliano=0;

                $(".excelImagen").each(function(file) {

                     paqueteDeDatos.append('lulaImagencitas'+sumadorLuliano, this.files[0]); 

                     sumadorLuliano=sumadorLuliano+1;

                });
                   
                paqueteDeDatos.append('stringClaNombre', stringClaNombre);
                paqueteDeDatos.append('stringClaPrecio', stringClaPrecio);
                paqueteDeDatos.append('stringClaExistencia', stringClaExistencia);
                paqueteDeDatos.append('stringClaPesoNeto', stringClaPesoNeto);
                paqueteDeDatos.append('stringClaPesoBruto', stringClaPesoBruto);
                paqueteDeDatos.append('stringClaValorfob', stringClaValorfob);
                paqueteDeDatos.append('stringClaDescripcionComercial', stringClaDescripcionComercial);
                paqueteDeDatos.append('stringClaDisciplinaDeportiva', stringClaDisciplinaDeportiva);
                paqueteDeDatos.append('stringClaMarca', stringClaMarca);
                paqueteDeDatos.append('stringClaModelo', stringClaModelo);
                paqueteDeDatos.append('stringClaPreciofob', stringClaPreciofob);
                paqueteDeDatos.append('stringClaPaisOrigen', stringClaPaisOrigen);
                paqueteDeDatos.append('stringClaPaisProcedencia', stringClaPaisProcedencia);
                paqueteDeDatos.append('stringClaNombreProveedor', stringClaNombreProveedor);
                paqueteDeDatos.append('stringClaRucProveedor', stringClaRucProveedor);
                paqueteDeDatos.append('stringClaPrecioPeru', stringClaPrecioPeru);
                paqueteDeDatos.append('stringClaPrecioColombia', stringClaPrecioColombia);
                paqueteDeDatos.append('stringClaComposicionProducto', stringClaComposicionProducto);
                paqueteDeDatos.append('stringClaTecnologia', stringClaTecnologia);
                paqueteDeDatos.append('stringClaMaterial', stringClaMaterial);
                paqueteDeDatos.append('stringClaPorcentaje', stringClaPorcentaje);
                paqueteDeDatos.append('stringClalink', stringClalink);
              
                    var destino = "funciones/funcionesInserta/insertaProductoExcel.php"; 

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
                                    window.location = "catalogo";
                                  }
                                });

                            }

                        },

                        error: function (){ 
                          alert("Algo ha fallado.");
                        }

                    });

            }
            
            
            /*=====  End of Empieza Comparación   ======*/
            
   });

/*=====  End of para el guardado del excel  ======*/




}); //linea final no borrar



 /*=====  End of Sección de inserción general por medio de ajax  ======*/
