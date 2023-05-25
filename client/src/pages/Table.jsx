import NavBar from '../templates/NavBar'
import Box from '@mui/material/Box'
import DrawerUnder from '../molecules/Drawers/DrawerUnder'

export default function Home(){

    return (
        <Box>
        <NavBar/>
        <DrawerUnder />
        </Box>
    )
}