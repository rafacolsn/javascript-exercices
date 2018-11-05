/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {


        const input = document.getElementById("numbers").value;
        let n = input.lenght;
        const items = input.split(", ",n);
        const list = Array.from(items);
        const nbrList = list.map(Number);


        console.log(list); // output: [1, 2, 3, 4, 5, 6]
        console.log(list[0]); // output : 2
        console.log(nbrList[3]); // output : 10
        console.log(nbrList);


    });

})();
