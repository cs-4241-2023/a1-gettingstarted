function hideShow() {
  // Information is currently visible
  if (document.getElementById('el1').style.display!=='none') {
    document.getElementById('el1').style.display='none';
    document.getElementById('el2').style.display='none';
    document.getElementById('el3').style.display='none';
    document.getElementById('el4').style.display='none';
    document.getElementById('el5').style.display='none';
    document.getElementById('el6').style.display='none';
    document.getElementById('el7').style.display='none';
    document.getElementById('but').innerHTML="Show Info";
  }
  // Information is not currently visible
  else {
    document.getElementById('el1').style.display='block';
    document.getElementById('el2').style.display='block';
    document.getElementById('el3').style.display='block';
    document.getElementById('el4').style.display='block';
    document.getElementById('el5').style.display='block';
    document.getElementById('el6').style.display='block';
    document.getElementById('el7').style.display='block';
    document.getElementById('but').innerHTML="Hide Info";
  }
}