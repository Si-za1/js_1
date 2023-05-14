
var numbers = [1, 2, 3, 4];

function transform(collection, tranFunc)
{ 
    var result=[]; // initializing empty array to store the result
    for (i=0; i<collection.length;i++){
        result.push(tranFunc(collection[i])); 
        
        // pushing the new values, here tranfunc means the trans function where
        // the operation takes place
    }
    return result;
 };

var output = transform(numbers, function(num) {
    return num * 2;
});

console.log(output);