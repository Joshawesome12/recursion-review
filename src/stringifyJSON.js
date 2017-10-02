// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var string = '';
//IF NULL
  if (typeof obj === null) {
    return 'null';
  }
//IF STRING
  if (typeof obj === 'string') {
    return obj;
  }
//IF NUMBER
  if (typeof obj === 'number') {
    return String(obj);
  }
//IF BOOLEAN
  if (typeof obj === 'boolean') {
    return obj;
  }
  
//IF ARRAY
// ARRAY BLOCK
  var acc = [];
  if (Array.isArray(obj) && typeof obj === 'object') {
      // if array is empty
    if (obj.length === 0) {
      return ('[]');
    }
    for (var i = 0; i < obj.length; i++) {
      var element = obj[i];
    //if null
      if ( element === null) {
        acc.push('null');
      }
    //if string
      if (typeof element === 'string') {
        acc.push('\"' + element + '\"');
      }
    //if number 
      if (typeof element === 'number') {
        acc.push(String(element));
      }
    //if boolean 
      if (typeof element === 'boolean') {
        acc.push(element);
      }
    //if array
      if (Array.isArray(element) && typeof element === 'object') {
        acc.push(stringifyJSON(element));
      }
    //if object
      if (!Array.isArray(element) && typeof element === 'object' && element !== null) {
      
      }      
    }
    string += String(acc);
  }
  return ('[' + string + ']');
};