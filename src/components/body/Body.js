import React from "react";
import { BsChevronRight } from "react-icons/bs";

export const Body = ({
  getAPI,
  setGetAPI,
  totalPerPage,
  setPagination,
  setTotalPerPage,
  pagination,
  currentPage,
  pageNumbers,
}) => {
  return (
    <div className="body">
      <div className="first-item">
        <h2>Edvora</h2>
        <p>Products</p>
      </div>
      <h5>Product Name</h5>
      <div className="body-wrapper">
        <div className="body-content">
          {currentPage.map((get, index) => (
            <div key={get.uuid} className="body-content-item">
              <img src={get.image} alt="" />
              <div>
                <h4>Product: {get.product_name}</h4>
                <p>Brand name: {get.brand_name}</p>
                <p>${get.price}</p>
                <p>Date: {get.date}</p>
              </div>
              <div>
                <p>State: {get.address.state} </p>
                <p>City: {get.address.city} </p>
              </div>
            </div>
          ))}
        </div>
        <BsChevronRight className="icon" />
      </div>
      <h5>Product Name</h5>
      <div className="body-wrapper">
        <div className="body-content">
          {currentPage.map((get, index) => (
            <div className="body-content-item">
              <img src={get.image} alt="" />
              <div>
                <h4>Product: {get.product_name}</h4>
                <p>Brand name: {get.brand_name}</p>
                <p>${get.price}</p>
                <p>Date: {get.date}</p>
              </div>
              <div>
                <p>State: {get.address.state} </p>
                <p>City: {get.address.city} </p>
              </div>
            </div>
          ))}
        </div>
        <BsChevronRight className="icon" />
      </div>
    </div>
  );
};
