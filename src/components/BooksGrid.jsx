import React from "react";
import useCollection from "../hooks/useCollection";
import useGlobalContext from "../hooks/useGlobalContext";
import { Link } from "react-router-dom";
function BooksGrid() {
  let { data } = useCollection();

  return (
    <>
      {!data && (
        <h3 className="text-center mb-10 mt-5 font-bold">
          Loading ...{" "}
          <span className="loading loading-spinner loading-md ">Kitchen</span>        
        </h3>
         
      )}
  <div className="flex items-center justify-center min-h-screen card w-300 h-300 ">
      <div className="card w-300 h-300 mt-3">
        <img
          src="https://media.express24.uz/r/848/1500/imhjcyC-3y-jRE5JmLriB.jpg"
          alt=""
        />
      </div>
      <div className="card w-400 h-400 mt-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ35ZVhEooPGcwJyhBKrCzhoBZKPsXnQll4gXnCnAKz-vcg7xPUX59Zc5VCu1GQzjN5t9o&usqp=CAU"
          alt=""
          style={{ width: '300px' }} 
        />
      </div>
      <div className="card w-400 h-400 mt-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2E_E2gYYJB8u_GssAL3T4QSqZsuTuaHrnUfNsEtpdg2SYdGFVLB1so_UegssUvsX-WgM&usqp=CAU"
          alt=""
          style={{ width: '300px' }} 
        />
      </div>
    </div>
    </>
  );
}

export default BooksGrid;



