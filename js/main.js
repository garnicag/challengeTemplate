(function() {
	$('.activeTask').children('i.status').addClass('glyphicon-chevron-right');
	$('.cancelledTask').children('i.status').addClass('glyphicon-remove');
	$('.completedTask').children('i.status').addClass('glyphicon-ok');

	if ($('ul.todoList li input[type=checkbox]').is(':checked'), true) {
			$(this).parent('div').addClass('cheeba');
			console.log('done with');
	};

	$('ul.todoList li input[type=checkbox]').change(function() {

		$(this).parent('li').toggleClass('completedTask', $(this).is(':checked'));
		$(this).siblings('input[type=text]').toggleAttr('disabled');

	});

}());