const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Path = require('path');
const Multer = require('multer');
const DBFuction = require('./DBFuctions')

const app = express();
app.use(express.json()); 
app.use(cors());
app.use(bodyParser.json());
app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

const storage = Multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './upload');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const extension = Path.extname(file.originalname);
        cb(null, uniqueSuffix + extension);
    },
});

const upload = Multer({ storage });
app.post('/SaveData', upload.single('image'), async (req, res) => {
    const data = req.body;
    const imageFile = req.file;
    console.log(data);
    console.log(imageFile.filename);
    data.image = imageFile.filename;
    const result = await DBFuction.insertData(data);
    res.status(200).json({ message: 'Data saved successfully' });
});

app.listen(8000, () => {
    console.log(`Server is running at http://localhost:8000`);
}); 

