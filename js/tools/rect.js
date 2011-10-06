/**
* rect.js
* Rectangle painting tool.
* WARNING: depends on the folowing external vars:
* - gContext
* - gCanvas
* - gLineColor
* - gImage
* - gFontSize
* - gImgUpdate()
*/
function tools_rect()
{
    var tool = this;
    this.started = false;

    // This is called when you start holding down the mouse button.
    this.mousedown = function(ev){
        tool.started = true;
        tool.x0 = ev._x;
        tool.y0 = ev._y;
    };

    // This function is called every time you move the mouse.
    this.mousemove = function(ev){
        if (!tool.started)
        {
            return;
        }

        var x = Math.min(ev._x, tool.x0);
        var y = Math.min(ev._y, tool.y0);
        var w = Math.abs(ev._x - tool.x0);
        var h = Math.abs(ev._y - tool.y0);

        gContext.clearRect(0, 0, gCanvas.width, gCanvas.height);
        gContext.fillStyle = gLineColor;
        gContext.strokeStyle = gLineColor;

        if (!w || !h)
        {
            return;
        }

        gContext.beginPath();
        gContext.strokeRect(x, y, w, h);
    
        // surface
        var surf = Math.round((w*gImage.getSpacing()[0])*(h*gImage.getSpacing()[1]));
        gContext.font = gFontStr
        gContext.fillText(surf+"mm2",ev._x+gFontSize, ev._y+gFontSize)
    };

    // This is called when you release the mouse button.
    this.mouseup = function(ev){
        if (tool.started)
        {
            tool.mousemove(ev);
            tool.started = false;
            gImgUpdate();
        }
    };
} // tools_rect

