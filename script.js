function calculate() {
    const grundElement = document.getElementById('portions').value;
    const input = document.getElementById('portions');

    if (!input.checkValidity()) {
        input.reportValidity();
        return;
    }

    document.querySelectorAll('.amount').forEach(el => {
        const basevalue = el.dataset.base ?? el.innerHTML;
        el.dataset.base = basevalue;
        el.innerHTML = (grundElement * basevalue);
    })
};

// Mit getElementById kann ich nur ein Element ansprechen. Beim googeln bin ich auf querySelectorAll gestoßen, womit ich alle Elemente selektieren kann – über eine Class. Danach habe ich ebenfalls per Google herausgefunden, dass ich die einzelnen Werte entweder mit einer Schleife oder mit forEach ändern kann. Das hat auch alles super funktioniert – bis ich einen Wert erneut ändern wollte. Dann wurde immer der jetzige Wert weiter vervielfacht. Aus meiner VBA-Erfahrung habe ich das so gelöst, dass ich den Anfangswert separat speichere.
// Quellen: W3Schools und MDN. 


function toggleRespMenu() {
    document.getElementById('resp_menu').classList.toggle('resp_menu_closed')
}

function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("https://formspree.io/f/mgoeqjzg", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            "Accept": "application/json"
        }
    }).then(() => {
        window.location.href = "./answer.html";
    }).catch(error => {
        console.log(error);
    });
}