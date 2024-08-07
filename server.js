// File related to web server.
// console.log('Testing'); // Testing

const express = require('express'); // Importing express module.
const cors = require('cors'); // Importing cors module.

const app = express(); // Creating an express application.

var corsOptions = { // Defining cors options.
    origin: "http://localhost:8088" // Origin URL.
}

app.use(cors(corsOptions)); // Using cors middleware.

// Parse requests of content-type - application/json
app.use(express.json()); 

/* Parse requests of content-type - application/x-www-form-urlencoded */
app.use(express.urlencoded({extended:true})); 

// Simple route
app.get("/", (req,res)=>{
    res.json({ message: "Hello there"})
});

// Setting the port, listen for requests
const PORT = process.eventNames.PORT || 9080;

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}.`)
});
