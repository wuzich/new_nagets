// начало формы
btn_one = document.querySelector(".btn_one");
btn_two = document.querySelector(".btn_two");

btn_one.addEventListener("click", btn_run_one);
btn_two.addEventListener("click", btn_run_two);

function btn_run_one() {
    alert('Молодесь , сматри рэклама дальше😊'); 
};

function btn_run_two() {
    alert('Как нэ хочэшь рэклама😡, сматри больше реклама👿'); 
};
//конец формы

//начало плавности 
let links = document.querySelectorAll(".menu_li");

links.forEach(function (link, index, all) {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        let targetID = link.getAttribute("href");
        document.querySelector(targetID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
})