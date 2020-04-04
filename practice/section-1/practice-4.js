'use strict';

function collectSameElements(collectionA, collectionB) {
	var same= [];
	var i=0;
	var countB=collectionB.value.length;
	var collectionB1 = collectionB.value;
	collectionA.forEach(myFunction);
	
	function myFunction(value, index, array) {
		for (i=0;i<countB;i++)
		{
			if (value.key[0]==collectionB1[i])
			{
				same.push(collectionB1[i]); 
			}
		}
	}
	return same;
}