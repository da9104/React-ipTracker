import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

export default function ShowDetails({ ip, location }) {
    return (
        <Stack 
        direction="row" 
        justifyContent="center" 
        alignItems="center" 
        className='detail--card' 
        style={{ position: "relative", top: "-90px",  }}
         > 
         {/* backdropFilter: "blur(5px)" */}
        <Card variant="outlined" sx={{ display: 'flex', padding: 3  }}>
        <Box sx={{ p: 2, fontSize: 9, textTransform: 'uppercase' }}>
         
            <Typography  component="div">
            IP Address
            </Typography>
    
          <Typography color="text.secondary" variant="body2">
          {ip.ip}   {ip.isp}
          </Typography>
        </Box>
        <Divider orientation="vertical" variant="middle"  flexItem  />
        <Box sx={{ p: 2, fontSize: 9, textTransform: 'uppercase' }}>
          <Stack direction="column" spacing={1}>
          <Typography  component="div">
            Location
         </Typography> 
         {location.city}
         {location.country}
          </Stack>
        </Box>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Box sx={{ p: 2, fontSize: 9, textTransform: 'uppercase' }}>
        <Typography component="div">
            Timezone
            </Typography>
        <Typography color="text.secondary" variant="body2">
            {location.timezone} 
          </Typography>
       </Box>
    </Card>
</Stack>
)}