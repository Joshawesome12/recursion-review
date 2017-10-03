// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className,currentNode) {
    
  currentNode = currentNode || document;
  var results = [];

  if (_.contains(currentNode.classList, className)){
    results.push(currentNode);
  }

  currentNode.childNodes.forEach(function (child) {
    results = results.concat(getElementsByClassName(className,child));
  });
  
  return results;

};




