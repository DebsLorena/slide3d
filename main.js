const container = document.querySelector(".container");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");

container.style.animationPlayState = "paused";
start.onclick = function () {
    container.style.animationPlayState = "running";
};
stop.onclick = function () {
    container.style.animationPlayState = "paused";
};