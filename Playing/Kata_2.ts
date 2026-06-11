function groupBy<T>(items: T[], key: (item: T) => string): Record<string, T[]> {
  const groups: Record<string, T[]> = {};
  for (const item of items) {
    // 1. compute the group name: key(item)
    // 2. if groups doesn't have that name yet, create an empty array
    // 3. push the item into that array

    const name = key(item);
    if (!groups[name]) {
      groups[name] = [];
    }
    groups[name].push(item);
  }
  return groups;
}

// Test it:
const words = ["apple", "banana", "avocado", "cherry", "blueberry"];
const byLetter = groupBy(words, (w) => w[0]);
console.log(byLetter);
// { a: ["apple", "avocado"], b: ["banana", "blueberry"], c: ["cherry"] }

const nums = [1, 2, 3, 4, 5, 6];
const byParity = groupBy(nums, (n) => (n % 2 === 0 ? "even" : "odd"));
console.log(byParity);
// { odd: [1, 3, 5], even: [2, 4, 6] }