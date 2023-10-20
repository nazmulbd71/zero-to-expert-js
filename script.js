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
console.log(res2.husbandName);

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
console.log(propertyWithValues);
for (const [property, { open, close }] of propertyWithValues) {
  console.log(property, open, close);
}

// Looping Objects: Object Keys,Values, Entries
