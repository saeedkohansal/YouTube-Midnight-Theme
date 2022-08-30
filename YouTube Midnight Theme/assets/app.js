// Add Custom CSS - Function
const Add_Custom_Style = css => document.head.appendChild(document.createElement("style")).innerHTML = css

// Voice Button Styles
setTimeout(function () {
    if (document.querySelectorAll("#button")[10]) {
        const voice_btn = document.querySelectorAll("#button")[10]
        voice_btn.style.background = "#303042"
        voice_btn.style.borderRadius = "50%"
    }
}, 3000)

/* -------------- */
/* Add Custom CSS */
/* -------------- */
Add_Custom_Style(`
        @import url("https://fonts.googleapis.com/css?family=Quicksand|Noto+Kufi+Arabic");

        * {
            font-family: "Quicksand", "Noto Kufi Arabic" !important;
        }
`)