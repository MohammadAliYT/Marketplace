const express = require("express");
const router = require("./routes");
const cors = require("cors");
const app = express();

const port = 3000;

//Middleware
app.use(express.json());
app.use(cors);
app.use(router);

app.listen(port, () => {
  console.log(`Server is now listening at port ${port}`);
});
