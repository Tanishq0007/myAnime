document.onclick = popobjects;
	function popobjects(event)
	 {
		var object = document.createElement("object");
		object.setAttribute("class","object");
		document.body.appendChild(object);
		object.style.left = event.clientX + 'px';
		object.style.top = event.clientY + 'px';
		object.style.transition = "all 0.75s linear 0s";
		object.style.left = object.offsetLeft - 20 + "px";
		object.style.top = object.offsetTop - 20 + "px";
		object.style.opacity = "0.2";
	}