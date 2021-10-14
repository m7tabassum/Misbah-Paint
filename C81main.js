canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var LastPositionOfX, LastPositionOfY;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseUp",my_mouseUp);
function my_mouseUp(e)
{
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseLeave",my_mouseLeave);
function my_mouseLeave(e)
{
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mouseMove",my_mouseMove);
function my_mouseMove(e)
{
   Current_Position_Of_Mouse_X=e.clientX-canvas.offsetLeft;
   Current_Position_Of_Mouse_Y=e.clientY-canvas.offsetTop;
   if(mouseEvent=="mousedown")
   {
    color="red";
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(300,200,80,0,2*Math.PI);
    ctx.stroke();
    ctx.moveTo(LastPositionOfX,LastPositionOfY);
    ctx.lineTo(Current_Position_Of_Mouse_X,Current_Position_Of_Mouse_Y);
   }
   LastPositionOfX=Current_Position_Of_Mouse_X;
   LastPositionOfY=Current_Position_Of_Mouse_Y;
}
