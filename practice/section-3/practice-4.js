'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var objectA=[];
	var temp = [];
	collectionA.forEach(myFunction);
	var i;
	
		function myFunction(value1, index, array) {	
			var TempAmt = 1;
			var TempLetter = value1;
			if (value1.split('').length>1)
			{
				TempAmt = parseInt(value1.match(/(\d+)/)[0]);
				TempLetter = value1.match(/([a-zA-Z]+)/)[0];
			}
			
			var count1 = 0;
			for (i=0;i<objectA.length;i++)
			{
				if (TempLetter==objectA[i].key)
				{
					objectA[i].count=objectA[i].count+TempAmt;
					count1 = 1;
				}	
			}
			if(count1 != 1)
			{
				var temp = {"key":TempLetter,"count":TempAmt};
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

