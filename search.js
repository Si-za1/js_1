var fruit=[ {id: 1, name: 'Banana', color: 'Yellow'},
    {id: 2, name: 'Apple', color: 'Red'}
];

function searchByName(fruit, name){
  for (i=0; i<fruit.length;i++){  // this needs to be there to check the existence of the variable
    if(fruit[i].name.toLowerCase()=== name.toLowerCase()) //if no lower or uppercase used, will return null 
    {
      return fruit[i]; // if condition true then will return
    }

  }
  return null;
}

var b = searchByName(fruit,'apple');
var c=searchByName(fruit, 'litchi');

console.log(b);
console.log(c);

