const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')

app.get('/', (req, res) => {
  res.send('welcome to my website!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'quckidon',
  password: 'me12fbjDEGHJE3sg#$',
  database: 'quckidon_db'
}); 

connection.connect(); 


app.post('/register', (req, res) => {

  const { username, password } = req.body;

  const insertUserQuery = `INSERT INTO users (username, password, isAdmin) VALUES (?, ?, ?)`;
  connection.query(insertUserQuery, [username, hashedPassword, false], (err, results) => {
      if (err) throw err;
      res.redirect('/login');
  });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  const findUserQuery = `SELECT * FROM users WHERE username = ?`;
  connection.query(findUserQuery, [username], (err, results) => {
    if (err) throw err;
    
    if (results.length === 0) {
      return res.redirect('/login'); // User not found
    }
    
    const user = results[0];
    const passwordMatch = (password == user.password); 
    
    if (passwordMatch) {
      req.session.user = user;
      res.redirect('/dashboard');
    } else {
      res.redirect('/login');
    }
  });
});

function isAdmin(req, res, next) {
  if (req.session.user && req.session.user.isAdmin) {
    return next();
  } else {
    res.status(403).send('Access denied');
  }
}

app.get('/admin', isAdmin, (req, res) => {
  res.send('Admin dashboard');
});


connection.end(); 