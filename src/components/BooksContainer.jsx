import useCollection from "../hooks/useCollection";
import BooksGrid from "./BooksGrid";
import BooksList from "./BooksList";
import React, { useState } from "react";
import { HiViewGrid, HiViewList } from "react-icons/hi";
function BooksContainer() {
  let [grid, setGrid] = useState("grid");
  let activeGrid = () => {
    return grid == "grid" ? "bg-primary" : "bg-green";
  };
  let activeList = () => {
    return grid == "grid" ? " bg-green" : "bg-primary";
  };
  let { data } = useCollection();

  return (
    <>
      <div className="flex justify-between items-center mt-10 mb-5 px-5">
        <h1 className="text-3xl font-bold  ">Dishes {data && data.length}</h1>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setGrid("grid");
            }}
            className={`btn btn-outline   ${activeGrid()}  `}
          >
            <HiViewGrid />
          </button>
          <button
            onClick={() => {
              setGrid("list");
            }}
            className={`btn btn-outline  ${activeList()}  `}
          >
            <HiViewList className=" " />
          </button>
        </div>
      </div>
      <hr />
      {grid == "grid" ? <BooksGrid /> : <BooksList />}
    </>
  );
}

export default BooksContainer;
