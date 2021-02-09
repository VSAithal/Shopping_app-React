import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import Counter from "./components/counter";
import Footer from "./components/footer";
import CartComponent from "./components/cartComponent";
import counterData from "./data/data.js";
import Pagination from "./components/pagination";
// var counterData = require("json-loader!./data/data.json");
class App extends Component {
  parentGrid = {
    height: "calc(100vh - 125px)",
    overflowY: "auto",
  };
  componentDidUpdate() {
    // this.setPage();
  }
  componentDidMount() {
    const category = this.state.category;
    this.setState({ data: counterData[category] });
    this.setPage(category);
    const currentPage = this.state.currentPage;
    let currentPageData = counterData[category].filter(
      (counter) => counter.id >= currentPage && counter.id < currentPage + 6
    );
    console.log("currentPageData currentPageData", currentPageData);
    this.setState({ currentPageData: currentPageData });
    // console.log("Mounted");
    // axios.get("http://jsonplaceholder.typicode.com/users").then((result) => {
    //   console.log("Result", result);
    // });
  }
  state = {
    cartClickFlag: false,
    data: [],
    pages: [],
    currentPage: 1,
    currentPageData: [],
    category: "defaultItems",
    categoryClick: false,
    searchFilteredData: [],
    currentPaginationData: [],
    itemCategories: [
      { id: 1, title: "All", value: "defaultItems" },
      { id: 2, title: "Clothes", value: "clothItems" },
      { id: 3, title: "Electronics", value: "electronicItems" },
    ],
    // counters: [
    //   {
    //     id: 1,
    //     value: 1,
    //     title: "One Plus 8 Red",
    //     price: 500,
    //     desc:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    //     image: require("../src/images/img_1.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 2,
    //     value: 1,
    //     title: "One Plus 8 Black",
    //     price: 450,
    //     desc:
    //       "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum",
    //     image: require("../src/images/img_2.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 3,
    //     value: 1,
    //     title: "One Plus 8 Purple",
    //     price: 513,
    //     desc:
    //       "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    //     image: require("../src/images/img_2.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 4,
    //     value: 1,
    //     title: "One Plus 8 Black",
    //     price: 447,
    //     desc:
    //       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,",
    //     image: require("../src/images/img_3.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 5,
    //     value: 1,
    //     title: "One Plus 8 Black",
    //     price: 450,
    //     desc:
    //       " Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
    //     image: require("../src/images/img_3.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 6,
    //     value: 1,
    //     price: 552,
    //     title: "One Plus 8 Black",
    //     desc:
    //       "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    //     image: require("../src/images/img_3.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 7,
    //     value: 1,
    //     price: 552,
    //     title: "One Plus 8 Black",
    //     desc:
    //       "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    //     image: require("../src/images/img_3.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 8,
    //     value: 1,
    //     price: 552,
    //     title: "One Plus 8 Black",
    //     desc:
    //       "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    //     image: require("../src/images/img_3.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 9,
    //     value: 1,
    //     price: 552,
    //     title: "One Plus 8 Black",
    //     desc:
    //       "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    //     image: require("../src/images/img_3.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 10,
    //     value: 1,
    //     price: 552,
    //     title: "One Plus 8 Black",
    //     desc:
    //       "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    //     image: require("../src/images/img_3.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 11,
    //     value: 1,
    //     price: 552,
    //     title: "One Plus 8 Black",
    //     desc:
    //       "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    //     image: require("../src/images/img_3.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 12,
    //     value: 1,
    //     price: 552,
    //     title: "One Plus 8 Black",
    //     desc:
    //       "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    //     image: require("../src/images/img_3.jpg"),
    //     addedToCart: false,
    //   },
    //   {
    //     id: 13,
    //     value: 1,
    //     price: 552,
    //     title: "One Plus 8 Black",
    //     desc:
    //       "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
    //     image: require("../src/images/img_3.jpg"),
    //     addedToCart: false,
    //   },
    // ],
    cartCount: 0,
    addedCart: [],
    totalPrice: 0,
    searchFilter: "",
  };
  setCurrentPages(pages) {
    const currentPageData = this.state.currentPaginationData;
    const pageSize = [];
    if (currentPageData.isEmpty()) {
      for (let i = 1; i <= pages; i++) {
        const elem = {};
        console.log(
          "Object.keys(currentPageData).length",
          Object.keys(currentPageData).length,
          i
        );
        if (Object.keys(pageSize).length < 10) {
          elem.id = i;
          elem.val = i;
          pageSize.push(elem);
        }
      }
    } else {
      const lastItem = Object.keys(currentPageData)[
        Object.keys(currentPageData).length - 1
      ];
      for (let i = lastItem; i <= pages; i++) {
        const elem = {};
        console.log(
          "Object.keys(currentPageData).length",
          Object.keys(currentPageData).length,
          i
        );
        if (Object.keys(pageSize).length < 10) {
          elem.id = i;
          elem.val = i;
          pageSize.push(elem);
        }
      }
    }
    this.setState({ currentPaginationData: pageSize });
    // currentPaginationData;
  }
  setPage(category) {
    // const category = this.state.category;
    let pages = Math.ceil(counterData[category].length / 5);
    // console.log("pages count", counterData[category].length, category);
    // const pageSize = [];
    // for (let i = 1; i <= pages; i++) {
    //   const elem = {};
    //   elem.id = i;
    //   elem.val = i;
    //   pageSize.push(elem);
    // }
    // this.setState({ pages: pageSize });
    this.setCurrentPages(pages);
  }
  // handle click on category
  handleCategoryClick = (clickStatus) => {
    this.setState({ categoryClick: clickStatus });
  };
  handleItemCategoryClick = (clickStatus, clickedItem) => {
    this.setState({ categoryClick: clickStatus, category: clickedItem });
    this.setState({ data: counterData[clickedItem] });

    const currentPage = this.state.currentPage;
    let currentPageData = counterData[clickedItem].filter(
      (counter) => counter.id >= currentPage && counter.id < currentPage + 6
    );
    console.log("currentPageData currentPageData", currentPageData);
    this.setState({ currentPageData: currentPageData });
    this.setState({ currentPaginationData: {} });
    this.setPage(clickedItem);
  };
  // Page onclick handling function
  handlePageclick = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
    let pageCount = 0;
    if (pageNumber != 1) {
      pageCount = pageNumber * 3 + pageNumber;
    } else {
      pageCount = 1;
    }
    console.log("pageCount----------------", pageCount);
    let currentPageData = this.state.data.filter(
      (counter) => counter.id >= pageCount && counter.id < pageCount + 6
    );
    this.setState({ currentPageData: currentPageData });
    console.log("---------------------------------", currentPageData);
  };
  handleDelete = (addedCartCounter) => {
    // Update the cart price after deleting an item from the cart
    let deletedCartValue = parseFloat(
      addedCartCounter.value * addedCartCounter.price
    );
    let totalPrice = this.state.totalPrice - deletedCartValue;
    this.setState({ totalPrice: totalPrice });
    // Delete from the addedCart count
    this.state.addedCart
      .filter((c) => c.id === addedCartCounter.id && c.value >= 1)
      .map((b) => {
        const countersCount = this.state.cartCount--;
        this.setState({ countersCount });
      });
    // Delete from the addCart state
    let addedCounters = this.state.addedCart.filter(
      (c) => c.id !== addedCartCounter.id
    );
    this.setState({ addedCart: addedCounters });

    this.setState((prevState) => ({
      counters: prevState.currentPageData.map((item) =>
        item.id === addedCartCounter.id
          ? Object.assign(item, { value: 1, addedToCart: false })
          : item
      ),
    }));
  };
  // Add to cart handling functionality
  handleAddCartClick = (counter) => {
    this.state.currentPageData
      .filter((c) => c.id === counter.id && c.value >= 1)
      .map((b) => {
        const countersCount = this.state.cartCount++;
        this.setState({ countersCount });
        // to keep track of added array
        this.setState((prevState) => ({
          addedCart: [...prevState.addedCart, b],
        }));
      });
    // to update addTocart flag to show hide the cart or card components
    const counters = [...this.state.currentPageData];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].addedToCart = true;
    console.log(counters);
    this.setState({ currentPageData: counters });
  };
  // Handling the increment function
  handleIncrement = (counter) => {
    console.log("addedCart", this.state.currentPageDatata);
    if (!this.state.cartClickFlag) {
      const counters = [...this.state.currentPageData];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      console.log("addedCart", counters);
      this.setState({ currentPageData: counters });
    } else {
      //If quantity is incremented in cart display page
      const newItemQuantity = counter.value + 1;
      this.setState((prevState) => ({
        addedCart: prevState.addedCart.map((item) =>
          item.id === counter.id
            ? Object.assign(item, { value: newItemQuantity })
            : item
        ),
      }));
      // Update the cart price after incrementing the item in the cart
      const totalPrice = this.state.totalPrice + counter.price;
      this.setState({ totalPrice: totalPrice });
      // this.setState({ addedCart });
    }
  };
  // Handling the decrement function
  handleDecrement = (counter) => {
    if (!this.state.cartClickFlag) {
      const counters = [...this.state.currentPageData];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      if (counters[index].value !== 0) {
        counters[index].value--;
        this.setState({ currentPageData: counters });
      } else if (counters[index].value === 1) {
        // to update addTocart flag
        counters[index].addedToCart = false;
        this.setState({ currentPageData: counters });
      }
    } else {
      //If quantity is incremented in cart display page
      const newItemQuantity = counter.value - 1;
      this.setState((prevState) => ({
        addedCart: prevState.addedCart.map((item) =>
          item.id === counter.id
            ? Object.assign(item, { value: newItemQuantity })
            : item
        ),
      }));
      // Update the cart price after decrementing the item in the cart
      const totalPrice = this.state.totalPrice - counter.price;
      this.setState({ totalPrice: totalPrice });
    }
  };
  // Search filter handling function
  handleSearchChange = (e) => {
    this.setState({ searchFilter: e.target.value });
    const { searchFilter } = this.state;
    const filteredCounters = this.state.currentPageData.filter((counter) => {
      console.log("Counter", searchFilter);
      return (
        counter.title.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
      );
    });
    console.log(filteredCounters, "searchFilteredData");
    this.setState({ searchFilteredData: filteredCounters });
  };

  // On cart click handling function
  handleCartClick = (cartFlag) => {
    // set the cart flag based on the cart button click to show and hide the components
    {
      cartFlag
        ? this.setState({ cartClickFlag: true })
        : this.setState({ cartClickFlag: false });
    }
    // calculateCartPrice(this.state.addedCart);
    //Calculation part of the prices on click of the cart button taking the values from the addedCart state object
    let quantityPrice = 0;
    // Looping through the cart added object and summing up the total based on on the total items and quantity
    this.state.addedCart.map((i) => {
      quantityPrice += parseFloat(i.value * i.price);
      return quantityPrice;
    });

    // updating  the state variable price count
    const totalPrice = this.state.totalPrice + quantityPrice;
    console.log("Total Price", totalPrice);
    this.setState({ totalPrice });
    // to update addTocart flag to show hide the cart or card components
    var updateAddedCart = this.state.addedCart.map((b) => {
      if (b.value >= 1) {
        b.addedToCart = true;
      }
    });
    this.setState({ updateAddedCart });
  };

  render() {
    // To check if the object is empty(Generic)
    Object.prototype.isEmpty = function () {
      for (var key in this) {
        if (this.hasOwnProperty(key)) return false;
      }
      return true;
    };
    // Object.prototype.calculateCartPrice = function (addedCart) {
    //   //Calculation part of the prices on click of the cart button taking the values from the addedCart state object
    //   let quantityPrice = 0;
    //   // Looping through the cart added object and summing up the total based on on the total items and quantity
    //   addedCart.map((i) => {
    //     quantityPrice += parseFloat(i.value * i.price);
    //     return quantityPrice;
    //   });

    //   // updating  the state variable price count
    //   const totalPrice = this.state.totalPrice + quantityPrice;
    //   console.log("Total Price", totalPrice);
    //   this.setState({ totalPrice });
    // };
    // Search filter functionality
    // const { searchFilter } = this.state;
    // const filteredCounters = {};
    // const filteredCounters = this.state.data.filter((counter) => {
    //   console.log("Counter", searchFilter);
    //   return (
    //     counter.title.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1
    //   );
    // });
    // console.log("filteredCounters---------", filteredCounters, searchFilter);
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.cartCount}
          // totalCounters={this.state.counters.filter((c) => c.value > 0).length}
          onCartClick={this.handleCartClick}
          onSearchChange={this.handleSearchChange}
          onCategoryClick={this.handleCategoryClick}
          cartClickStatus={this.state.cartClickFlag}
          categoryClick={this.state.categoryClick}
          itemCategories={this.state.itemCategories}
          onCategoryItemClick={this.handleItemCategoryClick}
        />
        <main className="container-fluid" style={this.parentGrid}>
          {this.state.cartClickFlag ? (
            <CartComponent
              cartClickFlag={this.state.cartClickFlag}
              onCartClick={this.handleCartClick}
              onIncrementHandle={this.handleIncrement}
              addedCart={this.state.addedCart}
              cartCount={this.state.cartCount}
              totalPrice={this.state.totalPrice}
              onIncrementHandle={this.handleIncrement}
              onDecrementHandle={this.handleDecrement}
              onDeleteHandle={this.handleDelete}
            />
          ) : (
            <React.Fragment>
              <Counters
                // pass the state based on search filter
                dataCheck={
                  Object.keys(this.state.searchFilteredData).length == 0 &&
                  this.state.searchFilter == ""
                    ? this.state.currentPageData
                    : this.state.searchFilteredData
                }
                onAddCartClick={this.handleAddCartClick}
                // onDeleteHandle={this.handleDelete}
                onIncrementHandle={this.handleIncrement}
                onDecrementHandle={this.handleDecrement}
                onResetHandle={this.handleReset}
              />
              <Pagination
                pageSize={this.state.currentPaginationData}
                onPageClick={this.handlePageclick}
                currentPage={this.state.currentPage}
              />
            </React.Fragment>
          )}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
