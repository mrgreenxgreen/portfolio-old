import Button from '@mui/material/Button'
import NotificationsIcon from '@mui/icons-material/Notifications';
import ForumIcon from '@mui/icons-material/Forum';
import PeopleIcon from '@mui/icons-material/People';
import ButtonGroup from '@mui/material/ButtonGroup';

import AccountMenu from '../Menu/AccountMenu'
export default function SignIn(){
    return(
    // <Box sx={{alignContent:"center",justifyContent:"center"}}>
    // <PeopleIcon/>
    // <ForumIcon/>
    // <NotificationsIcon/>
    
    // <Button style={{color:"white"}}>
    //     Sign in
    // </Button>
    // </Box>

    <ButtonGroup variant="contained" aria-label="outlined primary button group" >
    <Button startIcon={<PeopleIcon />}></Button>
    <Button startIcon={<ForumIcon />}></Button>
    <Button startIcon={<NotificationsIcon />}></Button>
    <AccountMenu ></AccountMenu>
    
    
 
  </ButtonGroup>
    
    )
}