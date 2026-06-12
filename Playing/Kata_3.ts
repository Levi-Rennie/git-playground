type User = {
  id: number;
  name: string;
  email: string;
};

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} for ${url}`);
  }
  return response.json() as Promise<T>;
}

// Test with a real free API:
async function main() {
  const user = await fetchJson<User>("https://jsonplaceholder.typicode.com/users/1");
  console.log(user.name); // hover `user` — it's a User!
  console.log(user.email);
}

main();