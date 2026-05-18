let fontSize = 16;
let isVisible = true;

document.getElementById("changeTextBtn").addEventListener("click", function () {
    let text = document.getElementById("inputText").value;
    if (text !== "") {
        document.getElementById("heading").innerText = text;
    }
});

document.getElementById("colorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

document.getElementById("fontBtn").addEventListener("click", function () {
    fontSize += 2;
    document.getElementById("para").style.fontSize = fontSize + "px";
});

document.getElementById("toggleBtn").addEventListener("click", function () {
    isVisible = !isVisible;
    document.getElementById("para").style.display = isVisible ? "block" : "none";
});