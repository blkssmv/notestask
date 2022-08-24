import React from 'react';
import {Box, Button, CardActions, Grid, Typography} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import {Delete, DeleteSweepRounded, RestoreFromTrashOutlined} from "@mui/icons-material";
import Card from "@mui/material/Card";


const TrashPage = ({clearTrash, deletedNotes, restoreNote, removeNotesFromTrash}) => {
    return (
        <>
            {deletedNotes.length ?
                <>
                    <Box mb={1} display={"flex"}>
                        <Typography sx={{flexGrow: 1}}>
                            Deleted notes
                        </Typography>
                        <Button onClick={clearTrash} color='error'>
                            <DeleteSweepRounded/>
                            <Typography>Delete all Notes</Typography>
                        </Button>
                    </Box>
                    <Grid container spacing={3}>
                        {deletedNotes.map(note => (
                            <Grid key={note.id} item xs={12} sm={6} md={3}>
                                <Card>
                                    <CardContent sx={{minHeight: '150px', textDecoration: 'line-through'}}>
                                        {note.text}
                                    </CardContent>
                                    <CardActions sx={{justifyContent: 'center'}}>
                                        <Button onClick={() => restoreNote(note)}>
                                            <RestoreFromTrashOutlined color='action'/>
                                        </Button>
                                        <Button onClick={() => removeNotesFromTrash(note)}>
                                            <Delete color='error'/>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </>
                :
                <Typography variant='h6' component='div'>
                    Trash is empty!
                </Typography>}


        </>

    );
};

export default TrashPage;