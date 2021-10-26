const todos = await fetch("https://jsonplaceholder.typicode.com/todos/1");
console.log(await todos.json());