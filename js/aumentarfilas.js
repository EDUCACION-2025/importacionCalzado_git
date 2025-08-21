$(document).ready(function () {

	sumador=0;

	$(".aumentar").on("click", function (e){


		sumador= sumador + 1;

		$(".mercaderiaTabla").append('<tr><td><input id="luly'+sumador+'" class="form-control"></td></tr>');

	});

});