import SettingsIcon from '@mui/icons-material/Settings';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button'

export default function SettingsButton(){
    return(
    <Button style={{color:"white"}}startIcon={<SettingsIcon/>}>
      <Typography>
        </Typography> 
    </Button>
    )
}