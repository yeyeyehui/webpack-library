import $ from "jquery";
import _ from "lodash";

console.log($, _);

function* gen() {}
console.log(gen());

export const add = (a, b) => a + b;
export const minus = (a, b) => a - b;

export { $, _ };
