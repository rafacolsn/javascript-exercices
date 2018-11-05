/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        function addition() {
            let x = document.getElementById('op-one').value;
            let y = document.getElementById('op-two').value;
            let result = +x + +y;
            alert(result);
        }
        addition();



    });

    document.getElementById("substraction").addEventListener("click", function() {

            function substraction() {
                let x = document.getElementById('op-one').value;
                let y = document.getElementById('op-two').value;
                let result = +x - +y;
                alert(result);
            }
            substraction();
            // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        function multiplication() {
            let x = document.getElementById('op-one').value;
            let y = document.getElementById('op-two').value;
            let result = +x * +y;
            alert(result);
        }
        multiplication();
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        function division() {
            let x = document.getElementById('op-one').value;
            let y = document.getElementById('op-two').value;
            let result = +x / +y;
            alert(result);
        }
        division();

        // perform an division
    });
})();
