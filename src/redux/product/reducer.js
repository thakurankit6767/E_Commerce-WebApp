import {
  STORE_DATA,
  ADD_CART,
  DEC_ITEM,
  DELETE_CART,
  INC_ITEM,
  REMOVE_ALL,
  ITEM_CART,
  SEARCH_DATA,
} from "./action";

const initState = {
  data: [],
  cart: [],
  add: [],
  remove: [],
  search:"",
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case STORE_DATA:
      return { ...state, data: payload };


    case ADD_CART:
      let arr = [];
      let Uobj = {};
      for (let i in state.cart) {
        let objid = state.cart[i]["id"];
        Uobj[objid] = state.cart[i];
      }
      if (Uobj[payload.id] === undefined) {
        Uobj[payload.id] = payload;
        Uobj[payload.id]["quantity"] = 1;
      } else {
        let quan = Uobj[payload.id]["quantity"];
        Uobj[payload.id]["quantity"] = quan + 1;
      }
      for (let i in Uobj) {
        arr.push(Uobj[i]);
      }
      console.log(arr);
      return { ...state, cart: arr };

    case ITEM_CART:
      var itemcart = [...payload];
      return { ...state, cart: itemcart };

      case SEARCH_DATA:
        return { ...state, search: payload };
    
      case INC_ITEM:
      var Increm = state.cart.map((elem) => {
        if (elem.id === payload) {
          let abc = elem;
          abc["quantity"] = abc["quantity"] + 1;
          return abc;
          
        } else {
          return elem;
        }
      });
      console.log("cartincre", Increm);
      return { ...state, cart: [...Increm] };
    
      case DEC_ITEM:
      var decre = state.cart.map((elem) => {
        if (elem.id === payload) {
          let abc = elem;
          abc["quantity"] = abc["quantity"] - 1;
          return abc;
        } else {
          return elem;
        }
      });
      console.log("cartdec", ...decre);
      return { ...state, cart: [...decre] };

    case DELETE_CART:
      var zxcv = state.cart.filter((elem) => {
        if (elem.id !== payload) {
          return elem;
        }
      });
      

      return { ...state, cart: [...zxcv] };
    
    
      case REMOVE_ALL:
      return { ...state, cart: [] };
    default:
      return state;
  }
};
