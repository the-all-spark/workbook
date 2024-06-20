window.addEventListener("load", start);

function start() {    

    //проверяем, выведен ли на странице код HTML
    if(document.querySelector(".code-html") === null) {
        console.log("Код HTML отсутствует!"); 
        let btnHtml = document.querySelector("button.html");
        makeButtonDisabled(btnHtml); //вызов функции блокировки кнопки
    } else {
        // если код отображается, выделяем его при клике на кнопку (фоном)
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

    // при наведении на текст пояснения решения (пункты списка) подчеркиваем код слева
    let solutionElem = document.querySelectorAll(".stack-explain-solution li"); // пункты списка
    //console.log(solutionElem);

    // перебираем элементы li и отдельно в них - элементы span
    for(let i = 0; i < solutionElem.length; i++) {
        
        for(let j = 0; j < solutionElem[i].children.length; j++) {
            //console.log(solutionElem[i]); // сам элемент li
            //console.log(solutionElem[i].children[j]); // вложенные в li span-ы
            //console.log(solutionElem[i].children[j].innerText); // фрагмент кода span в строке li

            // для каждого пункта списка при наведении вызываем функцию подчеркивания 
            solutionElem[i].addEventListener("mouseover", function () { showCodeSolution(solutionElem[i], solutionElem[i].children[j].innerText) });
        }
    }

}

// функция делает кнопку неактивной, если на странице отсутствует HTML, CSS или JS код
// принимает нажатую кнопку
function makeButtonDisabled(button) {
    button.setAttribute("disabled", "");
    button.style.cursor = "not-allowed";
}

// функция выделяет фоном код при клике на кнопку
// принимает кнопку стека и соответствующий ей блок кода
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
    code.style.transition = "background-color 0.4s linear";
    button.style.backgroundColor = "rgb(22 22 22 / 91%)";
    button.style.color = "#bababa";
    button.style.border = "2px solid rgb(22 22 22 / 91%)";

    // добавляем классы
    code.classList.add("marked-code");
    button.classList.add("marked-btn");   

}

// функция убирает предыдущие выделения кода
// принимает коллекцию элементов - коды с классом marked-code и кнопки с классом marked-btn
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

// функция подчеркивает элемент, на который наведен курсор мыши
// принимает элемент li, на который навели, и содержимое span (строку кода)
function showCodeSolution(elem, codeStr) {
    //console.log(elem);
    //console.log(codeStr);
    
    elem.classList.add("underlined");
                                                        // курсор прячется,
                                                        // слева от строки в сторону кода добавляется стрелка
                                         
    let allCodeSpan = document.querySelectorAll("code span"); // коллекция элементов кода 

    for(let i = 0; i < allCodeSpan.length; i++) {

        if(allCodeSpan[i].innerText === codeStr) {
            let code = allCodeSpan[i];
            code.style.textDecoration = "underline";

            // при уходе курсора
            elem.addEventListener("mouseout", function () { hideCodeSolution(elem, code) });
        }
    }

}

// функция скрывает подчеркивание после ухода мыши
// принимает элемент пункта справа и фрагмент кода слева
function hideCodeSolution(elem, code) {
    elem.classList.remove("underlined");
    code.style.textDecoration = "none";
}