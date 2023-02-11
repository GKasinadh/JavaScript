const buttons = document.querySelectorAll("input[type='button']")
buttons.forEach((button) => {
    button.addEventListener("click", function(){
    const display = document.querySelector("input[type='text']")
    if(this.value === "C"){
        display.value = " "
    }
    else if(this.value === "="){
        display.value = eval(display.value)
    }
    else{
        display.value += this.value
    }
    });
   
});