var buttonPressed = [];
var allButtonsPressed = [];
var numOp = [];
var newArr = [];
var singleDig;
var allValues;
var sum;

$(".num").on("click", function() {
  buttonPressed.push(parseInt($(this).text()));
  $(".display").text(buttonPressed.join(""));
});

$(".clear").on("click", function() {
  $(".display").text("0");
  clear();
});

$(".operator").on("click", function() {
  operatorPressed($(this).text());
});

$(".equal").on("click", function() {
  buttonPressed = buttonPressed.join("");
  numOp.push(buttonPressed);
  doMath(numOp);
});


function operatorPressed(a) {
   singleDig = buttonPressed.join("");
   buttonPressed = [];
   numOp.push(singleDig);
   numOp.push(a);
}

function clear() {
  buttonPressed= [];
  allButtonsPressed = [];
  numOp = [];
  singleDig = 0;
  allValues = 0;
  sum = 0;
}

function doMath(arr) {
  while(arr.length !== 1) {
    while(arr[1] === "*") {
      sum = parseFloat(arr[0]) * parseFloat(arr[2]);
      arr.splice(0,3,sum.toString());
    }
    while(arr[1] === "/") {
      sum = parseFloat(arr[0])/parseFloat(arr[2]);
      console.log(sum);
      arr.splice(0,3,sum.toString());
    }
    while(arr[1] === "+") {
      sum = parseFloat(arr[0]) + parseFloat(arr[2]);
      arr.splice(0,3,sum.toString());
    }
    while(arr[1] === "-") {
      sum = parseFloat(arr[0]) - parseFloat(arr[2]);
      arr.splice(0,3,sum.toString());
    }
  }
  $(".display").text(parseFloat(arr));
}