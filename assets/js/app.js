function generateColor() {
  console.log("Function running");
  var name = document.getElementById('name').value;
  console.log("Name: " + name);
  var convert = [];
  if (validateString(name)) {
    //do the colour generation
    var r = name.charCodeAt(0);
    var g = name.charCodeAt(name.length - 1);
    var b = name.charCodeAt(Math.floor(name.length / 2));
    var number;
      
      



    //number manipulation
    number = r + g + b;
    console.log("number: " + number); number = number.toString().charAt(2);
    number = number * 10;
    number = number + Math.floor(name.charCodeAt(0)) / 10;
    console.log("New number: " + number);
    console.log("Checking " + name.charCodeAt(0).toString().charAt(0));
    if (name.charCodeAt(0).toString().charAt(0) % 2) {
      number = 0 + Math.floor(number);
    } else {
      number = 360 - Math.floor(number);
    }
    
    console.log("Newest number: " + number);


 
    var x = Math.floor(name.charCodeAt(0) / 2);
    console.log(x);  
    var y = x - 30;
    var average = Math.floor(((r + g + b) / 2) + x * y);
    console.log("Average: " + average);
    if (average > 360) {
      average = 360 - Math.floor(average / 10);
      console.log("Average: " + average);
    }
    console.log(average);
    
    var color = "hsl(" + average + ", 80%, 75%)";

    document.getElementById('display').style.background = color;
    document.getElementById('hsl').innerHTML = "HSL = (" + number + ", 100%, 100%)";
  } else {
  alert("Please enter a valid string");
  }
}

function validateString(string) {
  if (!(string.length > 30 | typeof string != "string")) {
    return true;
  }
}

