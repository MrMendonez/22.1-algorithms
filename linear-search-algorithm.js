var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.ceil( Math.random() * 14 ) ];

var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];
var random_value = stuff[ Math.ceil( Math.random() * 14 ) ];

var cnt = 1;
function binarySearch(inputArray, searchParam) {
  var length = inputArray.length;
  console.log('cnt', cnt++);
  while(length > 1) {
    var midpoint = Math.floor(length / 2);
    if(searchParam > inputArray[midpoint - 1]) {
      return binarySearch(inputArray.splice(midpoint, length), searchParam);
    } else {
      return binarySearch(inputArray.splice(0, midpoint), searchParam);
    }
  }

  if(searchParam === inputArray[0]) {
    return inputArray[0];
  } else {
    return -1;
  }
}

// Without Recursion:

// function binarySearch(items, value){
//
//     var startIndex  = 0,
//         stopIndex   = items.length - 1,
//         middle      = Math.floor((stopIndex + startIndex)/2);
//
//     while(items[middle] != value && startIndex < stopIndex){
//
//         //adjust search area
//         if (value < items[middle]){
//             stopIndex = middle - 1;
//         } else if (value > items[middle]){
//             startIndex = middle + 1;
//         }
//
//         //recalculate middle
//         middle = Math.floor((stopIndex + startIndex)/2);
//     }
//
//     //make sure it's the right value
//     return (items[middle] != value) ? -1 : middle;
// }

console.log("Found ", random_value, "in array. Proof:", binarySearch(stuff, random_value));