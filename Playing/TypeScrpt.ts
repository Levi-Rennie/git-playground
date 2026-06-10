// sequential: ~900ms, parallel: ~300ms — parallel is faster
// Slow method (sequential)
async function fetchSequential(): Promise<void> {
  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/users/2",
    "https://jsonplaceholder.typicode.com/users/3",
  ];

  console.time("sequential");

  for (const url of urls) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Fetched user ${data.id}: ${data.name}`);
  }

  console.timeEnd("sequential");
}

// Fast method (parallel)
async function fetchParallel(): Promise<void> {
  const urls = [
    "https://jsonplaceholder.typicode.com/users/1",
    "https://jsonplaceholder.typicode.com/BROKEN_URL", // broken on purpose
    "https://jsonplaceholder.typicode.com/users/3",
  ];

  console.time("parallel");

  try {
    const results = await Promise.all(urls.map((url) => fetch(url).then((r) => r.json())));
    results.forEach((data) => console.log(`Fetched user ${data.id}: ${data.name}`));
  } catch (error) {
    console.error("Something went wrong — one or more requests failed:", error);
  } finally {
    console.timeEnd("parallel");
  }
}

fetchSequential();
fetchParallel();