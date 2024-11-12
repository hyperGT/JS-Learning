
// assigning variables
const counterH1 = document.getElementById("counter");
let cont = 0; 

function incrementCounter(){
    
    cont++;
    counterH1.textContent = cont;
}

function decrementCounter(){
    
    cont--;
    counterH1.textContent = cont;
}

function resetCounter(){

    cont = 0;
    counterH1.textContent = cont;
}

function randomNumber(){

    const min = 1;
    const max = 100;

    cont = Math.floor(Math.random() * max) + min;    // gera um numero aleatório entre 1 e 100
    counterH1.textContent = cont;
}