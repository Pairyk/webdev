"use strict";

const typeText = "I'm Invalid Developer...";
let typeIndex = 0;
const speed = 100;

function typeWriter() {
    const element = document.getElementById("typewriter-text");
    if (element && typeIndex < typeText.length) {
        element.textContent += typeText.charAt(typeIndex);
        typeIndex++;
        setTimeout(typeWriter, speed);
    }
}
window.addEventListener('load', typeWriter);


const contactBtn = document.getElementById("grd-button");

if (contactBtn) {
    contactBtn.addEventListener("click", () => {
        alert("tg: @Faudja");
    });
}