window.addEventListener("load", start);

function start() {    

    //проверяем, выведен ли на странице код HTML
    if(document.querySelector(".code-html") === null) {
        console.log("Код HTML отсутствует!"); 
        let btnHtml = document.querySelector("button.html");
        makeButtonDisabled(btnHtml); //вызов функции блокировки кнопки

    } else {
        // если код отображается, подсвечиваем код при клике на кнопку
        let codeHtml = document.querySelector(".code-html"); //содержит код HTML
        let btnHtml = document.querySelector(".stack-btn button.html"); // кнопка стека
        btnHtml.addEventListener("click", function () { markCode(codeHtml, btnHtml) }); 
    }

    //проверяем, выведен ли на странице код CSS
    if(document.querySelector(".code-css") === null) {
        console.log("Код CSS отсутствует!");
        let btnCss = document.querySelector("button.css");
        makeButtonDisabled(btnCss); 
        
    } else {
        let codeCss = document.querySelector(".code-css");
        let btnCss = document.querySelector(".stack-btn button.css");
        btnCss.addEventListener("click", function () { markCode(codeCss, btnCss) });
    }

    //проверяем, выведен ли на странице код JS
    if(document.querySelector(".code-js") === null) {
        console.log("Код JS отсутствует!");
        let btnJs = document.querySelector("button.js");
        makeButtonDisabled(btnJs);

    } else {
        let codeJs = document.querySelector(".code-js");
        let btnJs = document.querySelector(".stack-btn button.js");
        btnJs.addEventListener("click", function () { markCode(codeJs, btnJs) });
    }

}

// если на странице отсутствует HTML, CSS или JS код, кнопка становится неактивной
function makeButtonDisabled(button) {
    console.log("Делаем соответствующую кнопку неактивной!");
    button.setAttribute("disabled", "");
}

// подсвечивает код при клике на кнопку
function markCode(code, button) {

    console.log("Щелкнули на кнопку");
    console.log(code); 
    console.log(button); 
    
    code.style.backgroundColor = "rgb(22 22 22 / 91%)";
    button.style.backgroundColor = "rgb(22 22 22 / 91%)";
    button.style.color = "#bababa";

}