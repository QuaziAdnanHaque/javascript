const marvel_heros =["thor", "Ironman", "spiderman"]
const dc = ["superman", "batman", "flash"]
const powerRangers = ["red ranger", "blue ranger", "green ranger"] 

// marvel_heros.push(dc)

// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(dc)
// console.log(all_heros);

const allNewHeros = [...marvel_heros, ...dc, ...powerRangers]

// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7], [4, 5]]
const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray);


console.log(Array.isArray("ADNAN"))
console.log(Array.from("ADNAN"))
console.log(Array.from({name: "ADNAN"})) // gives empty array
let score1 = 100
let score2 = 90
let score3 =300

console.log(Array.of( score1, score2, score3));

