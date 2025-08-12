    
    function performOperation(operationType) {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
            let result;
    
            // Usar una declaración `switch` para determinar la operación
            switch (operationType) {
                case 'sum':
                    result = sum(num1, num2);
                    break;
                case 'rest':
                    result = rest(num1, num2);
                    break;
                case 'multiply':
                    result = multiply(num1, num2);
                    break;
                case 'div':
                    result = div(num1, num2);
                    break;
                default:
                    result = 'Operación no válida';
            }
    
            // Mostrar el resultado
            displayResult(result);
        } else {
            displayResult('Por favor, ingresa números válidos');
        }
                }
                function sum(a,b){
                    debugger;
                    return a+b;
                }

                function rest(a,b){
                    debugger;
                    return a-b;
                }

                function div(a,b){
                    debugger;
                    return a/b;
                }
    
                function multiply(a, b) {
                    // Introduce a debugger statement to pause execution
                    debugger;
    
                    // Multiply the numbers
                    return a * b;
                }
    
                function displayResult(result) {
                    // Display the result in the paragraph element
                    const resultElement = document.getElementById('result');
                    resultElement.textContent = `The result is: ${result}`;
                }
            