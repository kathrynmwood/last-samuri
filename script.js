function lastSamurai(numSamurai) {

  var samurai = [];

  for (var i = 1; i <= numSamurai; i++) {
    samurai.push("samurai " + i);
  }

  while (samurai.length > 1) {
      kill(samurai);
    }

  function kill(array) {
    array.push(array[0]);
    array.splice(0,2);
  }

  return samurai;

}

console.log(lastSamurai(100));


// var samuriMurderCircle = function(numberOfSamuri){
//   var samuriArray = [];
//
//   for (var i = 1; i <= numberOfSamuri; i++) {
//     samurisArray.push("samuri " + i);
//   }
//
//   while (samuriArray.length > 1) {
//       kill(samuriArray);
//     }
// return samuriArray;
//
// }
//
// console.log("Array with 10", samuriMurderCircle(10));
// console.log("Array with 50", samuriMurderCircle(50));
// console.log("Array with 1000", samuriMurderCircle(1000));
//
//
// x => 'Samurai ' + (x + 1)
// function(x){
//   return 'Samurai ' + (x +1);
// }
