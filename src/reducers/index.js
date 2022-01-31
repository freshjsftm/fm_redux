import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todoReducer";
import userReducer from './userReducer';

const rootReducer = combineReducers({
  counter: counterReducer,
  //state:reducer()
  todo: todoReducer,
  users: userReducer
})

export default rootReducer;