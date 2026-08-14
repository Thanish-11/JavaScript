//& Without Constructor
let arr=[1,2,3,"Thanish",true,function() {console.log("HEllo !!!");
}]
console.log(arr);
//& Using constructor
let arr2= new Array(5);
console.log(arr2);
let arr1=new Array(1,4,6);
console.log(arr1);

//! Accessing Value
console.log(arr1[2]);

//^ Length
console.log(arr1.length);

//*from
let data= Array.from({
    name:'Thanish',
    age:22
})
console.log(data);

console.log(Array.isArray(arr));

//^ Array.of()
let arr3= Array.of(2,4,7,11)
console.log(arr3);

//& Instance Methods
//^push
arr.push("HEyy");
console.log(arr);
//^pop
arr.pop(arr);
console.log(arr);
//^shift
arr.shift();
console.log(arr);
//^unshift
arr.unshift("HII");
console.log(arr);
//^slice
console.log(arr.slice(2));
console.log(arr.slice(5,2));
console.log(arr.slice(-4));
//^splice
let da = [2,6,55,78,89]
console.log(da.splice(1,2,11,22,33));
console.log(da);
da.splice(2,0,44,44,44);
console.log(da);
//^ Concat
let newArray= da.concat(arr);
console.log(newArray);
//^ reverse
console.log(newArray.reverse);
let a=[1,2,3,4,5,10,1,3,9,5,];
console.log(a.reverse());
//^join
let newda=a.join("");
console.log(newda);
let newda1=a.join("-");
console.log(newda);
//^index of()
console.log(newda1.indexOf(4));
//^ lastIndexOf()
console.log(a.indexOf(1))
//^ includes()
console.log(a.includes(4));
//^ iterator
for( let x of a)
{
    console.log(x);
    
}
for( let data of a.values())
{
    console.log(data);
    
}
console.log(a.sort((a,b)=>a-b));



