// find the largest number in an array
const largeNumber = (arr) => {
    let largest = 0;
    arr.forEach((x) => {
      if(x > largest){
        largest = x;
      }
    })
    return largest;
  
  }
  
  // remove the 3rd item from array
  const cut3 = (arr) => {
    arr.splice(2, 1);
    return arr
  }

// using common js technique to exports

exports.largeNumber = largeNumber

exports.cut3 = cut3