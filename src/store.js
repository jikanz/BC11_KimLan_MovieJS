// import { createStore, applyMiddleware, compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import banner from "./modules/HomePage/slices/bannerSlice";
import movie from "./modules/HomePage/slices/movieSlice";
import cinema from "./modules/HomePage/slices/cinemaSlice";
import cinemas from "./modules/HomePage/slices/diaChiSlice";
import movieDetails from "./modules/MovieDetails/reducers/movieDetails";
import auth from "./modules/Auth/reducers/auth";
import movieManagement from "./modules/MovieManagement/reducers/movieManagement";

// const configurationStore = () => {
//   // Nếu cần cấu hình thêm, ta có thể cấu hình ở đây

//   // Setup middleware
//   const middlewares = applyMiddleware(thunk);

//   const composeEnhancers =
//     typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//       ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//           // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//         })
//       : compose;

//   const store = createStore(rootReducer, composeEnhancers(middlewares));

//   return store;
// };

// export default configurationStore;

const configurationStore = () => {
  // Mặc định redux toolkit đã bao gồm redux và redux-thunk và redux-devtool
  const store = configureStore({
    // Tự động combine các child reducers
    reducer: {
      auth,
      movie,
      movieDetails,
      movieManagement,
      banner,
      cinema,
      cinemas,
    },
  });

  return store;
};

export default configurationStore;
