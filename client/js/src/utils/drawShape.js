/**
 * Created by isp on 12/17/17.
 */

export default class Shape {
    constructor(canvas) {
        this.canvas =
            this.createHiDPICanvas(canvas, window.innerWidth, window.innerHeight);
        this.context = canvas.getContext('2d');
    }

    createHiDPICanvas(canvas, w, h, ratio) {
        let PIXEL_RATIO = (() => {
            let ctx = document.createElement("canvas").getContext("2d"),
                dpr = window.devicePixelRatio || 1,
                bsr = ctx.webkitBackingStorePixelRatio ||
                    ctx.mozBackingStorePixelRatio ||
                    ctx.msBackingStorePixelRatio ||
                    ctx.oBackingStorePixelRatio ||
                    ctx.backingStorePixelRatio || 1;

            return dpr / bsr;
        })();

        if (!ratio) { ratio = PIXEL_RATIO; }
        let can = canvas;

        can.width = w * ratio;
        can.height = h * ratio;
        can.style.width = w + "px";
        can.style.height = h + "px";
        can.getContext("2d").setTransform(ratio, 0, 0, ratio, 0, 0);

        return can;
    }
    
    drawCircle(x, y, radius, fillColor) {
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.context.fillStyle = fillColor || 'green';
        this.context.fill();
    }

    drawLine(x1, y1, x2, y2, width, color) {
        this.context.beginPath();
        this.context.moveTo(x1,y1);
        this.context.lineTo(x2,y2);
        this.context.lineWidth = width || 2;
        this.context.strokeStyle = color || 'green';
        this.context.stroke();
    }

    drawSector(x, y, radius, startAngle, endAngle, color) {
        //this.context.beginPath();
        this.context.moveTo(x,y);
        this.context.arc(x,y,radius,startAngle,endAngle);
        this.context.lineTo(x,y);
        this.context.fillStyle = color || 'green';
        this.context.fill();
        //this.context.strokeStyle = color || 'green';
        //this.context.stroke(); 
    }
}