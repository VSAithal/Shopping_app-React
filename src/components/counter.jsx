import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  //   listTags: ["Item1", "Item2", "Item3"]
  //   // imageUrl: "https://picsum.photos/200"
  // };
  inputStyle = {
    fontSize: 12,
    fontWeight: 500,
    width: 35,
    display: "inline-block",
    paddingLeft: "10px !important",
  };
  descStyle = {
    overflow: "hidden",
    display: "-webkit-box",
    webkitLineClamp: "3",
    webkitBoxOrient: "vertical",
    fontSize: 12,
  };
  incrementStyle = {
    fontSize: 20,
    color: "#343a40",
    cursor: "pointer",
  };
  imgStyle = {
    width: 90,
  };
  //   constructor() {
  //     super();
  //     console.log("We are inside the constructor", this);
  //     //We are binding this to the clickEvent function. So that this will have the reference in that function
  //     this.clickEvent = this.clickEvent.bind(this);
  //   }
  render() {
    const {
      image,
      title,
      counter,
      value,
      desc,
      price,
      addedToCart,
    } = this.props.counter;
    return (
      <div className="col-md-4">
        {/* <div className="col-md-12">
          <p>kddddddddd{this.props.dataCheck.value}</p>
        </div> */}
        <div className="media border p-2 m-2">
          <img
            src={image}
            alt="Image"
            className="mr-3 mt-3"
            style={this.imgStyle}
          />
          <div class="media-body">
            <h5>
              {title}
              {/* <small><i>Posted on February 19, 2016</i></small> */}
            </h5>
            <h6 className="text-dark">€ {price}</h6>
            <p style={this.descStyle}>{desc}</p>
            <i
              style={this.incrementStyle}
              onClick={() => {
                value !== 1
                  ? this.props.onDecrement(this.props.counter)
                  : void 0;
              }}
              className="fa fa-minus-circle"
            ></i>
            <input
              type="text"
              style={this.inputStyle}
              className="form-control m-1 p-2"
              value={this.counterMethod()}
            />
            {/* <button
                onClick={() => this.props.onIncrement(this.props.counter)}
                className="btn btn-outline-dark"
              >
                <i className="fa fa-plus"></i>
              </button> */}

            <i
              style={this.incrementStyle}
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="fa fa-plus-circle"
            ></i>
            {value > 0 ? (
              <button
                onClick={() => this.props.onAddCartClick(this.props.counter)}
                className="btn btn-outline-dark m-2"
                disabled={addedToCart ? true : false}
              >
                Add To Cart
              </button>
            ) : (
              ""
            )}
            {/* {value > 0 && addedToCart ? (
              <button
                onClick={() => this.props.onDelete(this.props.counter)}
                className="btn btn-outline-danger m-2"
              >
                Remove
              </button>
            ) : (
              ""
            )} */}
          </div>
          {/* {this.listRendering()} */}
        </div>
      </div>
    );
  }

  // badgeColorChange() {
  //   let spanClasses = "badge m-2 p-2 badge-";
  //   spanClasses += this.props.counter.value === 0 ? "dark" : "warning";
  //   return spanClasses;
  // }

  counterMethod() {
    const { value } = this.props.counter;
    return value === 0 ? 0 : value;
  }
}

export default Counter;
