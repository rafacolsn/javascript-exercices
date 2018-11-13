/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let lettersArr = document.querySelector("#target").innerHTML.split(" "); // récupère les lettres
    document.querySelector("#target").innerHTML = ""; // vide le texte
    
    for (i=0; i < lettersArr.length; i++) {
        let span = document.createElement("span"); 
        document.querySelector("#target").appendChild(span);
        span.setAttribute("class", "wave")
        span.innerHTML = lettersArr[i]+" ";                         // créée des spans pour chaque lettre
    }
    
    let fsArr = ["1.2em", "1.5em", "1.8em", "2em", "2.5em", "3em", "2em", "1.5em", "1.2em"];
    let spans = Array.from(document.querySelectorAll(".wave"));
    var i = 0;
    var j = 0;
    function waving() {
        if (i >= fsArr.length) {
            i=0;
        } 
        if (j >= spans.length) {
            j=0;
        }
        let temp = fsArr[0];
        fsArr.shift();
        fsArr.push(temp);  
        spans[j].style.fontSize = fsArr[i];
        i++;
        j++;
    };
    setInterval(waving,100);
    
})();
