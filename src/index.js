import "./styles.css";
import { data } from "./example.js";
import { Animal, Cat } from "./animal.js";

//****** Decostructuring object and Array ******//
/* const persInfo = {
  name: "Eli",
  surname: "Me",
  address: "NYC"
};

const { name, surname } = persInfo;
const example = `${name} ${surname}`;
document.getElementById("example").innerHTML = example;

let [first, second, last] = ["Dylan", "Coding God", "Israel"];
document.getElementById("example").innerHTML = first;
*/

//****** Object Literal ******//

/*function addressMaker(address) {
  const { city, state } = address;

  const newAddress = {
    city,
    state,
    country: "United States"
  };
  console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`);
}

addressMaker({ city: "Austin", state: "Texas" });*/

//****** For loop ******//

/*let incomes = [62000, 67000, 75000];
let total = 0;

for (const income of incomes) {
  console.log(income);
  total += income;
}

console.log("total", total);*/

//****** Spread Operator ******//

/*let example1 = [1,2,3,4,5];
let example2 = [...example1];

example2.push(true);
console.log(example2);*/

//****** Rest Operator ******//

/*function add(nums) {
    console.log(arguments);
}*/

/*function add(...nums) {
  console.log(nums);
}

add(3,5,6,8);*/

//****** Arrow functions ******//

/*function add(...nums) {
  let total = nums.reduce( function (x, y){
      return x*y;
  });
  let total = nums.reduce((x, y) =>  x*y);
  console.log(total);
}

add(3, 2, 4);*/

//****** Default Params ******//

/*function add(numArray = [1,2,3]) {
  let total = 0;
  numArray.forEach((element) => {
      total += element;
  });
  
  console.log(total);
}

add(); */

//****** Import/ Export ******//

/*let updateData = data;
updateData.push(5);

console.log(data);*/

//****** padStart/ padEnd ******//

/*let example = 'YouTube.com/CodingTutorials360';

console.log(example.padStart(50).length);
console.log(example.padEnd(1));*/

//****** Classes ******//

/*let cat = new Animal("Cat", 4);
cat.legs = 3;
cat.makenoise("Meow");
console.log(cat.type);
console.log(Animal.return10());
console.log(cat.metaData);*/

/*let cat = new Cat("Cat", 4);
cat.makenoise();*/

//****** Asynvc & Await ******//

/*const apiUrl = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";*/

/*function getTop100Campers() {
    fetch(apiUrl)
    .then((r) => r.json())
    .then((json) => {
        console.log(json[0])
    }).catch((error) =>{
        console.log('failed');
    });
}*/

/*async function getTop100Campers() {
  const response = await fetch(apiUrl);
  const json = await response.json();

  console.log(json[0]);
}

getTop100Campers();*/

/*function resolveAfter3Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 3000);
  });
}

async function getAsyncData() {
    const result = await resolveAfter3Seconds();
    console.log(result);
}

getAsyncData();*/
