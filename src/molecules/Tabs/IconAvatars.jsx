import * as React from 'react';
import { green, pink,lightBlue } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VideoLibrary from '@mui/icons-material/VideoLibrary';
import HomeIcon from '@mui/icons-material/Home';
import Storefront from '@mui/icons-material/Storefront';
import Groups from '@mui/icons-material/Groups';
import SportsEsports from '@mui/icons-material/SportsEsports';
export default function IconAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar sx={{ bgcolor: lightBlue[500] }}>
        <HomeIcon />
      </Avatar>
      <Avatar sx={{ bgcolor: lightBlue[500] }}>
        <VideoLibrary />
      </Avatar>
      <Avatar sx={{ bgcolor: lightBlue[500] }}>
        <Storefront/>
      </Avatar>
      <Avatar sx={{ bgcolor: lightBlue[500] }}>
        <Groups/>
      </Avatar>
      <Avatar sx={{ bgcolor: lightBlue[500] }}>
        <SportsEsports/>
      </Avatar>
    </Stack>
  );
}
