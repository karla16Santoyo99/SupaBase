import React from 'react';
import { AppBar, Toolbar, Typography, Avatar, Tooltip, Box, IconButton, Button } from '@mui/material';
import { supabase } from "../../config/supabaseClient";
import { Link } from 'react-router-dom';
import { blue, red } from '@mui/material/colors';


const Navbar = () => {    

    return (
        
        <div>
            
            <Box sx={{ flexGrow: 1 }}>
             
                <AppBar position="fixed" sx={{ bgcolor: red[700] }}>

                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                         

                        </IconButton>
                        <Typography variant='h6' component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            HOME
                        </Link>
                        </Typography>

                        <Button color="inherit" onClick={() => supabase.auth.signOut()}>
                        Salir
                    </Button>
                
                                

                            <Button color="inherit" >
                                <Link to="/Account">
                                Perfil
                                </Link>
                                </Button>

                        
                        

                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                            <Avatar sx={{ bgcolor: blue[700] }} variant="square">
                                A
                            </Avatar>
                                
                            </IconButton>
                        </Tooltip>

                    </Toolbar>

                </AppBar>
            </Box>
           


        </div>
    );
}

export default Navbar