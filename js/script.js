// function sumar(a,b) {
//     return a + b;
// }
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;

// Traer todos los botones
const allBtn = document.querySelectorAll('.calc-button');

const logEl = document.getElementById('log');

const resultEl = document.querySelector('#result');

const logArr = [];

let aux = '';

for (let i = 0; i < allBtn.length; i++) {
    allBtn[i].addEventListener('click', (event) => {
        const element = event.target; // Elemento .calc-button que dispara el evento

        if (element.textContent == 'C') {
            logEl.innerText = '';
            logArr.length = 0;
            aux = '';
            resultEl.value = 0;
        } else if (element.textContent == '=') {
            logArr.push(aux);

            let total = parseInt(logArr[0]);


            for(let i = 1; i < logArr.length; i+=2) {
                const op = logArr[i];
                const b = parseInt(logArr[i+1]);

                // debugger;

                if (op == '+') {
                    total = sumar(total, b);
                } else if (op == '−') {
                    total = restar(total, b);
                } else if (op == '×') {
                    total = multiplicar(total, b);
                }else if (op == '÷') {
                    total = dividir(total, b);
                }
            }

            console.log(total);
            logArr.length = 0;
            aux = '';

            if (isNaN(total)) {
                resultEl.value = "Error";
            } else {
                resultEl.value = total;
                logEl.innerText = '';
            }
        } else {
            logEl.innerText = logEl.innerText + element.textContent
            if (isNaN(element.textContent) && element.textContent != '-') {
                logArr.push(aux);
                logArr.push(element.textContent);

                aux = '';
            } else {
               aux += element.textContent
            }
        }
    });
}