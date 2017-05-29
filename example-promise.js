// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('London', function(err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromise (location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function (){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('London').then(function(temp) {
//   console.log('promise success', temp);
// }, function(err) {
//   console.log('promise error', err);
// })
//

// if (typeof 7 === 'number') {
//
// }

function addPromise (a,b) {
  return new Promise(function(resolve,reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a+b);
    } else {
      reject('Must provide two valid numbers');
    }
  });
}

addPromise(2,6).then(function(result) {
  console.log('Success', result);
}, function(err) {
  console.log('Error', err);
})

addPromise(2,'text').then(function(result) {
  console.log('Success', result);
}, function(err) {
  console.log('Error', err);
})

addPromise('text',6).then(function(result) {
  console.log('Success', result);
}, function(err) {
  console.log('Error', err);
})
