import React from 'react';
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import {Button, CardActions} from "@mui/material";
import {Archive, Delete} from "@mui/icons-material";

const NotesItem = (props) => {


    return (
        <Card>
            <CardContent sx={{minHeight: '150px'}}>
                {props.note.text}
            </CardContent>
            <CardActions sx={{justifyContent: 'space-between'}}>
                <Button onClick={() => props.archiveNote(props.note)}>
                    <Archive color={'action'}/>
                </Button>
                <Button onClick={() => props.removeNote(props.note)}>
                    <Delete color={'error'}/>
                </Button>
            </CardActions>
        </Card>
    );
};

export default NotesItem;