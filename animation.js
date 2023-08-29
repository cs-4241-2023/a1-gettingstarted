let chasing = false;

function catChase (){
    var randx = Math.random()*60
    var randy = Math.random()*60
    document.getElementById("catImage").style.width = `${randy}%`;
    document.getElementById("catImage").style.height = `${randx}%`;
}

document.getElementById("catButton").addEventListener("click", catChase);