/*=====================================================
=            Sección de tablas principales            =
=====================================================*/
 

  /*==============================================
  =            Tabla de roles Administracion     =
  ==============================================*/

    $(document).on("ready",function(){

        $('#tablaRoles tfoot th').each( function () {

          var title = $("#tablaRoles tfoot th").eq($(this).index()).text();

            
            if (title=="Editar") {

              $(this).html('');

            }else{ 

              $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

            }
 
        });  
        listarRoles();
    }); 
    var listarRoles=function(){

       var tableRolesAdmin=$("#tablaRoles").DataTable({
 
              "language": 
                {
                    "sProcessing":     "Procesando...",
                    "sLengthMenu":     "Mostrar _MENU_ registros",
                    "sZeroRecords":    "No se encontraron resultados",
                    "sEmptyTable":     "Ningún dato disponible en esta tabla",
                    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
                    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix":    "",
                    "sSearch":         "Buscar:",
                    "sUrl":            "",
                    "sInfoThousands":  ",",
                    "sLoadingRecords": "No existen datos",
                    "oPaginate": 
                    {
                      "sFirst":    "Primero",
                      "sLast":     "Último",
                      "sNext":     "Siguiente",
                      "sPrevious": "Anterior"
                      },
                      "oAria": 
                      {
                      "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                      }
                },
          //Esxportador 
          //  }, 
                        "pagingType": "full_numbers",
                        "sScrollY": "400px",
                        "Paginate": true,
                        "scrollX": true,
                        "pagingType": "full_numbers",
                        "ajax":{
                          "method":"POST",
                          "url":"funciones/datatablets/rolesAdministracion.php",
                        },
                        "columns":[


                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['nombre']+"</div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['tipo']+"</div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      if (row['estado']=="A") {

                                        return "<div style='font-size:12px'>Habilitado</div>";

                                      }else{

                                         return "<div style='font-size:12px'>Deshabilitado</div>";

                                      }

                                      

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<button class='edicionDeRol alineacion__de__elemento btn btn-info' data-toggle='modal' data-target='#edicionDeRol '><i class='fas fa-edit'></i></button"; 

                                  }

                              }
                          ]
             });
            obtener_data_Roles("#tablaRoles tbody",tableRolesAdmin);

            /*=====  End of Crear los métodos para después ejecturarlos  ======*/
            /*===============================================================
            =            Realizar las busquedas por cada columna            =
            ===============================================================*/
              tableRolesAdmin.columns().every(function(){
                    
                    var datatableColumn = this;

                    var serachTetBoxes=$(this.footer()).find('input');
                  
                    serachTetBoxes.on('keyup change',function(){

                      datatableColumn.search(this.value).draw();

                    });

                    serachTetBoxes.on('click', function (e){

                      e.stopPropagation();

                    });
              });

            /*=====  End of Realizar las busquedas por cada columna  ======*/
    }

    /*================================================================
    =            Realizar las ejecuciones por cada metodo            =
    ================================================================*/

    var obtener_data_Roles=function(tbody,table){

      $(tbody).on("click","button.edicionDeRol",function(e)
      {

            var data=table.row($(this).parents("tr")).data();

            var id_rol=$("#id_rol").val(data.id_rol);
            var nombre=$("#nombreRol").val(data.nombre);
            var estado=$("#tipodeRol").val(data.estado);
            
            
      });
    }

  /*=====  End Tabla de roles Administracion  ======*/


  /*=========================================
  =            Tabla de Usuarios            =
  =========================================*/

      $(document).on("ready",function(){

          $('#tablaUsuariosGenerales tfoot th').each( function () {

            var title = $("#tablaUsuariosGenerales tfoot th").eq($(this).index()).text();

             
              if (title=="Editar") {

                $(this).html('');

              }else{

                $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

              }

          });
          listarUsuarios();
      });

      var listarUsuarios=function(){

            var tableUsuarios=$("#tablaUsuariosGenerales").DataTable({

                  "language": 
                  {
                  "sProcessing":     "Procesando...",
                  "sLengthMenu":     "Mostrar _MENU_ registros",
                  "sZeroRecords":    "No se encontraron resultados",
                  "sEmptyTable":     "Ningún dato disponible en esta tabla",
                  "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                  "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
                  "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                  "sInfoPostFix":    "",
                  "sSearch":         "Buscar:",
                  "sUrl":            "",
                  "sInfoThousands":  ",",
                  "sLoadingRecords": "No existen datos",
                  "oPaginate": 
                  {
                    "sFirst":    "Primero",
                    "sLast":     "Último",
                    "sNext":     "Siguiente",
                    "sPrevious": "Anterior"
                    },
                    "oAria": 
                    {
                    "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                    "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                    }
                    },
                    //Esxportador 
                   
                    "pagingType": "full_numbers",
                    "sScrollY": "400px",
                    "Paginate": true,
                    "scrollX": true,
                    "pagingType": "full_numbers",
                    "ajax":{
                      "method":"POST",
                      "url":"funciones/datatablets/usuarios.php",
                    },

                    "columns":[


                          {"render":

                              function ( data, type, row ) {

                                  return "<div style='font-size:12px'>"+row['cedula']+"</div>";

                              }

                          },



                          {"render":

                              function ( data, type, row ) {

                                  return "<div style='font-size:12px'>"+row['nombre']+" "+row['apellido']+"</div>";

                              }

                          },


                          {"render":

                              function ( data, type, row ) {

                                  return "<div style='font-size:12px'>"+row['rol']+"</div>";

                              }

                          },

                     
                          {"render":

                              function ( data, type, row ) {

                                  return "<div style='font-size:12px'>"+row['fechaNacimiento']+"</div>";

                              }

                          },

                          {"render":

                              function ( data, type, row ) {

                                  return "<div style='font-size:12px'>"+row['usuario']+"</div>";

                              }

                          },

                          {"render":

                              function ( data, type, row ) {

                                  return "<div style='font-size:12px'>"+row['fisicamenteEstructura1']+"</div>";

                              }

                          },

                       
                          {"render":

                              function ( data, type, row ) {

                                  return "<div style='font-size:12px'>"+row['fechadeIngreso']+"</div>";

                              }

                          },

                          {"render":

                              function ( data, type, row ) {

                                  return "<button class='editandoUsuarios alineacion__de__elemento2 btn btn-info' data-toggle='modal' data-target='#edicionUsuarios'><i class='fas fa-edit'></i></button"; 

                              }

                          },

                          {"render":

                              function ( data, type, row ) {

                                  return "<button class='editarContrasena alineacion__de__elemento2 btn btn-warning' data-toggle='modal' data-target='#editandoContrasena'><i class='fas fa-edit'></i></button"; 

                              }

                          },

                          {"render":

                              function ( data, type, row ) {

                                  return "<button class='inactivaUsu alineacion__de__elemento2 btn btn-danger' data-toggle='modal' data-target='#inactivarUsuario'><i class='fas fa-times-circle'></i></button"; 

                              }

                          }


                      ]
            });

            /*===================================================================
            =            Crear los métodos para después ejecturarlos            =
            ===================================================================*/

             obtener_data_usuarios("#tablaUsuariosGenerales tbody",tableUsuarios);


             obtener_data_password("#tablaUsuariosGenerales tbody",tableUsuarios);


             obtener_data_activ("#tablaUsuariosGenerales tbody",tableUsuarios);

            /*=====  End of Crear los métodos para después ejecturarlos  ======*/



            /*===============================================================
            =            Realizar las busquedas por cada columna            =
            ===============================================================*/

              tableUsuarios.columns().every(function(){
                    
                    var datatableColumn = this;

                    var serachTetBoxes=$(this.footer()).find('input');
                  
                    serachTetBoxes.on('keyup change',function(){

                      datatableColumn.search(this.value).draw();

                    });

                    serachTetBoxes.on('click', function (e){

                      e.stopPropagation();
             
                    });

              });

              /*=====  End of Realizar las busquedas por cada columna  ======*/
      }

        /*=====  End of Tabla de Usuarios  ======*/


      /*================================================================
      =            Realizar las ejecuciones por cada metodo            =
      ================================================================*/

      var obtener_data_usuarios=function(tbody,table){

        $(tbody).on("click","button.editandoUsuarios",function(e)
        {

              var data=table.row($(this).parents("tr")).data();

              var id_usuario=$("#idUsuarios").val(data.id_usuario);
              var rol2=$("#rol2").val(data.id_rol);
              var estructura11=$("#estructura11").val(data.estructura1);
              var usuarioModificado=$("#usuarioModificado").val(data.usuario);
              var emailModificado=$("#emailModificado").val(data.email);
              var celularModificado=$("#celularModificado").val(data.celular);
              var telefonoModificado=$("#telefonoModificado").val(data.telefono);
              var modalidadActualiza=$("#modalidadActualiza").val(data.modalidad);
              var cargoActualiza=$("#cargoActualiza").val(data.puestoInstitucional);
              var grupoOcuActualiza=$("#grupoOcuActualiza").val(data.grupoOcupacional);
              var estructura1Actualiza=$("#estructura1Actualiza").val(data.estructura1);
              var estructura2Actualiza=$("#estructura2Actualiza").val(data.estructura2);
              var estructuraFisiActualiza=$("#estructuraFisiActualiza").val(data.fisicamenteEstructura);
              var zonalActualiza=$("#zonalActualiza").val(data.zonal);
              var nacionalidadActualiza=$("#nacionalidadActualiza").val(data.nacionalidad);
              var hijosActualiza=$("#hijosActualiza").val(data.hijos);
              var etniaActualiza=$("#etniaActualiza").val(data.ednia);

        });
      }

      var obtener_data_password=function(tbody,table){

        $(tbody).on("click","button.editarContrasena",function(e)
        {

              var data=table.row($(this).parents("tr")).data();

              var idUsuariosPassword=$("#idUsuariosPassword").val(data.id_usuario);
            
              
        });
      }


      var obtener_data_activ=function(tbody,table){

        $(tbody).on("click","button.inactivaUsu",function(e)
        {

              var data=table.row($(this).parents("tr")).data();


              var estadoUsu = (data.estadoUsuario);

              if (estadoUsu == 'A'){
                  estadoUsu = 'ACTIVO';
                }else{

                  estadoUsu = 'INACTIVO';
                }

                
              var fechaInactivado=$("#fechaInactivado").val(data.fechaInactiva);
              var idUsuariosPassword=$("#idUsuariosPassword1").val(data.id_usuario);
              var estadoActual=$("#estadoActual").val(estadoUsu);
              
            
              
        });
      }
      /*=====  End of Realizar las ejecuciones por cada metodo  ======*/


  /*=====  End Tabla de Usuarios  ======*/


/*===========================================
=           catalogo importador             =
===========================================*/
       
$(document).on("ready",function(){

    $('#tablaCatalogo tfoot th').each( function () {

      var title = $("#tablaCatalogo tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarCatalogo();

});

var listarCatalogo=function(){


   var tableCatalogo=$("#tablaCatalogo").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 


      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/llamarProductosPorImportador.php",
      "data": {
                      "idImportador": $("#idImportador").val()
                }
      },
      "columns":[


          {"render":

            function ( data, type, row ) {

              if (row['fechaInSolicitud']=="0000-00-00") {
                return "<div style='font-size:12px'>EN SUBSANACiÓN</div>";
              }else{
                return "<div style='font-size:12px'>"+row['fechaInSolicitud']+"</div>";
              }

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['codigoCalzadoImplemento']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['marca']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['modelo']+"</div>";

            }

          },

               
          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['disciplinaDeportiva']+"</div>";

            }

          },


          {"render":

                function ( data, type, row ) {

                    if (row['calificacion']=="A") {

                      return "<center><button class='edicionCatalogo alineacion__de__elemento2 btn btn-success' data-toggle='modal' data-target='#edicionCatalogo'><i class='fas fa-eye'></i></button</center>"; 

                    }else if (row['calificacion']=="N"){

                       return "<center><button class='edicionCatalogo alineacion__de__elemento2 btn btn-danger' data-toggle='modal' data-target='#edicionCatalogo'><i class='fas fa-eye'></i></button</center>"; 

                    }else{

                       return "<center><button class='edicionCatalogo alineacion__de__elemento2 btn btn-warning' data-toggle='modal' data-target='#edicionCatalogo'><i class='fas fa-eye'></i></button</center>"; 

                    }

 
                }

            }
 

        ]
});

 btener_data_Catalogo("#tablaCatalogo tbody",tableCatalogo);

 obtener_data_chekeds("#tablaCatalogo tbody",tableCatalogo);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/



/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tableCatalogo.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/


}

/*========================================
=             Obtener chekeds            =
========================================*/

var arrayCodigo=new Array();

var arrayMarca=new Array();

var arrayModelo=new Array();

var arrayDisciplina=new Array();

var arrayIdProducto=new Array();

var arrayItem=new Array();

var arraycodigoAran=new Array();

var arraydescripcionAran=new Array();

var arraydescripcionComercial=new Array();



