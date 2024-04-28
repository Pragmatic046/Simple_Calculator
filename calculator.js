function show(value) {
    document.getElementById('e-bar').value += value;
}
function clear_display() {
    document.getElementById('e-bar').value = '';
}
function calculate() {
    let evaluate = document.getElementById('e-bar').value;
    let result = eval(evaluate)
    document.getElementById('e-bar').value = result;
}