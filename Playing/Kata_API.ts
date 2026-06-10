// --- Types ---

interface User {
  id: string;
  name: string;
}

type ApiResult =
  | { status: "loading" }
  | { status: "success"; data: User[] }
  | { status: "error"; message: string };


// --- Functions ---

const render = (result: ApiResult): string => {
  if (result.status === "loading") {
    return "Loading...";
  }

    // deleted the error branch

  return `Users: ${result.data.map(u => u.name).join(", ")}`;
};


// --- Usage ---

const loading: ApiResult = { status: "loading" };
const success: ApiResult = { status: "success", data: [{ id: "1", name: "Alice" }] };
const error: ApiResult = { status: "error", message: "Something went wrong" };

console.log(render(loading)); // "Loading..."
console.log(render(success)); // "Users: Alice"
console.log(render(error));   // "Something went wrong"