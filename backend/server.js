import express from "express";
import cors from "cors";
import createConnection from "./config/db.js"; // Import database connection function

const app = express();
app.use(express.json());
app.use(cors());

const db = await createConnection(); // Establish database connection

// Route for user login
app.post("/login", async (req, res) => {
    const { username, password } = req.body; // Extract data from request body

    try {
        // Query database to check if user exists
        const [rows] = await db.execute(
            "SELECT * FROM users WHERE username = ? AND password = ?",
            [username, password] 
        );

        if (rows.length > 0) {
            res.send(rows); // If user is found, send their data
        } else {
            res.send({ message: "Login Invalid" }); // If no match, return error message
        }
    } catch (error) {
        res.status(500).send({ error: "Database error", details: error.message }); // Handle database errors
    }
});

// Start server on port 8000
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
