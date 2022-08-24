import './App.css';
import * as React from "react";
import Sidebar from "./components/Sidebar";
import {useMemo, useState} from "react";
import {CSSObject, styled, Theme, useTheme} from "@mui/material/styles";
import {Box, Container, CssBaseline, Typography} from "@mui/material";
import AppBar from "./components/AppBar";
import {Route, Routes} from "react-router-dom";
import NotesPage from "./components/NotesPage";
import ArchivePage from "./components/ArchivePage";
import TrashPage from "./components/TrashPage";
import MuiDrawer from "@mui/material/Drawer";


function App() {
    const [notes, setNotes] = useState([])
    const [deletedNotes, setDeletedNotes] = useState([])
    const [archivedNotes, setArchivedNotes] = useState([])
    const [searchQuery, setSearchQuery] = useState('')

    const searchedNotes = useMemo(() => {
        return notes.filter((note) => note.text.toLowerCase().includes(searchQuery.toLowerCase()))
    }, [searchQuery, notes])

    const createNewNote = (newNote) => {
        setNotes([...notes, newNote])
    }
    const removeNote = (note) => {
        setNotes(notes.filter(n => n.id !== note.id))
        setArchivedNotes(archivedNotes.filter(n => n.id !== note.id))
        setDeletedNotes([...deletedNotes, note])
    }

    const archiveNote = (note) => {
        setArchivedNotes([...archivedNotes, note])
        setNotes(notes.filter(n => n.id !== note.id))
    }
    const unArchiveNote = (note) => {
        setNotes([...notes, note])
        setArchivedNotes(archivedNotes.filter(n => n.id !== note.id))
    }

    const restoreNote = (note) => {
        setNotes([...notes, note])
        setDeletedNotes(deletedNotes.filter(n => n.id !== note.id))
    }

    const removeNotesFromTrash = (note) => {
        setDeletedNotes(deletedNotes.filter(n => n.id !== note.id))
    }
    const clearTrash = () => {
        setDeletedNotes(deletedNotes.splice(0, -deletedNotes.length))
    }

    const drawerWidth = 240;

    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });
    const DrawerHeader = styled('div')(({theme}) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
        ({theme, open}) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );


    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar open={open} handleDrawerOpen={handleDrawerOpen}/>
                <Sidebar closedMixin={closedMixin} openedMixin={openedMixin} DrawerHeader={DrawerHeader} Drawer={Drawer}
                         handleDrawerClose={handleDrawerClose} open={open} theme={theme}/>

                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <DrawerHeader>
                    </DrawerHeader>
                    <Container>
                        <Routes>
                            <Route path='/'
                                   element={<Typography variant='h6'>Welcome to Notes app!</Typography>}/>
                            <Route path='/notes'
                                   element={<NotesPage setSearchQuery={setSearchQuery} searchQuery={searchQuery} removeNote={removeNote} archiveNote={archiveNote}
                                                                     createNote={createNewNote} notes={searchedNotes}/>}/>
                            <Route path='/archive'
                                   element={<ArchivePage unArchiveNote={unArchiveNote} removeNote={removeNote}
                                                         archivedNotes={archivedNotes}/>}/>
                            <Route path='/trash'
                                   element={<TrashPage clearTrash={clearTrash}
                                                       removeNotesFromTrash={removeNotesFromTrash}
                                                       restoreNote={restoreNote} deletedNotes={deletedNotes}/>}/>
                        </Routes>
                    </Container>


                </Box>
            </Box>
        </>
    )
}

export default App;
