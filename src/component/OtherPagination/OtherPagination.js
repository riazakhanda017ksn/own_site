import React from "react";
import { Link } from "react-router-dom";

const OtherPagination = ({ postPerPage, totalPosts, paginate }) => {
  console.log(
    "postPerPage, totalPosts, paginate",
    postPerPage,
    totalPosts,
    paginate
  );
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="pagination">
      {pageNumber.map((number) => (
        <li>
          <a onClick={() => paginate(number)}>{number}</a>
        </li>
      ))}
      <span className="next">.......next</span>
    </div>
  );
};

export default OtherPagination;
