const Decrease = () => {
    let Dec = document.getElementById("number");
    Dec.innerHTML = parseInt(Dec.innerHTML) - 1;
};

document.querySelector(".btn1").addEventListener(
    "click",
    Decrease
);

Decrease();  

const Increase = () => {
    let Inc = document.getElementById("number");
    Inc.innerHTML = parseInt(Inc.innerHTML) + 1;
};

document.querySelector(".btn3").addEventListener(
    "click",
    Increase
);

Increase(); 

const Reset = () => {
    let Res = document.getElementById("number");
    Res.innerHTML = "0";
};

document.querySelector(".btn2").addEventListener(
    "click",
    Reset
);

Reset(); 
