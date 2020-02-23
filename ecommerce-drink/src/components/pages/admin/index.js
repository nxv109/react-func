import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./dashboard";
import Users from "./users";
import Categories from "./categories";
import Products from "./products";

export default function Admin() {
  return (
    <React.Fragment>
      <div className="container">
        <Switch>
          <Route exact path="/admin" component={Dashboard} />
          <Route path="/admin/users-manager" component={Users} />
          <Route path="/admin/categories-manager" component={Categories} />
          <Route path="/admin/products-manager" component={Products} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
