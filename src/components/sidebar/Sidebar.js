import React from "react";
import { GoTriangleDown } from "react-icons/go";
import uuid from "react-uuid";

export const Sidebar = ({ dropDown, setDropDown, getAPI }) => {
  const showProductDropDown = (e) => {
    setDropDown(!dropDown);
  };
  const showStateDropDown = (e) => {
    setDropDown(!dropDown);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <input type="text" placeholder="Filter" />

        <div className="dropdown">
          <h4>Product</h4>
          <span>
            <GoTriangleDown onClick={showProductDropDown}>
              {dropDown ? (
                <ul>
                  <li>hello</li>
                </ul>
              ) : null}
            </GoTriangleDown>
          </span>
        </div>
        <div className="dropdown">
          <h4>State</h4>
          <span>
            <GoTriangleDown onClick={showStateDropDown} />
            {dropDown ? (
              <ul>
                {getAPI.map((get) => (
                  <li key={get.date}>{get.address.state}</li>
                ))}
              </ul>
            ) : null}
          </span>
        </div>
        <div className="dropdown">
          <h4>City</h4>
          <span>
            <GoTriangleDown />
            {dropDown ? (
              <ul>
                {getAPI.map((get) => (
                  <li key={get.date}>{get.address.city}</li>
                ))}
              </ul>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
};
