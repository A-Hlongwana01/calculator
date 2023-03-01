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

modButton.addEventListener("click", () => {
    textarea.value += "%"
}
)


operators.forEach(btn => {
    btn.addEventListener("click", () => {
        textarea.value += " "+btn.innerText+" "
    })
})


function getExpression(){
    let expression = textarea.value
    return expression
}


let expression = getExpression()
const compute = (expression = '') => {
    let total = 0;
    expression = expression.match(/[+\−]*(\.\d+|\d+(\.\d+)?)/g) || [];
    while (expression.length) {
       total += parseFloat(expression.shift());
    };
    return total;
 };


