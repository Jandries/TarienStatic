$(document).ready(function() {
	var dropbox = document.getElementById("dropbox");

	// init event handlers
	dropbox.addEventListener("dragenter", dragEnter, false);
	dropbox.addEventListener("dragexit", dragExit, false);
	dropbox.addEventListener("dragover", dragOver, false);
	dropbox.addEventListener("drop", drop, false);

	// init the widgets
	$("#progressbar").progressbar();
});

function dragEnter(evt) {
	evt.stopPropagation();
	evt.preventDefault();
}

function dragExit(evt) {
	evt.stopPropagation();
	evt.preventDefault();
}

function dragOver(evt) {
	evt.stopPropagation();
	evt.preventDefault();
}

function drop(evt) {
	evt.stopPropagation();
	evt.preventDefault();

	var files = evt.dataTransfer.files;
	var count = files.length;

	// Only call the handler if 1 or more files was dropped.
	if (count > 0)
		handleFiles(files);
}


function handleFiles(files) {
	var file = files[0];

	document.getElementById("droplabel").innerHTML = "Processing " + file.name;

	var reader = new FileReader();

	// init the reader event handlers
	reader.onprogress = handleReaderProgress;
	reader.onloadend = handleReaderLoadEnd;

	// begin the read operation
	reader.readAsDataURL(file);
}

function handleReaderProgress(evt) {
	if (evt.lengthComputable) {
		var loaded = (evt.loaded / evt.total);

		$("#progressbar").progressbar({ value: loaded * 100 });
	}
}

function handleReaderLoadEnd(evt) {
	$("#progressbar").progressbar({ value: 100 });

	var img = document.getElementById(addElement());
	img.src = evt.target.result;
}

function addElement() {
	var numi = document.getElementById('theValue');
	var num = (document.getElementById('theValue').value -1)+ 2;
	numi.value = num;

	var previewsDiv = document.getElementById('previews');
	var frame = document.createElement('iframe');
	frame.setAttribute('id','frame'+num);
	frame.setAttribute('style','width:300px; height:300px;');
	frame.setAttribute('frameborder', '0');

	var newdiv = document.createElement('div');
	var divIdName = 'div'+num;
	newdiv.innerHTML = ' <a href=\'#\' onclick=\'removeElement('+divIdName+')\'>Remove</a>';

	var container = document.createElement('div');
	container.setAttribute('id',divIdName);
	container.appendChild(newdiv);
	container.appendChild(frame);
	previewsDiv.appendChild(container);

	return 'frame'+num;
}

function removeElement(id) {
	  var olddiv = document.getElementById(id);
	  olddiv.innerHTML='deleted';
	  olddiv.parentNode.removeChild(olddiv);
	}