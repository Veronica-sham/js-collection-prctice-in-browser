'use strict';

function collectSameElements(collectionA, collectionB) {
  var output = [];
  var r = 0;
  var a;
  var b;
  var Alength = collectionA.length;
  var Blength = collectionB.length;
  for (a = 0; a < Alength; a++)
	  for (b = 0; b < Blength; b++)
		  if (collectionA[a] == collectionB[b]) {
			  output[r] = collectionB[b];
			  r++;
		  }
	console.log (output);
	return output;
}