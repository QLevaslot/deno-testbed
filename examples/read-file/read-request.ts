const permission = { name: "read", path: "todos.json" } as const;
await Deno.permissions.request(permission);
const jsonText = await Deno.readTextFile("./todos.json");
console.log(jsonText);