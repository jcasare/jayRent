const initialState = {
  cars: [
    {
      id: 1,
      name: "BMW",
      model: "X5",
      year: 2019,
      color: "Black",
      price: 150000,
    },
    {
      id: 2,
      name: "Mercedes",
      model: "C200",
      year: 2020,
      color: "White",
      price: 120000,
    },
    {
      id: 3,
      name: "Toyota",
      model: "Camry",
      year: 2018,
      color: "Red",
      price: 100000,
    },
  ],
};

export const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
