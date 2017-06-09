(function () {
	$("#public").click(function () {
		let imgSrc = $('#public').attr('src');
		$('#mask').addClass('open');
		$('#zoom').attr('src', imgSrc);
	});
	$('#mask').click(function () {
		$('#mask').removeClass('open');
	});
	$('#wechat').click(function () {
		let imgSrc = $('#wechat').attr('src');
		$('#mask').addClass('open');
		$('#zoom').attr('src', imgSrc);
	});
}());