$(document).ready(function() {
	$(".add").click(addItem);

	// Add item when Enter key is pressed
	$(".add-item").keydown(function(event) {
		var keycode = event.keyCode ? event.keyCode : event.which;
		if(keycode == 13){
			addItem();
		}
	});

	// Remove item from list when Delete is clicked
	$(".buy-item").on("click", ".delete", function() {
    	$(this).closest(".to-buy").remove();
	});
	
	$(".purchased").on("click", ".delete", function() {
    	$(this).closest(".to-buy").remove();
	});
