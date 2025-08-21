<?php  
	ob_start(); 
	extract($_POST);
	$anio = date('Y');
	$mes=date('M');
	$dia=date('d');;
?>

<style type="text/css">

.contenido__principal{
  background-image: url('../images/.png');
  opacity: 0.8;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;   
  	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: -7px -7px;
}

	
.contenido__principal{
	width: 150%;
	position: relative;
	/*left: -4%;
	right: : -5%;*/
	height: 100%;
}

.contenedor__imagen__logo{
	position: relative;
	left: 30%;
}

.titulo__del__sistema__poa{
	font-size: 25px;
	font-weight: bold;
	position: relative;
	/*left: 41%;*/
}

.titulo__del__sistema__poa__segundo{
	font-size: 12px;
	position: relative;
	top: -3px;
	left: 40%;
}

.titulo__del__sistema__poa__tercero{
	position: relative;
	left: 2%;
	font-size: 15px;
	font-weight: bold;
	margin-top:40px;
	margin-bottom: 10px;
}

.tabla__contenedora__contenedios{
	width: 110%;
}

.datos__centrados__de__filas{
	font-size: 18px;
	font-weight: bold;
	color: #212121;
}

.letras__de__filas{
	font-size: 17px;
	color: #212121;
}

.dando__acento__a__la__firma{
	font-weight: bold;
}

.tabla__movible{
	width: 66%;
}

.contenedor__de__palabras2{

    font-size: xx-small;
}


</style>


<div class="contenido__principal">
	<br><br><br><br><br>
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label> "Formulario de solicitud para la Importación de Calzado e Implementos Deportivos Especializado"</label>
	<br><br>

	<table border="0" cellspacing=0 cellpadding=2 bordercolor="666633"  class="tabla__movible">
	<tr>
		<td style="width: 10%">Fecha:</td>
		<td style="width: 25%"><input type="text" name="" value="<?php echo $dia; ?> / <?php echo $mes; ?> / <?php echo $anio; ?>"></td>
		<td style="width: 10%">Codigo</td>
		<td style="width: 25%"><input type="text" name="" value=""></td>
	</tr>
	</table><br><br>

	<table border="1" cellspacing=0 cellpadding=2 bordercolor="666633"  class="tabla__movible">
	<tr>
		<td style="width: 65%">
			<label>Nombre y Razón Social del Importador:</label>
		</td>
		<td>
			<input type="" name="" id="" class="form-control" value="">
		</td>
	</tr>
	<tr>
		<td>
			<label>Número de Cedula de ciudadania y RUC del Importador:</label>
		</td>
		<td>
			<input type="" name="" id="" class="form-control" value="">
		</td>
	</tr>
	</table>

	<br><br>	

	<table border="1" cellspacing=0 cellpadding=2 bordercolor="666633"  class="tabla__movible">
	<tr>
		<td class="contenedor__de__palabras2"><center>ITEM</center></td>
		<td class="contenedor__de__palabras2"><center>Código Arancelario</center></td>
		<td class="contenedor__de__palabras2"><center>Código de Calzado e <br/>Implementos Especializados</center></td>
		<td class="contenedor__de__palabras2"><center>Cantidad<br/> (Pares/Unidades)</center></td>
		<td class="contenedor__de__palabras2"><center>Peso Neto</center></td>
		<td class="contenedor__de__palabras2"><center>Peso Bruto</center></td>
		<td class="contenedor__de__palabras2"><center>Valor en USD FOB</center></td>
		<td class="contenedor__de__palabras2"><center>Descripción <br/>Comercial</center></td>
		<td class="contenedor__de__palabras2"><center>Disciplina Deportiva /<br/>Actividad Física</center></td>
		<td class="contenedor__de__palabras2"><center>Marca</center></td>
		<td class="contenedor__de__palabras2"><center>Modelo</center></td>
		<td class="contenedor__de__palabras2"><center>Precio USD (FOB/PAR O FOB/UNIDAD)</center></td>
		<td class="contenedor__de__palabras2"><center>País de Origen</center></td>
		<td class="contenedor__de__palabras2"><center>País de Procedencia:</center></td>
		<td class="contenedor__de__palabras2"><center>Nombre/Razòn Social/ del Proveedor:</center></td>
		<td class="contenedor__de__palabras2"><center>Número de identificación/RUC del Proveedor:</center></td>
	</tr>
	</table>

</div>


<?php
// Cargamos la librería dompdf que hemos instalado en la carpeta dompdf

require_once '../dompdf/autoload.inc.php';

use Dompdf\Dompdf;

// Instanciamos un objeto de la clase DOMPDF.
$pdf = new DOMPDF();
 
// Definimos el tamaño y orientación del papel que queremos.
$pdf->set_paper('a4','landscape');
//$pdf->set_paper(array(0,0,104,250));
 
// Cargamos el contenido HTML.
$pdf->load_html(ob_get_clean());
 
// Renderizamos el documento PDF.
$pdf->render();
 
// obtener el valor generado
$pdfGeneerado= $pdf->output();

// Enviamos el fichero PDF al navegador.
$pdf->stream('reportePdf.pdf');


?>