var obtener_data_chekeds=function(tbody,table){

  $(tbody).on("click",".idCheked",function(e)
  {

      sumador= sumador + 1;

        var data=table.row($(this).parents("tr")).data();

        var condicionesSuperadas = $(this).is(":checked");

        var codigo=$(this).attr('codigo');

        var marca=$(this).attr('marca');

        var modelo=$(this).attr('modelo');

        var disciplina=$(this).attr('disciplina');

        var idProducto=$(this).attr('idProducto');
 
        var item=$(this).attr('item');

        var codigoArancelario=$(this).attr('codigoArancelario');

        var descripcionArancelario=$(this).attr('descripcionArancelario');

        var descripcionComercial=$(this).attr('descripcionComercial');

  
            if(condicionesSuperadas){

              arrayCodigo.push(codigo);

              arrayMarca.push(marca);

              arrayModelo.push(modelo);

              arrayIdProducto.push(idProducto);

              $("#idCatalogoAbsorvido").val(arrayIdProducto);

              arrayItem.push(item);

              arraycodigoAran.push(codigoArancelario);

              arraydescripcionAran.push(descripcionArancelario);

              arraydescripcionComercial.push(descripcionComercial);

      
            }else{

        
                
                arrayItem.length = 0;

                arrayCodigo.length = 0;

                arrayMarca.length = 0; 

                arrayModelo.length = 0; 

                arrayDisciplina.length = 0; 

                

                $("#itemTabla").val("");

                $("#codigo").val("");

                $("#marca").val("");

                $("#modelo").val("");

                $("#disciplina").val("");

            }
            
        
  });

 }


  



/*=====  End of   Obtener chekeds  ======*/


/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_Catalogo=function(tbody,table){

  $(tbody).on("click","button.edicionCatalogo",function(e)
  {

        var data=table.row($(this).parents("tr")).data();
        
        var CodigoImplemento=$("#CodigoImplemento").val(data.codigoCalzadoImplemento);
        var marcaImplemento=$("#marcaImplemento").val(data.marca);
        var modeloImplemento=$("#modeloImplemento").val(data.modelo);
        var disciplinaDeport=$("#disciplinaDeport").val(data.disciplinaDeportiva);
        var preciPerr=$("#preciPerr").val(data.precioPeru);
        var preColomm=$("#preColomm").val(data.precioColombia);
        var codigoArancelario=$("#codigoArancelario").val(data.codigoArancelario);
        var descripcionComercial=$("#descripcionComercial").val(data.descripcionComercial);
        var id_producto=$("#id_producto").val(data.id_producto);
        var observacion=$("#observacion").val(data.observacion);
        var traeItemOriginal=$("#traeItemOriginal").val(data.id_item);
        var traeCodigoArancelarioOriginal=$("#traeCodigoArancelarioOriginal").val(data.id_calzadoeimplemento);
        var traeDisciplinaOriginal=$("#traeDisciplinaOriginal").val(data.id_disciplinaDeportiva);
        var materialesEdicion=$("#materialesEdicion").val(data.materiales);
        
        var item=$("#item").val(data.item);
        var nomFoto=$("#nomFoto").val(data.imagen1);
        var nomFoto1=$("#nomFoto1").val(data.imagen2);
        var nomFoto2=$("#nomFoto2").val(data.imagen3);
        var nomFoto3=$("#nomFoto3").val(data.imagen4);

        var lkj1 = $("#lkj1").val(data.tipoIma1);
        var lkj2 = $("#lkj2").val(data.tipoIma2);
        var lkj3 = $("#lkj3").val(data.tipoIma3);
        var lkj4 = $("#lkj4").val(data.tipoIma4);


        var generoCambiante = $("#generoCambiante").val(data.genero);

         if (data.grupo_etario=="Adultos") {

            var grupoEtarioCambiantes = $("#grupoEtarioCambiantes").val(data.grupo_etario);

         } 

         if(data.grupo_etario=="NiÃ±os" && data.grupo_etario!=null){

           var grupoEtarioCambiantes = $("#grupoEtarioCambiantes").val("Ninos");

         }


        var imgOpdf1 = (data.tipoIma1);
        var imgOpdf2 = (data.tipoIma2);
        var imgOpdf3 = (data.tipoIma3);
        var imgOpdf4 = (data.tipoIma4);

        $("#imagg").show();
        $(".anadir_foto").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'')
        $("#lulitaEtiquetada").hide();

        
  });

 }

/*=====  End of catalogo importador   ======*/

/*=============================================
=            Reportería Trimestral            =
=============================================*/

$(document).on("ready",function(){

  $('#tablaReporteriasTotalesTrimestrales tfoot th').each( function () {

    var title = $("#tablaReporteriasTotalesTrimestrales tfoot th").eq($(this).index()).text();
 
    if (title=="Editar") {

        $(this).html('');

    }else{ 

        $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

    }
 
  });    

  listarReporteriaTotalesTrimestrales();

});

var listarReporteriaTotalesTrimestrales=function(){

   var tableReporteriasTotalesTrimestrales=$("#tablaReporteriasTotalesTrimestrales").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 
      //Esxportador 
     dom: 'Bfrtip',

     buttons: {

        dom:{
            container:{
              tag:'div',
              className:'flexcontent__administrador'
            },
            buttonLiner: {
              tag: null
            }
        },

        buttons: [


              {
                        extend:    'excelHtml5',
                        text:      '<i class="fa fa-file-excel-o"></i>Excel',
                        title:'Reporte Calzado Deportivo',
                        titleAttr: 'Excel',
                        className: 'btn btn-app export excel'

              }

        ]

      },

      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/reporteriasTotalesTrimestrales.php"
      },
      "columns":[

      
          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px;'>"+row['fecha']+"</div>";

            }

          },

      
          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px;'>"+row['razonSocial']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px;'>"+row['codigoCalzado']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px;'>"+row['nombreItem']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px;'>"+row['descripcionComercial']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px;'>"+(parseInt(row['cantidadRestante'], 10) + parseInt(row['cantidadVendida'], 10))+"</div>";

            }

          },




          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px;'>"+row['cantidadVendida']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px;'>"+row['precioVentaPublico']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px;'>"+row['total']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px;'>"+row['cantidadRestante']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px;'>"+row['periodo']+"</div>";

            }

          }


        ]
  });

  /*===============================================================
  =            Realizar las busquedas por cada columna            =
  ===============================================================*/

  tableReporteriasTotalesTrimestrales.columns().every(function(){
                    
      var datatableColumn = this;

      var serachTetBoxes=$(this.footer()).find('input');
                  
      serachTetBoxes.on('keyup change',function(){

            datatableColumn.search(this.value).draw();

      });

      serachTetBoxes.on('click', function (e){

            e.stopPropagation();

      });

  });

  /*=====  End of Realizar las busquedas por cada columna  ======*/

}



/*=====  End of Reportería Trimestral  ======*/


/*==================================
=            Reportería            =
==================================*/

$(document).on("ready",function(){

  $('#tablaReporteriasTotales tfoot th').each( function () {

    var title = $("#tablaReporteriasTotales tfoot th").eq($(this).index()).text();
 
    if (title=="Editar") {

        $(this).html('');

    }else{ 

        $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

    }
 
  });    

  listarReporteriaTotales();

});

var listarReporteriaTotales=function(){

   var tableReporteriasTotales=$("#tablaReporteriasTotales").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "Cargando datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 
      //Esxportador 
     dom: 'Bfrtip',

     buttons: {

        dom:{
            container:{
              tag:'div',
              className:'flexcontent__administrador'
            },
            buttonLiner: {
              tag: null
            }
        },

        buttons: [


              {
                        extend:    'excelHtml5',
                        text:      '<i class="fa fa-file-excel-o"></i>Excel',
                        title:'Reporte Calzado Deportivo',
                        titleAttr: 'Excel',
                        className: 'btn btn-app export excel'
                        // exportOptions: {
                        //   format: {
                        //      body: function(data, row, column, node) {
                        //         switch (column) {
                        //           case 13:
                        //             return parseFloat(Math.round(data * 100) / 100).toFixed(2);
                        //             break
                        //           case 14: 
                        //             return parseFloat(Math.round(data * 100) / 100).toFixed(2);
                        //             break
                        //           default :
                        //             return data
                        //             break
                        //         }
                        //      }
                        //   }    
                        // },    
                        //  customize: function(xlsx) { 

                        //     var styles = $('cellXfs', xlsx.xl['styles.xml']); 

                        //     styles.append('<xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1">'+'<alignment vertical="center" wrapText="1" />'+'</xf>'); 

                        //     var sheet = xlsx.xl.worksheets['sheet1.xml']; 

                        //     var col = $('c', sheet); col.each(function () {

                        //       $(this).attr( 's', '55'); 

                        //     }); 

                        //     $('row:first c', sheet).attr( 's', '32' );

                        // }



              }

        ]



      },

      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/reporteriasTotales.php"
      },
      "columns":[

      
          {"render":

            function ( data, type, row ) {

              return row['fechaCalifica'];

            }

          },

          {"render":

            function ( data, type, row ) {

              return row['RasonSocial'];

            }

          },

         {"render":

            function ( data, type, row ) {

              return row['codigo_importador'];

            }

          },


          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['codigoCalzado'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';

              return row['codigoCalzado'];

            },

          },

          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['codigoCalzado'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';

              return row['codigoArrancelarios'];

            },

          },


          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['nombreItem'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';

              return row['nombreItem'];

            },

          },

          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['nombreDisciplina'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';

              return row['nombreDisciplina'];

            },

          },

          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['descripcionComercial'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';

              return row['descripcionComercial'];

            },

          },


          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['genero'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';

              return row['genero'];

            },

          },

          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['grupo_etario'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';

              return row['grupo_etario'];

            },

          },

          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['PaisProcedencia'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';

              return row['PaisProcedencia'];

            },

          },

          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['PaisProcedencia'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';

              return row['PaisProcedenciaReal'];

            },

          },

          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['cantidadAdicional'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';



              if (row['cantidadAdicional']=="" || row['cantidadAdicional']==null) {

                return "";

              }else{

                return parseFloat(row['cantidadAdicional']).toFixed(2);

              }


            },

          },

          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['precioFOBAdicional'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';

              if (row['precioFOBAdicional']=="" || row['precioFOBAdicional']==null) {

                return "";

              }else{

                return parseFloat(row['precioFOBAdicional']).toFixed(2);

              }

              

            },

          },

          {"render":

            function ( data, type, row ) {

              // var stringactividadesConjunto = row['precioFob'];

              // var newstring = stringactividadesConjunto.split(';;;;').join(';&nbsp;&nbsp;&nbsp;<br><br>');
              // var newstring2 = newstring.split(';;;;').join(';');

              // return '<div style="font-size:9px; margin-top:2px;">'+newstring2+'</div>';

              return row['precioFob'];

            },

          }

        ]
  });

  /*===============================================================
  =            Realizar las busquedas por cada columna            =
  ===============================================================*/

  tableReporteriasTotales.columns().every(function(){
                    
      var datatableColumn = this;

      var serachTetBoxes=$(this.footer()).find('input');
                  
      serachTetBoxes.on('keyup change',function(){

            datatableColumn.search(this.value).draw();

      });

      serachTetBoxes.on('click', function (e){

            e.stopPropagation();

      });

  });

  /*=====  End of Realizar las busquedas por cada columna  ======*/

}


/*=====  End of Reportería  ======*/

       
/*===========================================
=           catalogo Documentos Usuarios             =
===========================================*/
       
$(document).on("ready",function(){

    $('#tablaDocumentosUsuarios tfoot th').each( function () {

      var title = $("#tablaDocumentosUsuarios tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarUsuarioDocu();

});

var listarUsuarioDocu=function(){

   var tableUsuarioDocu=$("#tablaDocumentosUsuarios").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 


      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/llamarUsuario.php",
      "data": {
                      "idImportador": $("#idImportador").val()
                }
      },
      "columns":[

      
          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['fechaIngresoDocumentos']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['ruc']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['RasonSocial']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['email']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['diasRestantes']+"</div>";

            }

          },

               
          {"render":

            function ( data, type, row ) {

              return "<button class='edicionUsuarioDocu alineacion__de__elemento btn btn-success' data-toggle='modal' data-target='#edicionUsuarioDocu '><i class='fas fa-edit'></i></button"; 

            }

          }


        ]
});

 btener_data_UsuarioDocu("#tablaDocumentosUsuarios tbody",tableUsuarioDocu);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/


/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tableUsuarioDocu.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/

}

