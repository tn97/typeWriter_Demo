var i = 0;
var txt = "Dolore eu et ex dolor consequat velit ex commodo dolore.";
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML +=txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}