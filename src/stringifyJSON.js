// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var string = '';
//IF NULL
  if (obj === null) {
    return 'null';
  }
//IF STRING
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
//IF NUMBER
  if (typeof obj === 'number') {
    return String(obj);
  }
//IF BOOLEAN
  if (typeof obj === 'boolean') {
    return `${obj}`;
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
        acc.push(stringifyJSON(element));
      }  
    }
  }
//IF OBJECT
//OBJECT BLOCK
      if (!Array.isArray(obj) && obj !== null){
        var objAcc = [];
        for (var key in obj){
        //if string / number
        if (typeof obj[key] === 'string' || typeof obj[key] === 'number'){
          objAcc.push('\"'+key+'\":' + '\"'+obj[key]+'\"');
          }
          //if null
        else if (obj[key] === null){
          objAcc.push('\"'+key+'\":' + null);
        }
        //if boolean
        else if (typeof obj[key] === 'boolean'){
          objAcc.push('\"'+key+'\":' +obj[key]);
        }
        //if array
        else if (Array.isArray(obj[key])){
          objAcc.push('\"'+key+'\":' + stringifyJSON(obj[key]));
        }
        //if object
        else if (!Array.isArray(obj[key]) && typeof obj[key] === 'object' && obj[key] !== null){
              objAcc.push( '\"'+ key +'\":' + stringifyJSON(obj[key]));
        }
      }
      return '{'+String(objAcc)+'}';
    }
    string += String(acc);
  return ('[' + string + ']');
};