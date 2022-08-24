import React from 'react';
import CardContent from "@mui/material/CardContent";
import {Box, Button, CardActions, Grid, Typography} from "@mui/material";
import {Delete, UnarchiveOutlined} from "@mui/icons-material";
import Card from "@mui/material/Card";

const ArchivePage = ({archivedNotes, removeNote, unArchiveNote}) => {
    return (
        <>
            {archivedNotes.length
                ?
                <>
                    <Box mb={1}>
                        <Typography>
                            Archived notes
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {archivedNotes.map(note => (
                            <Grid key={note.id} item xs={12} sm={6} md={3}>
                                <Card>
                                    <CardContent sx={{minHeight: '150px'}}>
                                        {note.text}
                                    </CardContent>
                                    <CardActions sx={{justifyContent: 'space-between'}}>
                                        <Button onClick={() => removeNote(note)}>
                                            <Delete color={'action'}/>
                                        </Button>
                                        <Button onClick={() => unArchiveNote(note)}>
                                            <UnarchiveOutlined/>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </>
                :
                <Typography variant='h6' component='div'>
                    Archive is empty!
                </Typography>}
        </>

    );
};

export default ArchivePage;