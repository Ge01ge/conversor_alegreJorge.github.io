// const oficial = document.querySelector("#uno");
// const blue = document.querySelector("#dos");
// const solidario = document.querySelector("#tres");
// const pesos = document.querySelector("#pesos");

// console.log(pesos)
// console.log(oficial)
// console.log(blue)
// console.log(solidario)
// console.log(cotiz)


let x = parseFloat(document.querySelector('#pesos'));
// console.log(x) 
// // aca me tirar el erro NaN, calculo que por eso mismo no me tomas los if

resultado = 0;
oficial = 145;
blue = 290;
solidario = 279;

function convertir(){
    let x = parseFloat(document.querySelector('#pesos').value);
    if(document.querySelector('#uno').checked){
        
            resultado = x / oficial;
            alert(`el cambio de "${x} + pesos" a dolares es: ${resultado.toFixed(2)} Dolares "Ofical"`); 
        
    } else if(document.querySelector('#dos').checked) {
        
            resultado = x / blue;
            alert(`el cambio de "${x} + pesos" a dolares es: ${resultado.toFixed(2)} Dolares "Blue"`); 
        
    } else if(document.querySelector('#tres').checked){
        
            resultado = x / solidario;
            alert(`el cambio de "${x} + pesos" a dolares es: ${resultado.toFixed(2)} Dolares "solidario"`); 
    }else {
        alert(`tienes que llenar el formulario`);
    }

}





