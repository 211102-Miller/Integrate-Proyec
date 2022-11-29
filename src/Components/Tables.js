import * as React from 'react';
import Nav from "../Components/Navbar";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Foter from "../Components/Footer"


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
 

function TableDatos (){

    const classes = useState();

    return (
        <React.Fragment>
        <Nav></Nav>
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 4, pb: 3 }}/>
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="#50595c"
          gutterBottom
        >
          Tablas
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          align="center"
          color="#50595c"
          gutterBottom
        >
          Descripcion de las tablas que desee
        </Typography>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </table>
        <Foter></Foter>
        </React.Fragment>
    );
}

export default function todo() {
    return <TableDatos/>;
  }