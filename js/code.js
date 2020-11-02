var input = document.getElementsByTagName("input")[0];
var button = document.getElementsByTagName("button");

//BUTTON FUNCTIONS
const reset = () => {
  input.style.backgroundColor = "rgba(240, 233, 233, 0.657)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
input.value = '';
input.style.backgroundColor = "rgba(240, 233, 233, 0.657)"
};

const sine = () => {
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
if(isNaN(input.value)==false){
let number = Number(input.value);
let result = Math.sin(number * Math.PI / 180);
input.value = result;
} else{
input.value = "Input a Number";
}
};

const cosine = () => {
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
if(isNaN(input.value)==false){
let number = Number(input.value);
let result = Math.cos(number * Math.PI / 180);
input.value = result;
} else{
input.value = "Input a Number";
}
};

const tagent = () => {
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
if(isNaN(input.value)==false){
let number = Number(input.value);
let result = Math.tan(number * Math.PI / 180);
input.value = result;
} else{
input.value = "Input a Number";
}
};

const asine = () => {
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
if(isNaN(input.value)==false){
let number = Number(input.value);
let result = Math.asin(number) * 180 / Math.PI;
input.value = result;
} else{
input.value = "Input a Number";
}
};

const acosine = () => {
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
if(isNaN(input.value)==false){
let number = Number(input.value);
let result = Math.acos(number) * 180 / Math.PI;
input.value = result;
} else{
input.value = "Input a Number";
}
};

const atagent = () => {
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
if(isNaN(input.value)==false){
let number = Number(input.value);
let result = Math.atan(number) * 180 / Math.PI;
input.value = result;
} else{
input.value = "Input a Number";
}
};

const factorial = () => {
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
if(isNaN(input.value)==false){
let number = Number(input.value);
function fac(n) {
  if (n == 0) {
  return 1;
  } else {
  return fac(n - 1) * n;
  }
  }
  input.value = fac(number);
} else{
  input.value = "ERROR";
  }
};


const powerOfTwo = () => {
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
if(isNaN(input.value)==false){
let result = Math.pow(input.value, 2);
input.value = result;
} else{
input.value = "Input a Number";
}
};

const squareRoot = () =>{
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
if(isNaN(input.value) == false){
let result = Math.sqrt(input.value);
result = result.toString()
if(result.length >= 15){
let decimalResult = Number(result);
let newResult = decimalResult.toFixed(10);
input.value = newResult;
} else {
input.value = result;
}
} else{
input.value = "Input a Number";
}
};

const multiplication = () => {
  input.value += '*';
   input.style.backgroundColor = " rgb(15, 1, 1)"; 
   input.style.color = "rgba(240, 233, 233, 0.657)";
}

const nine = () => {
  input.value += "9";  
  input.style.backgroundColor = " rgb(15, 1, 1)";
   input.style.color = "rgba(240, 233, 233, 0.657)";
}

const eight = () =>{
  input.value += "8"; 
  input.style.backgroundColor = " rgb(15, 1, 1)";
   input.style.color = "rgba(240, 233, 233, 0.657)";
}

const seven = () => { input.value += "7"; 
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
}

const division = () =>{ input.value += '/'; 
  input.style.backgroundColor = " rgb(15, 1, 1)";
   input.style.color = "rgba(240, 233, 233, 0.657)";
}

const six = () => { 
  input.value += "6";
   input.style.backgroundColor = " rgb(15, 1, 1)";
    input.style.color = "rgba(240, 233, 233, 0.657)";
}

const five = () => {
   input.value += "5"; 
     input.style.backgroundColor = " rgb(15, 1, 1)";
      input.style.color = "rgba(240, 233, 233, 0.657)";
}
const four = () =>{
   input.value += "4"; 
     input.style.backgroundColor = " rgb(15, 1, 1)";
      input.style.color = "rgba(240, 233, 233, 0.657)";
}
const subtraction = () =>{ 
  input.value += '-'; 
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
}

const three = () =>{ 
  input.value += "3"; 
    input.style.backgroundColor = " rgb(15, 1, 1)";
     input.style.color = "rgba(240, 233, 233, 0.657)";
}

const two = () => {
  input.value += "2"; 
   input.style.backgroundColor = " rgb(15, 1, 1)";
    input.style.color = "rgba(240, 233, 233, 0.657)";
}

const one = () =>{
   input.value += "1";
     input.style.backgroundColor = " rgb(15, 1, 1)";
      input.style.color = "rgba(240, 233, 233, 0.657)";
}

const addition = () =>{
   input.value += '+'; 
    input.style.backgroundColor = " rgb(15, 1, 1)";
     input.style.color = "rgba(240, 233, 233, 0.657)";
}

const period = () =>{ 
  input.value += "."; 
   input.style.backgroundColor = " rgb(15, 1, 1)";
    input.style.color = "rgba(240, 233, 233, 0.657)";
}

const zero = () =>{ 
  input.value += "0"; 
   input.style.backgroundColor = " rgb(15, 1, 1)";
    input.style.color = "rgba(240, 233, 233, 0.657)";
}

const powerOfn = () => {
  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";
  input.value += "^";
  var a = input.value;
  b = a.substr(0, a.indexOf("^"));
  b = Number(b);
};

const del = () =>{
  let a = input.value;
 input.value = a.substring(0, a.length - 1);
};

const equalTo = () => {

  input.style.backgroundColor = " rgb(15, 1, 1)"; 
  input.style.color = "rgba(240, 233, 233, 0.657)";

  if(input.value.includes("^") && (input.value.split('^').length-1) > 1){
    input.value = "ERROR";
  } else if(input.value.includes("^") && (input.value.split('^').length-1) == 1){
    let a = input.value;
  var c = a.substr(a.indexOf("^")+1);
  if(isNaN(c)==false && isNaN(this.b)==false){
    let a = Number(c);
    let y = Number(this.b);
   let result = Math.pow(y, a);
   input.value = result;
  } else {
    input.value = "ERROR"
  };
} else {
let result = eval(input.value);
let newResult = Number(result);
if(isNaN(newResult) == false && newResult< 9999999999999999999999){
return  input.value = result;
} else if( newResult > 9999999999999999999999){
return input.value = "Ambiguous Calculation";
}else{
input.value = "ERROR"
};
};
};

button[0].addEventListener("click", reset);
button[1].addEventListener("click", sine);
button[2].addEventListener("click", cosine);
button[3].addEventListener("click", tagent);
button[4].addEventListener("click", asine);
button[5].addEventListener("click", acosine);
button[6].addEventListener("click", atagent);
button[7].addEventListener("click", factorial);
button[8].addEventListener("click", powerOfn);
button[9].addEventListener("click", powerOfTwo);
button[10].addEventListener("click", squareRoot);
button[11].addEventListener("click", multiplication);
button[12].addEventListener("click", seven);
button[13].addEventListener("click", eight);
button[14].addEventListener("click", nine);
button[15].addEventListener("click", division);
button[16].addEventListener("click", four);
button[17].addEventListener("click", five);
button[18].addEventListener("click", six);
button[19].addEventListener("click", subtraction);
button[20].addEventListener("click", one);
button[21].addEventListener("click", two);
button[22].addEventListener("click", three);
button[23].addEventListener("click", addition);
button[24].addEventListener("click", period);
button[25].addEventListener("click", zero);
button[26].addEventListener("click", del);
button[27].addEventListener("click", equalTo);