/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_UsuarioDocu=function(tbody,table){

  $(tbody).on("click","button.edicionUsuarioDocu",function(e)
  {

        var data=table.row($(this).parents("tr")).data();
        
        var rucTabla=$("#rucTabla").val(data.ruc);
        var razonTabla=$("#razonTabla").val(data.RasonSocial);
        var activiTabla=$("#activiTabla").val(data.actividadEconomica);
        var emaiTable=$("#emaiTable").val(data.email);
        var celulaTabla=$("#celulaTabla").val(data.celular);
        var telefonoTabla=$("#telefonoTabla").val(data.telefono);
        var id_ingresoInfo=$("#id_ingresoInfo").val(data.id_Actor);

         var cedulaTabla=$("#cedulaTabla").val(data.cedulaRepresentanteLegal);
        var nomRepresentanteTabla=$("#nomRepresentanteTabla").val(data.nombreRepresentanteLegar);

        var emailUser = (data.email);
        var passw = (data.ruc);
        var name   = emailUser.substring(0, emailUser.lastIndexOf("@"));
        var contrasss = name.concat(passw);
        
        var passUser=$("#passUser").val(contrasss);
        var emaiSeparado=$("#emaiSeparado").val(emailUser);
    
        var nombreCopCed=$("#nombreCopCed").val(data.copiaCedula);
        $("#copiaCed").attr('src','images/imagenesDocumentos/'+$("#nombreCopCed").val()+'.pdf');
        
        var nombramient=$("#nombramient").val(data.nombramiento);
        $("#nombraminennto").attr('src','images/imagenesDocumentos/'+$("#nombramient").val()+'.pdf');

        var nombreRuc=$("#nombreRuc").val(data.docuRuc);
        $("#nombrederuc").attr('src','images/imagenesDocumentos/'+$("#nombreRuc").val()+'.pdf');

        var nombreCertificado=$("#nombreCertificado").val(data.certificadoVigente);
        $("#nocertifi").attr('src','images/imagenesDocumentos/'+$("#nombreCertificado").val()+'.pdf');

        var nombreCarta=$("#nombreCarta").val(data.cartaIntencion);
        $("#nocartainten").attr('src','images/imagenesDocumentos/'+$("#nombreCarta").val()+'.pdf');

        var docuAdiExtra=$("#docuAdiExtra").val(data.docuAdi);
        $("#extraDocuAdi").attr('src','images/imagenesDocumentos/'+$("#docuAdiExtra").val()+'.pdf');


        var docuDeclaracionAnioAnterior=$("#docuDeclaracionAnioAnterior").val(data.declaracionInpuesto);
        $("#extraDocuDeclaracionAnioAnterior").attr('src','images/imagenesDocumentos/'+$("#docuDeclaracionAnioAnterior").val()+'.pdf');

        var docuAduaneraImportacion=$("#docuAduaneraImportacion").val(data.declaracionAduaneraDeImportacion);
        $("#extraAduaneraImportacion").attr('src','images/imagenesDocumentos/'+$("#docuAduaneraImportacion").val()+'.pdf');


        var docuDocumentosElectronicos=$("#docuDocumentosElectronicos").val(data.emisionDocumentosElectronicos);
        $("#extraDocumentosElectronicos").attr('src','images/imagenesDocumentos/'+$("#docuDocumentosElectronicos").val()+'.pdf');

        var docuNoAdeudarServicio=$("#docuNoAdeudarServicio").val(data.noAdeudarServicio);
        $("#extraNoAdeudar").attr('src','images/imagenesDocumentos/'+$("#docuNoAdeudarServicio").val()+'.pdf');


        var docuObligacionesEmitidas=$("#docuObligacionesEmitidas").val(data.certificadoDeCumplimiento);
        $("#extraObligacionesEmitidas").attr('src','images/imagenesDocumentos/'+$("#docuObligacionesEmitidas").val()+'.pdf');


        if (data.nombreRepresentanteLegar=="") {

          $(".oculto__representantes__legales").hide();

        }else{

          $(".oculto__representantes__legales").show();

        }

        /*==============================
        =            Marcas            =
        ==============================*/
        
        $(".nombre__marcas").text(data.nombreMarcaAdiciona);

        $(".periodo__anios__marcas").text(data.periodoAniosMarca);

        $(".fecha__inicio__marca").text(data.fechaInicioMarca);

        $(".fecha__fin__marca").text(data.fechaFinMarca);
        
        /*=====  End of Marcas  ======*/
        

        /*=================================
        =            Productos            =
        =================================*/

        $(".nombre__bicicletas").append(data.bicicleta);

        $(".pelotas__de__tennis").append(data.pelotasTennis);

        $(".cadenas__de__rodillos").append(data.cadenasDeRodillos);

        $(".raquetas__de__tennis").append(data.raquetasDeTennis);

        $(".nombre__sillines").append(data.sillines);

        $(".pelotas__de__pelotas__inflables").append(data.pelotasInflables);

        $(".cadenas__de__calzado__deportivo").append(data.calzadoDeportivo);

        $(".materiales__de__beisbol").append(data.materialesBeisbol);

        $(".nombres__cascos").append(data.cascosProductos);

        $(".materiales__de__tennis__de__mesas").append(data.articulosMaterialTenisDeMesa);
        
        /*=====  End of Productos  ======*/
        

        
  });

 }

/*=====  End of catalogo Documentos Usuarios   ======*/


/*===========================================
=           catalogoTodos importador             =
===========================================*/
       
$(document).on("ready",function(){

    $('#tablaCatalogoTodos tfoot th').each( function () { 

      var title = $("#tablaCatalogoTodos tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarCatalogoTodos();

});

var listarCatalogoTodos=function(){

   var tableCatalogoTodos=$("#tablaCatalogoTodos").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 


      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/llamarProductosTodos.php", 
      "data": {
                      "idImportador": $("#idImportador").val()
                }
      },
      "columns":[

          {"render":

            function ( data, type, row ) {

              if (row['fechaIngresa']=="0000-00-00") {
                return "EN SUBSANACiÓN";
              }else{
                return "<div style='font-size:12px'>"+row['fechaIngresa']+"</div>";
              }

            }

          },      

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['importador']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['codigoCalzadoImplemento']+"</div>";

            }

          },

               
          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['disciplinaDeportiva']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['marca']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              if (row['fechaIngresa']=="0000-00-00") {
                return "EN SUBSANACiÓN";
              }else{
                return "<div style='font-size:12px'>"+row['fechaIngresa']+"</div>";
              }


            }

          },

          {"render":

            function ( data, type, row ) {

              if(row['genero']==null || row['genero']==""){

                return "<div style='font-size:12px'>N/A</div>";

              }else{

                return "<div style='font-size:12px'>"+row['genero']+"</div>";

              }
     
            }

          },

          {"render":

            function ( data, type, row ) {

              if (row['grupo_etario']==null || row['grupo_etario']=="") {

                return "<div style='font-size:12px'>N/A</div>";

              }else{

                return "<div style='font-size:12px'>"+row['grupo_etario']+"</div>";

              }

              

            }

          },

         {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['estadoPrincipal']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<button class='edicionCatalogoTodos alineacion__de__elemento btn btn-success' data-toggle='modal' data-target='#edicionCatalogoTodos '><i class='fas fa-edit'></i></button"; 

            }

          }


        ]
});

 btener_data_CatalogoTodos("#tablaCatalogoTodos tbody",tableCatalogoTodos);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/



/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tableCatalogoTodos.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/


}

/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_CatalogoTodos=function(tbody,table){

  $(tbody).on("click","button.edicionCatalogoTodos",function(e)
  {

        var data=table.row($(this).parents("tr")).data();

        
        var idProducto=$("#idProducto").val(data.id_producto);
        var CodigoImplemento=$("#CodigoImplemento").val(data.codigoCalzadoImplemento);
        var marcaImplemento=$("#marcaImplemento").val(data.marca);
        var modeloImplemento=$("#modeloImplemento").val(data.modelo);
        var disciplinaDeport=$("#disciplinaDeport").val(data.disciplinaDeportiva);
        var preciPerr=$("#preciPerr").val(data.precioPeru);
        var preColomm=$("#preColomm").val(data.precioColombia);
        var materialesComposicionUpdates=$("#materialesComposicionUpdates").val(data.materiales);

        var descripcionComercial=$("#descripcionComercial").val(data.descripcionComercial);
        var item=$("#item").val(data.item);
        var nomFoto=$("#nomFoto").val(data.imagen1);
        var nomFoto1=$("#nomFoto1").val(data.imagen2);
        var nomFoto2=$("#nomFoto2").val(data.imagen3);
        var nomFoto3=$("#nomFoto3").val(data.imagen4);

        var lkj1 = $("#lkj1").val(data.tipoIma1);
        var lkj2 = $("#lkj2").val(data.tipoIma2);
        var lkj3 = $("#lkj3").val(data.tipoIma3);
        var lkj4 = $("#lkj4").val(data.tipoIma4);

        var imgOpdf1 = (data.tipoIma1);

        if(imgOpdf1 == 'application/pdf'){

          var posicion = $("#nomFoto").val().indexOf('.jpg');

          if (posicion !== -1){

            $("#lulitaEtiquetada").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'');

          }else{

            $("#lulitaEtiquetada").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'.pdf');

          }
          
          $("#imagg").hide();
          $("#lulitaEtiquetada").show();

        }else if(imgOpdf1==null){

          $("#imagg").show();
          $(".anadir_foto").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'')
          $("#lulitaEtiquetada").hide();

        }else{

          $("#imagg").show();
          $(".anadir_foto").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'')
          $("#lulitaEtiquetada").hide();

        }

        
  });

 }

/*=====  End of catalogoTodos importador   ======*/


/*===========================================
=           catalogo Documentos Usuarios Negados            =
===========================================*/
       
$(document).on("ready",function(){

    $('#tablaDocumentosUsuariosNegados tfoot th').each( function () {

      var title = $("#tablaDocumentosUsuariosNegados tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarUsuarioDocuNegados();

});

var listarUsuarioDocuNegados=function(){

   var tableUsuarioDocuNegados=$("#tablaDocumentosUsuariosNegados").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 
                /*==================================
                =            Exportador            =
                ==================================*/
                
                   dom: 'Bfrtip',

                   buttons: {

                      dom:{
                          container:{
                            tag:'div',
                            className:'flexcontent__administrador'
                          },
                          buttonLiner: {
                            tag: null
                          }
                      },

                      buttons: [


                            {
                                      extend:    'excelHtml5',
                                      text:      '<i class="fa fa-file-excel-o"></i>Excel',
                                      title:'Listado de Especialidades',
                                      titleAttr: 'Excel',
                                      className: 'export excel',
                                      exportOptions: {
                                          columns: [0,1,2,3]
                                      },
                            }

                      ]



                    },
                
                /*=====  End of Exportador  ======*/

      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/llamarUsuarioNegado.php",
      "data": {
                      "idImportador": $("#idImportador").val()
                }
      },
      "columns":[

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['fechaCalifica']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['ruc']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['RasonSocial']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['email']+"</div>";

            }

          },

               
          {"render":

            function ( data, type, row ) {

              return "<button class='edicionUsuarioDocuNegados alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#edicionUsuarioDocuNegados '><i class='fas fa-eye'></i></button"; 

            }

          }


        ]
});

 btener_data_UsuarioDocuNegados("#tablaDocumentosUsuariosNegados tbody",tableUsuarioDocuNegados);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/


/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tableUsuarioDocuNegados.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/

}

/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_UsuarioDocuNegados=function(tbody,table){

  $(tbody).on("click","button.edicionUsuarioDocuNegados",function(e)
  {

        var data=table.row($(this).parents("tr")).data();
        
        var rucTabla=$("#rucTabla").val(data.ruc);
        var razonTabla=$("#razonTabla").val(data.RasonSocial);
        var activiTabla=$("#activiTabla").val(data.actividadEconomica);
        var emaiTable=$("#emaiTable").val(data.email);
        var celulaTabla=$("#celulaTabla").val(data.celular);
        var telefonoTabla=$("#telefonoTabla").val(data.telefono);
        var id_ingresoInfo=$("#id_ingresoInfo").val(data.id_Actor);
        var observacionNega=$("#observacionNega").val(data.Observacion);
        var cedulaTabla=$("#cedulaTabla").val(data.cedulaRepresentanteLegal);
        var nomRepresentanteTabla=$("#nomRepresentanteTabla").val(data.nombreRepresentanteLegar);
        var nombreTecnico=$("#nombreTecnico").val(data.tecnico);
        var emailUser = (data.email);
        var passw = (data.ruc);
        var name   = emailUser.substring(0, emailUser.lastIndexOf("@"));
        var contrasss = name.concat(passw);
        
        var passUser=$("#passUser").val(contrasss);
        var emaiSeparado=$("#emaiSeparado").val(emailUser);
    
        var nombreCopCed=$("#nombreCopCed").val(data.copiaCedula);
        $("#copiaCed").attr('src','images/imagenesDocumentos/'+$("#nombreCopCed").val()+'.pdf');
        
        var nombramient=$("#nombramient").val(data.nombramiento);
        $("#nombraminennto").attr('src','images/imagenesDocumentos/'+$("#nombramient").val()+'.pdf');

        var nombreRuc=$("#nombreRuc").val(data.docuRuc);
        $("#nombrederuc").attr('src','images/imagenesDocumentos/'+$("#nombreRuc").val()+'.pdf')

        var nombreCertificado=$("#nombreCertificado").val(data.certificadoVigente);
        $("#nocertifi").attr('src','images/imagenesDocumentos/'+$("#nombreCertificado").val()+'.pdf')

        var nombreCarta=$("#nombreCarta").val(data.cartaIntencion);
        $("#nocartainten").attr('src','images/imagenesDocumentos/'+$("#nombreCarta").val()+'.pdf')

    
        
  });

 }

/*=====  End of catalogo Documentos Usuarios Negados  ======*/



/*==============================================
=            llamar producto Negado            =
==============================================*/

$(document).on("ready",function(){

    $('#tablaCatalogoNegados tfoot th').each( function () { 

      var title = $("#tablaCatalogoNegados tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarCatalogoNegados();

});

var listarCatalogoNegados=function(){

   var tableCatalogoNegados=$("#tablaCatalogoNegados").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 
                /*==================================
                =            Exportador            =
                ==================================*/
                
                   dom: 'Bfrtip',

                   buttons: {

                      dom:{
                          container:{
                            tag:'div',
                            className:'flexcontent__administrador'
                          },
                          buttonLiner: {
                            tag: null
                          }
                      },

                      buttons: [


                            {
                                      extend:    'excelHtml5',
                                      text:      '<i class="fa fa-file-excel-o"></i>Excel',
                                      title:'Listado de Especialidades',
                                      titleAttr: 'Excel',
                                      className: 'export excel',
                                      exportOptions: {
                                          columns: [0,1,2,3,4,5,6,7]
                                      },
                            }

                      ]



                    },
                
                /*=====  End of Exportador  ======*/

      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/llamarProductosNegado.php",
      "data": {
                      "idImportador": $("#idImportador").val()
                }
      },
      "columns":[

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['fechaAprueba']+"</div>";

            }

          },
          
          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['importador']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['codigoCalzadoImplemento']+"</div>";

            }

          },

               
          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['disciplinaDeportiva']+"</div>";

            }

          },

               
          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['id_marca']+"</div>";

            }

          },

                         
          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['fechaIngresa']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['observacion']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) {

              return "<button class='edicionCatalogoNegados alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#edicionCatalogoNegados '><i class='far fa-eye'></i></button"; 


            }

          }


        ]
});

 btener_data_CatalogoNegados("#tablaCatalogoNegados tbody",tableCatalogoNegados);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/



