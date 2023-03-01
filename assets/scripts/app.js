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