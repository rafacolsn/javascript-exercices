/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", () => {
        let randomList = [];
        for (let i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random()*100); // choisi un nbr au hasard
            randomList.push(randomNumber);
            document.getElementById("n-"+(i+1)).innerHTML = randomList[i]; // l'ajoute au tableau
        }

        let smaller = randomList.reduce(function(x,y) {return (x<y) ? x:y;} ); // renvoie le plus petit
        let bigger = randomList.reduce(function(x,y) {return (x>y) ? x:y;} ); // renvoie le plus grand
        let sum = randomList.reduce(function(x,y) {return (x+y);} ); // renvoie la somme

        document.getElementById("min").innerHTML = smaller; // inscrit la réponse
        document.getElementById("max").innerHTML = bigger; // inscrit la réponse
        document.getElementById("sum").innerHTML = sum; // inscrit la somme
        document.getElementById("average").innerHTML = (sum/randomList.length); // inscrit la moyenne

    });


})();