/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tableCatalogoNegados.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/


}

/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_CatalogoNegados=function(tbody,table){

  $(tbody).on("click","button.edicionCatalogoNegados",function(e)
  {

        var data=table.row($(this).parents("tr")).data();

        
        var idProducto=$("#idProducto").val(data.id_producto);
        var CodigoImplemento=$("#CodigoImplemento").val(data.codigoCalzadoImplemento);
        var marcaImplemento=$("#marcaImplemento").val(data.marca);
        var modeloImplemento=$("#modeloImplemento").val(data.modelo);
        var disciplinaDeport=$("#disciplinaDeport").val(data.disciplinaDeportiva);
        var preciPerr=$("#preciPerr").val(data.precioPeru);
        var preColomm=$("#preColomm").val(data.precioColombia);
        var descripcionComercial=$("#descripcionComercial").val(data.descripcionComercial);
        var item=$("#item").val(data.item);
        var nomFoto=$("#nomFoto").val(data.imagen1);
        var nomFoto1=$("#nomFoto1").val(data.imagen2);
        var nomFoto2=$("#nomFoto2").val(data.imagen3);
        var nomFoto3=$("#nomFoto3").val(data.imagen4);
        var personaCalifica=$("#personaCalifica").val(data.personaAprueba);
        var observacionesCalProducto=$("#observacionesCalProducto").val(data.observacion);
        var lkj1 = $("#lkj1").val(data.tipoIma1);
        var lkj2 = $("#lkj2").val(data.tipoIma2);
        var lkj3 = $("#lkj3").val(data.tipoIma3);
        var lkj4 = $("#lkj4").val(data.tipoIma4);

        var imgOpdf1 = (data.tipoIma1);

        var exPermitiadas2= /(.jpg)$/i;

        if (!exPermitiadas2.exec($("#nomFoto").val())) {

          
          $("#lulitaEtiquetada").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'.pdf')
          $("#imagg").hide();
          $("#lulitaEtiquetada").show();

        }else{

          $("#imagg").show();
          $(".anadir_foto").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'')
          $("#lulitaEtiquetada").hide();

        }


  });

 }

/*=====  End of llamar producto Negado t ======*/

/*===========================================
=           CERTIFICADOS PENDIENTES             =
===========================================*/
       
$(document).on("ready",function(){

    $('#tablaTecniPendiente tfoot th').each( function () {

      var title = $("#tablaTecniPendiente tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarUsuarioDocuTecniPendiente();

});

var listarUsuarioDocuTecniPendiente=function(){

   var tableTecniPendiente=$("#tablaTecniPendiente").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 


      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/llamarCertificadoPendiente.php",
      
      },


      "columns":[
        
          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['fechaSubeDocu']+"</div>"; 

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['ruc']+"</div>"; 

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['importador']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) { 

              return "<div style='font-size:12px'>"+row['codigo_importador']+"</div>";

            }

          },

               
          {"render":

            function ( data, type, row ) {

              return "<button class='edicionTecniPendiente alineacion__de__elemento btn btn-success' data-toggle='modal' data-target='#edicionTecniPendiente '><i class='fas fa-edit'></i></button"; 

            }

          }


        ]
});

 btener_data_TecniPendiente("#tablaTecniPendiente tbody",tableTecniPendiente);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/


/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tableTecniPendiente.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/

}

/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_TecniPendiente=function(tbody,table){

  $(tbody).on("click","button.edicionTecniPendiente",function(e)
  {

        var data=table.row($(this).parents("tr")).data();
        
        
        var idCodigoCalifi=$("#idCodigoCalifi").val(data.id_certi);
        var rucImportador=$("#rucImportador").val(data.ruc);
        var razonImportador=$("#razonImportador").val(data.importador);
        var codigoImporta=$("#codigoImporta").val(data.codigo_importador);
        var agregaEmail=$("#agregaEmail").val(data.mailImportador);
       
        var vercomex=$("#vercomex").val(data.comex);
        $("#verpdfComex").attr('src','images/documentosCertificado/'+$("#vercomex").val()+'.pdf');

        var verimpuesRenta=$("#verimpuesRenta").val(data.impuestoAlaRenta);
        $("#verpdfimpuesRenta").attr('src','images/documentosCertificado/'+$("#verimpuesRenta").val()+'.pdf');

        var verlistasBlancas=$("#verlistasBlancas").val(data.listasBlancas);
        $("#verpdflistasBlancas").attr('src','images/documentosCertificado/'+$("#verlistasBlancas").val()+'.pdf');

        var versuperAplicable=$("#versuperAplicable").val(data.superAplicable);
        $("#verpdfsuperAplicable").attr('src','images/documentosCertificado/'+$("#versuperAplicable").val()+'.pdf');

        var verdeclaracionAduanera=$("#verdeclaracionAduanera").val(data.declaracionAduanera);
        $("#verpdfdeclaracionAduanera").attr('src','images/documentosCertificado/'+$("#verdeclaracionAduanera").val()+'.pdf');

        var verSRIdocumentosElectronicos=$("#verSRIdocumentosElectronicos").val(data.SRIdocumentosElectronicos);
        $("#verpdfSRIdocumentosElectronicos").attr('src','images/documentosCertificado/'+$("#verSRIdocumentosElectronicos").val()+'.pdf');

        var verIESScumplimientos=$("#verIESScumplimientos").val(data.IESScumplimientos);
        $("#verpdfIESScumplimientos").attr('src','images/documentosCertificado/'+$("#verIESScumplimientos").val()+'.pdf');

        var versenae=$("#verNoAdeudarServiciosDeAduanas").val(data.senae);
        $("#verpdfNoAdeudarServiciosDeAduanas").attr('src','images/documentosCertificado/'+$("#verNoAdeudarServiciosDeAduanas").val()+'.pdf');
        
  });

 }

 /*=====  End of CERTIFICADOS PENDIENTES   ======*/


/*===============================================
=            Tablas marcas multiples            =
===============================================*/

    $(document).on("ready",function(){
        listarMarcasSolanas();
    }); 

    var listarMarcasSolanas=function(){

       var tableMarcasAtraidas=$("#marcaAtridas").DataTable({
 
              "language": 
                {
                    "sProcessing":     "Procesando...",
                    "sLengthMenu":     "Mostrar _MENU_ registros",
                    "sZeroRecords":    "No se encontraron resultados",
                    "sEmptyTable":     "Ningún dato disponible en esta tabla",
                    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
                    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix":    "",
                    "sSearch":         "Buscar:",
                    "sUrl":            "",
                    "sInfoThousands":  ",",
                    "sLoadingRecords": "No existen datos",
                    "oPaginate": 
                    {
                      "sFirst":    "Primero",
                      "sLast":     "Último",
                      "sNext":     "Siguiente",
                      "sPrevious": "Anterior"
                      },
                      "oAria": 
                      {
                      "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                      }
                },
                /*==================================
                =            Exportador            =
                ==================================*/
                
                   dom: 'Bfrtip',

                   buttons: {

                      dom:{
                          container:{
                            tag:'div',
                            className:'flexcontent__administrador'
                          },
                          buttonLiner: {
                            tag: null
                          }
                      },

                      buttons: [


                            {
                                      extend:    'excelHtml5',
                                      text:      '<i class="fa fa-file-excel-o"></i>Excel',
                                      title:'Listado de Especialidades',
                                      titleAttr: 'Excel',
                                      className: 'export excel',
                                      exportOptions: {
                                          columns: [0,1,2,3,4,5,6,7,8,9]
                                      },
                            }

                      ]



                    },
                
                /*=====  End of Exportador  ======*/
                        "pagingType": "full_numbers",
                        "sScrollY": "400px",
                        "Paginate": true,
                        "scrollX": true,
                        "pagingType": "full_numbers",
                        "ajax":{
                          "method":"POST",
                          "url":"funciones/datatables/marcasAtraidas.php",
                        },
                        "columns":[
                              
                             {"render":
 
                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px;width: 50%!important;'>"+row['fecha']+"</div>";

                                  }

                              },

                              {"render":
 
                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px;width: 50%!important;'>"+row['fechaAprueba']+"</div>";

                                  }

                              },

                              {"render":
 
                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px;width: 50%!important;'>"+row['importador']+"</div>";

                                  }

                              },

                              {"render":
 
                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px;width: 50%!important;'>"+row['ruc']+"</div>";

                                  }

                              },

                              {"render":
 
                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px;width: 50%!important;'>"+row['nombreMarcaAdiciona']+"</div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'><a href='images/imagenesCatalogo/"+row['documento']+".pdf' target='_blank'>"+row['documento']+".pdf</a></div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'><a href='images/imagenesCatalogo/"+row['certificadoMarca']+".pdf' target='_blank'>"+row['certificadoMarca']+".pdf</a></div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                    if (row['fechaInicioMarca']!=null) {
                                      return "<div style='font-size:12px'>"+row['fechaInicioMarca']+" a "+row['fechaFinMarca']+"<br>Años de vigencia: "+row['periodoAniosMarca']+"</div>";
                                    }else{
                                      return "N/A";
                                    }

                                      

                                  }

                              },                              

                              {"render":
 
                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px;width: 50%!important;'>"+row['estado']+"</div>";

                                  }

                              },
                              
                              {"render":
 
                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px;width: 50%!important;'>"+row['responsable']+"</div>";

                                  }

                              },

                              {"render":
 
                                  function ( data, type, row ) {

                                      if (row['observacion']==null || row['observacion']=="") {

                                        return "<div style='font-size:12px;width: 50%!important;'>N/A</div>";

                                      }else{

                                        return "<div style='font-size:12px;width: 50%!important;'>"+row['observacion']+"</div>";

                                      }

                                      
                                  }

                              }


                          ]
             });

    }


