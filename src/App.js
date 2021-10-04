import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AdminRoute from "./routes/AdminRoute";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import AdminLayout from "./layouts/AdminLayout";
import ErrorBoundary from "./components/ErrorBoundary";

// import Login from "./modules/Auth/pages/Login";
// import Register from "./modules/Auth/pages/Register";
// import HomePage from "./modules/HomePage/pages/HomePage";
// import MovieDetails from "./modules/MovieDetails/pages/MovieDetails";
// import MovieManagement from "./modules/MovieManagement/pages";

// Sử dụng kĩ thuật lazyload
const Login = lazy(() => import("./modules/Auth/pages/Login"));
const Register = lazy(() => import("./modules/Auth/pages/Register"));
const HomePage = lazy(() => import("./modules/HomePage/pages/HomePage"));
const MovieDetails = lazy(() =>
  import("./modules/MovieDetails/pages/MovieDetails")
);
const MovieManagement = lazy(() => import("./modules/MovieManagement/pages"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Switch>
            <Route exact path={["/", "/movie/:movieId"]}>
              <MainLayout>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route path="/movie/:movieId">
                    <MovieDetails />
                  </Route>
                </Switch>
              </MainLayout>
            </Route>

            <Route exact path={["/login", "/register"]}>
              <AuthLayout>
                <Switch>
                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                </Switch>
              </AuthLayout>
            </Route>

            {/* C1: Khai báo tất cả routes của 1 module ở App */}
            {/* <AdminRoute exact path="/admin/movie">
          <MovieList />
        </AdminRoute>
        <AdminRoute path="/admin/movie/add">
          <AddMovie />
        </AdminRoute>
        <AdminRoute path="/admin/movie/update">
          <UpdateMovie />
        </AdminRoute> */}

            {/* C2: Chỉ khai báo 1 routes, còn lại dùng nested router để khai báo bên trong module */}

            <AdminRoute path="/admin">
              <AdminLayout>
                <Switch>
                  <Route path="/admin/movie">
                    <MovieManagement />
                  </Route>

                  <Route path="/admin/user">
                    {/* <UserManagement /> */}
                    <h1>User Admin</h1>
                  </Route>
                </Switch>
              </AdminLayout>
            </AdminRoute>

            <Route>
              {/* <PageNotFound /> */}
              <h1>Page Not Found</h1>
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
