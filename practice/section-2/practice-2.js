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
    output[0] = {key:collection[0], count:1};
    for (a = 1; a < collectionLength; a++){
    if (collection[a].includes("-")){
  	  character = collection[a].substring(0,collection[a].indexOf("-"));
  	  count = parseInt(collection[a].substring(collection[a].indexOf("-")+1));
      }
  	else{
        character = collection[a];
        count=1;
      }
  	for (b = 0; b <= outputCount; b++){
  		if (output[b].key == collection[a]){
  			output[b].count = output[b].count + 1;
  			exist = true;
  		  }
  		 else
  			exist = false;
  	  }
  	  if (!exist){
  		outputCount++;
  		output[outputCount] = {key:character, count:count};
  	  }
  	  }
  	 return output;
    }
  


