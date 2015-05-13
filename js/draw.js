function drawShape(){
  // get the canvas element using the DOM
  var canvas = document.getElementById('mycanvas');
 
  // Make sure we don't execute when canvas isn't supported
  if (canvas.getContext){
 
    // use getContext to use the canvas for drawing
    var ctx = canvas.getContext('2d');
 
    ctx.lineWidth =1 ;
    ctx.beginPath();  
    ctx.moveTo(5,5);
    ctx.lineTo(5,100);
    ctx.lineTo(300,100);
    ctx.lineTo(5,5);
      
    ctx.stroke();
      

  } else {
    alert('You need Safari or Firefox 1.5+ to see this demo.');
  }
}