import { compose, pipe } from "lowdash/fp";

let input = "     Javascript     ";
let output = "<div>" + input.trim() + "</div>";

// Functional Composition

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = wrapInDiv(toLowerCase(trim(input)));
result

// Lowdash Compose and pipe

// Compose takes functions and processes them right to left
const transformCompose = compose(wrapInDiv, toLowerCase, trim);
transformCompose(input);
// Pipe takes functions and processes them in the order you define
const transformPipe = pipe(trim, toLowerCase, wrapInDiv);
transformPipe(input);
