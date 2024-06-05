import axios from "axios";

export const getAllCars = () => async (dispatch) => {
  dispatch({
    type: "LOADING",
    payload: true,
  });

  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/api/cars`
    );
    dispatch({ type: "GET_ALL_CARS", payload: data });
    dispatch({ type: "LOADING", payload: false });
  } catch (error) {
    console.log(error);
    dispatch({ type: "LOADING", payload: false });
  }
};
