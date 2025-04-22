function calcularResultado() {
    // Array para almacenar las 5 notas
    let notas = [];
    let suma = 0;
    let todasNotasValidas = true;
    
    // Solicitar las 5 notas al usuario
    for (let i = 0; i < 5; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota ${i + 1} (entre 0 y 10):`));
        
        // Verificar que la nota esté en el rango válido
        while (isNaN(nota) {
            nota = parseFloat(prompt(`Valor inválido. Ingrese la nota ${i + 1} (entre 0 y 10):`));
        }
        
        if (nota < 0 || nota > 10) {
            alert("Error: Las notas deben estar entre 0 y 10");
            todasNotasValidas = false;
            break;
        }
        
        notas.push(nota);
        suma += nota;
    }
    
    // Si todas las notas son válidas, calcular el promedio
    if (todasNotasValidas) {
        const promedio = suma / 5;
        let mensaje = `Notas ingresadas: ${notas.join(', ')}\nPromedio: ${promedio.toFixed(2)}\n`;
        
        // Determinar el resultado según el promedio
        if (promedio >= 7) {
            mensaje += "Resultado: Pasa de año";
        } else if (promedio >= 3.5 && promedio < 7) {
            mensaje += "Resultado: Suspenso";
        } else {
            mensaje += "Resultado: Pierde el semestre";
        }
        
        alert(mensaje);
    }
}

// Llamar a la función para ejecutar el programa
calcularResultado();