import DeleteButton from '../molecules/Buttons/DeleteButton'
import SettingsButton from '../molecules/Buttons/SettingsButton'
import Box from '@mui/material/Box'
import DrawerLeft from '../molecules/Drawers/DrawerLeft'
import {  ThemeProvider, createTheme } from '@mui/system';
import zIndex from '@mui/material/styles/zIndex'
import DrawerUnder from '../molecules/Drawers/DrawerUnder'
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import SearchBar from '../molecules/Input/SearchBar'
import CenteredButtons from '../molecules/Tabs/CenteredButtons'
import Button from '@mui/material/Button'
import SignIn from '../molecules/Buttons/SignIn';
import LogoButton from '../molecules/Buttons/LogoButton'
import IconAvatars from '../molecules/Tabs/IconAvatars';

export default function NavBar (){

    return(
    
        <Box>
         <Box sx={{display:'flex',color:'secondary'}}>
          <AppBar position="fixed" sx={{ maxWidth:"100%",zIndex: (theme) => theme.zIndex.drawer + 1, }}>

           <Toolbar sx={{justifyContent:"space-between",alignContent:"center"}}>
            <LogoButton/>
             <IconAvatars/>
             <SignIn/>
            </Toolbar>
           </AppBar>     
         </Box>     
        </Box>
    )
}