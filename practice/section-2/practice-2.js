'use strict';

function countSameElements(collection) {
	var objectA=[];
	var temp = [];
	collection.forEach(myFunction);
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
	
	return objectA;
    }
  


