import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { Typography } from '@mui/material';
import SearchBar from '../Input/SearchBar';
import { Box } from '@mui/system';

export default function Logo(){

    return(
        <Box sx={{display:"flex"}}>
        <FacebookRoundedIcon sx={{fontSize:40}}/>
        <Typography sx={{flexGrow:"1"}} variant="h6">akebook </Typography>
        <SearchBar />
        </Box>
    )
}

 