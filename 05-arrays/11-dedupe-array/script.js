/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    document.getElementById("run").addEventListener("click", () => {
        let deduped = []; // nouveau tableau
        for (let i = 0; i < fruits.length; i++) {
            let fruit = fruits[i];
            if (deduped.indexOf(fruit) === -1) {
                deduped.push(fruits[i]);
            }
        }; // si indexOf === -1 => l'élément n'a pas d'index dans le tableau et est donc pas présent
        console.log(deduped);
    });
})();
