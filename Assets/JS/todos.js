

$("ul").on("dblclick", "li", function(){
						$(this).toggleClass("completed");
					});

$("ul.secList").on("click", "li.secTask", function(){
						$(this).toggleClass("completed");
					});


$("ul").on("click", "span", function(){
						$(this).parent().fadeOut(500, function(){
														$(this).remove()});
						event.stopPropagation();
					});

$("input[type='text'].NewMainTask").keypress(function(event){
	if(event.which === 13) {
		//grabing the value entered
		var todoText = $(this).val();
		$(this).val("");
		//add the new todo
		$("ul.mainList").append("<li class='mainTask'><span><i class='far fa-trash-alt'></i></span> " + todoText + "<ul class='secList'><input class='NewSecTask' type='text' placeholder='new seconday todo'></ul></li>")
	}
});

$("ul.mainList").on("keypress", "input[type='text'].NewSecTask", function(event){
	if(event.which === 13) {
		//grabing the value entered
		var todoText = $(this).val();
		$(this).val("");
		//add the new todo
		$(this).parent().append("<li class='secTask'><span><i class='far fa-trash-alt'></i></span>" + todoText + "</li>")
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
});
