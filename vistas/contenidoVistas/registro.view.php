<div class="wrapper row3">

  <main class="container clear"> 

  	<div class="contenedor__principal">

      <table style="border: hidden;">
        <tr>
          <td>
            <div class="form-group ">
              <label>Ingrese Número de RUC</label>
                  <div class="input-group">

                      <input type="text" class="form-control"  name="cedula" id="cedula" required="" placeholder="Ingrese Número de Identificación RUC">
                      <span class="input-group-addon" id="verificarcedula"><i class="fa fa-search"></i>  Buscar</span>
                       <span class="input-group-addon"><i class="fa fa-user"></i></span>
              
                  </div>
              </div>
          </td>
          <td style="width: 50%">
            <br> <center><img src="imagesExtra/124.png" style="width: 10%" id="imagenNiega" name="imagenNiega"></center>
                 <center><img src="imagesExtra/145.png" style="width: 10%" id="imagenAcepta" name="imagenAcepta"></center>
          </td>
        </tr>
      </table>
              <label>Actividad Economica Principal</label>

              <textarea class="form-control" name="nombreRaSocial" rows="10" id="nombreRaSocial" placeholder="Actividad Economica Principal"></textarea>
          <div class="form-group usuario__validacion">
            <label>Razón Social</label>
            <div class="input-group">
              <span class="input-group-addon"><i class="fa fa-building"></i></span>
                <input class="form-control inpunt-lg" type="text" name="descripcionRaSocial" id="descripcionRaSocial" placeholder="Descripción de Razon Social">
            </div>
          </div>
          <br>
      <center><button type="submit" name="siguiente" id="siguiente" class="btn btn-info" data-toggle='modal' data-target='#agregarUsuario'>Siguiente  <i class="fa fa-chevron-right"></i></button></center>
  	</div>

    

  </main><br><br><br><br>

</div>


<div id="agregarUsuario" class="modal" role="dialog" tabindex="-1" aria-labelledby="myModalLabel">

  <div class="modal-dialog modal-lg">

    <div class="modal-content">


      <div class="modal-header" style="background: #3c8dbc; color: white">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Registro de Usuario</h4>
      </div>
      
      <div class="modal-body">
      
        <div class="box-body">
      
          <div class="form-group">
              <table style="border: hidden;">
                <tr>
                  <td>
                     <label>Nombres y Apellidos</label>
                  </td>
                  <td colspan="2">
                   
                      
                       
                        <input class="form-control  inpunt-lg" type="text" name="nombreUsuario" id="nombreUsuario" placeholder="Nombres y Apellidos">
                      
                  </td>
                </tr>

                <tr>
                  
                  <td>
                     <label>Email</label>
                      <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-envelope"></i></span>
                        <input class="form-control inpunt-lg" type="text" name="email" id="email" required="" placeholder="Ingrese Email">
                      </div>
                  </td>
                  <td>
                    <label>Telefono</label>
                      <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-phone"></i></span>
                        <input class="form-control inpunt-lg" type="text" name="telefono" id="telefono" required="" placeholder="Ingrese Telefono">
                      </div>
                  </td>
                  <td>
                    <label>Celular</label>
                      <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-mobile"></i></span>
                        <input class="form-control inpunt-lg" type="text" name="celular" id="celular" required="" placeholder="Ingrese Celular">
                      </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>Usuario</label>
                      <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-user"></i></span>
                          <input class="form-control inpunt-lg" type="text" name="usuario" id="usuario" required="" placeholder="Usuario">
                       </div> 
                  </td>
                  <td>
                     <label>Contraseña</label>
                      <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-key"></i></span>
                          <input class="form-control inpunt-lg" type="password" name="password" id="password" required="" placeholder="Contraseña">
                      </div>
                  </td>
                  <td>
                     <label>Repetir Contraseña</label>
                      <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-key"></i></span>
                          <input class="form-control inpunt-lg" type="password" name="password2" id="password2" required="" placeholder="Repetir Contraseña">
                      </div>
                  </td>
                </tr>
              
                </div>
              </table>  
              <center>
                <button type="submit" name="registrarse" id="registrarse" class="btn btn-success"><i class="fa fa-hdd-o"></i> Registrarse </button>
              </center>
          </div>
        
        </div>
      
      </div>

    </div>
  
  </div>

</div>