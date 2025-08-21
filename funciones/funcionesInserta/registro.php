<?php
	require_once "../../conexion/conexion.php";

	$conexionRecuperada= new conexion();
 	$conexionEstablecida=$conexionRecuperada->cConexion();

	extract($_POST);

	$query4="SELECT DISTINCT usuario from ic_usuario where usuario = '$usuario';";
	$resultado4 = $conexionEstablecida->query($query4);

	while($buscarUsuario = $resultado4->fetch()) {
		$usuarioRecuperado = $buscarUsuario['usuario'];
	}

	if (empty($cedula) || empty($nombreRaSocial) || empty($descripcionRaSocial)) {

		$mensaje=2;
		$jason['mensaje']=$mensaje;
		echo json_encode($jason);

	}else{

		if ($usuarioRecuperado=='$usuario') {
				$mensaje=3;
				$jason['mensaje']=$mensaje;
				echo json_encode($jason);
			}else{

				date_default_timezone_set("America/Guayaquil");

				$fecha_actual = date('Y-m-d');

				$passwordCodificado=sha1($passwordUsuario);

				$query="INSERT INTO `ezonshar_mdepsaddb`.`ic_usuario`(`id_Actor`, `ruc`, `actividadEconomica`, `RasonSocial`, `usuario`, `password`, `email`, `telefono`, `celular`, `fechaInscripcion`, `estadoActor`) VALUES (NULL, '$cedula', '$nombreRaSocial', '$descripcionRaSocial', '$usuario', '$passwordCodificado', '$email', '$telefono', '$celular', '$fecha_actual', 'A');";

				$resultado = $conexionEstablecida->exec($query);

				$query2="SELECT MAX(id_Actor) AS idMaximo FROM ic_usuario;";
				$resultado2 = $conexionEstablecida->query($query2);

				while($registro = $resultado2->fetch()) {

					$idMaximoRecuperado=$registro['idMaximo'];

				}

				$query3="INSERT INTO `ezonshar_mdepsaddb`.`ic_usuario_roles`(`id_usuarios_roles`, `id_usuario`, `id_rol`, `estado`) VALUES (NULL, '$idMaximoRecuperado', '3', 'A');";



				$resultado3 = $conexionEstablecida->query($query3);


				$mensaje=1;
				$jason['mensaje']=$mensaje;
				echo json_encode($jason);

			}


		

	}


