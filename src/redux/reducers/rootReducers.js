import { combineReducers } from "redux";
import postsReducers from "./postsReducers";
import detailsReducers from "./detailsReducers";

const rootReducers = combineReducers({
  posts: postsReducers,
  detailsCard: detailsReducers,
});

export default rootReducers;
