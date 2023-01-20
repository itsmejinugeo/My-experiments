let numArray = [1,2,3,4,5,6,7,8,9,10];
var arrayLength = numArray.length;

let arrayIndex = 3;
while (arrayIndex < arrayLength)
{
  console.log(numArray.slice(arrayIndex-1,arrayIndex));
  arrayIndex+=3;	

}



