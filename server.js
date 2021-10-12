// Requirements
const express = require("express");

// Initialize express app
const app = express();

/* 
  Port setup (default is 3000, 
  which is also the used in 
  create-react-app) 
*/
const port = 5000;

// Routes
app.get("/api/customers", (req, res) => {
  const customers = [
    { id: 1, firstName: "Bill", lastName: "Gates"},
    { id: 2, firstName: "Steve", lastName: "Jobs"},
    { id: 3, firstName: "Elon", lastName: "Musk"}
  ]
  
  res.json(customers);
})

// Check which port the express app is listening on
app.listen(port, () => console.log(`Server started on port ${port}`));