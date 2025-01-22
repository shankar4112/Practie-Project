const express = require("express");
const { MongoClient } = require("mongodb");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
const mongoUrl = "mongodb://localhost:27017/";
const dbName = "exp7";
let db;
MongoClient.connect(mongoUrl)
    .then((client) => {
        db = client.db(dbName);
        console.log(`Connected to MongoDB: ${dbName}`);
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        process.exit(1);
    });
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "exp.html"));
});
app.post("/insert", async (req, res) => {
    const { name, email, phone } = req.body;
    if (!db) {
        res.status(500).send("Database not initialized");
        return;
    }
    try {
        await db.collection("detail").insertOne({ name, email, phone });
        res.redirect("/report");
    } catch (err) {
        console.error("Error inserting data:", err);
        res.status(500).send("Failed to insert data");
    }
});
app.get("/report", async (req, res) => {
    try {
        const items = await db.collection("detail").find().toArray(); 

        let tableContent = `<div class="report-container">
            <h1 class="report-title">Report</h1>
            <div class="card">
                <div class="card-content">
                    <table border='1' style='border-collapse: collapse; width: 100%;'>
                        <tr><th>Name</th><th>Email</th><th>Phone</th></tr>
                        ${items.map(item => `<tr><td>${item.name}</td><td>${item.email}</td><td>${item.phone}</td></tr>`).join("")}
                    </table>
                </div>
            </div>
            <a href='/' class="back-link">Back to form</a>
        </div>`;

        // Add some CSS for table styling and card hover animation
        let styles = `<style>
            .report-container {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                color: white;
                animation-name: changeBackground;
                animation-duration: 10s; /* Change duration as needed */
                animation-iteration-count: infinite;
                background-size: cover;
            }
            .card {
                border: 1px solid #ccc;
                border-radius: 5px;
                padding: 15px;
                margin-bottom: 15px;
                transition: box-shadow 0.3s ease-in-out;
                background-color: rgba(255, 255, 255, 0.5); /* Semi-transparent white background */
            }
            table {
                border: 1px solid black;
                border-collapse: collapse;
                width: 100%;
                color: black; /* Change table text color to black */
            }
            th, td {
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
            .back-link {
                text-decoration: none;
                color: white;
                margin-top: 10px;
                font-weight: bold;
            }
            .back-link:hover {
                text-decoration: underline;
            }

            /* CSS Animation */
            @keyframes changeBackground {
                0% { background-image: url('https://www.hdwallpapers.in/thumbs/2022/ferrari_red_novitec_ferrari_sf90_stradale_2022_car_road_8_4k_5k_hd_cars-t2.jpg'); } /* Start background image */
                25% { background-image: url('https://img.freepik.com/premium-photo/cat-hoodie-hoodie-sits-street_900396-3989.jpg'); } /* Mid background image */
                50% { background-image: url('https://www.hdwallpapers.in/download/animal_squirrel_4k_5k_hd_animals_2-1600x900.jpg'); } /* Mid background image */
                75% { background-image: url('https://www.hdwallpapers.in/thumbs/2020/nissan_370z_4k_8k_hd_cars-t2.jpg'); } /* Mid background image */
                100% { background-image: url('https://wallpapercave.com/wp/wp3121134.jpg'); } /* End background image */
            }
        </style>`;

        tableContent = styles + tableContent;

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
        await db.collection("detail").updateOne({ name: req.params.name }, { $set: { name, email, phone } });
        res.redirect("/report");
    } catch (err) {
        console.error("Error updating data:", err);
        res.status(500).send("Failed to update data");
    }
});
app.get("/delete/:name", async(req, res) => {
    try {
        var name = req.params.name;
        await db.collection("detail").deleteOne({name});
        res.redirect('/report');
    } catch (err) {
        console.error("Error deleting data:", err);
        res.status(500).send("Failed to delete data");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
