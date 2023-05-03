$(document).ready(function()
{ 
	$(".electro").on("click",function()
	{
		//alert("hola");
		$(".electronicos").show(400);
		$(".cosmeticos").hide(400);
		$(".calzado").hide(400);
		$(".accesorios").hide(400);
		$(".libros").hide(400);
		$(".ropa").hide(400);
	});

	$(".cos").on("click",function()
	{
		//alert("hola");
		$(".cosmeticos").show(500);
		$(".electronicos").hide(400);
		$(".calzado").hide(400);
		$(".accesorios").hide(400);
		$(".libros").hide(400);
		$(".ropa").hide(400);
	});

	$(".rop").on("click",function()
	{
		//alert("hola");
		$(".ropa").show(400);
		$(".cosmeticos").hide(400);
		$(".calzado").hide(400);
		$(".accesorios").hide(400);
		$(".libros").hide(400);
		$(".electronicos").hide(400);
	});

	$(".lib").on("click",function()
	{
		//alert("hola");
		$(".libros").show(400);
		$(".cosmeticos").hide(400);
		$(".calzado").hide(400);
		$(".accesorios").hide(400);
		$(".electronicos").hide(400);
		$(".ropa").hide(400);
	});

	$(".acc").on("click",function()
	{
		//alert("hola");
		$(".accesorios").show(400);
		$(".cosmeticos").hide(400);
		$(".calzado").hide(400);
		$(".electronicos").hide(400);
		$(".libros").hide(400);
		$(".ropa").hide(400);
	});

	$(".cal").on("click",function()
	{
		//alert("hola");
		$(".calzado").show(400);
		$(".cosmeticos").hide(400);
		$(".electronicos").hide(400);
		$(".accesorios").hide(400);
		$(".libros").hide(400);
		$(".ropa").hide(400);
	});

	$(".electro").on("click",function()
	{
		//alert("hola");
		$(".electronicos").show(400);
		$(".cosmeticos").hide(400);
		$(".calzado").hide(400);
		$(".accesorios").hide(400);
		$(".libros").hide(400);
		$(".ropa").hide(400);
	});

	$(".all").on("click",function()
	{
		//alert("hola");
		$(".divproducts").show(400);

	});




	var conteocarrito = 0;

	$(".agregar").click(function(){
		conteocarrito++;
			$("#numerocarrito").text(conteocarrito);
	});






	$(".busca").on("click",function(){

		var buscador = $(".searchheader").val();

		if (buscador == electronicos)
		 {
		 	$(".electronicos").show(400);
		$(".cosmeticos").hide(400);
		$(".calzado").hide(400);
		$(".accesorios").hide(400);
		$(".libros").hide(400);
		$(".ropa").hide(400);
		 }
		 else{
		 	$(".divproducts").show(400);
		 }
	});

		// Obtener el campo de fecha y hora
		var dateTimeField = $('#fechayhora');
	  
		// Actualizar el campo de fecha y hora cada segundo
		setInterval(function() {
		  var date = new Date();
		  var dateString = date.toLocaleDateString();
		  var timeString = date.toLocaleTimeString();
		  dateTimeField.val(dateString + ' ' + timeString);
		}, 1000);
	  
		// Manejar el envío del formulario
		$('#commentarioform').submit(function(event) {
		  event.preventDefault(); // prevenir que se envíe el formulario por defecto
	  
		  // Obtener los valores de los campos del formulario
		  var name = $('#nombrre').val();
		  var comment = $('#commentario').val();
		  var dateTime = $('#fechayhora').val();
	  
		  // Crear un nuevo elemento de comentario
		  var newComment = $('<div>').addClass('comment1');
		  var commentHeader = $('<div>').addClass('comment-title');
		  var commentAutor = $('<h4>').addClass('comment-autor').text('Autor:  ' + name);
		  var commentFecha = $('<span>').addClass('comment-fecha').text('Fecha:  ' + dateTime);
		  var commentTexto = $('<p>').addClass('comment-texto').text('"' + comment + '"');
	  
		  // Agregar el encabezado y el contenido del comentario al elemento de comentario
		  commentHeader.append(commentAutor).append(commentFecha);
		  newComment.append(commentHeader).append(commentTexto );
	  
		  // Agregar el nuevo comentario al contenedor de comentarios y restablecer el formulario
		  $('#commentarios').prepend(newComment);
		  $('#commentarioform')[0].reset();
		});
	  
});