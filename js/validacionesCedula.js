/*========================================================================================
=            Validación de las cédulas de ciudadanía de personas ecuatorianas            =
========================================================================================*/

$(document).ready(function () {

	/*===================================================================================
	=            Obtener la cédula con comparación de las historias clínicas          =
	===================================================================================*/

	$("#verificarcedula").click(function(){

      $.ajax({

          url:"php/dinardap.php",
          type:"POST",
          dataType:"json",
          data:"cedula="+$('#cedula').val(),
          success:function(datos){

               var valida = (datos.numeroRuc);
               if (valida==""){
                alert("No encontrado")
               }else{
     // recuperación de datos de la dinardap
                $("#agregaActividadPrincipal").val(datos.actividadEconomicaPrincipal);
                $("#agregaRasonSocial").val(datos.razonSocial);

               }
               
          },
          error:function(response,status,error){
            alert("no encontrado");
          } 

        });

    });
	
	/*=====  End of Obtener la cédula con comparación de las historias clínicas  ======*/

  $('#cedula').on('blur', function (e){

          $("#verificarcedula").click();
  
  });



  /*==============================================================
  =            datos desde la dinardap Registro Civil            =
  ==============================================================*/
  
    $("#verificarcedulaIdentidad").click(function(){

      $.ajax({

          url:"php/dinardapUsuario.php",
          type:"POST",
          dataType:"json",
          data:"cedula="+$('#cedulaIdentidad').val(),
          success:function(datos){

                $("#nomRepresentanteLegal").val(datos.nombre);
                

               
               
          },
          error:function(response,status,error){
            alert("no encontrado");
          } 

        });

    });
  
  /*=====  End of Obtener la cédula con comparación de las historias clínicas  ======*/

  $('#nomRepresentanteLegal').on('blur', function (e){

          $("#verificarcedulaIdentidad").click();
  
  });

  
  
  /*=====  End of datos desde la dinardap Registro Civil  ======*/
  



  
});

/*=====  End of Validación de las cédulas de ciudadanía de personas ecuatorianas  ======*/
