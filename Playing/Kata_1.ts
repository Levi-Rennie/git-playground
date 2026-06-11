function first<T>(items: T[]): T | undefined {
  return items[0];
}

const a = first([1, 2, 3]); // a is inferred as number | undefined
const b = first(["a"]); // b is inferred as string | undefined

console.log("a =", a); // a = 1
console.log("b =", b); // b = a
console.log("empty:", first([])); // empty: undefined