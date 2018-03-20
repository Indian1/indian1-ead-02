function somar(a, b) {
    return a + b;
  }
  function sub(a, b) {
    return a - b;
  }
  function mult(a, b) {
    return a * b;
  }
  function div(a, b) {
    return a / b;
  }
   
  function calculadora() {
    var valor1 = parseInt(prompt('Informe um valor: '));
    var valor2 = parseInt(prompt('Informe outro valor: '));
    alert('A + B: ' + somar(valor1, valor2) + '\n'+
         'A - B: ' + sub(valor1,valor2) + '\n'+
         'A * B: ' + mult(valor1,valor2) + '\n'+
         'A / B: ' + div(valor1, valor2) + '\n' );
    
  }