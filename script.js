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

// функция подсвечивает код при клике на кнопку
// принимает кнопку и соответствующий ей код
function markCode(code, button) {

    //проверяем, выделены ли на странице уже какие-то элементы
    let markedCodeElem = document.getElementsByClassName("marked-code");
    let markedBtnElem = document.getElementsByClassName("marked-btn");
    
    //если блок кода уже выделен (кроме текущего выделения) - запускаем функцию отмены предыдущих выделений
    if(markedCodeElem.length > 0 || markedBtnElem.length > 0) {
        cancelMarkCode(markedCodeElem, markedBtnElem); 
    } 

    // если блок или кнопка не выделены - устанавливаем стили выделения
    code.style.backgroundColor = "rgb(22 22 22 / 91%)";
    button.style.backgroundColor = "rgb(22 22 22 / 91%)";
    button.style.color = "#bababa";
    button.style.border = "2px solid rgb(22 22 22 / 91%)";

    // добавляем классы
    code.classList.add("marked-code");
    button.classList.add("marked-btn");
    
}

// функция убирает предыдущие выделения кода
// принимает коллекцию элементов - кода с классом marked-code и кнопок с классом marked-btn
function cancelMarkCode(code, button) {

    // удаляем выделение кода (кроме последнего элемента в коллекции - текущего) и класс
    for(let i = 0; i <=  code.length - 1; i++) {
        code[i].style.backgroundColor = "transparent";
        code[i].classList.remove("marked-code");
    }

    // возвращаем стандартное выделение кнопкам (кроме последнего элемента в коллекции - текущего) и удаляем класс
    for(let i = 0; i <=  button.length - 1; i++) {
        button[i].style.backgroundColor = "#fdfdfd";
        button[i].style.color = "#000000";
        button[i].style.border = "2px solid #d1d1d1";
        button[i].classList.remove("marked-btn");
    }
    
}