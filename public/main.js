$(document).ready(function() {

	init();

	$("#btnPush").click(function() {

		var elem = $("#ipPush").val();
		if(elem=="" || elem==null){
			alert("insert number before push");
			return;
		}

		$.ajax({
			url: '/api/push/'+elem,
			type: 'GET',
			data: {}
		}).done(function(response) {
			printState(response);
		});
	});

	$("#btnPop").click(function() {

		$.ajax({
			url: '/api/pop',
			type: 'GET',
			data: {}
		}).done(function(response) {
			printState(response);
		});
	});

	function init() {
		$.ajax({
			url: '/api/init',
			type: 'GET',
			data: {}
		}).done(function(response) {
			printState(response);
		});
	}

	function printState(arrElem) {
		$("#viewState").html(arrElem.toString());
	}
});