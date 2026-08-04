const express = require('express')
const app= express ()
const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'glowlist_db'
})

db.connect(err => {
    if (err) {
        console.error('Gagal konek ke database:', err)
    } else {
        console.log('Berhasil konek ke database Glowlist')
    }
})
const PORT=3001

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Selamat Datang di Server GlowList API!!');
})

app.get('/produk', (req, res) => {
    const sql = 'SELECT * FROM produk'
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ eeror: err })
            res.json(results)
    })
})

app.get('/kategori', (req, res) => {
    const sql = 'SELECT * FROM kategori'
    db.query(sql, (err, results) => {
        if (err) return res.status(500).json({ eeror: err })
            res.json(results)
    })
})

app.listen(PORT, () => {
    console.log(`Server GlowList jalan di http://localhost:${PORT}`)
})