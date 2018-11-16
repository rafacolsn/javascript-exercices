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

    let firstValue = fieldSlotArr[0].value;;
    let secondValue = fieldSlotArr[1].value;
    let thirdValue = fieldSlotArr[2].value;
    let fourthValue = fieldSlotArr[3].value;
    
    let valuesArr = [firstValue, secondValue, thirdValue, fourthValue];
    
    
    function clickSlotLaunchNStop(i) {
        click[i]++;
        valuesArr[i] = fieldSlotArr[i].value;
        
        if (click[i] % 2 != 0) {
            clearInterval(slotId[i]);
            document.querySelector("#target").innerHTML = "+" + valuesArr[0] + valuesArr[1] + valuesArr[2] + valuesArr[3];
        } 
        else {
            slotId[i] = setInterval(increaseSlot1, speed); // re-stock l'ID du nouvel interval
        }
    }
    
    document.querySelector("#fix-part-one").addEventListener("click", function() {clickSlotLaunchNStop(0)});
    
    document.querySelector("#fix-part-two").addEventListener("click", function() {clickSlotLaunchNStop(1)});
    
    document.querySelector("#fix-part-three").addEventListener("click", function() {clickSlotLaunchNStop(2)});
        
    document.querySelector("#fix-part-four").addEventListener("click", function() {clickSlotLaunchNStop(3)});
        
})();


