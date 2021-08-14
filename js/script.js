/* 
Traer botón por id
document.getElementById('button-equals').addEventListener('click', () => {
    alert('Clic en igual');
});


// Otra forma de traer botón por id
document.querySelector('#button-divide').addEventListener('click', () => {
    alert('Clic en división');
});
*/

function sumar (a, b) {
    return a + b;
}
function restar (a,b) => a − b
function multiplicar (a,b) => a × b
function dividir (a, b) => a ÷ b


// Traer todos los botones
const allBtn = document.querySelectorAll('.calc-button');
const 

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', (event) => {
        const element = event.target; // Elemento .calc-button que dispara el evento
    
        console.log(`Clic en ${element.textContent}`);
    });
}