$(document).ready(function()
{ 
	$(".electro").on("click",function()
	{
		
		$(".electronicos").show(400);
		$(".cosmeticos").hide(400);
		$(".calzado").hide(400);
		$(".accesorios").hide(400);
		$(".libros").hide(400);
		$(".ropa").hide(400);
	});

	$(".cos").on("click",function()
	{
	
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

	  	$(".productsbar").on("click",function()
	{

		$(".electro").show()
		var electronicos=$(this).text();

		$(".titulom").text(electronicos);
	});	

	  	  	$(".productsbar2").on("click",function()
	{

		$(".all").show()

		$(".titulom").text("");
	});



	$("#login-form-link").click(function(e) {
		$("#register-formm").animate({ opacity: "hide" }, "fast", function() {
		  $("#login-formm").animate({ opacity: "show" }, "slow");
		});
		e.preventDefault();
	  });
	
	  $("#register-form-link").click(function(e) {
		$("#login-formm").animate({ opacity: "hide" }, "fast", function() {
		  $("#register-formm").animate({ opacity: "show" }, "slow");
		});
		e.preventDefault();
	  });
	  
		$("#login-formm").submit(function(e) {
		  // Realizar acciones de inicio de sesión aquí
		  e.preventDefault();
		});
	  
		$("#register-formm").submit(function(e) {
		  // Realizar acciones de registro aquí
		  e.preventDefault();
	  });
	  





	 
		$('.panel-icon').click(function(e) {
		  e.stopPropagation(); // Evita que se propague el evento de clic al hacer clic en el icono
	  
		  var panel = $(this).parent('.panel');
		  panel.find('.panel-content').toggleClass('active');
		});
	  
		$(document).click(function() {
		  $('.panel-content').removeClass('active');
		});
	  
		$('.panel').click(function(e) {
		  e.stopPropagation(); // Evita que se cierre el panel al hacer clic dentro del panel
		});

		
		
			// var total = 0;
			// var datosProductos = "";
		  
			// $(".divproducts").each(function() {
			//   var nombreProducto = $(this).find(".subdivproducts1").text();
			//   var precioTexto = $(this).find("#objectprice").text();
			//   var precio = parseFloat(precioTexto.replace("$", ""));
		  
			//   if (!isNaN(precio)) {
			// 	total += precio;
			// 	datosProductos += "<p>" + nombreProducto + " - $" + precio.toFixed(2) + "</p>";
			//   }
			// });
		  
			// $(".totalprice").text("Total: $" + total.toFixed(2));
			// $(".panel-content").html(datosProductos);
		  
		
				var carrito = [];
			  
				$(".agregar").click(function() {
				  var producto = $(this).closest(".divproducts");
				  var nombre = producto.find(".nombres").text();
				  var precioTexto = producto.find("#objectprice").text();
				  var precio = parseFloat(precioTexto.replace("$", ""));
			  
				  if (!isNaN(precio)) {
					carrito.push({ nombre: nombre, precio: precio });
					actualizarCarrito();
				  }
				});
			  
				function actualizarCarrito() {
				  var total = 0;
				  var datosProductos = "";
			  
				  for (var i = 0; i < carrito.length; i++) {
					var producto = carrito[i];
					total += producto.precio;
					datosProductos += "<p class='datosp'>" + producto.nombre + " - $" + producto.precio + "<button class='delete'>"+"X" +"</button>"+ "</p>";
				  }
			  
				  $(".totalprice").text();
				  $(".panel-content").html(datosProductos);
				}	
			  










});


