import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import newlogo from "./newlogo.png"

export default function ProfileBox(){

  return(
    <Box sx={{display:"flex",justifyContent:"center"}}>
       <img alt="meow" src={newlogo} width="100px" height="100px"></img>
    <Typography variant="h1">
      This is profile page
   
    </Typography>
   
    </Box>
  )
}