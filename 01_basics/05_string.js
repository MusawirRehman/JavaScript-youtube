 const name = "Musawir-r"
 const age = 18

//  console.log(name + age + " value");
console.log(`my name is ${name} and my age is ${age}`);

const gameName= new String('Musawir')

console.log(gameName);
console.log(gameName[0]);
console.log(__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString =gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    Musawir   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Musawir.com"
const newUrl = url.replace('https', 'http')

console.log(url.includes('sundar'))