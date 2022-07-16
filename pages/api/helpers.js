const fs = require("fs");
export const file = (path) => fs.readFileSync("./pages/api/" + path, "utf-8");
export const saveData = (filename, data) => fs.writeFileSync("./pages/api/" + filename, JSON.stringify(data));
