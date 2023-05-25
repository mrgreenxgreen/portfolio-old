import { Box } from "@mui/system";
import matrix from '../../Assets/Images/matrix.png'
import { Button, Typography } from "@mui/material";
import Send from "@mui/icons-material/Send";
import  '../../Assets/css/neon.css'
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { Link } from "react-router-dom";

export default function HomeBox(){

    return(
        <Box  sx={{ width:{lg:'50%',sm:'100%',xs:'100%'}, height:'100000px', margin:'auto', display:{xs:'block', sm:'block'} }}>
              <Box sx={{backgroundImage:`url(${matrix})`,width:"100%",height:'100%',backgroundRepeat:'no-repeat',zIndex:'modal'}}>
              <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display:'flex', position:'absolute',   fontFamily:'arial',marginLeft:'4rem', marginTop:'13rem',fontWeight:'bold'}}
          >
           I'm
           
          </Typography>
          <Typography variant ="h1"  className="neonText"
          sx={{marginTop:'15rem',marginLeft:'59px',position:'absolute'}}
          >
            Dave D
           </Typography>
           <Typography 
           className="neonSub"
           variant ="h6"
          sx={{marginTop:'21rem',marginLeft:'4rem',position:'absolute',}}
          >
            an  <span style={{fontWeight:'bold'}}> INSTRUCTOR</span> with specialization in <span style={{fontWeight:'bold',fontStyle:''}}>web development</span>
           </Typography>
           
         <Box sx={{display:'flex',width:'300px',height:'50px',flexWrap:'wrap',justifyContent:'space-evenly',marginTop:'30rem',position:'absolute',marginLeft:'60px'}}>
         
         <Button variant="contained" endIcon={<Send />} color="success"
          sx={{}}>
            <Link to="/Profile">Hire Me</Link>
            
            
          </Button>
          <Button variant="outlined" endIcon={<FolderOpenIcon/>} color="success"
        
          >
            Portfolio
            
          </Button>
          <Typography variant='caption' className="neonSub">
          http://www.davedalimocon.com 
          </Typography>
          <Typography variant='caption' className="neonSub">
          davedalimocon@gmail.com
          </Typography>
          <Typography variant='caption' className="neonSub">
          
          +639815394522
          </Typography>
        
          </Box>
         
        </Box>
        
        </Box>
    )
}