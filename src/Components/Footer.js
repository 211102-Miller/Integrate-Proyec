import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright(props) {
    return (
      <Typography variant="body2" color="secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}

function Zodo() {
    return(
        <React.Fragment>
            <Container
                syles={{backgroundColor:"blue"}}
                maxWidth="md"
                component="footer"
                sx={{
                    borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                    mt: 4,
                    py: [1,8],
                }}
            >
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </React.Fragment>
    )
}

export default function Todo() {
    return < Zodo/>;
  }