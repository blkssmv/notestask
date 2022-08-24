import {Divider, IconButton, List, ListItem} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {NavLink} from "react-router-dom";
import classes from "../styles/Sidebar.module.css";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Archive, Delete, Note} from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";

export default function Sidebar({DrawerHeader, Drawer, theme, open, handleDrawerClose}) {

    return (
        <Drawer variant="permanent" open={open}>
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
                <ListItem disablePadding sx={{display: 'block'}}>
                    <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/notes'}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: 'inherit'
                                }}
                            >
                                <Note/>
                            </ListItemIcon>
                            <ListItemText primary={'Notes'} sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>

                <ListItem disablePadding sx={{display: 'block'}}>
                    <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link}
                             to={'/archive'}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: 'inherit'
                                }}
                            >
                                <Archive/>
                            </ListItemIcon>
                            <ListItemText primary={'Archive'} sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>

                <ListItem disablePadding sx={{display: 'block'}}>
                    <NavLink className={({isActive}) => isActive ? classes.activeLink : classes.link} to={'/trash'}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                justifyContent: open ? 'initial' : 'center',
                                px: 2.5,
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: open ? 3 : 'auto',
                                    justifyContent: 'center',
                                    color: 'inherit'
                                }}
                            >
                                <Delete/>
                            </ListItemIcon>
                            <ListItemText primary={'Trash'} sx={{opacity: open ? 1 : 0}}/>
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
        </Drawer>

    )
        ;
}
