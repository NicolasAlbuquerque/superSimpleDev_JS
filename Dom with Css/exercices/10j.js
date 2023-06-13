

const results = document.querySelector('.results')

let calculation = localStorage.getItem('calculation')|| ''
displayCalculation();   

function updateCalculation(value){
    calculation+=value
    displayCalculation()
    console.log(calculation);
    localStorage.setItem('calculation', calculation)
}

function displayCalculation(){
    results.innerHTML=calculation
}

