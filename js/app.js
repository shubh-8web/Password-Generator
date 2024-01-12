
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "!@#$%^&*()_+/";

let passBox = document.querySelector("#pass-box");
let totalChar = document.querySelector("#total-char");
let upperInput = document.querySelector("#upper-case");
let lowerInput = document.querySelector("#lower-case");
let numbersInput = document.querySelector("#numbers");
let symbolsInput = document.querySelector("#symbols");
let btn = document.querySelector("#btn")


const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)]
}

const generatePassword = (password = "") => {
    if (upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        password += getRandomData(lowerSet)
    }

    if (numbersInput.checked) {
        password += getRandomData(numberSet)
    }
    if (symbolsInput.checked) {
        password += getRandomData(symbolSet)
    }

    if (password.length < totalChar.value) {
        return generatePassword(password);
    }
    passBox.innerText = (truncateString(password, totalChar.value))
}



btn.addEventListener("click", function () {
    generatePassword();
})
generatePassword();


function truncateString(str, num) {
    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } else {
        return str;
    }
}
