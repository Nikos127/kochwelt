function calculate() {
    const grundElement = document.getElementById('portions').value;

    document.querySelectorAll('.amount').forEach(el => {
        const basevalue = el.dataset.base ?? el.innerHTML;
        el.dataset.base = basevalue;
        el.innerHTML = (grundElement * basevalue);
    })
};

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