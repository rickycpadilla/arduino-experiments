var five = require("johnny-five");
var board = new five.Board();


board.on("ready", function() {

  // Create a new `button` hardware instance.
  var button = new five.Button(2);
  var led = new five.Led(13);

  button.on("hold", function() {
    console.log( "Button held" );
    // led.strobe();
  });

  button.on("press", function() {
    console.log( "Button pressed" );
    led.toggle();
  });

  button.on("release", function() {
    console.log( "Button released" );
  });
});
