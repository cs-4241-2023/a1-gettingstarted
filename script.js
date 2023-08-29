var i=0;
var headerText="Tate Donnelly";
var typeSpeed=50;


function writeHeader(){
    if(i<headerText.length){
        document.getElementById("header").innerHTML += headerText.charAt(i);
        i++;
        setTimeout(writeHeader,typeSpeed);
    }
}