// why is it not working :(

const colorPicker = document.querySelector(".colorPicker");
const editor = document.querySelector("#main-textarea");

function changeColor (){
    const selectedColor = colorPicker.value;
    editor.style.backgroundColor =  selectedColor;
}

