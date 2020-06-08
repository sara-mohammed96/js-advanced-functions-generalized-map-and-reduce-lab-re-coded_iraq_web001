function map(array, callback) {
  let newArray = [];
  array.forEach(item => {
    newArr.push(callback(item))
  })
  return newArr
}

function reduce(arr, callbackFn, startingPoint) {
  let newValue = startingPoint ? startingPoint : arr[0]
  for (let i = startingPoint ? 0 : 1; i < arr.length; i++) {
    newValue = callbackFn(arr[i], newValue)
  }
  return newValue
}