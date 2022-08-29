let galleryImages = document.querySelectorAll("img")
let windowWidth = window.innerWidth;

if (galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            let getLatestImg = index + 1;
            let container = document.body;
            let newImgWindow = document.createElement("div");
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window");
            newImgWindow.setAttribute("onclick", "closeImg()");
            let newImg = document.createElement("img");
            newImgWindow.appendChild(newImg);
            newImg.setAttribute("src", "images/img" + getLatestImg + ".jpg");
        }
    });
}

function closeImg() {
    document.querySelector(".img-window").remove();
}