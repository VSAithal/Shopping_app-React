import React, { Component } from "react";

class CardCart extends Component {
  imgStyle = {
    width: 90,
  };
  inputStyle = {
    fontSize: 12,
    fontWeight: 500,
    width: 35,
    display: "inline-block",
    paddingLeft: "10px !important",
  };

  counterMethod() {
    const { cardItems } = this.props;
    return cardItems.value === 0 ? 0 : cardItems.value;
  }
  render() {
    const { cardItems, onDelete, onIncrement, onDecrement } = this.props;
    // console.log(cardItems, "cardItems");
    return (
      <div className="media">
        <img
          src={cardItems.image}
          className="align-self-center mr-3"
          style={this.imgStyle}
        />
        <div className="media-body">
          <h4>{cardItems.title}</h4>
          <h6 className="text-dark">{cardItems.price}</h6>
          <h6>
            Quantity :{" "}
            <span className="font-weight-bolder">{cardItems.value}</span>
          </h6>
          <p>{cardItems.desc}</p>
          <i
            style={this.incrementStyle}
            onClick={() => {
              cardItems.value !== 1 ? onDecrement(cardItems) : void 0;
            }}
            className="fa fa-minus-circle"
          ></i>
          <input
            type="text"
            style={this.inputStyle}
            className="form-control m-1 p-2"
            value={this.counterMethod()}
          />
          <i
            style={this.incrementStyle}
            onClick={() => onIncrement(cardItems)}
            className="fa fa-plus-circle"
          ></i>

          {cardItems.value > 0 && cardItems.addedToCart ? (
            <button
              onClick={() => onDelete(cardItems)}
              className="btn btn-outline-danger m-2"
            >
              Remove
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default CardCart;
