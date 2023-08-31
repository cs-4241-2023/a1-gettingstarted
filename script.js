//hide boxes with x button
function hideBox(hide) {
    let x = document.getElementById("box" + hide);
    if (x.style.display === "none") {
      x.style.display = "block";
    } 
    else {
      x.style.display = "none";
    }
  }

  //drag functions

  let topZ = 1;
  let onX = false;
  
  const boxes = document.getElementsByClassName("box");
  for (let i = 0; i < boxes.length; i++) {
    dragBox(boxes[i]);
  }

  function dragBox(box) {
    let mouseX = 0, mouseY = 0, offX = 0, offY = 0;
    document.getElementById(box.id + "bar").onmousedown = startDrag;
    document.getElementById(box.id + "x").onmousedown = function() { onX = true;}

    //bring clicked/dragged box to front
    box.onmousedown = function() {
      box.style.zIndex = topZ;
      topZ += 1;
    }

    function startDrag(e) {
      //stop drag on mouse up
      document.onmouseup = function() {
        document.onmouseup = null;
        document.onmousemove = null;
        onX = false;
      }

      offX = e.offsetX;
      offY = e.offsetY;
      if (onX === false) {
        document.onmousemove = dragMove;
      }
    }

    function dragMove(e) {
      mouseX = e.x;
      mouseY = e.y;

      box.style.top = (((mouseY - offY - 22) / window.innerHeight) * 100) + "%";
      box.style.left = (((mouseX - offX - 22) / window.innerWidth) * 100) + "%";
    }

  }

  let rain = false;

  let w = document.getElementById("w");
  w.style.animationName = null;

  //reset page
  function resetPage() {
    for (let i = 0; i < boxes.length; i++) {
      boxes[i].style.left = null;
      boxes[i].style.top = null;
      boxes[i].style.display = null;
      boxes[i].style.zIndex = null;
    }
    topZ = 1;
    rain = false;
    toggleRain(false);
    w.style.animationName = null;
    w.style.height = "0%";
      
  }

  //rain
  function toggleRain(set) {
    
    if ((rain === false) && (set === true)) {
      w.style.animationName = "fill";
      document.getElementById("rain").innerHTML = "";
    
      let space = 0;
      let drops = "";
    
      //create raindrops
      while (space < 99) {
        let rand = (Math.floor(Math.random() * 99));
        let randDelay =  (Math.floor(Math.random() * 6));
        space += (Math.floor(Math.random() * 3));
        drops += '<div class="drop" style="left: ' + space + '%; animation-duration: 0.5' + rand + 's; animation-delay: ' + randDelay +'.' + rand + 's;"></div>';
      }
      document.getElementById("rain").insertAdjacentHTML('beforeend', drops);

      w.onanimationend = function() {
        document.getElementById("rain").innerHTML = "";
      }
    }
    else if (set === false) {
      document.getElementById("rain").innerHTML = "";
    }
    rain = set;
  }