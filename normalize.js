var input = {
  '1': {
    id: 1,
    name: 'John',
    children: [
      { id: 2, name: 'Sally' },
      { id: 3, name: 'Mark', 
      children: [{ id: 4, name: 'Harry' }] }
    ]
  },
  '5': {
    id: 5,
    name: 'Mike',
    children: [{ id: 6, name: 'Peter' }]
  }
};

//first this array should be normalized in the values with no hierarchy so that, sort function can be used


// to normalize the input object to the values
 const list= Object.values(input);
 
 console.log(list);

 list.sort((a,b)=>{
  if(a.id < b.id){
    return -1;
  }
    else if (a.id > b.id) {
      return 1;
    } else {
      return 0;
  }
 })

 // now the nested and the children also needs to be sorted, so applying same method to the children as well

const nestedArray= list.map(item=>item.children);

//sorting the nested arrays

nestedArray.forEach(array=>array.sort((a,b)=>{
  if(a.id < b.id){
    return -1;
  }
    else if (a.id > b.id) {
      return 1;
    } else {
      return 0;
  }
}));

// now to store the array, creating an empty one

const result={};

for(i=0; i<list.length;i++){
  result[list[i].id] ={
    id:list[i].id,
    name:list[i].name,
    children:nestedArray[i]
  };
}


console.log(result);


//for the output in more readable format 
const formattedResult=JSON.stringify(result, null, 2);

console.log(formattedResult);