/*=====  End of Tablas marcas multiples  ======*/



 /*=======================================
 =            MARCAS GLOSARIO            =
 =======================================*/
 

    $(document).on("ready",function(){

        $('#tablaMarcasGlosario tfoot th').each( function () {

          var title = $("#tablaMarcasGlosario tfoot th").eq($(this).index()).text();

           
            if (title=="Editar") {

              $(this).html('');

            }else{

              $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

            }

        }); 
        listarMarcasGlosario();
    }); 
    var listarMarcasGlosario=function(){

       var tableMarcasGlosario=$("#tablaMarcasGlosario").DataTable({
 
              "language": 
                {
                    "sProcessing":     "Procesando...",
                    "sLengthMenu":     "Mostrar _MENU_ registros",
                    "sZeroRecords":    "No se encontraron resultados",
                    "sEmptyTable":     "Ningún dato disponible en esta tabla",
                    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
                    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix":    "",
                    "sSearch":         "Buscar:",
                    "sUrl":            "",
                    "sInfoThousands":  ",",
                    "sLoadingRecords": "No existen datos",
                    "oPaginate": 
                    {
                      "sFirst":    "Primero",
                      "sLast":     "Último",
                      "sNext":     "Siguiente",
                      "sPrevious": "Anterior"
                      },
                      "oAria": 
                      {
                      "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                      }
                },
          //Esxportador 
          //  }, 
                        "pagingType": "full_numbers",
                        "sScrollY": "400px",
                        "Paginate": true,
                        "scrollX": true,
                        "pagingType": "full_numbers",
                        "ajax":{
                          "method":"POST",
                          "url":"funciones/datatables/marcasGlosario.php",
                        },
                        "columns":[

                              
                              {"render":
 
                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['fecha']+"</div>";

                                  }

                              },

                              {"render":
 
                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['importador']+"</div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['nombreMarcaAdiciona']+"</div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'><a href='images/imagenesCatalogo/"+row['documento']+".pdf' target='_blank'>"+row['documento']+".pdf</a></div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'><a href='images/imagenesCatalogo/"+row['certificadoMarca']+".pdf' target='_blank'>"+row['certificadoMarca']+".pdf</a></div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['fechaInicioMarca']+" a "+row['fechaFinMarca']+"<br>Años de vigencia: "+row['periodoAniosMarca']+"</div>";

                                  }

                              },

                              {"render":

                                  function ( data, type, row ) {

                                      return "<button class='edicionMarcasGlosario alineacion__de__elemento btn btn-info' data-toggle='modal' data-target='#edicionMarcasGlosario '><i class='fas fa-edit'></i></button"; 

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<button class='eliminarRegistro123 alineacion__de__elemento btn btn-danger' data-toggle='modal' data-target='#eliminarRegistro123 '><i class='fas fa-times'></i></button"; 

                                  }

                              }
                          ]
             });
            obtener_data_MarcasGlosario("#tablaMarcasGlosario tbody",tableMarcasGlosario);

            /*=====  End of Crear los métodos para después ejecturarlos  ======*/
            /*===============================================================
            =            Realizar las busquedas por cada columna            =
            ===============================================================*/
              tableMarcasGlosario.columns().every(function(){
                    
                    var datatableColumn = this;

                    var serachTetBoxes=$(this.footer()).find('input');
                  
                    serachTetBoxes.on('keyup change',function(){

                      datatableColumn.search(this.value).draw();

                    });

                    serachTetBoxes.on('click', function (e){

                      e.stopPropagation();

                    });
              });

            /*=====  End of Realizar las busquedas por cada columna  ======*/
    }

    /*================================================================
    =            Realizar las ejecuciones por cada metodo            =
    ================================================================*/

    var obtener_data_MarcasGlosario=function(tbody,table){

      $(tbody).on("click","button.edicionMarcasGlosario",function(e)
      {

            var data=table.row($(this).parents("tr")).data();

            var importadorName=$("#importadorName").val(data.importador);
            var marcaName=$("#marcaName").val(data.nombreMarcaAdiciona);
            var idMarcaAdiciona=$("#idMarcaAdiciona").val(data.id_documentoAdicional);

            var certificadoMarca=$("#certificadoMarca").val(data.documento);
            $("#verCerti").attr('src','images/imagenesCatalogo/'+$("#certificadoMarca").val()+'.pdf');

            var glosarioMarca=$("#glosarioMarca").val(data.certificadoMarca);
            $("#verGlosa").attr('src','images/imagenesCatalogo/'+$("#glosarioMarca").val()+'.pdf');
            
      });

      $(tbody).on("click","button.eliminarRegistro123",function(e)
      {

            var data=table.row($(this).parents("tr")).data();

            var id_aEliminar=$("#id_aEliminar").val(data.id_documentoAdicional);
            
      });

    }

 
 
 /*=====  End of MARCAS GLOSARIO  ======*/
   /*==============================================
  =            Tabla de certificados     =
  ==============================================*/

    $(document).on("ready",function(){

        $('#tablaCalificaCertiApro tfoot th').each( function () {

          var title = $("#tablaCalificaCertiApro tfoot th").eq($(this).index()).text();

           
            if (title=="Editar") {

              $(this).html('');

            }else{

              $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

            }

        }); 
        listarCalificaCertiApro();
    }); 
    var listarCalificaCertiApro=function(){

       var tableCalificaCertiApro=$("#tablaCalificaCertiApro").DataTable({
 
              "language": 

                {
                    "sProcessing":     "Procesando...",
                    "sLengthMenu":     "Mostrar _MENU_ registros",
                    "sZeroRecords":    "No se encontraron resultados",
                    "sEmptyTable":     "Ningún dato disponible en esta tabla",
                    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
                    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix":    "",
                    "sSearch":         "Buscar:",
                    "sUrl":            "",
                    "sInfoThousands":  ",",
                    "sLoadingRecords": "No existen datos",
                    "oPaginate": 
                    {
                      "sFirst":    "Primero",
                      "sLast":     "Último",
                      "sNext":     "Siguiente",
                      "sPrevious": "Anterior"
                      },
                      "oAria": 
                      {
                      "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                      }
                },
          //Esxportador 
          //  }, 
                        "pagingType": "full_numbers",
                        "sScrollY": "400px",
                        "Paginate": true,
                        "scrollX": true,
                        "pagingType": "full_numbers",
                        "ajax":{
                          "method":"POST",
                          "url":"funciones/datatables/llamarCertificadoAprobados.php", 
                          "data": {
                                "codigodeUsuario": $("#codigodeUsuario").val(),
                                
                          }

                        },
                        "columns":[


                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['nombreEmpresa']+"</div>";

                                  }

                              },

                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['nombreEmpresa1']+"</div>";

                                  }

                              },

                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['codigo_solicitud']+"</div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<button class='edicionCalificaCertiApro alineacion__de__elemento btn btn-info' data-toggle='modal' data-target='#edicionCalificaCertiApro '><i class='fas fa-edit'></i></button"; 

                                  }

                              }
                          ]
             });
            obtener_data_CalificaCertiApro("#tablaCalificaCertiApro tbody",tableCalificaCertiApro);

            /*=====  End of Crear los métodos para después ejecturarlos  ======*/
            /*===============================================================
            =            Realizar las busquedas por cada columna            =
            ===============================================================*/
              tableCalificaCertiApro.columns().every(function(){
                    
                    var datatableColumn = this;

                    var serachTetBoxes=$(this.footer()).find('input');
                  
                    serachTetBoxes.on('keyup change',function(){

                      datatableColumn.search(this.value).draw();

                    });

                    serachTetBoxes.on('click', function (e){

                      e.stopPropagation();

                    });
              });

            /*=====  End of Realizar las busquedas por cada columna  ======*/
    }

    /*================================================================
    =            Realizar las ejecuciones por cada metodo            =
    ================================================================*/

    var obtener_data_CalificaCertiApro=function(tbody,table){

      $(tbody).on("click","button.edicionCalificaCertiApro",function(e){

            var data=table.row($(this).parents("tr")).data();

            var codigoimportador=$("#codigoimportador").val(data.codigo_solicitud);
            var recuperaCodigoCertificado=$("#recuperaCodigoCertificado").val(data.id_ingresaInfo);
            var carlosLulyCodificando=$("#codigoLupialesCarlos").val(data.codigo_solicitud);
            var nombreRasonSocial=$("#nombreRasonSocial").val(data.nombreEmpresa);
            
            var tableCertificadoArmado=$("#tablafinalCertificado").DataTable({

              /*================================
              =            Lenguaje            =
              ================================*/
              
              "language": 
                {
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados", 
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "No existen datos",
                "oPaginate": 
                {
                  "sFirst":    "Primero",
                  "sLast":     "Último",
                  "sNext":     "Siguiente",
                  "sPrevious": "Anterior"
                  },
                  "oAria": 
                  {
                  "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                  "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                  }
              },
              
              /*=====  End of Lenguaje  ======*/
              dom: 'Bfrt<"col-md-6 inline"i> <"col-md-6 inline"p>',

              buttons: {

                dom:{
                    container:{
                      tag:'div',
                      className:'flexcontent__administrador'
                    },
                    buttonLiner: {
                      tag: null
                    }
                },

                buttons: [

                     
                      {
                                extend:    'pdfHtml5',
                                orientation: 'landscape',
                                pageSize: 'LEGAL',
                                text:      '<i class="fa fa-file-pdf-o"></i>PDF',
                                title:  'RUC: '+$("#nombreRasonSocial").val()+'       CODIGO: '+$("#codigoLupialesCarlos").val(),
                                titleAttr: 'PDF',
                                className: 'btn btnDandoCertificado btn-app export pdf',

                                exportOptions: {
                                    columns: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
                                },

                                customize:function(doc) {

                                  doc.defaultStyle.fontSize = 6;

                                  doc.content.splice( 0, 0, {
                                      margin: [ 0, 0, 0, 12],
                                      alignment: 'center',
                                      image:'data:image/jpeg;base64,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',
                                      width: 750,
                                      height: 50

                                  });   

                                    doc.styles.title = {
                                        color: '#4c8aa0',
                                        fontSize: '13',
                                        alignment: 'right'

                                    }

                                    doc.styles['td:nth-child(2)'] = { 
                                        fontSize: '8',
                                        width: '100px',
                                        'max-width': '100px'

                                    },

                                    doc.styles.tableHeader = {
                                        fillColor:'#4c8aa0',
                                        fontSize: '10',
                                        color:'white',
                                        alignment:'center'
                                        
                                    },

                                    doc['footer']=(function(page, pages) {
                                      return {
                                          columns: [
                                              'NOTA: Este documento es un reporte de los implementos deportivos que el solicitante ha ingresado en el aplicativo web. NO es el certificado de autorización para la importación de calzado e implementos deportivos especializados.',
                                              {
                                                  // This is the right column
                                                  alignment: 'right',
                                                  text: ['page ', { text: page.toString() },  ' of ', { text: pages.toString() }]
                                              }
                                          ],
                                        margin: [40, 0]
                                        }
                                    });

                                    doc.content[1].margin = [0, 0, 0, 0 ]
                                    
                                }


                        }

                ]

              },

              /*=================================================
              =            Configuraciones Iniciales            =
              =================================================*/
  
              "pagingType": "full_numbers",
              "sScrollY": "400px",
              "Paginate": true,
              "scrollX": true,
              "pagingType": "full_numbers",
              "ajax":{
                "method":"POST",
                "url":"funciones/datatables/llamarDatosCertificado.php",
                "data": {
                      "recuperaCodigoCertificado": $("#recuperaCodigoCertificado").val(),
                      "codigoimportador": $("#codigoimportador").val()
                }
              },
              /*=====  End of Configuraciones Iniciales  ======*/
              
              "columns":[

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['item']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['codigoArancelario']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['codigoCalzadoImplemento']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['cantidad']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['pesoNeto']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['pesoBruto']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['valorUSD']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:8px'>"+row['descripcionComercial']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['id_disciplinaDeportiva']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['marca']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['modelo']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['precioUSD']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['PaisOrigen']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['PaisProcedencia']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['nombreProveedor']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['rucProveedor']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<button class='edicionCertiArmado alineacion__de__elemento btn btn-info' data-toggle='modal' data-target='#edicionCertiArmado '><i class='fas fa-edit'></i></button"; 

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<button class='quitarProducto alineacion__de__elemento btn btn-danger' data-dismiss='modal' data-toggle='modal' data-target='#quitarProducto '><i class='far fa-minus-square'></i></button"; 

                    }

                  }

                ]

        });
            
    btener_data_CertificadoArmado("#tablafinalCertificado tbody",tableCertificadoArmado);

/*===============================================================
=            Realizar las busquedas por cada columna            =
 ===============================================================*/

    tableCertificadoArmado.columns().every(function(){
          
          var datatableColumn = this;

          var serachTetBoxes=$(this.footer()).find('input');
        
          serachTetBoxes.on('keyup change',function(){

            datatableColumn.search(this.value).draw();

          });

          serachTetBoxes.on('click', function (e){

            e.stopPropagation();

          });

    });

/*=====  End of Realizar las busquedas por cada columna  ======*/

    });
}


var btener_data_CertificadoArmado=function(tbody,table){

    $(tbody).on("click","button.edicionCertiArmado",function(e)
      {

              var data=table.row($(this).parents("tr")).data();
              
              var llamaridDeProducto=$("#llamaridDeProducto").val(data.id_producto);
              var llamarItem=$("#llamarItem").val(data.item);
              var llamarCodigoArancelario=$("#llamarCodigoArancelario").val(data.codigoArancelario);
              var llamarCodigoUnico=$("#llamarCodigoUnico").val(data.codigoCalzadoImplemento);
              var llamarCantidad=$("#llamarCantidad").val(data.cantidad);
              var llamarPesoNeto=$("#llamarPesoNeto").val(data.pesoNeto);
              var llamarPesoBruto=$("#llamarPesoBruto").val(data.pesoBruto);
              var llamarValorFob=$("#llamarValorFob").val(data.valorUSD);
              var llamarDescripcion=$("#llamarDescripcion").val(data.descripcionComercial);
              var llamarDisciplina=$("#llamarDisciplina").val(data.id_disciplinaDeportiva);
              var llamarMarca=$("#llamarMarca").val(data.marca);
              var llamarModelo=$("#llamarModelo").val(data.modelo);
              var llamarPrecio=$("#llamarPrecio").val(data.precioUSD);
              var llamarPaisOrigen=$("#llamarPaisOrigen").val(data.PaisOrigen);
              var llamarPaisProce=$("#llamarPaisProce").val(data.PaisProcedencia);
              var llamarNomProve=$("#llamarNomProve").val(data.nombreProveedor);
              var llamarRucProve=$("#llamarRucProve").val(data.rucProveedor);
                        
    });



    $(tbody).on("click","button.quitarProducto",function(e)
      {

              var data=table.row($(this).parents("tr")).data();
              
              var llamaridDeProductoEliminar=$("#llamaridDeProductoEliminar").val(data.id_producto);
           
                        
    });

}
  /*=====  End Tabla de certificados  ======*/

       

