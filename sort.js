var data= [{
    id: 1,
    name: 'John',
}, {
    id: 2,
    name: 'Mary',
}, {
    id: 3,
    name: 'Andrew',
}];

data = data.sort((a,b)=>{
    if(a.name<b.name){  // here the objects are compared by their name property
        return -1; // it indicates that the a comes first
    }
});

console.log(data);