const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");
const zeroButton = document.getElementById("zero");
const commaButton = document.getElementById("comma");
const modButton = document.getElementById("mod");
const dividButton = document.getElementById("divid");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const equalButton = document.getElementById("equals");
const oBracketButton = document.getElementById("o-bracket"); 
const cBracketButton = document.getElementById("c-bracket");

// const textArea = document.getElementById("input");

// const currentResultOutPut = document.getElementById("input").value
// equalButton.addEventListener("click", addToTextArea)


const buttons = document.querySelectorAll('.btn')
const textarea = document.querySelector('textarea')

const delete_btn = document.querySelector('.erase-button')

let chars = []

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        textarea.value += btn.innerText
        chars = textarea.value.split('')
    })
})

delete_btn.addEventListener('click', () => {
    chars.pop()
    textarea.value = chars.join('')
})

