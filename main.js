// CREO UN CONTAINER NEL DOM
const container = document.getElementById('container');


// CREO IL CICLO DA 1 A 100 CHE SI RIPETE
for (let i = 1; i <= 100; i++) {
    let value;
    
    // ANALISI SE I NUMERI SONO MULTIPLI DI 3 E DI 5
    if (i % 3 === 0 && i % 5 === 0) {
        value = 'FizzBuzz';
    } else if (i % 3 === 0) {
        value = 'Fizz';
    } else if (i % 5 === 0) {
        value = 'Buzz';
    } else {
        value = i;
    }

    // CREO UN ELEMENTO HTML= 'DIV'
    const element = document.createElement('div');
    element.textContent = value;

    // CREO CLASSI PER IL CSS
    if (value === 'FizzBuzz') {
        element.classList.add('fizzbuzz');
    } else if (value === 'Fizz') {
        element.classList.add('fizz');
    } else if (value === 'Buzz') {
        element.classList.add('buzz');
    } else {
        element.classList.add('number');
    }

    // AGGIUNGO L'ELEMENTO AL CONTAINER NEL DOM
    container.append(element);
}
