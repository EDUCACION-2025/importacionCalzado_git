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
          
          var nombreFoto = $("#nomFoto").val();
          nombreFoto = nombreFoto.toLowerCase().endsWith('.jpg') ? nombreFoto : nombreFoto + '.jpg';
          
          $(".anadir_foto").attr('src', 'images/imagenesCatalogo/' + nombreFoto);
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
                                      image:'data:image/png;base64,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',
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

                                                text:'Generado por:  '+$("#nombreIntregrado").val()+"                                                      "+"             Aprobado por: LUIS FABIÁN ARMIJOS SAMANIEGO "+"\n"+"\n"+"Nota:  "+"“El Ministerio del Deporte es el ente encargado de revisar y aprobar calzado e implementos deportivos especializados, mas no de revisar o dar seguimiento al proceso de importación de las empresas importadoras que, conforme a lo que establece la normativa legal vigente, es el Servicio Nacional de Aduana del Ecuador. Los temas referentes al control de las importaciones y otros derivados recaerán sobre la institución correspondiente.",

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
           { "data": "id_producto", "visible": false },  
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


        ],
        "order": [[0, "desc"]]
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
          $(".anadir_foto").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'.jpg')
          $("#lulitaEtiquetada").hide();

        }else{

          $("#imagg").show();
          $(".anadir_foto").attr('src','images/imagenesCatalogo/'+$("#nomFoto").val()+'.jpg')
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