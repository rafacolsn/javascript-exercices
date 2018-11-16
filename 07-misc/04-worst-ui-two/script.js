/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let one = 460;
    let two = "00";
    let three = "00";
    let four = "00";
    
    document.querySelector("#part-one").addEventListener("click", () => {
        one++;
        if (one > 499) {
            one = 460;
        }
        document.querySelector("#target").innerHTML = "+"+one+two+three+four;
    });
    
    document.querySelector("#part-two").addEventListener("click", () => {
       parseInt(two);
       two++;
       if (two < 10) {
            two = "0" + two;
       }
       if (two > 99) {
           two = 0 + "0";
       }
       document.querySelector("#target").innerHTML = "+"+one+two+three+four;
    });

    document.querySelector("#part-three").addEventListener("click", () => {
        parseInt(three);
        three++;
        if (three < 10) {
             three = "0" + three;
        }
        if (three > 99) {
            three = 0 + "0";
        }
        document.querySelector("#target").innerHTML = "+"+one+two+three+four;
     });

     document.querySelector("#part-four").addEventListener("click", () => {
        parseInt(four);
        four++;
        if (four < 10) {
             four = "0" + four;
        }
        if (four > 99) {
            four = 0 + "0";
        }
        document.querySelector("#target").innerHTML = "+"+one+two+three+four;
     });
})();
