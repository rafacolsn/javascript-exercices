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

    let fieldSlotArr = Array.from(document.querySelectorAll('input'));

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

    slotId = [
        setInterval(increaseSlot1, speed), 
        setInterval(function(){increaseSlot("#part-two")}, speed),
        setInterval(function(){increaseSlot("#part-three")}, speed),
        setInterval(function(){increaseSlot("#part-four")}, speed)
        ];
    
    let click = [0, 0, 0 ,0];
    
    document.querySelector("#fix-part-one").addEventListener("click", function() {
        click[0]++;
        if (click[0] % 2 != 0) {
            clearInterval(slotId[0]);
            document.querySelector("#target").innerHTML = "+" + fieldSlotArr[0].value + "00" + "00" + "00";
        } 
        else {
            slotId[0] = setInterval(increaseSlot1, speed); // re-stock l'ID du nouvel interval
        }
    });
    
    document.querySelector("#fix-part-two").addEventListener("click", function() {
        click[1]++;
        if (click[1] % 2 != 0) {
            clearInterval(slotId[1]);
            document.querySelector("#target").innerHTML = "+" + fieldSlotArr[0].value + fieldSlotArr[1].value + "00" + "00";
        } 
        else {
            slotId[1] = setInterval(function(){increaseSlot("#part-two")}, speed); // re-stock l'ID du nouvel interval
        }
    });
    
    document.querySelector("#fix-part-three").addEventListener("click", function() {
        click[2]++;
        if (click[2] % 2 != 0) {
            clearInterval(slotId[2]);
            document.querySelector("#target").innerHTML = "+" + fieldSlotArr[0].value + fieldSlotArr[1].value + fieldSlotArr[2].value + "00";
        } 
        else {
            slotId[2] = setInterval(function(){increaseSlot("#part-three")}, speed); // re-stock l'ID du nouvel interval
        }
    });
    
    document.querySelector("#fix-part-four").addEventListener("click", function() {
        click[3]++;
        if (click[3] % 2 != 0) {
            clearInterval(slotId[3]);
            document.querySelector("#target").innerHTML = "+" + fieldSlotArr[0].value + fieldSlotArr[1].value + fieldSlotArr[2].value + fieldSlotArr[3].value;
        } 
        else {
            slotId[3] = setInterval(function(){increaseSlot("#part-four")}, speed); // re-stock l'ID du nouvel interval
        }
    });
})();


