'use strict';

function collectSameElements(collectionA, collectionB) {
	var same= [];
	var i=0;
	var countB = collectionB[0].length;
	collectionA.forEach(myFunction);
	
	function myFunction(value, index, array) {
		for (i=0;i<countB;i++)
		{
			if (value==collectionB[0][i])
			{
				same.push(value); 
			}
		}
	}
	return same;
}
