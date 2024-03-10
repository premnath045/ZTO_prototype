import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
  
  function BreadCrumbs() {
    const breadcrumbs = [
       <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}
            sx={{ 
                px: 4, 
                py: 2, 
                textTransform: 'none', 
                fontSize: '14px',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } 
            }}>
            Home
        </Link>,

        <Link underline="hover" key="2" color="inherit" href="/material-ui/getting-started/installation/" onClick={handleClick}
            sx={{ 
                px: 4, 
                py: 2, 
                textTransform: 'none', 
                fontSize: '14px',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } 
            }}>
            Network monitoring
        </Link>,

        <Typography key="3" color="text.primary" 
            sx={{ 
                px: 4, 
                py: 2, 
                textTransform: 'none', 
                fontSize: '14px',
                '&:hover': { bgcolor: 'rgba(0,0,0,0.04)' } 
            }}>
            Identity management portal
        </Typography>
    ];
  
    return (
      <Stack spacing={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          sx={{ 
                borderBottom: '1px solid rgb(229 231 235)'
            }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    );
  }

  
export default BreadCrumbs;