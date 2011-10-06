/**
* roi.js
* Region of interest painting tool.
* WARNING: depends on the folowing external vars:
* - gContext
* - gLineColor
* - gImgUpdate()
*/
function tools_roi()
{
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    this.mousedown = function(ev){
        gContext.strokeStyle = gLineColor;
        gContext.fillStyle = gLineColor;
        gContext.beginPath();
        gContext.moveTo(ev._x, ev._y);
        tool.started = true;
    };

    // This function is called every time you move the mouse.
    this.mousemove = function(ev){
        if (!tool.started)
        {
            return;
        }

        gContext.lineTo(ev._x, ev._y);
        gContext.stroke();
    };

    // This is called when you release the mouse button.
    this.mouseup = function(ev){
        if (tool.started)
        {
            tool.mousemove(ev);
            gContext.closePath();
            gContext.stroke();
            tool.started = false;
            gImgUpdate();
        }
    };
} // tools_roi

