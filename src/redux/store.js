
import { createStore,applyMiddleware,combineReducers} from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import { productReducer } from "./product/reducer";

import thunk from "redux-thunk";
const rootReducer=combineReducers({
    data : productReducer,
   
    
    
})
const store=createStore(rootReducer,composeWithDevTools( applyMiddleware(thunk)
));
export {store}