const form = document.querySelector("form")
const result = document.querySelector('#results')
const guide = document.querySelector("#weight-guide")

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)

    if (height === '' || height < 0 || isNaN(height)) {
        result.textContent = 'Please provide a valid Height'
        return
    }
    
    if (weight === '' || weight < 0 || isNaN(weight)) {
        result.textContent = 'Please provide a valid Weight'
        return
    }

    const bmi = (weight / ((height**2)/10000)).toFixed(2)
    
    if (bmi < 18.6) {
        result.textContent = guide.children[1].textContent
    } else if (bmi >= 18.6 && bmi <= 24.9) {
        result.textContent = guide.children[2].textContent
    } else {
        result.textContent = guide.children[3].textContent
    }
})