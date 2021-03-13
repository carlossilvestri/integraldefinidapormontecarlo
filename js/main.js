// Variables
const inputNumber = document.querySelector('#numberInput');
const btnCalcular = document.querySelector('#btnCalcular');
const divColocarResultado = document.querySelector('#colocarResultado');

// Listeners
btnCalcular.addEventListener('click', calculos);
inputNumber.addEventListener('keyup', validarBoton);

// Funciones
function calculos(){
    vaciarTabla();
    let numeroDeSimulaciones = inputNumber.value;
    if(numeroDeSimulaciones > 0){
        // Empezar la simulacion.
        const resultadoExacto = Math.pow(3,3) + Math.pow(3,2) + Math.pow(2,3) + Math.pow(2,2);
        let resultadoAprox = 0;
        let variableAcumuladora = 0;
        for(let i = 0; i < numeroDeSimulaciones; i++){
            variableAcumuladora += resultadoExacto - Math.random();
        }
        resultadoAprox = variableAcumuladora/numeroDeSimulaciones;
        let porcentajeError = (Math.abs(resultadoAprox-resultadoExacto)/resultadoExacto)*100;
        crearHTML(resultadoAprox, porcentajeError);
    }

}
function validarBoton(){
    console.log('validarBoton ', inputNumber.value)
    if(inputNumber.value > 0){
        btnCalcular.disabled=false;
    }else{
        btnCalcular.disabled=true;
    }
}
function crearHTML(rApro, porcError){
    const div = document.createElement("div"),
        cuerpo = `
            <div class="alert alert-info mt-5 g" role="alert">
                <p>Resultado aproximado de la integral por el método de Monte Carlo: ${rApro}</p>
                <p>(%) de error: ${porcError}</p>
              </div>
        `;
        div.innerHTML = cuerpo;
        divColocarResultado.appendChild(div);
}
function vaciarTabla(){
    while (divColocarResultado.firstChild) {
        divColocarResultado.removeChild(divColocarResultado.firstChild);
    }
}