/*jslint node: true */
'use strict';

module.exports = {

  goto: function(currentFloor,destination){  

    var floor = 0;

    floor = destination - currentFloor;

    return floor;
  }
  
};