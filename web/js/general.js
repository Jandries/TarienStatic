$(function() {

	function log(obj) {
		// console.log(obj);
	}

	$(document).ready(function() {
		setDefaults();
		setHovers();
		setClicks();
	});

	function setMenuItemsDefault() {
		setMenuItemCss_suitcase_default();
	}

	function setHovers() {
		$("#header #logo").hover(function() {
			setMenuItemCss_suitcase_hover();
		}, function() {
			setMenuItemCss_suitcase_default();
		});
	}

	function setClicks() {
		$("#logo").click(function() {
			window.location = "index.html";
		});
	}
	
	function setElementDimensions(elem, width, height, left, top){
		$(elem).css("width", width);
		$(elem).css("height", height);
		$(elem).css("left", left);
		$(elem).css("top", top);
	}
	
	function setMenuItemCss_suitcase_default() {
		$("#menuItem_suitcase").css("background-image",
				"url('resources/png_buttons/SCase_grey.png')");
			setElementDimensions($("#menuItem_suitcase"), "121px", "159px", "181px", "62px");
	}

});