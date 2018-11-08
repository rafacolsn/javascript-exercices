/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    let imageArr = document.getElementsByTagName("img");
    let data = imageArr[0].getAttribute("src");
    let i = 1;

    document.getElementById("next").addEventListener ("click", () => {
        data = gallery[i];
        imageArr[0].src = data;
        if (i < 4) {
            i++;
        }
        else {
            i=0;
        }
        console.log(i);
        console.log(data);
    });


})();
