import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from "@mui/material/Button";
import {Link} from "@mui/material";

export default function ResponsiveAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Link href="/main" color="inherit">Login</Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}