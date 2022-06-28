
let channelName = "welcomePage";

let nameInput 

let redVal;
let greenVal;
let blueVal;

let you;

function setup() {

    createCanvas(windowWidth, windowHeight);

    nameInput = createInput();
    nameInput.style('font-size', '30px');
    nameInput.position(windowWidth/3, 325);

    sliderRed = createSlider(0, 255, 255, 1);
    sliderRed.position(windowWidth/3, 470);
    sliderRed.style('width', '80px');
    sliderBlue = createSlider(0, 255, 255, 1);
    sliderBlue.position(windowWidth/3, 530);
    sliderBlue.style('width', '80px');
    sliderGreen = createSlider(0, 255, 255, 1);
    sliderGreen.position(windowWidth/3, 590);
    sliderGreen.style('width', '80px');

    submitButton = createButton("Enter Site");
    submitButton.position(windowWidth/3, 650);
    submitButton.style('font-size', '30px');
  
  }
  
function draw() {
  background(redVal, blueVal, greenVal);

  textSize(60);

  textAlign(CENTER);

  text("Welcome! Please enter your information", windowWidth/2, 200);

  textSize(30);
  textAlign(LEFT);
  text("What's your name?", windowWidth/3, 300);
 

  text("Choose a colour", windowWidth/3, 420);
  textSize(20);

  text("Red value", windowWidth/3, 450);
  text("Blue value", windowWidth/3, 510);
  text("Green value", windowWidth/3, 570);

  redVal = sliderRed.value();
  blueVal = sliderBlue.value();
  greenVal = sliderGreen.value();

  // on submit enter the information
  submitButton.mousePressed(sendTheMessage);

}
 
function sendTheMessage() {
  // Send Data to the server to draw it in all other canvases

  // check to see if they enter their name
  if (nameInput.value() != "") { 
    // if they did, save their name to the variable "you"
    you = nameInput.value();
    // load a new page when you press submit
    window.location.href = "/../_pageTwo/index.html?you="+you+"&r="+redVal+"&g="+greenVal+"&b="+blueVal; 

  } else {
    // if they have no entered their name, create an alert and ask them to enter their name
    window.alert("Please enter your name!");
  }
 

}