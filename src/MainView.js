import React from "react";
import { Body } from "./components/body/Body";
import { Sidebar } from "./components/sidebar/Sidebar";
import "./MainView.css";

export const MainView = (props) => {
  return !props.isLoading ? (
    <p>Loading....</p>
  ) : (
    <div className="container">
      <div className="grid">
        <Sidebar
          getAPI={props.getAPI}
          dropDown={props.dropDown}
          setDropDown={props.setDropDown}
        />

        <Body
          isLoading={props.isLoading}
          getAPI={props.getAPI}
          setGetAPI={props.setGetAPI}
          pagination={props.pagination}
          setPagination={props.setPagination}
          currentPage={props.currentPage}
          totalPerPage={props.totalPerPage}
          setTotalPerPage={props.setTotalPerPage}
        />
      </div>
    </div>
  );
};
