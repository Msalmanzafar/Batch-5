var imagesArray = ['1', '2', '3', '4'];
var flag = 0;
document.getElementById('img')
.style.backgroundImage = 
"url(./images/" + imagesArray[2] + 
".png)";

setInterval(function () {
    if (imagesArray.length === flag) {
        flag = 0;
        document.getElementById('img').
        style.backgroundImage = 
        "url(./images/" + 
        imagesArray[flag] + ".png)";

    } else {
        document.getElementById('img').
        style.backgroundImage = 
        "url(./images/" + 
        imagesArray[flag] + ".png)";
        // console.log(flag);
        flag++;
    }
}, 3000)

