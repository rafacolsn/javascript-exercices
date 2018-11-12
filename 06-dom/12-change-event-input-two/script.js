/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("pass-one").onkeyup = function() {
        let str = document.getElementById("pass-one").value;
        let num = /\d{1,}/g;
        let numArr = str.match(num);
        if (str.length >= 8 && numArr.length >= 2) {
            document.getElementById("validity").innerHTML = "ok";
      } else {
            document.getElementById("validity").innerHTML = "not ok";
      }
    }

})();
