/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let hello = ["Bonjour !","Bonsoir !"];
    let hour = new Date().getHours();
    if (hour < 18) {
        document.getElementById("target").innerHTML = hello[0];

    } else {
        document.getElementById("target").innerHTML = hello[1];
    }


})();
