const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

// Endpoint English
app.get('/api/en-words', (req, res) => {
    try {
        const filePath = path.join(__dirname, '/Data/words_en.txt');
        const data = fs.readFileSync(filePath, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');
        
        res.json({words: lines});
    } catch (error) {
        res.status(500).json({ error: 'Gagal membaca file kamus'});
    }
});

// Endpoint Indonesia
app.get('/api/id-words', (req, res) => {
    try {
        const filePath = path.join(__dirname, '/Data/words_id.txt');
        const data = fs.readFileSync(filePath, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        res.json({words: lines});
    } catch (error){
        res.status(500).json({ error: 'Gagal membaca file kamus'});
    }
})

// Endpoint Japan
app.get('/api/jp-words', (req, res) => {
    try {
        const filePath = path.join(__dirname, '/Data/words_jp.txt');
        const data = fs.readFileSync(filePath, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        res.json({words: lines});
    } catch (error){
        res.status(500).json({ error: 'Gagal membaca file kamus'});
    }
})

// Endpoint Germany
app.get('/api/de-words', (req, res) => {
    try {
        const filePath = path.join(__dirname, '/Data/words_de.txt');
        const data = fs.readFileSync(filePath, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        res.json({words: lines});
    } catch (error){
        res.status(500).json({ error: 'Gagal membaca file kamus'});
    }
})

// Endpoint French
app.get('/api/fr-words', (req, res) => {
    try {
        const filePath = path.join(__dirname, '/Data/words_fr.txt');
        const data = fs.readFileSync(filePath, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        res.json({words: lines});
    } catch (error){
        res.status(500).json({ error: 'Gagal membaca file kamus'});
    }
})

// Endpoint Italy
app.get('/api/it-words', (req, res) => {
    try {
        const filePath = path.join(__dirname, '/Data/words_it.txt');
        const data = fs.readFileSync(filePath, 'utf-8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        res.json({words: lines});
    } catch (error){
        res.status(500).json({ error: 'Gagal membaca file kamus'});
    }
})

app.listen(PORT, () => {
    console.log(`Kamus-api berjalan di http://localhost:${PORT}`)
})