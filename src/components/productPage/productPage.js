import React, { Component } from "react";
import {
  Container,
  TextField,
  Typography,
  MenuItem,
  Button,
} from "@material-ui/core";
import NYStrip from "../../assets/img/NYStrip.jpg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const styles = {
  container: {
    margin: "50px 10px",
  },
  image: {
    marginRight: 20,
  },
  product: {
    marginLeft: 25,
    display: "flex",
  },
  productDetails: {
    display: "block",
    padding: "0 10px",
  },
  select: {
    minWidth: 100,
    marginRight: 10,
    marginTop: 10,
  },
  form: {
    marginTop: 10,
    minWidth: 300,
  },
  addBtn: {
    marginTop: 20,
    marginLeft: 25,
    backgroundColor: "#00695c",
    color: "white",
  },
};

const quantities = [
  { value: "Ounces", label: "oz" },
  { value: "Pounds", label: "lbs" },
];

export default class ProductPage extends Component {
  state = {
    quantity: "",
    customerNotes: "",
  };

  onQuantityChange = (event) => {
    this.setState({ quantity: event.target.value });
  };

  onNotesChange = (event) => {
    this.setState({ customerNotes: event.target.value });
  };

  render() {
    const { quantity, customerNotes } = this.state;
    return (
      <div id="productPage" style={styles.container}>
        <Container>
          <div id="product" style={styles.product}>
            <div id="productImage" style={styles.image}>
              <img src={NYStrip} alt="productImage" style={{ height: 350 }} />
            </div>
            <div id="productDetails" style={styles.productDetails}>
              <Typography id="name" variant="inherit" component="h1">
                New York Strip Steak
              </Typography>
              <Typography
                id="price"
                variant="inherit"
                component="h2"
                style={{ marginTop: 15 }}
              >
                $22
              </Typography>
              <Typography
                id="description"
                variant="inherit"
                component="body"
                style={{ margin: "20px 0 0 0" }}
              >
                One delectable New York Strip Steak. The New York Strip is known
                by other names (Ambassador Steak, Kansas City strip, etc.), but
                its marbling and tenderness deliver one result: fantastic taste.
              </Typography>
              <div style={{ display: "flex" }}>
                <TextField
                  id="quantity"
                  variant="outlined"
                  margin="dense"
                  label="Weight"
                  required
                  placeholder="Enter quantity"
                  style={styles.select}
                />
                <TextField
                  id="quantityUnits"
                  select
                  required
                  label="Unit"
                  value={quantity}
                  onChange={(event) => this.onQuantityChange(event)}
                  variant="outlined"
                  margin="dense"
                  style={styles.select}
                >
                  {quantities.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <TextField
                id="customer-requirement-form"
                label="Notes"
                multiline
                rows={4}
                value={customerNotes}
                variant="outlined"
                onChange={(event) => this.onNotesChange(event)}
                placeholder="Please enter any requirements or instructions you would like us to follow"
                style={styles.form}
              />
            </div>
          </div>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            fullWidth
            style={styles.addBtn}
          >
            Add To Cart
          </Button>
        </Container>
      </div>
    );
  }
}
