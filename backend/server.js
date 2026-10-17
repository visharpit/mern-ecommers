import express from 'express';
const app = express();

app.use(express.json());

let notes=[];

app.get('/notes', (req, res)=>{
    res.json({
        success:true,
        data: notes
    })
})
app.post('/notes', (req, res)=>{
    const {title, content} = req.body;
    const newNote={
        id: notes.length + 1,
        title,
        content
    }
    notes.push(newNote);
    res.status(201).json({
        success: true,
        message: "new record added",
        data: newNote
    })
})

app.get('/notes/:id', (req, res)=>{
    const note = notes.find(n=>n.id===parseInt(req.params.id))
    if(!note){
        res.status(404).json({
            success: false,
            message: "Note not found"
        })
    }
    res.json({
        success: true,
        data: note
    })
})

app.put('/notes/:id', (req, res)=>{
    const note = notes.find(n=>n.id===parseInt(req.params.id))
    if(!note){
        res.status(404).json({
            success: false,
            message: "Note not found"
        })
    }
    const {title, content} = req.body;
    note.title = title || note.title;
    note.content = content || note.content;
    res.json({
        success: true, 
        message: "not successfully updated",
        data: note
    })
})

app.delete('/notes/:id', (req, res)=>{
    const noteIndex = notes.findIndex(n=>n.id===parseInt(req.params.id))
    if(noteIndex === -1){
        res.status(404).json({
            success: false,
            message: "Note not found"
        })
    }
    const deletedNotes = notes.splice(noteIndex, 1)
    res.json({
        success: true,
        message: "note deleted successfully",
        data: deletedNotes
    })
})

app.listen(3000, (res, req)=>{
    console.log('server is running on port 3000');
})