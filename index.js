function map(array, callback) {
  let newArray = [];
  array.forEach(item => {
    newArray.push(callback(item))
  })
  return newArray;
}

function reduce(array, callback, startingPoint) {
  let newValue = startingPoint ? startingPoint : arr[0]
  for (let i = startingPoint ? 0 : 1; i < arr.length; i++) {
    newValue = callback(arr[i], newValue)
  }
  return newValue
}