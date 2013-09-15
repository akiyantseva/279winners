	$(document).ready(function() {

		$('img').mapster({
		render_highlight: {
			fillOpacity: 0.4,
			fillColor: "FFFFFF",

        },
		fillOpacity: 0.1,
        fillColor: "000000",
    	});

    	$("#home").click(function() {
			$('#ribbon').load('home.html');
		});

    	$("#layout").click(function() {
			$('#ribbon').load('layout.html');
		});

		$("#document-elements").click(function() {
			$('#ribbon').load('document-elements.html');
		});

		$("#tables").click(function() {
			$('#ribbon').load('tables.html');
		});

    	$("#charts").click(function() {
			$('#ribbon').load('charts.html');
		});

    	$("#smartart").click(function() {
			$('#ribbon').load('smartart.html');
		});

    	$("#review").click(function() {
			$('#ribbon').load('review.html');
		});

	});