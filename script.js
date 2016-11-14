var samuris = [];

for (var i = 1; i <= 100; i++) {
  samuris.push("samuri " + i);
}

while (samuris.length > 1) {
    kill(samuris);
  }

function kill(array) {
  var firstSamuri = array[0];
  array.push(array[0]);
  array.splice(0,2);
}

console.log("Last samuri standing is ", samuris);


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
