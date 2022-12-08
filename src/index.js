const express = require("express");
const app = express();

const resourceRoute = require("./routes/resource");
const deparmentRoute = require("./routes/department");

const PORT = 3000;

// For Parsing data like JSON, Urlencoded
app.use(express.json());
app.use(express.urlencoded());

//Middleware
app.use((req, res, next) => {
  console.log(`${req.method}: ${req.url}`);
  next();
});

app.use('/api/resources', resourceRoute);
app.use('/api/department', deparmentRoute);

app.listen(PORT, () => console.log(`Express Server started on PORT ${PORT}`));