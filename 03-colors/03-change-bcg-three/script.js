/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () => {
        var color = "#";
        function colorRandom () {
            let colorItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

            for (let i = 1; i < 7; i++) {
                color += colorItems[Math.floor(Math.random()*16)];
            }
            return color;
        }
        colorRandom();
        document.querySelector("html").style.backgroundColor = color;
        alert(`Votre couleur générée aléatoirement est ${color}`);
    });

})();
