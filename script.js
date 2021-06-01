var buttons = document.getElementsByTagName("button");
var resultScreen = document.getElementsByClassName("calc-result")[0];
var numberButton = document.getElementsByClassName("num");
var curNumber, preSign, curSign, preResult, curResult;
function init() {
    curResult = 0;
    preResult = 0;
    curNumber = "";
    preSign = 3;
    curSign = 3;
}
var sign = document.getElementsByClassName("sign");
for (var x of buttons) {
  x.addEventListener("mouseover", function () {
    this.style.opacity = "0.8";
  });
  x.addEventListener("mouseout", function () {
    this.style.opacity = "1";
  });
  x.addEventListener("mousedown", function () {
    this.style.opacity = "0.7";
  });
  x.addEventListener("mouseup", function () {
    this.style.opacity = "0.8";
  });
}
init();
// delete screen
document
  .getElementsByClassName("calc-button-c")[0]
  .addEventListener("click", () => {
    resultScreen.innerHTML = 0;
    init();
  });
// delete char
document.getElementsByClassName("calc-button-arrow")[0].addEventListener("click", () => {
    curNumber = curNumber.substr(1, curNumber.length-1);
    if(curNumber==="") curNumber = 0;
    resultScreen.innerHTML = curNumber;
});
// read number
for (var i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener("click", function () {
    curNumber += this.innerHTML;
    resultScreen.innerHTML = curNumber;
  });
}
// react when click sign
// divide
sign[0].addEventListener("click", function () {
  if(curNumber == "") curNumber = 0;
  switch (curSign) {
    case 0:
      curResult /= parseFloat(curNumber);
      break;
    case 1:
      curResult *= parseFloat(curNumber);
      break;
    case 2:
      curResult = parseFloat(curNumber);
      preSign = 2;
      break;
    case 3:
      curResult = parseFloat(curNumber);
      preSign = 3;
  }
  curSign = 0;
  curNumber = "";
});

// multiple
sign[1].addEventListener("click", function () {
  if(curNumber == "") curNumber = 0;
  switch (curSign) {
    case 0:
      curResult /= parseFloat(curNumber);
      break;
    case 1:
      curResult *= parseFloat(curNumber);
      break;
    case 2:
      curResult = parseFloat(curNumber);
      preSign = 2;
      break;
    case 3:
      curResult = parseFloat(curNumber);
      preSign = 3;
  }
  curSign = 1;
  curNumber = "";
});

// minus
sign[2].addEventListener("click", function () {
  if(curNumber == "") curNumber = 0;
  switch (curSign) {
    case 0:
      curResult /= parseFloat(curNumber);
      if(preSign === 2) preResult -= curResult;
      else preResult += curResult;
      break;
    case 1:
      curResult *= parseFloat(curNumber);
      if(preSign === 2) preResult -= curResult;
      else preResult += curResult;
      break;
    case 2:
      preResult -= parseFloat(curNumber);
      break;
    case 3:
      preResult += parseFloat(curNumber);
  }
  curResult = 0;
  curSign = 2;
  preSign = curSign;
  curNumber = "";
});

// add
sign[3].addEventListener("click", function () {
  if(curNumber == "") curNumber = 0;
  switch (curSign) {
    case 0:
      curResult /= parseFloat(curNumber);
      if(preSign === 2) preResult -= curResult;
      else preResult += curResult;
      break;
    case 1:
      curResult *= parseFloat(curNumber);
      if(preSign === 2) preResult -= curResult;
      else preResult += curResult;
      break;
    case 2:
      preResult -= parseFloat(curNumber);
      break;
    case 3:
      preResult += parseFloat(curNumber);
  }
  curResult = 0;
  curSign = 3;
  preSign = curSign;
  curNumber = "";
});

// click equal
document
  .getElementsByClassName("calc-button-equal")[0]
  .addEventListener("click", function () {
    if(curNumber == "") curNumber = 0;  
    switch (curSign) {
      case 0:
        curResult /= parseFloat(curNumber);
        if(preSign === 2) preResult -= curResult;
      else preResult += curResult;
        break;
      case 1:
        curResult *= parseFloat(curNumber);
        if(preSign === 2) preResult -= curResult;
      else preResult += curResult;
        break;
      case 2:
        preResult -= parseFloat(curNumber);
        break;
      case 3:
        preResult += parseFloat(curNumber);
    }
    let x = preResult;
    resultScreen.innerHTML = preResult;
    init();
    curNumber = x.toString();
  });
