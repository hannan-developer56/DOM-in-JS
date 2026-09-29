let image = document.getElementById("image");

let changecontent = document.getElementById("changecontent");
let changeProduct = document.getElementById("changeProduct");

let welcomeBtn = document.getElementById("welcomeBtn");
let productBtn = document.getElementById("productBtn");

let username = document.getElementById("username");
let welcome = document.getElementById("welcome");

let productName = document.getElementById("productName");
let price = document.getElementById("price");
let description = document.getElementById("description");

let originalImage = "./images/image 1.jpeg";
let newImage = "./images/images 2.jpeg";

changecontent.onclick = function () {


description.innerHTML =
    "<b>Thank You!</b><br>Your order has been placed successfully.";


};

changeProduct.onclick = function () {


image.src = "images/images 2.jpeg";


};

welcomeBtn.onclick = function () {


let name = username.value;

if (name === "") {

    welcome.innerHTML = "Please enter your name.";

} else {

    welcome.innerHTML = "Welcome," + " " + name + "!";
}
};
image.onmouseover = function () {
image.src = newImage;
};
image.onmouseout = function () {
image.src = originalImage;
};
productBtn.onclick = function () {
productName.innerHTML = "<i>Smart Watch</i>";

price.innerHTML = "Rs.8500";

description.innerHTML =
    "<b>For Smart Features:</b><br>Track your fitness, calls and notifications with a stylish smart watch.";
};
