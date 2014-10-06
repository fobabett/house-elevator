/*jslint node: true */
'use strict';

module.exports = {

  goto: function(currentFloor,destination){  
    //floor = result
    var floor = 0;

    //if any floor above the 4th or below the ground floor is chosen, the result should return 0
    if(destination >3 || destination <0){
      floor = 0;

      return floor;
    }

    //desired floor subtracted by the current floor will give the result
    floor = destination - currentFloor;

    return floor;

  }

};