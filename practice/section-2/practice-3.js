'use strict';

function countSameElements(collection) {
   var collectionLength = collection.length;
      var character;
      var count;
      var output = [];
      var outputCount = 0;
      var exist = false;
      var a = 1;
      var b = 0;
      output[0] = {name:collection[0], summary:1};
      for (a = 1; a < collectionLength; a++){
      if (collection[a].includes("-")){
    	  character = collection[a].substring(0,collection[a].indexOf("-"));
    	  count = parseInt(collection[a].substring(collection[a].indexOf("-")+1));
        }
      else if (collection[a].includes("]") && collection[a].includes("[")){
           character = collection[a].substring(0,collection[a].indexOf("["));
           count = parseInt(collection[a].substring(collection[a].indexOf("[")+1,collection[a].indexOf("]")));
      }
      else if (collection[a].includes(":")){
           character = collection[a].substring(0,collection[a].indexOf(":"));
           count = parseInt(collection[a].substring(collection[a].indexOf(":")+1));
      }
    	else{
          character = collection[a];
          count = 1;
        }
    	for (b = 0; b <= outputCount; b++){
    		if (output[b].name == character){
    			output[b].summary = output[b].summary + count;
    			exist = true;
    		  }
    		 else
    			exist = false;
    	  }
    	  if (!exist){
    		outputCount++;
    		output[outputCount] = {name:character, summary:count};
    	  }
    	  }
    	 return output;
}
