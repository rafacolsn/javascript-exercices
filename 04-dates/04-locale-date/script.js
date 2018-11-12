/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let date = new Date();
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    function addZero(n) {
        if (n < 10) {
            n = "0" + n;
        }
        return n;
    }

    let hour = addZero(date.getHours());
    let minute = addZero(date.getMinutes());

    document.getElementById("target").innerHTML =
    `Nous sommes le ${date.toLocaleDateString("fr-FR", options)} à ${hour}h${minute}`;
})();
