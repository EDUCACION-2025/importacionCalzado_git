<?php 
  $nombreObjeto= new  recuperandoDatosDeLogeo();
  $IdCompletoUsuario=$nombreObjeto->recuperandoid();
  $NombreUsuario=$nombreObjeto->recuperandoRazonSocial();
?>

<div class="wrapper row3">
    <br><center><label>Importador: <?php   echo $NombreUsuario; ?></label>
  <div class="contenedor__tablas contenedor__tablas__polifacetico__usuarios" style="width:90%;">
  
  </div>

</div>