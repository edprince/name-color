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
      
      
    //An array of codes
    
    var x = Math.floor(name.charCodeAt(0) / 2);
    console.log(x);  
    var y = x - 30;
    var average = Math.floor(((r + g + b) / 2) + x * y);
    
    console.log(average);
    
    var color = "hsl(" + average + ", 60%, 50%)";

    document.getElementById('display').style.background = color;
    document.getElementById('hsl').innerHTML = "HSL = (" + average + ", 60%, 50%)";
  } else {
  alert("Please enter a valid string");
  }
}

function validateString(string) {
  if (!(string.length > 30 | typeof string != "string")) {
    return true;
  }
}

