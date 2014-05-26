$(document).ready(function() {
	$('.question p').on('click', function() {
		var $this = $(this), //параграф .question
			parent = $this.parent('.question');

		parent.children('p.wrong').hide(); //Скрыть неправильные ответы

		if ( $this.hasClass('right') ) {
			parent.addClass('right-answer')
				.children('p.right')
				.replaceWith('<span>' + $this.text() + '</span>');
		} else {
			parent.addClass('wrong-answer')
				.children('p.right')
				.replaceWith('<span>' + parent.children('p.right').text() + '</span>');//заменить параграф на span с правильным ответом
		};
	});

	$('.check-answers').on('click', function() {
		var right = $(document).find('.right-answer'),
			wrong = $(document).find('.wrong-answer');
		alert('Правильных ответов: ' + right.length + '; ' + 'Не правильных: ' + wrong.length);
	});	
});