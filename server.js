const express = require('express');
const app = express();
app.use(express.json());
const connectDB = require('./src/db/db');
const noteModel = require('./src/models/note.model');

connectDB();
app.get('/notes',async (req, res) => {
    const notes = await noteModel.find();

    res.json({
        message: "Notes fetched successfully",
        notes: notes
    })
});

app.post('/notes', async (req, res) => {
    const {title, content} = req.body;
    console.log (title, content);
    await noteModel.create({title, content})
    res.json({
        message: "Note created successfully!"
    })
});

app.patch('/notes/:id', async (req, res) => {
    const noteId = req.params.id
    const {title} = req.body
    await noteModel.findByIdAndUpdate(noteId, {title: title})
    res.send('Note updated');
});

app.delete('/notes/:id', async (req, res) => {
    const noteId = req.params.id
    await noteModel.findOneAndDelete({
        _id : noteId})
    res.send('Note deleted');
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});