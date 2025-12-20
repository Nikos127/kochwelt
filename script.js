function calculate() {
    const grundElement = document.getElementById('number').value / 4;

    document.querySelectorAll('.amount').forEach(el => {
        const basevalue = el.dataset.base ?? el.innerHTML;
        el.dataset.base = basevalue;
        el.innerHTML = grundElement * basevalue;
    })
};