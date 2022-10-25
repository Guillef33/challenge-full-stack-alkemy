import React from "react";
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
  const [state, setState] = React.useState({
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
                {"badge"}
              </Typography>
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">
                  {"header-p1"}{" "}
                </Typography>
                <Typography variant="h3" component="span">
                  {"header-p2"}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {"description"}
              </Typography>

              <div>
                <Typography variant="subtitle1" component="span">
                  {"option1"}
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
                  {"option2"}
                </Typography>
              </div>
            </Container>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader
                  title={"01_title"}
                  className="cardHeader"
                ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {"01_price"}
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="span"
                      >
                        {"01_suffix"}
                      </Typography>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"01_benefit1"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"01_benefit2"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {"01_benefit3"}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                      paragraph={true}
                    >
                      {"01_benefit4"}
                    </Typography>
                  </Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    className="primaryAction"
                  >
                    {"01_primary-action"}
                  </Button>
                  <Box mt={2}>
                    <Link href="#" color="primary">
                      {"03_secondary-action"}
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
