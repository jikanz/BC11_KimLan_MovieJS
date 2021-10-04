import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import MovieList from "./MovieList";
import AddMovie from "./AddMovie";
import UpdateMovie from "./UpdateMovie";

export default function MovieManagement() {
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <Switch>
      <Route exact path={path}>
        <MovieList />
      </Route>
      <Route exact path={`${path}/add`}>
        <AddMovie />
      </Route>
      <Route exact path={`${path}/update`}>
        <UpdateMovie />
      </Route>
    </Switch>
  );
}
