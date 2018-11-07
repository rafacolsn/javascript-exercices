/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    alert(`Le tableau est d'abord :
    ${fruits}`);
    document.getElementById("run").addEventListener("click", () => {
        fruits.pop();
        fruits.shift();
        fruits.unshift("banane");
        fruits.push("kiwi");
        alert(`Le tableau est maintenant :
            ${fruits}`);
    });

})();
