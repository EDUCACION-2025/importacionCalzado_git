<?php

/*==============================================
=            Controlando el ingreso            =
==============================================*/

	class ControladorIngreso{


		/*=======================================
		=            Ingreso General            =
		=======================================*/
		
		public static function ctrIngreso(){

			$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();


			if (isset($_POST["ingresarUsuario"])) {

				if (empty($_POST["usuario"]) || empty($_POST["password"])) {

 					echo '<script>

 								$(".agrupador__elementos__inicio").addClass("error");

						          swal({
						            type: "error",
						            title: "Porfavor ingrese usuario y contraseña",
						            showConfirmButton: true,
						            confirmButtonText: "Cerrar"
						          });

				        	</script>'; 

 				}else{

					$password2=sha1($_POST["password"]);

					$query = $conexionEstablecida->prepare("SELECT a.usuario, a.`password` AS contrasena, b.estado, b.id_rol FROM ic_usuario AS a INNER JOIN ic_usuario_roles AS b ON a.id_Actor=b.id_usuario  INNER JOIN ic_roles AS c ON b.id_rol=c.id_rol WHERE a.usuario=:usuario AND a.`password`=:password AND b.estado='A' AND a.estadoActor='A';");
					$query->execute(array('usuario'=>htmlentities(trim($_POST["usuario"]), ENT_QUOTES),'password'=>htmlentities(trim($password2), ENT_QUOTES)));

					while($registro = $query->fetch()) {

						$usuarioReferenciado=$registro['usuario'];
						$password=$registro['contrasena'];
						$estado=$registro['estado'];
						$rol=$registro['id_rol'];

					
					}

					
					if ($usuarioReferenciado && $password && $estado && $rol==3) {
						
						session_start();

						$_SESSION["iniciarSesion"]="ok";
						$_SESSION["nombre"]=$usuarioReferenciado;
						$_SESSION['testing'] = time(); 
						    
						echo '<script>window.location="ingresoDocumentos"</script>';

					}else if ($usuarioReferenciado && $password && $estado && $rol==2) {
						
						session_start();

						$_SESSION["iniciarSesion"]="ok";
						$_SESSION["nombre"]=$usuarioReferenciado;
						$_SESSION['testing'] = time(); 
						    
						echo '<script>window.location="registroUsuarios"</script>';

					}else if($usuarioReferenciado && $password && $estado){

								if ($usuarioReferenciado && $password && $estado && $rol==4) {
								
								session_start();

								$_SESSION["iniciarSesion"]="ok";
								$_SESSION["nombre"]=$usuarioReferenciado;
								$_SESSION['testing'] = time(); 
								    
								echo '<script>window.location="certificadosTecniAprobados"</script>';

								}else{

									echo '<script>

			 								$(".agrupador__elementos__inicio").addClass("error");

									          swal({
									            type: "error",
									            title: "El área o especialidad a la que esta ingresando no es la que le corresponde",
									            showConfirmButton: true,
									            confirmButtonText: "Cerrar"
									          });

							        	</script>'; 

								}


					}else{


	 					echo '<script>

	 								$(".agrupador__elementos__inicio").addClass("error");

							          swal({
							            type: "error",
							            title: "Usuario o Contraseña no validos",
							            showConfirmButton: true,
							            confirmButtonText: "Cerrar"
							          });

					        	</script>'; 


					}
				
 				}

			}


		}

		
		/*=====  End of Ingreso General  ======*/

	}

/*=====  End of Controlando el ingreso  ======*/
