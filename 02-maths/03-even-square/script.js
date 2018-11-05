/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        let squareList = [];                // tableau des carrés
        let square = 0;
        for (let i = 1; i < 21; i++) {
            if(i % 2 === 0) {               // choisi les nbrs pairs
                square=Math.pow(i,2);       // calcule le carré de i
                squareList.push(square);    // ajoute le carré au tableau
            }
        }
        alert(squareList);
    });

})();