$(document).on("ready",function(){

        $('#tablaCalificaCertiAproFin tfoot th').each( function () {

          var title = $("#tablaCalificaCertiAproFin tfoot th").eq($(this).index()).text();

           
            if (title=="Editar") {

              $(this).html('');

            }else{

              $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

            }

        }); 
        listarCalificaCertiAproFin();
    }); 
    var listarCalificaCertiAproFin=function(){

       var tableCalificaCertiAproFin=$("#tablaCalificaCertiAproFin").DataTable({
 
              "language": 
                {
                    "sProcessing":     "Procesando...",
                    "sLengthMenu":     "Mostrar _MENU_ registros",
                    "sZeroRecords":    "No se encontraron resultados",
                    "sEmptyTable":     "Ningún dato disponible en esta tabla",
                    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
                    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix":    "",
                    "sSearch":         "Buscar:",
                    "sUrl":            "",
                    "sInfoThousands":  ",",
                    "sLoadingRecords": "No existen datos",
                    "oPaginate": 
                    {
                      "sFirst":    "Primero",
                      "sLast":     "Último",
                      "sNext":     "Siguiente",
                      "sPrevious": "Anterior"
                      },
                      "oAria": 
                      {
                      "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                      }
                },
          //Esxportador 
          //  }, 
                        "pagingType": "full_numbers",
                        "sScrollY": "400px", 
                        "Paginate": true,
                        "scrollX": true,
                        "pagingType": "full_numbers", 
                        "ajax":{
                          "method":"POST",
                          "url":"funciones/datatables/llamarCertificadoAprobadosFin.php", 
                          // "data": {
                          //       "codigodeUsuario": $("#codigodeUsuario").val(),
                                
                          // }

                        },
                        "columns":[


                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['codigo_importador']+"</div>";

                                  }

                              },

                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['nombreEmpresa']+"</div>";

                                  }

                              },

                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['nombreImporta']+"</div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<button class='edicionCalificaCertiAproFin alineacion__de__elemento btn btn-success' data-toggle='modal' data-target='#edicionCalificaCertiAproFin '><i class='fas fa-edit'></i></button"; 

                                  }

                              },

                              {"render":

                                  function ( data, type, row ) {

                                      return "<button class='emitirCertificadoSubida alineacion__de__elemento btn btn-info' data-toggle='modal' data-target='#emitirCertificadoSubida '><i class='fas fa-edit'></i></button"; 

                                  }

                              }
                          ]
             });
            obtener_data_CalificaCertiAproFin("#tablaCalificaCertiAproFin tbody",tableCalificaCertiAproFin);

            /*=====  End of Crear los métodos para después ejecturarlos  ======*/
            /*===============================================================
            =            Realizar las busquedas por cada columna            =
            ===============================================================*/
              tableCalificaCertiAproFin.columns().every(function(){
                    
                    var datatableColumn = this;

                    var serachTetBoxes=$(this.footer()).find('input');
                  
                    serachTetBoxes.on('keyup change',function(){

                      datatableColumn.search(this.value).draw();

                    });

                    serachTetBoxes.on('click', function (e){

                      e.stopPropagation();

                    });
              });

            /*=====  End of Realizar las busquedas por cada columna  ======*/
    }

    /*================================================================
    =            Realizar las ejecuciones por cada metodo            =
    ================================================================*/

    var obtener_data_CalificaCertiAproFin=function(tbody,table){

      $(tbody).on("click","button.edicionCalificaCertiAproFin",function(e){

            var data=table.row($(this).parents("tr")).data();

            var codigoimportador=$("#codigoimportador").val(data.codigo_importador);
            var recuperaCodigoCertificado=$("#recuperaCodigoCertificado").val(data.id_importador);
            var carlosLulyCodificando=$("#codigoLupialesCarlos").val(data.codigo_importador);
            var nombreRasonSocial=$("#nombreRasonSocial").val(data.nombreEmpresa);
            var calificaFirma=$("#calificaFirma").val(data.id_calificacionFinalFirmas);
            var fechaActual2=$("#tablaCalificaCertiAproFin").val(data.fechaSubeDocu);
            
            var f = new Date(data.fechaSubeDocu);

            var arregloFechas= data.fechaSubeDocu.split("-");

            var fechaActual = arregloFechas[2]+"/"+arregloFechas[1]+"/"+arregloFechas[0];

            // var fechaActual = ((f.getDate()+1) + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
            
            f.setMonth(f.getMonth() + 6)
            var fechafin = (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
            
            $("#tablafinalCertificadofin").DataTable({

              /*================================
              =            Lenguaje            =
              ================================*/
              
              "language": 
                {
                "sProcessing":     "Procesando...",
                "sLengthMenu":     "Mostrar _MENU_ registros",
                "sZeroRecords":    "No se encontraron resultados", 
                "sEmptyTable":     "Ningún dato disponible en esta tabla",
                "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
                "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                "sInfoPostFix":    "",
                "sSearch":         "Buscar:",
                "sUrl":            "",
                "sInfoThousands":  ",",
                "sLoadingRecords": "No existen datos",
                "oPaginate": 
                {
                  "sFirst":    "Primero",
                  "sLast":     "Último",
                  "sNext":     "Siguiente",
                  "sPrevious": "Anterior"
                  },
                  "oAria": 
                  {
                  "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                  "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                  }
              },
              
              /*=====  End of Lenguaje  ======*/
              dom: 'Bfrt<"col-md-6 inline"i> <"col-md-6 inline"p>',

              buttons: {

                dom:{
                    container:{
                      tag:'div',
                      className:'flexcontent__administrador'
                    },
                    buttonLiner: {
                      tag: null
                    }
                },

                buttons: [

                     
                      {
                                extend:    'pdfHtml5',
                                orientation: 'landscape',
                                pageSize: 'LEGAL',
                                text:      '<i class="fa fa-file-pdf-o"></i>PDF',
                                title:'CERTIFICADO DE IMPORTACIÓN',
                                titleAttr: 'PDF',
                                className: 'btn btnDandoCertificado btn-app export pdf',

                                exportOptions: {
                                    columns: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
                                },

                                
                                customize:function(doc) {

                                  doc.defaultStyle.fontSize = 6;

                                  doc.content.splice( 0, -1, 

                                    {

                                      margin: [ 0, -20, 0, 5],
                                      alignment: 'center',
                                      image:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzAAAACZCAYAAADw89+gAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAD5ySURBVHhe7d0HYBvl3QbwR1ve244TO86OY7L3IoskEAhhz48NZfUDyoYuKGVTRimjpYyyCwHCDNl7kO3sONOx43hv2dbW9/5fSYljHKCUttHX5wdnSXen052k3N2jd5whoICIiIiIiCgCGEO3REREREREJzwGGCIiIiIiihgMMEREREREFDEYYIiIiIiIKGIwwBARERERUcRggCEiIiIioojBAENERERERBGDAYaIiIiIiCIGAwwREREREUUMBhgiIiIiIooYDDBERERERBQxGGCIiIiIiChiMMAQEREREVHEYIAhIiIiIqKIwQBDREREREQRgwGGiIiIiIgiBgMMERERERFFDAYYIiIiIiKKGAwwREREREQUMRhgiIiIiIgoYjDAEBERERFRxGCAISIiIiKiiMEAQ0REREREEYMBhoiIiIiIIgYDDBERERERRQwGGCIiIiIiihgMMEREREREFDEYYIiIiIiIKGIwwBARERERUcRggCEiIiIioojBAENERERERBGDAYaIiIiIiCIGAwwREREREUUMBhgiIiIiIooYDDBERERERBQxGGCIiIiIiChiMMAQEREREVHEYIAhIiIiIqKIwQBDREREREQRgwGGiIiIiIgiBgMMERERERFFDAYYIiIiIiKKGAwwREREREQUMRhgiIiIiIgoYjDAEBERERFRxGCAISIiIiKiiMEAQ0REREREEYMBhoiIiIiIIgYDDBERERERRQwGGCIiIiIiihgMMEREREREFDEYYIiIiIiIKGIwwBARERERUcRggCEiIiIioohhCCih+xShPB4PGupqUFZciPJDB1BfXYGaijJ43E4YDEakZ3XB0PGnIrtrz9Azvl/Jwf1Yu3g2qg4XwefzwmqLQmJaBhJT0pHeMQcZ2V2QlJIGs9kcegYRERER0b8eA0wEqqupQvG+AhRsXouDBdtwaH+BDhrOpkZYTAYYDYB8qFK8ZlD3jepPIDoZT89chtSMTL2M71Ktws/dF02Av7ECfrUg+YbI8vSg/njUSFtUrA5GWd1y0blXHnoPHIEsFZAk1BARERER/aswwEQAl8uJ/Ts2Y9v6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',
                                      width: 750,
                                      height: 80

                                    },

                                    {
                                          margin: [ 0, 0, 0, 0],
                                          text:'RUC: '+$("#nombreRasonSocial").val()+'       CODIGO: '+$("#codigoLupialesCarlos").val()+'       FECHA DE EMISIÓN: '+fechaActual+'         VALIDO HASTA: '+fechafin,
                                          alignment: 'right',
                                          fontSize:'13',
                                          color: '#4ca057',
                                    },

                                  );   

         
                                    doc.styles.title = {
                                        color: 'white',
                                        fontSize: '11',
                                        alignment: 'left',
                                        margin:'2'

                                                                             
                                    }

                                    doc.styles['td:nth-child(2)'] = { 
                                        fontSize: '8',
                                        width: '100px',
                                        'max-width': '100px'
                                        

                                    },

                                    doc.styles.tableHeader = {
                                        fillColor:'#4ca057',
                                        fontSize: '8',
                                        color:'white',
                                        alignment:'center',

                    
                                        
                                    },

                                    doc['footer']=(function(page, pages) {

                                      return {
                                          columns: [

                                              // {

                                              //   text:'FIRMAS DE RESPONSABILIDAD. ',

                                              //   fontSize:8

                                              // },

                                              // {

                                              //   text:'Servidor Responsable del Proceso: '+$("#nombreIntregrado").val(),

                                              //   fontSize:8

                                              // },


                                              {

                                                width:870,

                                                alignment: 'left',

                                                text:'Generado por: '+$("#nombreIntregrado").val()+"                                                      "+"           Aprobado por: LUIS FABIÁN ARMIJOS SAMANIEGO "+"\n"+"\n"+"Nota:  "+"“El Ministerio del Deporte es el ente encargado de revisar y aprobar calzado e implementos deportivos especializados, mas no de revisar o dar seguimiento al proceso de importación de las empresas importadoras que, conforme a lo que establece la normativa legal vigente, es el Servicio Nacional de Aduana del Ecuador. Los temas referentes al control de las importaciones y otros derivados recaerán sobre la institución correspondiente.",

                                                fontSize:8

                                              },

                                              {
                                                  // This is the right column
                                                  width:45,
                                                  alignment: 'right',
                                                  text: ['page ', { text: page.toString() },  ' of ', { text: pages.toString() }],
                                                  fontSize:8

                                              },


                                         ],


                                       margin: [40, -10]

                                    }

                                  });

                                    doc.content[1].margin = [0, 5, -16, -16 ];
                                    
                                }
                                // action: function ( e, dt, node, config ) {
                                //     alert( 'Button activated' );
                                // }

                        }



                ]

              },

              /*=================================================
              =            Configuraciones Iniciales            =
              =================================================*/
  
              "pagingType": "full_numbers",
              "sScrollY": "400px",
              "Paginate": true,
              "scrollX": true,
              "pagingType": "full_numbers",
              "ajax":{
                "method":"POST",
                "url":"funciones/datatables/llamarDatosCertificado.php",
                "data": {
                      "recuperaCodigoCertificado": $("#recuperaCodigoCertificado").val(),
                      "codigoimportador": $("#codigoimportador").val()
                }
              },
              /*=====  End of Configuraciones Iniciales  ======*/
              
              "columns":[

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['item']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['codigoArancelario']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['codigoCalzadoImplemento']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['cantidad']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['pesoNeto']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['pesoBruto']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['valorUSD']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:8px'>"+row['descripcionComercial']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['id_disciplinaDeportiva']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['marca']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['modelo']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['precioUSD']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['PaisOrigen']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['PaisProcedencia']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['nombreProveedor']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['rucProveedor']+"</div>";

                    }

                  },

                  {"render":

                    function ( data, type, row ) {

                      return "<div style='font-size:12px'>"+row['productoCalifica']+"</div>";

                    }

                  }



                ]
              

            });

          

      });


      $(tbody).on("click","button.emitirCertificadoSubida",function(e){

        var data=table.row($(this).parents("tr")).data();

            var codigoimportador=$("#codigoimportador1").val(data.codigo_importador);
            var recuperaCodigoCertificado=$("#recuperaCodigoCertificado1").val(data.id_importador);
            var carlosLulyCodificando=$("#codigoLupialesCarlos1").val(data.codigo_importador);
            var nombreRasonSocial=$("#nombreRasonSocial1").val(data.nombreEmpresa);

      });
      



    }

    $(document).on("ready",function(){

    $('#tablaDocumentosUsuariosAprobados tfoot th').each( function () {

      var title = $("#tablaDocumentosUsuariosAprobados tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarUsuarioDocuAprobados();

});

var listarUsuarioDocuAprobados=function(){

   var tableUsuarioDocuAprobados=$("#tablaDocumentosUsuariosAprobados").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 


                /*==================================
                =            Exportador            =
                ==================================*/
                
                   dom: 'Bfrtip',

                   buttons: {

                      dom:{
                          container:{
                            tag:'div',
                            className:'flexcontent__administrador'
                          },
                          buttonLiner: {
                            tag: null
                          }
                      },

                      buttons: [


                            {
                                      extend:    'excelHtml5',
                                      text:      '<i class="fa fa-file-excel-o"></i>Excel',
                                      title:'Listado de Especialidades',
                                      titleAttr: 'Excel',
                                      className: 'export excel',
                                      exportOptions: {
                                          columns: [0,1,2,3]
                                      },
                            }

                      ]



                    },
                
                /*=====  End of Exportador  ======*/
      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/llamarUsuarioAprobado.php",
      "data": {
                      "idImportador": $("#idImportador").val()
                }
      },
      "columns":[

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['fechaCalifica']+"</div>";

            }

          },

           {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['ruc']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['RasonSocial']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['email']+"</div>";

            }

          },

               
          {"render":

            function ( data, type, row ) {

              return "<button class='edicionUsuarioDocuAprobados alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#edicionUsuarioDocuAprobados '><i class='fas fa-eye'></i></button"; 

            }

          }


        ]
});

 btener_data_UsuarioDocuAprobados("#tablaDocumentosUsuariosAprobados tbody",tableUsuarioDocuAprobados);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/


/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tableUsuarioDocuAprobados.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/

}

