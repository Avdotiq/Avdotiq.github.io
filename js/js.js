let count = 0;

function vs() {
    let contener = document.getElementById("open");
    let imgBckg = document.getElementById("img-change");
    imgBckg.classList.remove("img-down");
    if (count >= 1) {
        count--;
        contener.classList.remove("hidden-open");
        imgBckg.classList.remove("img-up");
        imgBckg.classList.add("img-down");
    } else if (count < 1) {
        count++;
        contener.classList.add("hidden-open");
        imgBckg.classList.add("img-up");
    }
}

document.addEventListener( "DOMContentLoaded", function() {
	let elementsScene = document.getElementsByClassName("accord-header-panel");
    let showMore = document.getElementById("img-change");
    showMore.addEventListener("click", vs);
    for (i=0; i < elementsScene.length; i++) { 
      elementsScene[i].addEventListener("click", toogler);
	}
})

function toogler() {
    el = event.currentTarget;
    let newclass = el.lastElementChild;
    if (newclass.classList[1]) {
        newclass.classList.remove("accord-open");
    } else {
        newclass.classList.add("accord-open");
    }
}