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
        let id = "n-";
        for (var i = 0; i < 10; i++) {
            let randomNumber = Math.floor(Math.random()*100);
            randomList.push(randomNumber);
            id += i+1;


        }
        console.log(randomList);
        console.log(id);



    });


})();
