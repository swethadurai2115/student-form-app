const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'students_db'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

const createTableQuery = `
CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(255) NOT NULL,
    mark INT NOT NULL
)`;
connection.query(createTableQuery, (err) => {
    if (err) {
        console.error('Error creating students table:', err);
    }
});

// API to add a student
app.post('/api/students', (req, res) => {
    const { name, age, address, mark } = req.body;
    const query = 'INSERT INTO students (name, age, address, mark) VALUES (?, ?, ?, ?)';
    connection.query(query, [name, age, address, mark], (err, result) => {
        if (err) {
            console.error('Error inserting student:', err);
            res.status(500).json({ error: 'Failed to add student' });
        } else {
            res.status(201).json({ id: result.insertId, name, age, address, mark });
        }
    });
});

// API to get all students
app.get('/api/students', (req, res) => {
    const query = 'SELECT * FROM students';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching students:', err);
            res.status(500).json({ error: 'Failed to fetch students' });
        } else {
            res.status(200).json(results);
        }
    });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
