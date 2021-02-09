import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { pageSize, onPageClick, currentPage } = this.props;
    return (
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            href="javascript:void(0)"
            onClick={() => {
              pageSize.length != currentPage
                ? onPageClick(currentPage + 1)
                : void 0;
            }}
          >
            <i class="fa fa-angle-double-left"></i>
          </a>
        </li>
        <li className={currentPage == 1 ? "page-item disabled" : "page-item"}>
          <a
            className="page-link"
            href="javascript:void(0)"
            onClick={() => {
              currentPage != 1 ? onPageClick(currentPage - 1) : void 0;
            }}
          >
            Previous
          </a>
        </li>
        {pageSize.map((pages) => (
          <li
            className={
              currentPage == pages.val ? "page-item active" : "page-item"
            }
          >
            <a
              className="page-link"
              href="javascript:void(0)"
              onClick={() => onPageClick(pages.val)}
            >
              {pages.val}
            </a>
          </li>
        ))}
        <li
          className={
            pageSize.length != currentPage ? "page-item" : "page-item disabled"
          }
        >
          <a
            className="page-link"
            href="javascript:void(0)"
            onClick={() => {
              pageSize.length != currentPage
                ? onPageClick(currentPage + 1)
                : void 0;
            }}
          >
            Next
          </a>
        </li>
        <li className={pageSize >= 10 ? "page-item" : "page-item disabled"}>
          <a
            className="page-link"
            href="javascript:void(0)"
            onClick={() => {
              pageSize.length != currentPage
                ? onPageClick(currentPage + 1)
                : void 0;
            }}
          >
            <i class="fa fa-angle-double-right"></i>
          </a>
        </li>
      </ul>
    );
  }
}

export default Pagination;