/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_UsuarioDocuAprobados=function(tbody,table){

  $(tbody).on("click","button.edicionUsuarioDocuAprobados",function(e)
  {

        var data=table.row($(this).parents("tr")).data();
        
        var rucTabla=$("#rucTabla").val(data.ruc);
        var razonTabla=$("#razonTabla").val(data.RasonSocial);
        var activiTabla=$("#activiTabla").val(data.actividadEconomica);
        var emaiTable=$("#emaiTable").val(data.email);
        var celulaTabla=$("#celulaTabla").val(data.celular);
        var telefonoTabla=$("#telefonoTabla").val(data.telefono);
        var id_ingresoInfo=$("#id_ingresoInfo").val(data.id_Actor);
        var observacionNega=$("#observacionNega").val(data.Observacion);
        var cedulaTabla=$("#cedulaTabla").val(data.cedulaRepresentanteLegal);
        var nomRepresentanteTabla=$("#nomRepresentanteTabla").val(data.nombreRepresentanteLegar);
        var nombreTecnico=$("#nombreTecnico").val(data.tecnico);
        var emailUser = (data.email);
        var passw = (data.ruc);
        var name   = emailUser.substring(0, emailUser.lastIndexOf("@"));
        var contrasss = name.concat(passw);
        
        var passUser=$("#passUser").val(contrasss);
        var emaiSeparado=$("#emaiSeparado").val(emailUser);
    
        var nombreCopCed=$("#nombreCopCed").val(data.copiaCedula);
        $("#copiaCed").attr('src','images/imagenesDocumentos/'+$("#nombreCopCed").val()+'.pdf');
        
        var nombramient=$("#nombramient").val(data.nombramiento);
        $("#nombraminennto").attr('src','images/imagenesDocumentos/'+$("#nombramient").val()+'.pdf');

        var nombreRuc=$("#nombreRuc").val(data.docuRuc);
        $("#nombrederuc").attr('src','images/imagenesDocumentos/'+$("#nombreRuc").val()+'.pdf');

        var nombreCertificado=$("#nombreCertificado").val(data.certificadoVigente);
        $("#nocertifi").attr('src','images/imagenesDocumentos/'+$("#nombreCertificado").val()+'.pdf');

        var nombreCarta=$("#nombreCarta").val(data.cartaIntencion);
        $("#nocartainten").attr('src','images/imagenesDocumentos/'+$("#nombreCarta").val()+'.pdf');

        $("#noAdeudarServiciosAduanas").attr('src','images/imagenesDocumentos/'+data.noAdeudarServicio+'.pdf');

        $("#declaracionImpuestoDocumento").attr('src','images/imagenesDocumentos/'+data.declaracionInpuesto+'.pdf');

        $("#declaracionAduaneraDocumento").attr('src','images/imagenesDocumentos/'+data.declaracionAduaneraDeImportacion+'.pdf');

        $("#revisionDocumentosSriDocumentos").attr('src','images/imagenesDocumentos/'+data.emisionDocumentosElectronicos+'.pdf');
        
  });

 }

/*=====  End of catalogo Documentos Usuarios Negados  ======*/
$(document).on("ready",function(){

    $('#tablaCatalogoAprobados tfoot th').each( function () { 

      var title = $("#tablaCatalogoAprobados tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarCatalogoAprobados();

});

var listarCatalogoAprobados=function(){

   var tableCatalogoAprobados=$("#tablaCatalogoAprobados").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
                /*==================================
                =            Exportador            =
                ==================================*/
                
                   dom: 'Bfrtip',

                   buttons: {

                      dom:{
                          container:{
                            tag:'div',
                            className:'flexcontent__administrador'
                          },
                          buttonLiner: {
                            tag: null
                          }
                      },

                      buttons: [


                            {
                                      extend:    'excelHtml5',
                                      text:      '<i class="fa fa-file-excel-o"></i>Excel',
                                      title:'Listado de Especialidades',
                                      titleAttr: 'Excel',
                                      className: 'export excel',
                                      exportOptions: {
                                          columns: [0,1,2,3,4,5,6,7]
                                      },
                            }

                      ]



                    },
                
                /*=====  End of Exportador  ======*/


      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/llamarProductosAprobados.php",
      "data": {
                      "idImportador": $("#idImportador").val()
                }
      },
      "columns":[

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['fechaAprueba']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['importador']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['codigoCalzadoImplemento']+"</div>";

            }

          },

               
          {"render":

                function ( data, type, row ) {

                    if (row['calificacion']=="A") {

                      return "<div style='font-size:12px'>APROBADO</div>";

                    }else{

                       return "<div style='font-size:12px'>-</div>";

                    }

                    

                }

            },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['disciplinaDeportiva']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['id_marca']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['fechaIngresa']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) {

              return "<button class='edicionCatalogoAprobados alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#edicionCatalogoAprobados '><i class='far fa-eye'></i></button"; 


            }

          }


        ]
});

 btener_data_CatalogoAprobados("#tablaCatalogoAprobados tbody",tableCatalogoAprobados);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/



/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tableCatalogoAprobados.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/


}

/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_CatalogoAprobados=function(tbody,table){

  $(tbody).on("click","button.edicionCatalogoAprobados",function(e)
  {

        var data=table.row($(this).parents("tr")).data();

        
        var idProducto=$("#idProducto").val(data.id_producto);
        var CodigoImplemento=$("#CodigoImplemento").val(data.codigoCalzadoImplemento);
        var marcaImplemento=$("#marcaImplemento").val(data.marca);
        var modeloImplemento=$("#modeloImplemento").val(data.modelo);
        var disciplinaDeport=$("#disciplinaDeport").val(data.disciplinaDeportiva);
        var preciPerr=$("#preciPerr").val(data.precioPeru);
        var preColomm=$("#preColomm").val(data.precioColombia);

        var descripcionComercial=$("#descripcionComercial").val(data.descripcionComercial);
        var item=$("#item").val(data.item);
        var nomFoto=$("#nomFoto").val(data.imagen1);
        var nomFoto1=$("#nomFoto1").val(data.imagen2);
        var nomFoto2=$("#nomFoto2").val(data.imagen3);
        var nomFoto3=$("#nomFoto3").val(data.imagen4);
        var personaCalifica=$("#personaCalifica").val(data.personaAprueba);
        
        var observacionesCalProducto=$("#observacionesCalProducto").val(data.observacion);


        var lkj1 = $("#lkj1").val(data.tipoIma1);
        var lkj2 = $("#lkj2").val(data.tipoIma2);
        var lkj3 = $("#lkj3").val(data.tipoIma3);
        var lkj4 = $("#lkj4").val(data.tipoIma4);

        var imgOpdf1 = (data.tipoIma1);

        if(imgOpdf1 == 'application/pdf'){
          $("#lulitaEtiquetada").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'.pdf')
          $("#imagg").hide();
          $("#lulitaEtiquetada").show();
        }else if(imgOpdf1==null){

          $("#imagg").show();
          $(".anadir_foto").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'')
          $("#lulitaEtiquetada").hide();

        }else{

          $("#imagg").show();
          $(".anadir_foto").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'')
          $("#lulitaEtiquetada").hide();

        }

  });

 }
 /*===============================================
 =            Entrega del Certificado            =
 ===============================================*/
 
 $(document).on("ready",function(){

    $('#tablaCertificadoEntrega tfoot th').each( function () { 

      var title = $("#tablaCertificadoEntrega tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarCatalogoEntrega();

});

var listarCatalogoEntrega=function(){

   var tableCatalogoEntrega=$("#tablaCertificadoEntrega").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 


      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/llamardocumentoCertificado.php",
      "data": {
                      "codigodeUsuario": $("#codigodeUsuario").val()
                }
      },
      "columns":[

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['codigoGenera']+"</div>";

            }

          },

       

          {"render":

            function ( data, type, row ) {

              return "<button class='edicionCatalogoEntrega alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#edicionCatalogoEntrega '><i class='far fa-eye'></i></button"; 


            }

          }


        ]
});

 btener_data_CatalogoEntrega("#tablaCertificadoEntrega tbody",tableCatalogoEntrega);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/



/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tableCatalogoEntrega.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/


}

/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_CatalogoEntrega=function(tbody,table){

  $(tbody).on("click","button.edicionCatalogoEntrega",function(e)
  {

        var data=table.row($(this).parents("tr")).data();

        
        
        var nomFoto=$("#nomFoto").val(data.documentoCertificado);
        $("#verCertificado").attr('src','images/certificadosEmitidos/'+$("#nomFoto").val()+'.pdf')
          
          
       
  });

 }


 
 /*=====  End of Entrega del Certificado  ======*/
 
$(document).on("ready",function(){

    $('#certificadosNegados tfoot th').each( function () { 

      var title = $("#certificadosNegados tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarCatalogoEntregaNegados();

});

var listarCatalogoEntregaNegados=function(){

   var tablecertificadosNegados=$("#certificadosNegados").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
                /*==================================
                =            Exportador            =
                ==================================*/
                
                   dom: 'Bfrtip',

                   buttons: {

                      dom:{
                          container:{
                            tag:'div',
                            className:'flexcontent__administrador'
                          },
                          buttonLiner: {
                            tag: null
                          }
                      },

                      buttons: [


                            {
                                      extend:    'excelHtml5',
                                      text:      '<i class="fa fa-file-excel-o"></i>Excel',
                                      title:'Listado de Especialidades',
                                      titleAttr: 'Excel',
                                      className: 'export excel',
                                      exportOptions: {
                                          columns: [0,1,2,3,4,5]
                                      },
                            }

                      ]



                    },
                
                /*=====  End of Exportador  ======*/



      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/llamarCertificadoNegado.php",
      // "data": {
      //                 "codigodeUsuario": $("#codigodeUsuario").val()
      //           }
      },
      "columns":[


          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['fechaSubeDocu']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['fechaCalifica']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['importador']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['ruc']+"</div>";

            }

          },



          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['codigo_importador']+"</div>";

            }

          },



          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['observacionCalificaCertificado']+"</div>";

            }

          }


        ]
});

 btener_data_CatalogoEntregaNegados("#certificadosNegados tbody",tablecertificadosNegados);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/



/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tablecertificadosNegados.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/


}

/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_CatalogoEntregaNegados=function(tbody,table){

  $(tbody).on("click","button.edicionCatalogoEntregaNegados",function(e)
  {

        var data=table.row($(this).parents("tr")).data();

        var comentariodeNegacion=$("#comentariodeNegacion").val(data.observacionCalificaCertificado);
        
          
          
       
  });

 }


 $(document).on("ready",function(){

    $('#certificadosNegadosUsuario tfoot th').each( function () { 

      var title = $("#certificadosNegadosUsuario tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarCatalogoEntregaNegadosUsuario();

});

var listarCatalogoEntregaNegadosUsuario=function(){

   var tablecertificadosNegadosUsuario=$("#certificadosNegadosUsuario").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 


      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/llamarCertificadoNegadoUsuario.php",
      "data": {
                      "idImportador": $("#idImportador").val()
                }
      },
      "columns":[

         {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['codigo_importador']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['ruc']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['importador']+"</div>";

            }

          },
       

          {"render":

            function ( data, type, row ) {

              return "<button class='edicionCatalogoEntregaNegadosUsuario alineacion__de__elemento btn btn-light' data-toggle='modal' data-target='#edicionCatalogoEntregaNegadosUsuario '><i class='far fa-eye'></i></button"; 


            }

          }


        ]
});

 btener_data_CatalogoEntregaNegadosUsuario("#certificadosNegadosUsuario tbody",tablecertificadosNegadosUsuario);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/



/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tablecertificadosNegadosUsuario.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/


}

/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_CatalogoEntregaNegadosUsuario=function(tbody,table){

  $(tbody).on("click","button.edicionCatalogoEntregaNegadosUsuario",function(e)
  {

        var data=table.row($(this).parents("tr")).data();

        var comentariodeNegacion=$("#comentariodeNegacion").val(data.observacionCalificaCertificado);
        
          
          
       
  });

 }

// inicio de tabla de productos importados

 $(document).on("ready",function(){

    $('#tablaCatalogoHistorial tfoot th').each( function () {

      var title = $("#tablaCatalogoHistorial tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarCatalogoHistorial();

});

var listarCatalogoHistorial=function(){

   var tableCatalogoHistorial=$("#tablaCatalogoHistorial").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 


      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/productosImportacionesAnteriores.php",
      "data": {
                      "idImportador": $("#idImportador").val()
                }
      },
      "columns":[

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['codigoCalzadoImplemento']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['marca']+"</div>";

            }

          },


          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['modelo']+"</div>";

            }

          },

               
          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['disciplinaDeportiva']+"</div>";

            }

          },


          {"render":

                function ( data, type, row ) {


                      return "<center><button class='editarCatalogoHistorial alineacion__de__elemento2 btn btn-su' data-toggle='modal' style='color:white; font-weight:bold; font-size:10px; padding:1em; border-radius:.5em;' data-target='#editarCatalogoHistorial'><i class='fas fa-eye'></i></button</center>"; 
 
                }

            },


          {"render":

                function ( data, type, row ) {

                    if (row['productoadiciones']=="A") {

                        return "<center><input type='checkbox' class='idCheked1 seleccionaCertificado' name='idCheked1' id='idCheked1"+row['id_producto']+"' idProducto='"+row['id_producto']+"' descripcionComercial='"+row['descripcionComercial']+"' codigo='"+row['codigoCalzadoImplemento']+"' descripcionArancelario='"+row['descripcionArancelario']+"' marca='"+row['marca']+"' modelo='"+row['modelo']+"' item='"+row['item']+"' codigoArancelario='"+row['codigoArancelario']+"' disciplina='"+row['disciplinaDeportiva']+"' checked='checked' disabled=''><br><div style='font-size:10px; font-weight:bold; color:black;'>El producto está enlazado a un certificado, debe enviar todos los productos del certificado pendiente para poder liberar este producto.</div></center>";

                    }else if (row['calificacion']=="A") {

                      if(row['masProductos']=="A"){

                        return "<center><input type='checkbox' class='idCheked1 seleccionaCertificado' name='idCheked1' id='idCheked1"+row['id_producto']+"' idProducto='"+row['id_producto']+"' descripcionComercial='"+row['descripcionComercial']+"' codigo='"+row['codigoCalzadoImplemento']+"' descripcionArancelario='"+row['descripcionArancelario']+"' marca='"+row['marca']+"' modelo='"+row['modelo']+"' item='"+row['item']+"' codigoArancelario='"+row['codigoArancelario']+"' disciplina='"+row['disciplinaDeportiva']+"' checked='checked'></center>";

                      }else{

                        return "<center><input type='checkbox' class='idCheked1' name='idCheked1' id='idCheked1"+row['id_producto']+"' idProducto='"+row['id_producto']+"' descripcionComercial='"+row['descripcionComercial']+"' codigo='"+row['codigoCalzadoImplemento']+"' descripcionArancelario='"+row['descripcionArancelario']+"' marca='"+row['marca']+"' modelo='"+row['modelo']+"' item='"+row['item']+"' codigoArancelario='"+row['codigoArancelario']+"' disciplina='"+row['disciplinaDeportiva']+"'></center>";

                      }

                      return "<center><input type='checkbox' class='idCheked1' name='idCheked1' id='idCheked1"+row['id_producto']+"' idProducto='"+row['id_producto']+"' descripcionComercial='"+row['descripcionComercial']+"' codigo='"+row['codigoCalzadoImplemento']+"' descripcionArancelario='"+row['descripcionArancelario']+"' marca='"+row['marca']+"' modelo='"+row['modelo']+"' item='"+row['item']+"' codigoArancelario='"+row['codigoArancelario']+"' disciplina='"+row['disciplinaDeportiva']+"'></center>";

                    }else{

                        return "<center><input type='checkbox' name='' style='display:none'></center>";


                    }

 
                }

            },

 

        ]
});

 btener_data_CatalogoHistorial("#tablaCatalogoHistorial tbody",tableCatalogoHistorial);

 obtener_data_chekedsHistorial("#tablaCatalogoHistorial tbody",tableCatalogoHistorial);

