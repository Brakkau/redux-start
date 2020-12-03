import { compose, pipe } from "lowdash";

let input = "     Javascript     ";
let output = "<div>" + input.trim() + "</div>"; // Sloppy way of trimming a string

// Functional Composition

// Seperare Functions
const trim = str => str.trim();
console.log(trim(input));
// Two Simular functions
const wrapInDiv = str => `<div>${str}</div>`;
console.log(wrapInDiv(input));
const wrapInSpan = str => `<span>${str}</span>`;
console.log(wrapInSpan(input));
const toLowerCase = str => str.toLowerCase();
console.log(toLowerCase(input));

// None Curried Function
const wrap = (type, str) => `<${type}>${str}</${type}>`
console.log(wrap('div', input))

// Curried Function
const wrapCurried = type => str => `<${type}>${str}</${type}>`
console.log(wrapCurried('div')(input));


// Compositioned into one function reading right to left
/**
 * Takes Input
 * Applies Trim
 * Applies LowerCase
 * Wraps in div
 */
const result = wrapInDiv(toLowerCase(trim(input)));
console.log(result);

// Lowdash Compose and pipe

// Much cleaner no parentheses nightmare

// Compose takes functions and processes them right to left
const transformCompose = compose(wrapInDiv, toLowerCase, trim);
console.log(transformCompose(input));
// Pipe takes functions and processes them in the order you define
const transformPipe = pipe(trim, toLowerCase, wrapInDiv);
console.log(transformPipe(input));
