'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var objectA=[];
	var temp = [];
	collectionA.forEach(myFunction);
	var i;
	
		function myFunction(value1, index, array) {	
			var count1 = 0;
			for (i=0;i<objectA.length;i++)
			{
				if (value1==objectA[i].key)
				{
					objectA[i].count=objectA[i].count+1;
					count1 = 1;
				}	
			}
			if(count1 != 1)
			{
				var temp = {"key":value1,"count":1};
				objectA.push(temp);
			}
		}
	objectA.forEach(myFunction2);
		function myFunction2(value2, index2, array2) {	
				for (i=0;i<objectB.value.length;i++)
				{
					if(objectB.value[i]==value2.key)
					{
						if (value2.count/3>=1)
						{
							value2.count=value2.count-parseInt(value2.count/3);
						}			
					}			
				}
		}
	return objectA;
   }


