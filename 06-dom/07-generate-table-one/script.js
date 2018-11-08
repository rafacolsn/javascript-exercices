/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let target = document.getElementById("target");
    let tableau = document.createElement("table");
    let row = document.createElement("tr");
    let cell = document.createElement("td");
    target.appendChild(tableau);
    tableau.appendChild(row);

    for (var i = 0; i < 10 ; i++) {
        row.appendChild(cell);
        console.log(cell);
        let n = document.getElementById("tr");

        n.appendChild(cell);
        console.log(n+1);
    }


})();
