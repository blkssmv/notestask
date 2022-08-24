import * as React from 'react';

import NotesItem from "./NotesItem";
import {Box, Button, Grid, Input, TextField, Typography} from "@mui/material";
import {useState} from "react";
import SearchIcon from "@mui/icons-material/Search";


const NotesPage = ({createNote, notes, removeNote, archiveNote, searchQuery, setSearchQuery}) => {
    const [note, setNote] = useState({text: ''})
    const addNewNote = (e) => {
        e.preventDefault()
        const newNote = {
            ...note, id: Date.now()
        }
        if (note.text) {
            createNote(newNote)
            setNote({text: ''})
        } else {
            alert('Field cannot be empty')
        }

    }


    return (
        <>
            <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
                <SearchIcon/>
                <Input placeholder="Search notes…"
                       inputProps={{'aria-label': 'search'}}
                       value={searchQuery}
                       onChange={e => setSearchQuery(e.target.value)}/>
            </Box>
            <Box sx={{display: 'flex', alignItems: 'center', mb: 3}}>
                <TextField onChange={e => setNote({...note, text: e.target.value})} value={note.text} size="small"
                           sx={{flexGrow: 1, mr: 2}} id="demo-helper-text-misaligned-no-helper" label="Note"/>
                <Button onClick={addNewNote} variant="contained">Add note</Button>
            </Box>
            {notes.length
                ?
                <>
                    <Box mb={1}>
                        <Typography>
                            Your notes
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {notes.map(note => (
                            <Grid key={note.id} item xs={12} sm={6} md={3}>
                                <NotesItem archiveNote={archiveNote} removeNote={removeNote} note={note}/>
                            </Grid>
                        ))}
                    </Grid>
                </>
                :
                <Typography variant="h6" component='div'>Notes are empty!</Typography>}


        </>
    );
};

export default NotesPage;