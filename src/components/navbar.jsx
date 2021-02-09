import React, { Component } from "react";
import SearchElement from "./searchbar";
class Navbar extends Component {
  rightStyles = {
    float: "right",
  };

  render() {
    const {
      totalCounters,
      onCategoryClick,
      categoryClick,
      onCartClick,
      cartClickStatus,
      itemCategories,
      onCategoryItemClick,
    } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="javascript:void(0)">
          Amphibian
        </a>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navBarCollapseContent"
          aria-controls="navBarCollapseContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse" id="navBarCollapseContent"> */}
        <div className="container-fluid" id="navBarCollapseContent">
          <ul className="navbar-nav mr-auto">
            <li
              className={cartClickStatus ? "nav-item active" : "nav-item"}
              disabled={totalCounters > 0 ? false : true}
            >
              <a
                className="nav-link"
                href="javascript:void(0)"
                onClick={() => {
                  totalCounters > 0 ? onCartClick(true) : void 0;
                }}
              >
                <i className="fa fa-shopping-cart"></i> Cart {totalCounters}
              </a>
            </li>
            {!cartClickStatus ? (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  onClick={() => onCategoryClick(!categoryClick)}
                >
                  Categories
                </a>
                <div
                  className={
                    categoryClick ? "dropdown-menu d-block" : "dropdown-menu"
                  }
                >
                  {itemCategories.map((items) => (
                    <a
                      key={items.id}
                      onClick={() =>
                        onCategoryItemClick(!categoryClick, items.value)
                      }
                      className="dropdown-item"
                      href="#"
                    >
                      {items.title}
                    </a>
                  ))}
                </div>
              </li>
            ) : (
              <div></div>
            )}
            {/* <li className="nav-item">
              <a className="nav-link" href="javascript:void(0)">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="javascript:void(0)">
                Disabled
              </a>
            </li> */}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search By Name"
              onChange={(event) => this.props.onSearchChange(event)}
            />
          </form>
        </div>
      </nav>
    );
  }
}
export default Navbar;
