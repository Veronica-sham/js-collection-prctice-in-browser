'use strict';

function countSameElements(collection) {
	var objectA=[];
	var temp = [];
	collection.forEach(myFunction);
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
	
	return objectA;
}
