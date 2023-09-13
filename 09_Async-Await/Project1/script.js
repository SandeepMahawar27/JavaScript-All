// genrate a random color

const randomColor = () => {
    const hex = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

// console.log(randomColor());

let interValId;
const startChangingColor = () => {
    if (!interValId) {
        interValId = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopchangeColor = () => {
    clearInterval(interValId);
    interValId = null;
}

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopchangeColor)