"use strict";

// short circuiting (&& and ||)
// console.log(undefined || 0 || "" || null || false || "hello");

const num = 0;
const guest1 = num ? num : 10;

// shortcut (but only execute default when first one is false so 0 is false value)
const guest2 = num || 10;
// console.log(guest2);

// shortcut && (only execute default when left side true)
// console.log(true && "nazmul");

//end short circuiting (&& and ||)

// The Nullish Coalescing operator (??)
// Note: if null and undefined then it execute default but not (0, '');
const guest3 = num ?? 20;
// console.log(guest3);

//End The Nullish Coalescing operator (??)

// Logical assignment operator
const res1 = {
  name: "nazmul",
  age: 0,
};

const res2 = {
  name: "jannatul",
  age: 28,
  husbandName: "nazmul",
};

// res1.age = res1.age || 31;
// res1.age ||= 31;

res1.age ??= 31;
// console.log(res1.age);

res2.husbandName &&= "Yes iam";
// console.log(res2.husbandName);

//End Logical assignment operator

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Looping Objects: Object Keys,Values, Entries

const { openingHours } = restaurant;

const propertyName = Object.keys(openingHours);
// console.log(propertyName);

const eachValue = Object.values(openingHours);
// console.log(eachValue);

const propertyWithValues = Object.entries(openingHours);
// console.log(propertyWithValues);
for (const [property, { open, close }] of propertyWithValues) {
  //   console.log(property, open, close);
}

// Looping Objects: Object Keys,Values, Entries

/* 
Let's continue with our football betting app!



3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (let i = 0; i < game.scored.length; i++) {
  //   console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

for (const [i, plyer] of game.scored.entries()) {
  //   console.log(`Goal ${i + 1}: ${plyer}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)

const odds = Object.values(game.odds);
// console.log(odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
// console.log(average);
