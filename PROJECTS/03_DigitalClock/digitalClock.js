const clock = document.querySelector('#clock')
//smae as
// const clock = document.getElementById('clock');


setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)