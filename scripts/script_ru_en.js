window.addEventListener("load", start) ;

function start() {
    
    // Переключение языка

    let engTexts = document.querySelectorAll(".en-text"); // текст на англ.яз-е
    let rusTexts = document.querySelectorAll(".ru-text"); // текст на русск.яз-е

    let engButton = document.querySelector(".en-btn"); // кнопка на англ.яз-е
    let rusButton = document.querySelector(".ru-btn");  // кнопка на русск.яз-е

    // при клике на кнопку EN
    engButton.addEventListener("click", switchToEnglish);
    // при клике на кнопку RU
    rusButton.addEventListener("click", switchToRussian);

    function switchToEnglish() {

        for(let i= 0; i < rusTexts.length; i++) {
            rusTexts[i].style.display = "none";
        }
        for(let j= 0; j < engTexts.length; j++) {
            engTexts[j].style.display = "block";
        }

        engButton.setAttribute("disabled", "");
        rusButton.removeAttribute("disabled");
    }

    function switchToRussian() {      

        for(let i= 0; i < rusTexts.length; i++) {
            rusTexts[i].style.display = "block";
        }
        for(let j= 0; j < engTexts.length; j++) {
            engTexts[j].style.display = "none";
        }

        rusButton.setAttribute("disabled", "");
        engButton.removeAttribute("disabled"); 
    }

}