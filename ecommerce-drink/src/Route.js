import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import WithAuth from "./WithAuth";

const Home = React.lazy(() => import("./components/pages/home"));
const Login = React.lazy(() => import("./components/pages/accounts/Login"));
const Register = React.lazy(() =>
	 import("./components/pages/accounts/Register")
);
const Detail = React.lazy(() => import("./components/pages/details"));
const Cart = React.lazy(() => import("./components/pages/cart"));
const Checkout = React.lazy(() => import("./components/pages/checkout"));
const Orders = React.lazy(() => import("./components/pages/orders"));
const OrdersDetails = React.lazy(() =>
	 import("./components/pages/ordersDetails")
);
const Admin = React.lazy(() => import("./components/pages/admin"));
const Profile = React.lazy(() => import("./components/pages/accounts/Profile"));
const Edit = React.lazy(() => import("./components/pages/accounts/Edit"));

export default function Routes() {
	 return (
			<Suspense
				 fallback={
						<div className="box-loader">
							 <div className="loader"></div>
						</div>
				 }
			>
				 <Switch>
						<Route path="/" component={Home} exact />
						<Route path="/login" component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/p/:wineName/:id" component={Detail} />
						<Route path="/cart" component={Cart} />
						<Route path="/checkout" component={Checkout} />
						<Route path="/purchase" component={Orders} />
						<Route path="/orders-details/:id" component={OrdersDetails} />
						<Route path="/admin" component={() => WithAuth(Admin)} />
						<Route path="/profile" component={Profile} />
						<Route path="/edit" component={Edit} />
				 </Switch>
			</Suspense>
	 );
}
