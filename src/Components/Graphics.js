import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import AnyChart from "anychart-react";
import anychart from "anychart";
import Nav from "../Components/Navbar"
import Foter from "../Components/Footer"




let stage = anychart.graphics.create();
let stage2 = anychart.graphics.create();
let stage3 = anychart.graphics.create();
let chart1 = anychart.line([1, 2, 3]);
let chart0 = anychart.line([1, 2, 3]);
let chart2 = anychart.line([1, 2, 3]);

const complexBar = {
  width: 300,
  height: 300,
  type: 'column',
  data: "P1,5\nP2,3\nP3,6\nP4,4",
  title: '',
  yAxis: [1, {
    orientation: 'right',
    enabled: true,
    labels: {
      format: '{%Value}{decimalPoint:\\,}',
      fontColor: 'red'
    }
  }],
  legend: {
    background: 'lightgreen 0.4',
    padding: 0
  },
  lineMarker: {
    value: 4.5
  }
};

let data = anychart.data.set([
  ["January", 10000, 12501],
  ["February", 12100, 1500],
  ["March", 13000, 16500],
  ["April", 10000, 13000],
  ["May", 9000, 11000]
]);

let error = anychart.column();
var seriesData_1 = data.mapAs({x: 0, value: 1});
let series1 = error.column(seriesData_1);
series1.error().valueLowerError(700);
series1.error().valueUpperError(800);


function PricingContent() {
  return (
    <React.Fragment>
      <Nav></Nav>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h2"
          variant="h4"
          align="center"
          color="#50595c"
          gutterBottom
        >
          Graficas
        </Typography>
        <Typography
          component="h5"
          variant="h5"
          align="center"
          color="#50595c"
          gutterBottom
        >
          Estos datos son con la fecha que tu desees
        </Typography>
      </Container>
      {/* End hero unit */}      
        <section className="row g-0 ">
         <article className="col-12 col-md-4 d-flex justify-content-center mt-4">
            <div class="card w-75  ">
              <div class="card-body ">
                <h5 class="card-title text-center">Humedad</h5>
                <div className="d-flex justify-content-center">
                <AnyChart
                  instance={stage}
                  id="Humedad"
                  width={300}
                  height={300}
                  charts={[chart1]}
                />
                </div>

                {/* <a href="#" class="d-md-none d-block  displa btn btn-primary">
                  Grafica
                </a> */}
              </div>
            </div>
          </article>

          <article className="col-12 col-md-4 d-flex justify-content-center mt-4">
            <div class="card w-75  ">
              <div class="card-body">
                <h5 class="card-title text-center">Temperatura para liquidos</h5>
                <p class="card-text">
                <div className="d-flex justify-content-center">
                <AnyChart
                  instance={stage2}
                  id="Luz"
                  width={300}
                  height={300}
                  charts={[chart2]}
                />
                </div>
                </p>
                {/* <a href="#" class="d-md-none d-block  displa btn btn-primary">
                  Grafica
                </a> */}
              </div>
            </div>
          </article>

          <article className="col-12 col-md-4 d-flex justify-content-center mt-4">
            <div class="card w-75 justify-content-center">
              <div class="card-body ">
                <h5 class="card-title text-center">Luz</h5>
                <p class="card-text">
                <div className="d-flex justify-content-center">
                  <AnyChart 
                    {...complexBar} 
                    
                  />
                  </div>
                </p>
              </div>
            </div>
          </article>

          <article className="col-12 col-md-4 d-flex justify-content-center mt-4">
            <div class="card w-75  ">
              <div class="card-body">
                <h5 class="card-title text-center">Grafica de error en temperatura</h5>
                <p class="card-text">
                <div className="d-flex justify-content-center">
                  <AnyChart
                  instance={error}
                  id="Error"
                  width={300}
                  height={300}
                  charts={[data]}
                />
                </div>
                </p>
              </div>
            </div>
          </article>
          </section>
        <Foter></Foter>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}