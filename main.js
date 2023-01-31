var mouseEvent="empty"
var LastPositionX, LastPositionY
canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
color="lightgreen"
widthLine=1
canvas.addEventListener("mousedown",myMouseDown)
    function myMouseDown(e)
    { mouseEvent="mousedown"
        
    }

    canvas.addEventListener("mousemove", myMouseMove);
    function myMouseMove(e)
    {
        
        if (mouseEvent == "mouseDown") {
        
        }

        
    }

    

    canvas.addEventListener("mouseleave", myMouseLeave);
    function myMouseLeave(e)
    {
        mouseEvent = "mouseleave";
    }


//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}