import React from "react";
import useGlobalContext from "../hooks/useGlobalContext";
import useCollection from "../hooks/useCollection";
import { Link } from "react-router-dom";
function BooksList() {
  let { data } = useCollection();

  return (
    <>
      {!data && (
        <h3 className="text-center mb-10 mt-5 font-bold">
          Loading ...{" "}
          <span className="loading loading-spinner loading-md ">Kitchen</span>
        </h3>
      )}
      
    </>
  );
}

export default BooksList;
