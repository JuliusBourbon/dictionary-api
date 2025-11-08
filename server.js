const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

// Endpoint
app.get('/api/en-words', (req, res) => {
    try {
        const filePath = path.join(__dirname, 'words_en.txt');
        const data = fs.readFileSync(filePath, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        res.json({words: lines});
    } catch (error) {
        res.status(500).json({ error: 'Gagal membaca file kamus'});
    }
});

app.listen(PORT, () => {
    console.log(`Kamus-api berjalan di http://localhost:${PORT}`)
})