/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {


const speed = 1000;

let fieldSlotArr = Array.from(document.querySelectorAll('input'));

let numbersArr = [];

let i;

function increaseSlot() {
    for (j = 1; j < 100; j++) {
        numbersArr.forEach(function (_, index, arr) {
            arr[index] += 1;
         });
        fieldSlotArr[i].value = numbersArr[i];
    }
}

for (i = 0; i < 4; i++) {
    fieldSlotArr[i].setAttribute("type", "number");
    let numbers = Number(fieldSlotArr[i].value);
    numbersArr.push(numbers);
    fieldSlotArr[i].value = numbersArr[i];
    increaseSlot();
}



setInterval(increaseSlot, speed);




})();