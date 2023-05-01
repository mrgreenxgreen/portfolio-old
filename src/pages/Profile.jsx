import NavBar from '../templates/NavBar'
import Box from '@mui/material/Box'
import DrawerUnder from '../molecules/Drawers/DrawerUnder'
import PrimarySearchAppBar from '../templates/PrimarySearchAppBar'
import DrawerLeftMini from '../molecules/Drawers/DrawerLeftMini'
import ProfileBox from '../molecules/Box/ProfileBox'

export default function Home(){
 
    return (
        <Box>
         <PrimarySearchAppBar></PrimarySearchAppBar>
       <ProfileBox></ProfileBox>
       <DrawerLeftMini/>
           
        </Box>
    )
}