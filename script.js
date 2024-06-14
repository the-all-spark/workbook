window.addEventListener("load", start);

function start() {    
    //проверяем, выведен ли на странице код HTML
    if(document.querySelector(".code-html") === null) {
        console.log("Код HTML отсутствует!"); 
        
        // получаем доступ к нужной кнопке, передаем переменную в функцию
        let btnHtml = document.querySelector("button.html");
        makeButtonDisabled(btnHtml); //вызов функции блокировки кнопки

    } else {
        let codeHtml = document.querySelector(".code-html").innerText; //содержит сам текст кода
        console.log(codeHtml);
    }

    //проверяем, выведен ли на странице код CSS
    if(document.querySelector(".code-css") === null) {
        console.log("Код CSS отсутствует!");

        let btnCss = document.querySelector("button.css");
        makeButtonDisabled(btnCss); 
        
    } else {
        let codeCss = document.querySelector(".code-css");
        console.log(codeCss);
    }

    //проверяем, выведен ли на странице код JS
    if(document.querySelector(".code-js") === null) {
        console.log("Код JS отсутствует!");

        let btnJs = document.querySelector("button.js");
        makeButtonDisabled(btnJs);

    } else {
        let codeJs = document.querySelector(".code-js");
        console.log(codeJs);                                                                 
    }

}

// если на странице отсутствует HTML, CSS или JS код, кнопка становится неактивной
function makeButtonDisabled(button) {
    console.log("Делаем соответствующую кнопку неактивной!");
    button.setAttribute("disabled", "");
}