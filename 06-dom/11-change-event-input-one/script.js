/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  document.getElementById("pass-one").onkeyup = function() {
    let str = document.getElementById("pass-one").value;
    document.getElementById("counter").innerHTML = `${str.length}/10`;
    if (str.length > 10) {
      console.log(str);
    }


  }

})();
