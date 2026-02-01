if (window.location.pathname.includes("result.html")) {
    const params = new URLSearchParams(window.location.search);
    const shape = params.get('shape');
    const v1 = parseFloat(params.get('val1'));
    const v2 = parseFloat(params.get('val2'));

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    const areaSpan = document.getElementById('area-val');
    const infoPara = document.getElementById('shape-info');

    let area = 0;
    ctx.fillStyle = "#3498db"; 
    ctx.strokeStyle = "#2c3e50"; 
    ctx.lineWidth = 5;

	//Logic based off of what shape user selected.
    if (shape === 'rectangle') {
        area = v1 * v2;
        ctx.fillRect(50, 50, v1, v2);
        ctx.strokeRect(50, 50, v1, v2);
        infoPara.innerText = `Rectangle: ${v1} x ${v2}`;
    } 
    else if (shape === 'circle') {
        area = Math.PI * Math.pow(v1, 2);
        ctx.beginPath();
        ctx.arc(250, 200, v1, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        infoPara.innerText = `Circle: Radius ${v1}`;
    } 
    else if (shape === 'triangle') {
        area = 0.5 * v1 * v2;
        ctx.beginPath();
        ctx.moveTo(250, 50); // Top
        ctx.lineTo(250 - (v1/2), 50 + v2);
        ctx.lineTo(250 + (v1/2), 50 + v2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        infoPara.innerText = `Triangle: Base ${v1}, Height ${v2}`;
    }

    areaSpan.innerText = area.toFixed(2);
}