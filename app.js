// Image slider code for navbar
const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

let n = 0; //means we are in the first img

function changeSlide(){
    for(let i=0; i<imgs.length; i++){ //for hide the all imgs we use forloop
        imgs[i].style.display = "none";
    }
    imgs[n].style.display = "block"; //it will display first img
}
changeSlide();

prev_btn.addEventListener("click", (e) => {
    if(n > 0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener("click", (e) => {
    if(n < imgs.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    changeSlide();
});


// Product Image Slider 
const scrollContainer = document.querySelectorAll(".products");
for(const item of scrollContainer){
    item.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}