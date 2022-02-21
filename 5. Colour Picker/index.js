var ok = "ok"
var hex1 = ["#0", "#1", "#2", "#3", "#4", "#5", "#6", "#7", "#8", "#9", "#A", "#B", "#C", "#D", "#E", "#F"];
var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
var myText = 130



document.getElementById("button").onclick = changeColour;
    function changeColour() {
        var A = hex1[Math.floor(Math.random() * hex1.length)];
        var B = hex[Math.floor(Math.random() * hex.length)];
        var C = hex[Math.floor(Math.random() * hex.length)];
        var D = hex[Math.floor(Math.random() * hex.length)];
        var E = hex[Math.floor(Math.random() * hex.length)];
        var F = hex[Math.floor(Math.random() * hex.length)];
        var ok = A+B+C+D+E+F
        document.getElementById("myid").style.background = ok;
        document.getElementById('ok').innerHTML = ok;   
         
    
  }

  

