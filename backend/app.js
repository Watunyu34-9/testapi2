const express = require("express");
const cors = require("cors");
const app = express();

// Define a route that returns JSON data
app.get("/hello", (req, res) => {
  const user = {
    name: "John Doe",
    age: 30,
    city: "New York",
  };

  res.json(user);
});

app.post("/hello", (req, res) => {
    console.log(req.body);

    res.json();
});

app.use(cors());

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
