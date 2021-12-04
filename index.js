let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow >= 18) {
    greeting = 'Good evening!';
} else if (hourNow >= 12) {
    greeting = 'Good afternoon!';
} else if (hourNow <= 12) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');


function popupOpenClose(popup) {

	$(popup).show();
    
	$(popup).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open]").on("click", function() {
        $(".fullscreen-container").fadeTo(200, 1);
		popupOpenClose($(".popup"));
        
	});
});

function popupOpenClose(popup2) {

	$(popup2).show();
    
	$(popup2).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup2).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open2]").on("click", function() {
		popupOpenClose($(".popup2"));
	});
});

function popupOpenClose(popup3) {

	$(popup3).show();
    
	$(popup3).find("button[name=close]").on("click", function() {
		if ($(".formElementError").is(':visible')) {
			$(".formElementError").remove();
		}
		$(popup3).hide();
	});
}

$(document).ready(function () {
	$("[data-js=open3]").on("click", function() {
		popupOpenClose($(".popup3"));
	});
});


