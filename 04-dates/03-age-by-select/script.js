/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", () => {
        let bday = document.getElementById("dob-day").value;
        let bmonth = document.getElementById("dob-month").value;
        let byear = document.getElementById("dob-year").value;
        let birthday = new Date (byear,bmonth,bday);
        console.log(birthday);
        alert(Date.now - birthday);

    })
})();
