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
					if(value1.count/3>=1)
					{
						value1.count=value1.count-parseInt(value1.count/3);
					}
				}	
			}	
		}
	return objectA;
}
