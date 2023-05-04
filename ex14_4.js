





function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

// question one
  const filterOutOdd = (...nums)=> nums.filter((num)=> num % 2 === 0);
//question two
  function findMin(...vals){
    return vals.reduce((first, next) =>{
      return  first < next ? first : next;
    })
  };

// below in reduced form
const findMins = (...vals) => vals.reduce((first,next) => first < next ? first : next);


// question three
  function mergeObjects(obj1, obj2){
    const newObj = {...obj1, ...obj2}
    return newObj;
  }
// need to test below.. tested and working
const mergeObject = (ojb1, obj2) => ({...ojb1, ...obj2});

//question four
  function doubleAndReturnArgs(arr, ...vals){
    const doubled = arr.map(ar => ar );
    const dVal = vals.map(val => val *2);
    const returned = [...doubled, ...dVal];
    return returned;

  }

//const doubleAndReturnArg = (arr, ...vals) => arr.map{((ar=>ar)).vals.map(val=>val *2);  [...ar, ...val]};






  // question five a.

  function removeRandom(item){
    random = Math.floor(Math.random() * item.length);
    item.splice(random, 1)
    const newArry = [...item]
    return newArry;
  }


const removeRandoms = (item )=>{
  random = Math.floor(Math.random() * item.length);
  item.splice(random, 1)
    const newArry = [...item]
    return newArry;
}



//question five b
   
const extend = (array1, array2)=> (
     [...array1, ...array2]);

    //question five c
farts = {
smell: 'relly bad',
color: 'green',
intensity: 'extra high'

}

//original as a functin
function addKeyVal(obj, key, val) {
 newObj = {...obj, [key]: val}
return newObj;
}
//reduced to
const addKeyVals = (obj, key,val)=> (
   {...obj, [key]: val}
);
//five d
const combine = (obj1, obj2) => (
  {...obj1, ...obj2}
)

