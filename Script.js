const imgs = document.querySelectorAll(".Slider ul img");
const prev = document.querySelector(".pre"); 
const next = document.querySelector(".next"); 
var n = 0;

function Change_Slider() {
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block";
}
Change_Slider();

prev.addEventListener("click", function (e) { 
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    Change_Slider();
});

next.addEventListener("click", function (e) { 
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    Change_Slider();
});
