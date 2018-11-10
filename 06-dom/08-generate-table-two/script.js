/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
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
  for (var i = 1; i <= 10; i++) {
    let rowGen = tableGet.insertRow();
      for (var j = 1; j <= 10; j++) {
        rowGen.insertCell().textContent =i*j;
      }
  }

})();
