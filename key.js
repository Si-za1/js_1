var fruit=[ 
    {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
];

function searchByKey(fruit, key, value){
  for (i=0; i<fruit.length;i++){  // this needs to be there to check the existence of the variable
    if(fruit[i][key].toLowerCase()=== value.toLowerCase()) //the key is written inside the bracket to tell that it's property that we looking for
    {
      return fruit[i]; // if condition true then will return
    }

  }
  return null;
}

var b = searchByKey(fruit, 'name', 'apple');
var c =searchByKey(fruit, 'name', 'litchi');

console.log(b);
console.log(c);


//if in above condition the key would be written as ., then it would check literal for the word key
