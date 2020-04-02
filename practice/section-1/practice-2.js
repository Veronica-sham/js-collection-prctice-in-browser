'use strict';

function collectSameElements(collectionA, collectionB) {
  var output = [];
  var r = 0;
  var a;
  var b;
  var Alength = collectionA.length;
  var subB = collectionB[0];
  var subBlength = subB.length;
  for (a = 0; a < Alength; a++)
	  for (b = 0; b < subBlength; b++)
		  if (collectionA[a] == subB[b]) {
			  output[r] = subB[b];
			  r++;
		  }
	console.log (output);
	return output;
}
