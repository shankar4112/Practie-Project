const express = require("express");
const { Pool } = require("pg");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '2004',
    port: 5432,
});

pool.connect()
    .then(() => {
        console.log('Connected to PostgreSQL');
        // Create the detail table if it doesn't exist
        return pool.query(`
            CREATE TABLE IF NOT EXISTS detail (
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(20) NOT NULL,
                PRIMARY KEY (name)
            )
        `);
    })
    .then(() => {
        console.log('Table "detail" is ready');
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL or creating table:', err);
        process.exit(1);
    });
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "exp.html"));
});
app.post("/insert", async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        await pool.query('INSERT INTO detail (name, email, phone) VALUES ($1, $2, $3)', [name, email, phone]);
        res.redirect("/report");
    } catch (err) {
        console.error("Error inserting data:", err);
        res.status(500).send("Failed to insert data");
    }
});
app.get("/report", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM detail');
        const items = result.rows;

        let tableContent = "<h1>Report</h1><table border='1' style='border-collapse: collapse; width: 100%;'><tr><th>Name</th><th>Email</th><th>Phone</th></tr>";
        tableContent += items.map(item => `<tr><td>${item.name}</td><td>${item.email}</td><td>${item.phone}</td></tr>`).join("");
        tableContent += "</table><a href='/'>Back to form</a>";

        // Add some CSS for table styling
        tableContent = `<style>
                            table, th, td {
                                border: 1px solid black;
                                padding: 8px;
                                text-align: left;
                            }
                            th {
                                background-color: #f2f2f2;
                            }
                            tr:nth-child(even) {
                                background-color: #f2f2f2;
                            }
                            a {
                                text-decoration: none;
                                color: blue;
                                margin-left: 5px;
                            }
                        </style>` + tableContent;

        res.send(tableContent);
    } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).send("Failed to fetch data");
    }
});

app.get("/dele", (req, res) => {
    res.sendFile(path.join(__dirname, "delete.html"));
});

app.post("/up", (req, res) => {
    const name = req.body.name;
    res.redirect(`/edit/${name}`);
});

app.post("/del", (req, res) => {
    const name = req.body.name;
    res.redirect(`/delete/${name}`);
});

app.get("/edit/:name", (req, res) => {
    res.sendFile(path.join(__dirname, "update.html"));
});

app.post("/update/:name", async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        await pool.query('UPDATE detail SET name = $1, email = $2, phone = $3 WHERE name = $4', [name, email, phone, req.params.name]);
        res.redirect("/report");
    } catch (err) {
        console.error("Error updating data:", err);
        res.status(500).send("Failed to update data");
    }
});

app.get("/delete/:name",  async (req, res) => {
    try {
        const name = req.params.name;
        await pool.query('DELETE FROM detail WHERE name = $1', [name]);
        res.redirect('/report');
    } catch (err) {
        console.error("Error deleting data:", err);
        res.status(500).send("Failed to delete data");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});