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
    console.log(name.charCodeAt(0));
    console.log(name.charCodeAt(name.length - 1));
   
   /*
   tier 1 = 0 < x < 90
   tier 2 = 90 < x < 180
   tier 3 = 180 < x < 270
   tier 4 = 270 < x < 360
   */
    var tier;
    var test = name.charCodeAt(name.length - 1).toString().charAt(name.charCodeAt(name.length - 1).toString.length);
    if (test == 4) {
      tier = 1;
    } else if (test == 5) {
      tier = 2;
    } else if (test == 6) {
      tier = 3;
    } else {
      tier = 4;
    }

    console.log("Number to match tier: " + name.charCodeAt(name.length - 1).toString().charAt(1));
    console.log("Checking letter: " + name.charAt(name.length - 1));
    console.log("ASCII: " + name.charCodeAt(name.length - 1));
    console.log("Tier: " + tier);

    number = Math.floor((name.charCodeAt(0) / name.charCodeAt(name.length - 1)) * 100);
    
    console.log("Newest number: " + number);


/* 
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
 */   
    var color = "hsl(" + number + ", 80%, 75%)";

    document.getElementById('display').style.background = color;
    document.getElementById('hsl').innerHTML = "HSL = (" + number + ", 100%, 100%)";
  } else {
  alert("Please enter a valid string");
  }
}

function validateString(string) {
  if (!(string.length > 30 || typeof string != "string")) {
    return true;
  }
}

