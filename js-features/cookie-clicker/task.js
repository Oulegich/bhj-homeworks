const image = document.getElementById("cookie");
function changeSizesCookie() {
    image.width = 250;
    const refreshSizesCookie = function () {
        image.width = 200; 
    }
    setInterval(refreshSizesCookie, 200);
    const clickerCounter = document.getElementById("clicker__counter");
    clickerCounter.textContent = clickerCounter.textContent / 1 + 1;
};
image.onclick = changeSizesCookie;