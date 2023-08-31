var coll = document.getElementsByClassName("collapse");
var i;

// if clicked on section, show section and hide everything else
for (i = 0; i < coll.length; i++) {

    // IIFE to capture the value of i
    (function(index) {

        coll[i].addEventListener("click", function(event) {
            console.log("clicked", coll.item(index).id);
            toggleSectionByIdAndHideOthers(coll.item(index).id);

            // stop propagation so that the background click event doesn't fire
            event.stopPropagation();
          });

    })(i);
}


function toggleSectionByIdAndHideOthers(id) {

    console.log("hideAllSectionsExceptID", id);

    for (var i = 0; i < coll.length; i++) {

        var content = coll[i].querySelector(".content");

        // toggle active section, hide all others
        if (coll[i].id === id && !coll[i].classList.contains("active")) {

            coll[i].classList.add("active");
            content.style.display = "block";
        } else {
            coll[i].classList.remove("active");
            content.style.display = "none";
        }
    }
}