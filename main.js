const canvas = document.querySelector(".myCanvas"),
      width = window.innerWidth,
      height = window.innerHeight,
      ctx = canvas.getContext("2d");
var press = true,
    startX = 1,
    startY = 1,
    counter = 0,
    lineWidth = 1;
function line(){
  if(counter == 0){
    startX = event.clientX;
    startY = event.clientY;
    counter++;
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.arc(startX,startY,2,0, 2 * Math.PI);
    ctx.fill();
  }else {
    // ctx.beginPath();
    // ctx.fillStyle = "rgb(255,255,255)";
    // ctx.arc(startX,startY,3,0, 2 * Math.PI);
    // ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.lineWidth = lineWidth;
    ctx.moveTo(startX,startY);
    ctx.lineTo(event.clientX,event.clientY);
    ctx.stroke();
    counter = 0;
}
};
function changeLineWidth(){
  lineWidth = document.querySelector("#range").value;
}
function savePng(){
  var scrImg = canvas.toDataURL();
  document.getElementById("aoto").src = scrImg;
}
