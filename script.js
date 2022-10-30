const bookOne = document.querySelector(".last-page-1");
const bookTwo = document.querySelector(".last-page-2");
const bookThree = document.querySelector(".last-page-3");

bookOne.addEventListener("click", openBookOne);
bookTwo.addEventListener("click", openBookTwo);
bookThree.addEventListener("click", openBookThree);

function openBookOne() {
    document.getElementById("demo1").innerHTML = "Hello World";
}

function openBookTwo() {
    document.getElementById("demo2").innerHTML = "Hello World";
}

function openBookThree() {
    document.getElementById("demo3").innerHTML = "Hello World";
}


