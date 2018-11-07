/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function asv() {
        if(confirm(
            `Vous avez ${prompt ("Quel âge as-tu ?")} ans
            Vous êtes un/e ${prompt ("Homme ou femme ?")}
            Vous habitez à ${prompt ("De quelle ville es-tu ?")}`) == true)
                {
                alert(`OK !`);
        }
        else {asv()}
    }
    asv();




})();
