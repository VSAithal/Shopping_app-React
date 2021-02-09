import React, { Component } from "react";

class PriceCard extends Component {
  deliveryText = {
    fontSize: 12,
    marginBottom: 0,
  };
  render() {
    const { cartCount, totalPrice } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <h5>Price Details</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-8">
              Price ({cartCount} item{cartCount > 1 ? "s" : ""})
            </div>
            <div className="col-md-4">€ {totalPrice}</div>
          </div>
          <div className="row">
            <div className="col-md-8">Delivery Fee</div>
            <div className="col-md-4">
              € {totalPrice >= 1500 || totalPrice == 0 ? 0 : 10}
            </div>
          </div>
          {totalPrice < 1500 && totalPrice != 0 ? (
            <p className="text-info" style={this.deliveryText}>
              Avoid delivery charges on <mark>€ 1500</mark> and above purchase.
            </p>
          ) : (
            ""
          )}
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-md-8">Total</div>
            <div className="col-md-4">
              €{" "}
              {totalPrice >= 1500 || totalPrice == 0
                ? totalPrice
                : totalPrice + 10}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PriceCard;
