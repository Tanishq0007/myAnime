function getPosition(event)
{
	var rect = canvas.getBoudingClientRect();
	var x = event.clientX - rect.left;
	var y = event.ClientY - rect.top;
	draw(x,y);
}
function draw(x,y){
	var back = document.getElementById("canvas").getContext("2d");
	back.fillstyle = "#ff2626"
	back.beginPath();
	back.arc(x,y,pointSize,0,Math.PI*2,true);
	back.fill;
}