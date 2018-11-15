/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const randomNum = Math.floor(Math.random()*100);  // conserve un nbr au hasard

    let userNumArr =[];

    let essaisArr = [
                `Allons-y !`,
                `Deuxième essai, on peut pas trouver du premier coup, même si certains y arrivent...`,
                `Troisième essai, on se rapproche ?`,
                `Quatrième essai, ça commence à devenir gênant...`,
                `Cinquième essai. Si j'étais vous, je laisserais tomber.`,
                `Sixième essai, demandez à votre chat de vous aider !`,
                `Septième essai : voulez-vous une corde ?`,
                `Huitième essai, après je ne compte plus...`,
                `Franchement ? Vous voulez continuez ?`
    ]

    let i;

    function askUser(n) {
        
        if (i+1 > 8) {
            alert(essaisArr[8]);
        }
        else {
            alert(essaisArr[n]);
        }
        
        let userNum = prompt(`Quel est votre nombre ?`);
        userNum = userNum != null ? userNumArr.push(Number(userNum)) : alert("P'tit zizi");
    }
    
    confirm(`L'ordinateur a choisi un nombre au hasard entre 0 et 100... Saurez-vous deviner ce nombre avec le moins d'essai possible ?`) ? askUser(0) : alert("P'tit zizi");
    
    for (i = 0; i <= userNumArr.length; i++) {
        
        if (userNumArr[i] === randomNum) {
            alert(`Bravo ! vous avez trouvé le nombre était bien : ${randomNum}, vous avez utilisé ${userNumArr.length} essais.
            Vos essais sont ${userNumArr}`);
            break;
        }
        
        if (userNumArr[i] > randomNum) {
            alert(`Votre nombre ${userNumArr[i]} est trop grand, essayez un nombre plus petit`);
            askUser(i+1);
        }

        if (userNumArr[i] < randomNum) {
            alert(`Votre nombre ${userNumArr[i]} est trop petit, essayez un nombre plus grand`);
            askUser(i+1);
        }
        
    }
})();
