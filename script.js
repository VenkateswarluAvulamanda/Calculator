function clearData() {
    let input = document.getElementById('input');
    input.value = '';
}
function calculateValue(value) {
    let input = document.getElementById('input');
    input.value = input.value + value;
}
function clearLastData() {
    let input = document.getElementById('input');
    input.value = input.value.substring(0,input.value.length-1);
}
function calculateResult() {
    let input = document.getElementById('input');
    try {
        input.value = eval(input.value);
    } catch {
        input.value = 'Invalid'
    }
}