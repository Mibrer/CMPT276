


function meangrade(){
  var a1f,a1d,a2f,a2d,a3f,a3d,a4f,a4d;
  var result;

  a1f = Number(document.getElementsByName("inputdividentA1"));
  a1d = Number(document.getElementsByName("inputdivisorA1"));
  a2f = Number(document.getElementsByName("inputdividentA2"));
  a2d = Number(document.getElementsByName("inputdivisorA2"));
  a3f = Number(document.getElementsByName("inputdividentA3"));
  a3d = Number(document.getElementsByName("inputdivisorA3"));
  a4f = Number(document.getElementsByName("inputdividentA4"));
  a4d = Number(document.getElementsByName("inputdivisorA4"));

  a1f = a1f/a1d;
  a2f = a2f/a2d;
  a3f = a3f/a3d;
  a4f = a4f/a4d;

  result = (a1f + a2f + a3f + a4f)/4;

  document.getElementByName("answer").innerHTML = result;
  document.getElementsById("intest").value = result;

}

function weight(){

}

document.getElementById("btnmean").onclick = function() {meangrade()};
