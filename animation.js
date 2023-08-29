let chasing = false;

function catChase (){
    //while(document.getElementById("catImage").style.top > 0)
    var randx = Math.random()*60
    var randy = Math.random()*60
    document.getElementById("catImage").style.width = `${randy}%`;
    document.getElementById("catImage").style.height = `${randx}%`;
}

document.getElementById("catButton").addEventListener("click", catChase);