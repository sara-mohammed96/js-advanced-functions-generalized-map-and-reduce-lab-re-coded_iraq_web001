function map(array, callback) {
  let newArray = [];
  array.forEach(item => {
    newArray.push(callback(item))
  })
  return newArray;
}

function reduce(array, callback, startingPoint) {
  let newValue = [];
    array.forEach(item =>{
       startingPoint? false:true;
       newArray2=callback(item)
      
    }
    )
   
  
  return newValue
}