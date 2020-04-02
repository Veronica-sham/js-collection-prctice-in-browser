'use strict';

function collectSameElements(collectionA, objectB) {
  var output = [];
  var r = 0;
  var a;
  var b;
  var Alength = collectionA.length;
  var B = objectB.value;
  var Blength = B.length;
  for (a = 0; a < Alength; a++)
	  for (b = 0; b < Blength; b++)
		  if (Object.values(collectionA[a]) == B[b]) {
			  output[r] = B[b];
			  r++;
		  }
	console.log (output);
	return output;
}
