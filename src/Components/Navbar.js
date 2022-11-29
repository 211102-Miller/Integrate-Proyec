import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Icon from '@mui/material/Icon';



function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        color="primary"
        position="static"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
           <Icon color="secondary" sx={{ height:37, width:40}}>
             <AllInclusiveIcon></AllInclusiveIcon>
           </Icon>
          <Typography variant="h6" color="secondary" noWrap sx={{ flexGrow: 1 }}>
            DEV-OPS
          </Typography>
          <nav color>   
            <Link
              variant="button"
              color="secondary"
              href="Grafic"
              sx={{ my: 1, mx: 1.5, colo:"secondary" }}
            >
              Graficas
            </Link>
            <Link
              variant="button"
              color="secondary"
              href="Tables"
              sx={{ my: 1, mx: 1.5 }}
            >
              Tablas
            </Link>
          </nav>
          <Button href="macañico" variant="outlined" color="secondary" sx={{ my: 1, mx: 1.5 }}>
            Inicio
          </Button>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}