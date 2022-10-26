import React, { useState } from "react";
// import { makeStyles } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Switch from "@material-ui/core/Switch";

export default function Pricing(props) {
  const [state, setState] = useState({
    checkbox: true,
  });

  const handleChange = (event) => {
    setState({ ...state, checkbox: event.target.checked });
  };

  return (
    <section className="section">
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Box mb={3}>
            <Container maxWidth="sm">
              <Typography variant="overline" color="textSecondary">
                Conoce nuestros planes
              </Typography>
              <Typography variant="h6" gutterBottom={true}>
                Planes a tu medida
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {"Segui avanzando y mejora tus finanzas"}
              </Typography>

              <div>
                <Typography variant="subtitle1" component="span">
                  {"Mensual"}
                </Typography>
                &nbsp;{" "}
                <Switch
                  name="checkbox"
                  color="primary"
                  checked={state.checkbox}
                  onChange={handleChange}
                />{" "}
                &nbsp;
                <Typography variant="subtitle1" component="span">
                  {"Anual"}
                </Typography>
              </div>
            </Container>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title="Basico" className="cardHeader"></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h6" gutterBottom={true}>
                      $ 10
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"Hasta 250 facturas"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"Filtros inteligentes"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"1 usuario"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                      paragraph={true}
                    >
                      {"Exportar en XLS y PDF"}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="primaryAction"
                  >
                    {"Comprar"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title="PYME" className="cardHeader"></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h6" gutterBottom={true}>
                      $ 23
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"Hasta 1000 facturas"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"Filtros inteligentes"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"2 usuario"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                      paragraph={true}
                    >
                      {"Exportar en XLS y PDF"}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="primaryAction"
                  >
                    {"Comprar"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader title="Experto" className="cardHeader"></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h6" gutterBottom={true}>
                      $ 49

                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"Facturas ilimitadas"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"Business Intelligence"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"Usuarios ilimitados"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                      paragraph={true}
                    >
                      {"Exportar en XLS y PDF"}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="primaryAction"
                  >
                    {"Comprar"}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
