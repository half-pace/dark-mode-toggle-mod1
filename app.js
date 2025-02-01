const input = document.querySelector(".input");

input.checked = JSON.parse(localStorage.getItem("mode"));

function updateBody(){
    if(input.checked){
        document.body.style.backgroundColor = "black";
    }else{
        document.body.style.backgroundColor = "white";
    }
}

input.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(input.checked));
}