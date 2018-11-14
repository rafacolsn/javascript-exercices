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

let x = 460;
let y = 0;
const speed = 100;

function increaseSlot1() {
    x++;
    x = x > 499 ? x = 460 : x;
    document.querySelector("#part-one").value = x;
};

function increaseSlot(id) {
    y++;
    y = y < 10 ? ("0" + y) : y;
    y = y > 99 ? y = 0 : y;
    document.querySelector(id).value = y;
};


// function increaseSlot2() {
//     y++;
//     y = y < 10 ? ("0" + y) : y;
//     y = y > 99 ? y = 0 : y;
//     document.querySelector("#part-two").value = y;
// };

// function increaseSlot3() {
//     y++;
//     y = y < 10 ? ("0" + y) : y;
//     y = y > 99 ? y = 0 : y;
//     document.querySelector("#part-three").value = y;

// };

// function increaseSlot4() {
//     y++;
//     y = y < 10 ? ("0" + y) : y;
//     y = y > 99 ? y = 0 : y;
//     document.querySelector("#part-four").value = y;

// };

slotId = [
    setInterval(increaseSlot1, speed), 
    setInterval(function(){increaseSlot("#part-two")}, speed),
    setInterval(function(){increaseSlot("#part-three")}, speed),
    setInterval(function(){increaseSlot("#part-four")}, speed)
    ];


let click = [0, 0, 0 ,0];

function clickOdd1() {
    click[0]++;
    if (click[0] % 2 != 0) {
        clearInterval(slotId[0]);
        document.querySelector("#part-one").innerHTML = document.querySelector("#part-one").value;
    } 
    else {
        slotId[0] = setInterval(increaseSlot1, speed); // re-stock l'ID du nouvel interval
    }
}

function clickOdd2() {
    click[1]++;
    if (click[1] % 2 != 0) {
        clearInterval(slotId[1]);

    } 
    else {
        slotId[1] = setInterval(function(){increaseSlot("#part-two")}, speed); // re-stock l'ID du nouvel interval
    }
}

function clickOdd3() {
    click[2]++;
    if (click[2] % 2 != 0) {
        clearInterval(slotId[2]);
    } 
    else {
        slotId[2] = setInterval(function(){increaseSlot("#part-three")}, speed); // re-stock l'ID du nouvel interval
    }
}

function clickOdd4() {
    click[3]++;
    if (click[3] % 2 != 0) {
        clearInterval(slotId[3]);
    } 
    else {
        slotId[3] = setInterval(function(){increaseSlot("#part-four")}, speed); // re-stock l'ID du nouvel interval
    }
}

document.querySelector("#fix-part-one").addEventListener("click", function() {
    clickOdd1();
});

document.querySelector("#fix-part-two").addEventListener("click", function() {
    clickOdd2();
});

document.querySelector("#fix-part-three").addEventListener("click", function() {
    clickOdd3();
});

document.querySelector("#fix-part-four").addEventListener("click", function() {
    clickOdd4();
});
    
    

    
    
    




})();