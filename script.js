const cells = [...document.querySelectorAll(".desc")];
const pops = [...document.querySelectorAll(".pop")];
const tabela = document.querySelector("table");
const szczeniaki = document.querySelector(".szczeniaki");
const mainDiv = document.querySelector(".content");
const Xs = [...document.querySelectorAll(".fas")];


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", () => {
        pops[i].classList.add("active");
        tabela.classList.add("blur");



        window.addEventListener("click", (e) => {
            if (e.target === pops[i]) {
                pops[i].classList.remove("active");
                tabela.classList.remove("blur");
                console.log('to jest to');
            }
        })

        Xs[i].addEventListener("click", () => {
            pops[i].classList.remove("active");
            tabela.classList.remove("blur");
            console.log('X mi działa');
        })


    })



}

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", () => {
        cells[i].classList.add("podswietlenie");
    });
    cells[i].addEventListener("mouseout", () => {
        cells[i].classList.remove("podswietlenie");
    })
}