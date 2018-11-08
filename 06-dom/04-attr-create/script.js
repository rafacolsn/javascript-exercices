/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let section = document.getElementsByTagName("section");
    console.log(section);
    let source = document.getElementById("source");
    let data = source.getAttribute("data-image");
    let image = document.createElement("img");
    image.src = data;
    target.appendChild(image);
    section[1].removeChild(source);
})();
