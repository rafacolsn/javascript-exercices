/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () => {
        let year = document.getElementById("year").value;
        let myDate = new Date (year, 0, 1, 0, 0, 0, 0);
        let monthsList = [];
        for (var i = 0; i <= 11; i++) {
            myDate.setMonth(i);
            myDate.setDate(13);
            let weekday = myDate.getDay();
            if (weekday == 5) {
                let month = myDate.toLocaleString("fr-FR", { month: "long" });
                monthsList.push(` ${month}`);
            }
        }
        alert(`Le(s) mois qui contien(nen)t un vendredi 13 est/sont :
            ${monthsList}`);
    });
})();
