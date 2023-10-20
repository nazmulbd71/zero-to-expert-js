"use strict";

// short circuiting (&& and ||)
console.log(undefined || 0 || "" || null || false || "hello");
console.log(true && "nazmul");

const num = 0;
const guest1 = num ? num : 10;
console.log(guest1);
