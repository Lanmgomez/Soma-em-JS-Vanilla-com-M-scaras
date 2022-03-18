const masks = {
    num1 (value) {
        return value
          .replace(/\D/g, '')
          .replace(/(\d{3})(\d)/, '$1,$2') 
          .replace(/(,\d{2})\d+?$/, '$1') 
    },
    num2 (value) {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, '$1,$2')
            .replace(/(,\d{2})\d+?$/, '$1') 
    }
}

document.querySelectorAll('input').forEach(($input) => { 
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

function Somar() {
    let number1 = window.document.getElementById('number-1').value
    let number2 = window.document.getElementById('number-2').value
    let parseNumber1 = parseFloat(number1.replace(",", "."));
    let parseNumber2 = parseFloat(number2.replace(",", "."));
    let result = parseNumber1 + parseNumber2

        alert(`A soma dos números é: ${result}`)
}