/*jslint node: true */
'use strict';


module.exports = {
  goto: function(currentFloor,destination){
  
  var currentFloor = 0;
  var buttonPushed = prompt("floor 0, 1, 2, or 3?");

  //if pasenger pushes 0
  if(buttonPushed = "0"){
    if(currentFloor=0){
      return "Ground Floor";
    }

    else if(currentFloor>0){
      math.abs(destination)= buttonPushed - currentFloor;
      return destination;
    }
  }

  else if(buttonPushed = "1"){
    if(currentFloor=1){
      return "1";
    }

    else if(currentFloor<1){
      destination = currentFloor + buttonPushed;
      return destination;
    }

    else if(currentFloor>)
  }

  return floor;
  }
};