obtener_data_califica__checkeds("#tablaCatalogoHistorial tbody",tableCatalogoHistorial);


/*=====  End of Crear los métodos para después ejecturarlos  ======*/



/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tableCatalogoHistorial.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/


}

/*========================================
=             Obtener chekeds            =
========================================*/

var arrayCodigo1=new Array();

var arrayMarca1=new Array();

var arrayModelo1=new Array();

var arrayDisciplina1=new Array();

var arrayIdProducto1=new Array();

var arrayItem1=new Array();

var arraycodigoAran1=new Array();

var arraydescripcionAran1=new Array();

var arraydescripcionComercial1=new Array();

var obtener_data_chekedsHistorial=function(tbody,table){

  $(tbody).on("click",".idCheked1",function(e)
  {

      sumador= sumador + 1;

        var data=table.row($(this).parents("tr")).data();

        var condicionesSuperadas = $(this).is(":checked");

        var codigo=$(this).attr('codigo');

        var marca=$(this).attr('marca');

        var modelo=$(this).attr('modelo');

        var disciplina=$(this).attr('disciplina');

        var idProducto=$(this).attr('idProducto');
 
        var item=$(this).attr('item');

        var codigoArancelario=$(this).attr('codigoArancelario');

        var descripcionArancelario=$(this).attr('descripcionArancelario');

        var descripcionComercial=$(this).attr('descripcionComercial');

  
            if(condicionesSuperadas){

              arrayCodigo1.push(codigo);

              arrayMarca1.push(marca);

              arrayModelo1.push(modelo);

              arrayIdProducto1.push(idProducto);

              $("#idCatalogoAbsorvido1").val(arrayIdProducto1);

              arrayItem1.push(item);

              arraycodigoAran1.push(codigoArancelario);

              arraydescripcionAran1.push(descripcionArancelario);

              arraydescripcionComercial1.push(descripcionComercial);

      
            }else{


                arrayItem1.length = 0;

                arrayCodigo1.length = 0;

                arrayMarca1.length = 0; 

                arrayModelo1.length = 0; 

                arrayDisciplina1.length = 0; 

                

                $("#itemTabla").val("");

                $("#codigo").val("");

                $("#marca").val("");

                $("#modelo").val("");

                $("#disciplina").val("");

            }
 
  });

 }

/*=====  End of   Obtener chekeds  ======*/


/*==============================================
=            método de descelección            =
==============================================*/

var obtener_data_califica__checkeds=function(tbody,table){

  $(tbody).on("click","input.seleccionaCertificado",function(e){

    var data=table.row($(this).parents("tr")).data();

    var paqueteDeDatos = new FormData();

    paqueteDeDatos.append('idProducto', $(this).attr('idproducto'));

    var destino = "funciones/funcionesActualiza/actualizaChekedsCertificados.php"; 

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
             alertify.notify("Se procedió a deseleccionar el producto", "success", 5, function(){});

          }

        },

        error: function (){ 
          alert("Algo ha fallado.");
        }

     });


  });

 }

/*=====  End of método de descelección  ======*/


/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var btener_data_CatalogoHistorial=function(tbody,table){

  $(tbody).on("click","button.editarCatalogoHistorial",function(e)
  {

        var data=table.row($(this).parents("tr")).data();
        
        var importadoItem=$("#importadoItem").val(data.item);
        var importadoCodigoArancel=$("#importadoCodigoArancel").val(data.codigoArancelario);
        var importadoCodigoCalzado=$("#importadoCodigoCalzado").val(data.codigoCalzadoImplemento);
        var importadoCantidad=$("#importadoCantidad").val(data.cantidad);
        var importadoPesoN=$("#importadoPesoN").val(data.pesoNeto);
        var importadoPesoB=$("#importadoPesoB").val(data.pesoBruto);
        var importadoValor=$("#importadoValor").val(data.valorUSD);
        var importadoDescripcion=$("#importadoDescripcion").val(data.descripcionComercial);
        var importadoDisciplina=$("#importadoDisciplina").val(data.disciplinaDeportiva);
        var importadoMarca=$("#importadoMarca").val(data.marca);
        var importadoModelo=$("#importadoModelo").val(data.modelo);
        var importadoPrecio=$("#importadoPrecio").val(data.precioUSD);
        var importadoPaisOri=$("#importadoPaisOri").val(data.PaisOrigen);
        var importadoPaisPro=$("#importadoPaisPro").val(data.PaisProcedencia);
        var importadoProveedorNombre=$("#importadoProveedorNombre").val(data.nombreProveedor);
        var importadoProveRuc=$("#importadoProveRuc").val(data.rucProveedor);
        
  });

 }




    $(document).on("ready",function(){

        $('#tablaCertiAprobadosGeneral tfoot th').each( function () {

          var title = $("#tablaCertiAprobadosGeneral tfoot th").eq($(this).index()).text();

           
            if (title=="Editar") {

              $(this).html('');

            }else{

              $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

            }

        }); 
        listarCalificaGeneral();
    }); 
    var listarCalificaGeneral=function(){

       var tableCalificaGeneral=$("#tablaCertiAprobadosGeneral").DataTable({
 
              "language": 

                {
                    "sProcessing":     "Procesando...",
                    "sLengthMenu":     "Mostrar _MENU_ registros",
                    "sZeroRecords":    "No se encontraron resultados",
                    "sEmptyTable":     "Ningún dato disponible en esta tabla",
                    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
                    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
                    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix":    "",
                    "sSearch":         "Buscar:",
                    "sUrl":            "",
                    "sInfoThousands":  ",",
                    "sLoadingRecords": "No existen datos",
                    "oPaginate": 
                    {
                      "sFirst":    "Primero",
                      "sLast":     "Último",
                      "sNext":     "Siguiente",
                      "sPrevious": "Anterior"
                      },
                      "oAria": 
                      {
                      "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                      "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                      }
                },
                /*==================================
                =            Exportador            =
                ==================================*/
                
                   dom: 'Bfrtip',

                   buttons: {

                      dom:{
                          container:{
                            tag:'div',
                            className:'flexcontent__administrador'
                          },
                          buttonLiner: {
                            tag: null
                          }
                      },

                      buttons: [


                            {
                                      extend:    'excelHtml5',
                                      text:      '<i class="fa fa-file-excel-o"></i>Excel',
                                      title:'Listado de Especialidades',
                                      titleAttr: 'Excel',
                                      className: 'export excel',
                                      exportOptions: {
                                          columns: [0,1,2,3,4,5]
                                      },
                            }

                      ]



                    },
                
                /*=====  End of Exportador  ======*/
                        "pagingType": "full_numbers",
                        "sScrollY": "400px",
                        "Paginate": true,
                        "scrollX": true,
                        "pagingType": "full_numbers",
                        "ajax":{
                          "method":"POST",
                          "url":"funciones/datatables/llamarEmisionCertificado.php", 
                         

                        },
                        "columns":[

                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['fechaEmision']+"</div>";

                                  }

                              },

                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['fechaAprueba']+"</div>";

                                  }

                              },


                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['nombreEmpresa']+"</div>";

                                  }

                              },

                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['ruc']+"</div>";

                                  }

                              },

                              {"render":

                                  function ( data, type, row ) {

                                      return "<div style='font-size:12px'>"+row['codigoGenera']+"</div>";

                                  }

                              },
                              

                              {"render":

                                  function ( data, type, row ) {

                                      return "<button class='edicionCalificaGeneral alineacion__de__elemento btn btn-info' data-toggle='modal' data-target='#edicionCalificaGeneral '><i class='fas fa-edit'></i></button"; 

                                  }

                              }

                          ]
             });
            obtener_data_CalificaGeneral("#tablaCertiAprobadosGeneral tbody",tableCalificaGeneral);

            /*=====  End of Crear los métodos para después ejecturarlos  ======*/
            /*===============================================================
            =            Realizar las busquedas por cada columna            =
            ===============================================================*/
              tableCalificaGeneral.columns().every(function(){
                    
                    var datatableColumn = this;

                    var serachTetBoxes=$(this.footer()).find('input');
                  
                    serachTetBoxes.on('keyup change',function(){

                      datatableColumn.search(this.value).draw();

                    });

                    serachTetBoxes.on('click', function (e){

                      e.stopPropagation();

                    });
              });

            /*=====  End of Realizar las busquedas por cada columna  ======*/
    }

    /*================================================================
    =            Realizar las ejecuciones por cada metodo            =
    ================================================================*/

    var obtener_data_CalificaGeneral=function(tbody,table){

      $(tbody).on("click","button.edicionCalificaGeneral",function(e){

            var data=table.row($(this).parents("tr")).data();

            var nomFoto=$("#nomFoto").val(data.documentoCertificado);
            $("#verCertificado").attr('src','images/certificadosEmitidos/'+$("#nomFoto").val()+'.pdf')
          

             });
    }


/*===========================================
=           catalogoTodos Corregir Marca             =
===========================================*/
       
$(document).on("ready",function(){

    $('#tablaCorregirMarca tfoot th').each( function () { 

      var title = $("#tablaCorregirMarca tfoot th").eq($(this).index()).text();

       
        if (title=="Editar") {

          $(this).html('');

        }else{

          $(this).html('<input class="columna__tabla" type="text" placeholder="Buscar por '+title+'"/>');

        }

    });

  listarCorregirMarca();

});

var listarCorregirMarca=function(){

   var tableCorregirMarca=$("#tablaCorregirMarca").DataTable({

          "language": 
        {
        "sProcessing":     "Procesando...",
        "sLengthMenu":     "Mostrar _MENU_ registros",
        "sZeroRecords":    "No se encontraron resultados",
        "sEmptyTable":     "Ningún dato disponible en esta tabla",
        "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
        "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
        "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix":    "",
        "sSearch":         "Buscar:",
        "sUrl":            "",
        "sInfoThousands":  ",",
        "sLoadingRecords": "No existen datos",
        "oPaginate": 
        {
          "sFirst":    "Primero",
          "sLast":     "Último",
          "sNext":     "Siguiente",
          "sPrevious": "Anterior"
          },
          "oAria": 
          {
          "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
          }
      },
      //Esxportador 


      "pagingType": "full_numbers",
      "sScrollY": "400px",
      "Paginate": true,
      "scrollX": true,
      "pagingType": "full_numbers",
      "ajax":{
      "method":"POST",
      "url":"funciones/datatables/marcasGlosarioCorregir.php", 
      "data": {
                      "idImportador": $("#idImportador").val()
                }
      },
      "columns":[

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['nombreMarcaAdiciona']+"</div>";

            }

          },      

          {"render":

            function ( data, type, row ) {

              return "<div style='font-size:12px'>"+row['Observacion']+"</div>";

            }

          },

          {"render":

            function ( data, type, row ) {

              return "<button class='edicionCorregirMarca alineacion__de__elemento btn btn-success'  data-dismiss='modal'  data-toggle='modal' data-target='#edicionCorregirMarca '><i class='fas fa-edit'></i></button"; 

            }

          }


        ]
});

 obtener_data_CorregirMarca("#tablaCorregirMarca tbody",tableCorregirMarca);

/*=====  End of Crear los métodos para después ejecturarlos  ======*/



/*===============================================================
=            Realizar las busquedas por cada columna            =
===============================================================*/

  tableCorregirMarca.columns().every(function(){
        
        var datatableColumn = this;

        var serachTetBoxes=$(this.footer()).find('input');
      
        serachTetBoxes.on('keyup change',function(){

          datatableColumn.search(this.value).draw();

        });

        serachTetBoxes.on('click', function (e){

          e.stopPropagation();

        });

  });

/*=====  End of Realizar las busquedas por cada columna  ======*/


}

/*================================================================
=            Realizar las ejecuciones por cada metodo            =
================================================================*/

var obtener_data_CorregirMarca=function(tbody,table){

  $(tbody).on("click","button.edicionCorregirMarca",function(e)
  {

        var data=table.row($(this).parents("tr")).data();

        
        // var idProducto=$("#idProducto").val(data.id_producto);
        // var CodigoImplemento=$("#CodigoImplemento").val(data.codigoCalzadoImplemento);
   
      
        
  });

 }

/*=====  End of catalogoTodos Corregir Marca   ======*/