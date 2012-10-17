
$(function() {

	
	$(document).ready(function() 
	{
		setClicks();
		setDefaults();
		setHovers();
	});
	
	function setDefaults(){
		setLogo_default();
	}
	// =================================
	function setHovers(){
	
		$("#logo").hover(function() {
			setLogo_hover();
		}, function() {
			setLogo_default();
		});
	}
	// ------------------
	// logo 
	function setLogo_default() {
		$("#logo").html("<img src='resources/png_buttons/Logo_normal.png'/>");
	}
	function setLogo_hover() {
		$("#logo").html("<img src='resources/png_buttons/Logo_hover.png'/>");
	}

	// =================================
	// -----------
	// clicks
	function setClicks(){
		$("#logo").click(function() {
			window.location = "index.html";
		});
	}
	
	
	//====================
	// helpers

	function log(obj){
		//console.log(obj);
	}
});