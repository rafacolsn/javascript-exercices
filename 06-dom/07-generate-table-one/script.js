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
    let tableGen = document.createElement("table");
    target.appendChild(tableGen);
    tableGen.setAttribute("id", "tableau");
    let tableGet = document.getElementById("tableau");
    for (var i = 0; i < 10; i++) {
      let rowGen = tableGet.insertRow(i);
    }
})();
