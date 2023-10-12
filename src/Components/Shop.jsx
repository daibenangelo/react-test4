import { Component } from "react";
import ShopDisplay from "./ShopDisplay";

class Shop extends Component {
  constructor(props) {
    super(props);

    this.inventory = [
      { item_name: "Steam Deck", price: 30000 },
      { item_name: "PS5", price: 50000 },
      { item_name: "Funko Pop", price: 800 },
      { item_name: "Nintendo Switch", price: 18000 },
      {
        item_name: "Nintendo 64",
        price: 50000,
      },
    ];
  }

  render() {
    return (
      <div class="container">
        <h1>Items for Sale:</h1>
        <ShopDisplay items={this.inventory} />
      </div>
    );
  }
}

export default Shop;
