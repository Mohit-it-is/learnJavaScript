function readValueofTextBox() {
    var read_value = document.getElementById("textbox").value;
    return read_value;
}

function inputNumber(clicked_id) {
    var num = document.getElementById(clicked_id).value;
    document.getElementById("textbox").value = readValueofTextBox() + num;
}

function cleartextfield() {
    document.getElementById("textbox").value = "";
}

function inputOperator(operator_id) {
    var read_operator = document.getElementById(operator_id).value;
    document.getElementById("textbox").value = readValueofTextBox() + read_operator;
}

function showResultAfterOperation() {
    var read_string = readValueofTextBox();
    var result = eval(read_string);
    document.getElementById("textbox").value = result;
}
