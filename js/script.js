
let inputText = document.getElementById("input");

let outputResult = document.getElementById("result");

let modalCopy = document.querySelector(".converter-modal__copy");



inputText.addEventListener("input", function () {

    let title = inputText.value.toLowerCase().trim();
    let outTitle = title.split("").filter(deletesigns);
    let deleteemptiesResult = deleteempties(outTitle);
    let deletelineResult = deleteline(deleteemptiesResult).join("");


    return outputResult.textContent = deletelineResult;


});


outputResult.addEventListener("click", function ({ target }) {
    if (target.innerText) {
        navigator.clipboard.writeText(target.innerText);
        modalCopy.innerText = "Copied";
        console.log("copied");
    } else {
        console.log("none");
        modalCopy.innerText = "Empty";

    }
})

function deletesigns(elem) {
    let signs = ["?", ":", ";", "!", ",", ".", "/", "`", "\\", "{", "}", "_", "", "'", "'"];

    for (let i = 0; i < signs.length; i++) {
        if (elem === signs[i]) {
            return false;
        }
    }
    return true;

}

function deleteempties(elem) {
    for (let i = 0; i < elem.length; i++) {
        if (elem[i] == " ") {
            elem[i] = "-"
        }

    }
    return elem;
}

function deleteline(elem) {

    for (let i = 0; i < elem.length; i++) {
        if (elem[i] == "-" && elem[i + 1] == "-") {
            elem[i] = ""

        }

    }
    return elem;

}

