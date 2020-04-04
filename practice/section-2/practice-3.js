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
				if (TempLetter==objectA[i].name)
				{
					objectA[i].summary=objectA[i].summary+TempAmt;
					count1 = 1;
				}	
			}
			if(count1 != 1)
			{
				var temp = {"name":TempLetter,"summary":TempAmt};
				objectA.push(temp);
			}
		}
	
	return objectA;
    }