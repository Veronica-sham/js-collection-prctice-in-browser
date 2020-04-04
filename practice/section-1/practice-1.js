'use strict';

function collectSameElements(collectionA, collectionB) {
	var same= [];
	var i=0;
	var countB = collectionB.length;
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