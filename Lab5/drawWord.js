let canvas = document.querySelector('#canvas');
let context = canvas.getContext("2d");

let input = document.querySelector("#image_text");
input.disabled = true;

let image = new Image();
image.src = "Trio.jpg";

image.addEventListener("load", function(){
    context.drawImage(image, 0, 0);
    input.disabled = false;
})
input.addEventListener("input", function(){
    let text = this.value;

    context.drawImage(image, 0, 0);
    context.font = "40px Sans";
    context.fillStyle = "Red";
    context.fillText(text, 30, 100);
})