'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var objectA=collectionA;
	collectionA.forEach(myFunction);
	var i;
		function myFunction(value1, index, array) {
			for (i=0;i<objectB.value.length;i++)
			{
				if (value1.key==objectB.value[i])
				{
					value1.count=value1.count-1;
				}	
			}	
		}
	return objectA;
  }

