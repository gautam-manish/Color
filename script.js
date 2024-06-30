let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let container = document.getElementById("container");

btn1.addEventListener("click", () => {
    if (container.style.backgroundColor === "green") {
        container.style.backgroundColor = "red";
        btn1.innerHTML = "RED";
        btn1.style.backgroundColor = "";
        btn1.style.color = "red";
    } else {
        container.style.backgroundColor = "green";
        btn1.innerHTML = "GREEN";
        btn1.style.backgroundColor = "rgba(203, 248, 241, 0.822)";
        btn1.style.color = "green";
    }
});

btn2.addEventListener("click", () => {
    if (container.style.backgroundColor === "orange") {
        container.style.backgroundColor = "blue";
        btn2.innerHTML = "BLUE";
        btn2.style.backgroundColor = "";
        btn2.style.color = "blue";
    } else {
        container.style.backgroundColor = "orange";
        btn2.innerHTML = "ORANGE";
        btn2.style.backgroundColor = "rgba(203, 248, 241, 0.822)";
        btn2.style.color = "orange";
    }
});

btn3.addEventListener("click", () => {
    if (container.style.backgroundColor === "purple") {
        container.style.backgroundColor = "yellow";
        btn3.innerHTML = "YELLOW";
        btn3.style.backgroundColor = "";
        btn3.style.color = "yellow";
    } else {
        container.style.backgroundColor = "purple";
        btn3.innerHTML = "PURPLE";
        btn3.style.backgroundColor = "rgba(203, 248, 241, 0.822)";
        btn3.style.color = "purple";
    }
});

btn4.addEventListener("click", () => {
    if (container.style.backgroundColor === "black") {
        container.style.backgroundColor = "white";
        btn4.innerHTML = "WHITE";
        btn4.style.backgroundColor = "";
        btn4.style.color = "rgb(129, 129, 129)";
    } else {
        container.style.backgroundColor = "black";
        btn4.innerHTML = "BLACK";
        btn4.style.backgroundColor = "rgba(203, 248, 241, 0.822)";
        btn4.style.color = "black";
    }
});