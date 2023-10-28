//Declaramos variables
let operatingA;
let operatingB;
let operation;

//variables
let result = document.getElementById('result');
let reset = document.getElementById('reset');
let sum = document.getElementById('sum');
let subtraction = document.getElementById('subtraction');
let multiplicacion = document.getElementById('multiplicacion');
let division = document.getElementById('division');
let egual = document.getElementById('egual');
let one = document.getElementById('one');
let two = document.getElementById('two');
let tree = document.getElementById('tree');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight= document.getElementById('eight');
let nine= document.getElementById('nine');
let zero = document.getElementById('zero');
  

  //Eventos de click
one.onclick = function(e){
   result.textContent = result.textContent  + "1";
}

two.onclick = function(e){
    result.textContent = result.textContent  + "2";
}
tree.onclick = function(e){
    result.textContent = result.textContent  + "3";
}
four.onclick = function(e){
    result.textContent = result.textContent  + "4";
}
five.onclick = function(e){
    result.textContent = result.textContent  + "5";
}
six.onclick = function(e){
    result.textContent = result.textContent  + "6";
}
seven.onclick = function(e){
    result.textContent = result.textContent  + "7";
}
eight.onclick = function(e){
    result.textContent = result.textContent  + "8";
}
nine.onclick = function(e){
    result.textContent = result.textContent  + "9";
}
zero.onclick = function(e){
    result.textContent = result.textContent  + "0";
}
resetc.onclick = function(e){
    reset();
}
sum.onclick = function(e){
    operatingA = result.textContent;
    operation= "+";
    clean();
}
subtraction.onclick = function(e){
    operatingA = result.textContent;
    operation = "-";
    clean();
}
multiplicacion.onclick = function(e){
    operatingA = result.textContent;
    operatingA = "*";
    clean();
}
division.onclick = function(e){
    operatingA = result.textContent;
    operation = "/";
    clean();
}
egual.onclick = function(e){
    operation= result.textContent;
    resolver();
}

function clean(){
    result.textContent = "";
  }
  function resetc(){
    result.textContent = "";
    operatingA = 0;
    operatingB = 0;
    operation = "";
  }

  function resetc(){
    var res = 0;
    switch(operation){
      case "+":
        res = parseFloat(operatingA) + parseFloat(operatingB);
        break;
      case "-":
          res = parseFloat(operatingA) - parseFloat(operatingB);
          break;
      case "*":
        res = parseFloat(operatingA) * parseFloat(operatingB);
        break;
      case "/":
        res = parseFloat(operatingA) / parseFloat(operatingB);
        break;
    }
    result();
    result.textContent = res;
  }