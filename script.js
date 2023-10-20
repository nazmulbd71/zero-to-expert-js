"use strict";

// short circuiting (&& and ||)
console.log(undefined || 0 || "" || null || false || "hello");

const num = 0;
const guest1 = num ? num : 10;

// shortcut (but only execute default when first one is false so 0 is false value)
const guest2 = num || 10;
// console.log(guest2);

// shortcut && (only execute default when left side true)
console.log(true && "nazmul");

//end short circuiting (&& and ||)

// The Nullish Coalescing operator (??)
// Note: if null and undefined then it execute default but not (0, '');
const guest3 = num ?? 20;
console.log(guest3);

//End The Nullish Coalescing operator (??)
