import React from "react";
import { Body } from "../body/Body";

export const Pagination = ({ totalPerPage, totalPages }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / totalPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <Body pageNumbers={pageNumbers} />
    </div>
  );
};
