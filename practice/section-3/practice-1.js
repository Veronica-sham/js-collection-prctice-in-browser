'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var output = [];
  var a;
  var b;
  var Alength = collectionA.length;
  var B = objectB.value;
  var Blength = B.length;
  for (a = 0; a < Alength; a++)
  	for (b = 0; b < Blength; b++) {
  		if (collectionA[a].key == B[b]) {
  			collectionA[a].count = collectionA[a].count - 1;
  		}
  		}
 console.log (collectionA);
 return collectionA;
  }

