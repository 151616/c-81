canvas = document.getElementById("my_canvas");
ctx=canvas.getcontext("2d");

color = "black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    console.log(color);
    mouse_x=e.clientX - canvas.offsetleft;
    mouse_y=e.clientY - canvas.offsettop;
    console.log("x=" + mouse_x, "y=" + mouse_y);
    circle(mouse_x,mouse_y);
}
function circle(mouse_x,mouse_y){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}
function clear(){
ctx.clearRet(0,0,canvas.width,canvas.height);
}