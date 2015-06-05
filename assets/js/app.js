function generateColor() {
  console.log("Function running");
  var name = document.getElementById('name').value;
  console.log("Name: " + name);
  var convert = [];
  if (validateString(name)) {
    //do the colour generation
    var r;
    var g;
    var b;
   
  var number;
    for (var i = 0; i < name.length; i++) {
      if ((name.charCodeAt(i) % 2) === 0) {
        number = Math.floor(name.charCodeAt(i) / 10);
      } else {
        number = name.charCodeAt(i);
      }
      convert[i] = number; 
      console.log("Letter conversion: " + convert[i]);
      
    }
    //An array of codes
    r = convert[0];
    g = convert[name.length - 1];
    b = convert[Math.floor(name.length / 2)];

    console.log(r);
    console.log(g);
    console.log(b);
    
    var color = "rgba(" + r + ", " + g + ", " + b + ", 1)";

    document.getElementById('display').style.background = color;
  } else {
  alert("Please enter a valid string");
  }
}

function validateString(string) {
  if (!(string.length > 30 | typeof string != "string")) {
    return true;
  }
}

