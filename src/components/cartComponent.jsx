import React, { Component } from "react";
import CardCart from "./cardComponent";
import PriceCard from "./priceCard";

class CartComponent extends Component {
  render() {
    const {
      addedCart,
      onCartClick,
      cartCount,
      totalPrice,
      onDeleteHandle,
      onIncrementHandle,
      onDecrementHandle,
    } = this.props;
    console.log("cardItemhjjhhjs", totalPrice);
    return (
      <div className="row row m-2">
        <div class="col-md-8">
          {addedCart.map((item) => (
            <CardCart
              cardItems={item}
              onDelete={onDeleteHandle}
              onIncrement={onIncrementHandle}
              onDecrement={onDecrementHandle}
            />
          ))}

          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => onCartClick(false)}
          >
            Back to Homepage
          </button>
        </div>
        <div class="col-md-4">
          <PriceCard cartCount={cartCount} totalPrice={totalPrice} />
        </div>
      </div>
    );
  }
}

export default CartComponent;
