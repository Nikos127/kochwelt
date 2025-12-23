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