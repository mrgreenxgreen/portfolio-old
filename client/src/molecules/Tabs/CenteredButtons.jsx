import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group" sx={{width:'50%',justifyContent:"center"}}>
      <Button startIcon={<HomeIcon />}>Home</Button>
      <Button startIcon={<VideoLibraryIcon />}>Watch</Button>
      <Button startIcon={<StorefrontIcon />}>MarketPlace</Button>
      <Button startIcon={<GroupsIcon />}>Groups</Button>
      <Button startIcon={<SportsEsportsIcon />}>Gaming</Button>
   
    </ButtonGroup>
  );
}
