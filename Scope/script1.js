//--Global Scope
// let a="Thanish";

// function greet() {
//     console.log("Hello, " + a + "!");
// }
// greet();

//--Block Scope
// {
//     let var1 = "Tiger";
//     console.log("Hello, " + var1 + "!");
//}

// {
//     var var1="Lion";

// }
// console.log("Hello, " + var1 + "!");

// {
//     const var1 = "Elephant";
//     console.log("Hello, " + var1 + "!");
// }

//--Function Scope
function hello() {
    var var1 = "Dog";
    console.log("Hello, " + var1 + "!");

}
hello();