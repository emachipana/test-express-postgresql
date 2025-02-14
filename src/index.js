const app = require("./app.js");
require("dotenv").config();

const PORT = 8085;
app.listen(PORT);
console.log(`Server is running on port: ${PORT}`);
