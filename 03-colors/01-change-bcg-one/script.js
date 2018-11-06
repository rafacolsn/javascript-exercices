/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("#red").addEventListener("click", () => {
        document.querySelector("html").style.backgroundColor = "#501212";
    } )
    document.querySelector("#green").addEventListener("click", () => {
        document.querySelector("html").style.backgroundColor = "#232e16";
    } )
    document.querySelector("#yellow").addEventListener("click", () => {
        document.querySelector("html").style.backgroundColor = "#c5bb12";
    } )
    document.querySelector("#blue").addEventListener("click", () => {
        document.querySelector("html").style.backgroundColor = "#031931";
    } )

})();
