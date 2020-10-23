import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import items from "../../data/data.json";
import { Container, Typography } from "@material-ui/core";
import opc from "../../assets/img/opc.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  paper: {
    padding: 10,
    textAlign: "center",
    color: "gray",
  },
  container: {
    margin: "50px",
  },
};

export default class ProductsGrid extends Component {
  state = {
    currData: [],
    rowsPerPage: 5,
    colsPerRow: 5,
  };

  chunkData = (arr, size) => {
    let chunkedData = [];
    let index = 0;

    while (index < arr.length) {
      chunkedData.push(arr.slice(index, size + index));
      index += size;
    }
    return chunkedData;
  };

  componentDidMount() {
    const data = this.chunkData([...items], 4);
    this.setState({ currData: data });
  }

  render() {
    const { currData } = this.state;

    return (
      <div id="productsGrid" style={styles.container}>
        <Container>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
          >
            {[...currData].map((chunk, index) =>
              [...chunk].map((item, index) => (
                <Grid
                  style={styles.paper}
                  item
                  key={index}
                  xs={7}
                  sm={5}
                  md={3}
                >
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        style={{ height: 150 }}
                        image={opc}
                        title={item.name}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="inherit"
                          component="h4"
                          style={{wordWrap: "break-word"}}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="inherit"
                          color="textSecondary"
                          component="p"
                        >
                          {`$${item.price}`}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Container>
      </div>
    );
  }
}
