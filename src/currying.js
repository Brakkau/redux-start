// Not using arrow function
/**
 * Takes Param from first function, passes into second function and returns both added together 
 */
function add(a) {
  return function (b) {
    return a + b;
  };
}

// Arrow Function, does same as above but cleaner
const add2 = a => b => a + b; // (a,b) => a + b
