import NavBar from '../templates/NavBar'
import Box from '@mui/material/Box'
import DrawerUnder from '../molecules/Drawers/DrawerUnder'
import SettingsButton from '../molecules/Buttons/SettingsButton'
import DrawerLeftPersistent from '../molecules/Drawers/DrawerLeftPersistent'
import DrawerLeftMini from '../molecules/Drawers/DrawerLeftMini'
import DrawerRight from '../molecules/Drawers/DrawerRight'
import PrimarySearchAppBar from '../templates/PrimarySearchAppBar'
import HomeBox from '../molecules/Box/HomeBox'

export default function Home(){

    return (
        <Box sx={{}}>
           
       <PrimarySearchAppBar></PrimarySearchAppBar>
       <HomeBox ></HomeBox>
       <DrawerLeftMini/>
       
       
        
        
        </Box>
    )
}