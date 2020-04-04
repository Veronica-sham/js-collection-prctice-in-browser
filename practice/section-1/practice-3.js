'use strict';

function collectSameElements(collectionA, objectB) {
	var same= [];
	var i=0;
	var countB=objectB.value.length;
	var collectionB = objectB.value;
	collectionA.forEach(myFunction);
	
	function myFunction(value, index, array) {
		for (i=0;i<countB;i++)
		{
			if (value==collectionB[i])
			{
				same.push(value); 
			}
		}
	}
	return same;
}