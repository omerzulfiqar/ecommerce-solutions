import React, { Component } from "react";
import data from "../../data/data.json";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Select,
} from "@material-ui/core";

const styles = {
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    margin: "50px auto",
    maxWidth: "90%",
  },
  headerCell: {
    padding: "0.75rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontSize: 20,
  },
  tableCell: {
    padding: "0.75rem",
    verticalAlign: "top",
    borderTop: "1px solid #dee2e6",
    fontSize: 16,
    // maxWidth: 200
  },
  image: {
    verticalAlign: "middle",
    borderStyle: "none",
    maxWidth: 200,
  },
  subtotal: {
    borderBottom: "none",
    fontSize: 16,
    padding: "0.75rem",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
};

export default class CartPage extends Component {
  state = {
    products: [],
    error: false,
    subtotal: "",
  };

  componentDidMount() {
    const items = data.slice(0, 3);
    this.setState({ products: items });
    this.calculateTotal();
  }

  // Calculate invoice total
  calculateTotal = () => {
    let total = 0;
    const items = data.slice(0, 3);
    items.forEach((item) => {
      total += (parseFloat(item.price) * parseFloat(item.quantity));
    });
    this.setState({ subtotal: total.toFixed(2)});
  };

  async addToCart(id, quantity) {
    // Add data to cart api
    // Get The name, price and any special instructions
  }

  async removeFromCart(id, quantity) {
    // Remove data from cart api
  }

  onQuantityChange = (index, newQuantity) => {
    let items = this.state.products;
    items[index].quantity = newQuantity;
    this.setState({ products: items });
    this.calculateTotal()
  };


  render() {
    const { products, subtotal } = this.state;

    return (
      <div id="cartPage" style={styles.container}>
        <Table aria-label="simple table">
          <TableHead id="cartColums">
            <TableRow>
              <TableCell align="left" style={styles.headerCell}>
                Product
              </TableCell>
              <TableCell align="left" style={styles.headerCell}>
                Description
              </TableCell>
              <TableCell align="left" style={styles.headerCell}>
                Quantity
              </TableCell>
              <TableCell align="left" style={styles.headerCell}>
                Price
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody id="cartItems">
            {products.map((item, index) => (
              <TableRow key={index}>
                <TableCell style={styles.tableCell} id="itemImage" align="left">
                  <img
                    src={process.env.PUBLIC_URL + item.image}
                    alt=""
                    style={styles.image}
                  />
                </TableCell>
                <TableCell style={styles.tableCell} align="left" id="itemName">
                  {item.name}
                </TableCell>
                <TableCell
                  style={styles.tableCell}
                  align="left"
                  id="itemQuantity"
                >
                  <Select
                    native
                    value={item.quantity}
                    margin="dense"
                    variant="outlined"
                    onChange={(e) =>
                      this.onQuantityChange(index, e.target.value)
                    }
                  >
                    <option value={0}>0</option>
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                  </Select>
                </TableCell>
                <TableCell style={styles.tableCell} align="left" id="itemPrice">
                  ${(parseFloat(item.price) * parseFloat(item.quantity)).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
            <TableRow id="subTotal">
              <TableCell style={styles.subtotal} align="center">
                {""}
              </TableCell>
              <TableCell style={styles.subtotal} align="center">
                {""}
              </TableCell>
              <TableCell style={styles.subtotal} align="left">
                Subtotal :
              </TableCell>
              <TableCell style={styles.subtotal} align="left">
                ${subtotal}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}
