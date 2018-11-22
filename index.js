function escolhas(){

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = 0;

    if (document.getElementsByName("op")[0].checked) {
        resultado = num1 + num2;
    }
    if (document.getElementsByName("op")[1].checked) {
        resultado = num1 - num2;
    }
    if (document.getElementsByName("op")[2].checked) {
        resultado = num1 * num2;
    }
    if (document.getElementsByName("op")[3].checked) {
        resultado = num1 / num2;
    }
    if (document.getElementsByName("op")[4].checked) {
        resultado = Math.pow(num1, num2);
    }
    document.getElementById("resultado").value = resultado;
  }
}
