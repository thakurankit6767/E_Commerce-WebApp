
import { createStore,applyMiddleware,combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { productReducer } from "./product/reducer";
import { AddressReducer } from "./address/Reducer";
import thunk from "redux-thunk";
import { loginReducer } from "./signin/reducer";
const rootReducer=combineReducers({
    data : productReducer,
    AddressDataData : AddressReducer,
    login : loginReducer,
    
})
const store=createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk)
));
export {store}