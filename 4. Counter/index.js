var ok = 0
document.getElementById("count").innerHTML = ok;
// start with 0 and paste it to the site



// increase button
document.getElementById('bt1').onclick=function(){
    ok++
    document.getElementById("count").innerHTML = ok;
}
// decrease button
document.getElementById('bt2').onclick=function(){
    ok--
    document.getElementById("count").innerHTML = ok;
}
// reset button, it reloads the site so the variable is back to 0
document.getElementById('bt3').onclick=function(){
    location.reload();
}
