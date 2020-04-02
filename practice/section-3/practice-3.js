'use strict';

function countSameElements(collection) {
   var collectionLength = collection.length;
   var count;
   var output = [];
   var outputCount = 0;
   var exist = false;
   var a = 1;
   var b = 0;
   output[0] = {key:collection[0], count:1};
     for (a = 1; a < collectionLength; a++){
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
    		output[outputCount] = {key:collection[a], count:1};
    	  }
    	  }
    	 return output;
      }

function createUpdatedCollection(collectionA, objectB) {
    var a;
    var b;
    var A = countSameElements(collectionA);
    var Alength = A.length;
    var B = objectB.value;
    var Blength = B.length;
    var characterCount = 0;
      for (b = 0; b < Blength; b++){
        for (a = 0; a < Alength; a++){
         if (A[a].key == B[b]){
           A[a].count = A[a].count - ~~(A[a].count/3)
         }
       }
       }
       console.log(A);
       return A;
   }


