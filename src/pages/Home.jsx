import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  return (
    <div className="">
      <h1 className="text-h1 font-bold flex justify-center">Home Page</h1>
      <h1>Car array length is : {cars.length}</h1>
    </div>
  );
}

export default Home;
