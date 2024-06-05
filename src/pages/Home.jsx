import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "../redux/actions/cars.action";

function Home() {
  const { cars } = useSelector((state) => state.carsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCars());
  }, []);
  return (
    <div className="">
      <h1 className="text-h1 font-bold flex justify-center">Home Page</h1>
      <h1>Car array length is : {cars.length}</h1>
    </div>
  );
}

export default Home;
