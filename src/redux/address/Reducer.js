import { ADD_DATA } from "./Action";

const initState = {
  AddressDataData: [],
};

export const AddressReducer = (store = initState, { type, payload }) => {
  console.log("Addressdata", store);
  switch (type) {
    case ADD_DATA:
      return { ...store, AddressDataData: payload };

    default:
      return store;
  }
};
