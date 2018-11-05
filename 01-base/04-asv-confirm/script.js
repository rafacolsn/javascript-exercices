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
        let age = prompt ("Quel âge as-tu ?");
        let sex = prompt ("Homme ou femme ?");
        let town = prompt ("De quelle ville es-tu ?");
        if(confirm(
        `Vous avez ${age} ans
        Vous êtes un/e ${sex}
        Vous habitez à ${town}`) == true) {
            alert(`OK !`);
        } else {
            asv()
        }
    }
    asv()




})();
