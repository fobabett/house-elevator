/*jslint node: true */
'use strict';



module.exports = {

  goto: function(currentFloor,destination,floor){  
    //floor = result
    var floor = 0;
    //set first param currentFloor to number type and second param destination to string type
    if(typeof currentFloor ==='number' && typeof destination ==='string'){
      //if any floor above the 4th is chosen, the result will return 0
      if(destination >3){
        floor = 0;
  
        return floor;
      }
      //if any floor below the ground floor is chosen,the result will return 0
      if(currentFloor >3 && destination <1){
        floor =0;
  
        return floor;
      }
  
      //desired floor subtracted by the current floor will give the result
      floor = destination - currentFloor;
  
      return floor;
  
    }
  }

};