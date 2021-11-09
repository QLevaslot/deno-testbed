deno run https://deno.land/std/examples/welcome.ts
deno run --reload https://deno.land/std/examples/welcome.ts

// await + réseau
 deno run await.ts
 deno run --allow-net await.ts

// allow read
deno run read.ts
deno run --allow-read read.ts
deno run read-request.ts

 // import-map
 deno run --import-map=import_map.json color.ts


 // Bundling (import map example)
 deno bundle --import-map=import_map.json .\color.ts color.js 
 deno compile --import-map=import_map.json .\color.ts color.js 
