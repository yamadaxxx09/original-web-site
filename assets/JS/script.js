const place = document.querySelector(".place");

const happy1 = document.getElementById("happy1");
const happy2 = document.getElementById("happy2");


happy1.addEventListener("mouseover", () => {
    place.classList.add("hover"); 
});

happy1.addEventListener("mouseleave", () => {
    place.classList.remove("hover"); 
});

happy2.addEventListener("mouseover", () => {
    place.classList.add('hover'); //
});

happy2.addEventListener("mouseout", () => {
    place.classList.remove("hover"); 
});