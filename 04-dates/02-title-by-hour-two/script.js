/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let hello = ["Bonjour !","Bonsoir !"];
    let hour = new Date(Date.now()).getHours();
    let minute = new Date().getMinutes();
    let time = `${hour}.${minute}`;
    console.log(time);
    if (time < 17.3) {
        document.getElementById("target").innerHTML = hello[0];

    } else {
        document.getElementById("target").innerHTML = hello[1];
    }

})();
