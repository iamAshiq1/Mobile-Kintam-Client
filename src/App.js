import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import ResponsiveNav from "./Components/ResponsiveNav/ResponsiveNav";
import Home from "./Components/Home/Home/Home";
import Products from "./Components/Products/Products";
import Details from "./Components/Product/Details";
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute'
import AddProduct from "./Components/AddProduct/AddProduct";
import Order from "./Components/Order/Order";
import Reviews from "./Components/Reviews/Reviews"
import ManageOrders from "./Components/Order/ManageOrders";
import Footer from "./Components/Footer/Footer";
import MakeAdmin from "./Components/MakeAdmin/MakeAdmin";
import ManageProducts from "./Components/ManageProducts/ManageProducts";
import NotFound from "./Components/NotFound/NotFound"
import UpdateOrder from "./Components/Order/UpdateOrder";


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <ResponsiveNav></ResponsiveNav>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/Home">
              <Home></Home>
            </Route>
            <Route path='/Products'>
              <Products></Products>
            </Route>
            <PrivateRoute path='/Order/Update/:id'>
              <UpdateOrder></UpdateOrder>
            </PrivateRoute>
            <PrivateRoute path='/Details/:productId'>
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path='/AddProduct'>
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path='/ManageProducts'>
              <ManageProducts></ManageProducts>
            </PrivateRoute>
            <PrivateRoute path='/MakeAdmin'>
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path='/Order'>
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path='/Reviews'>
              <Reviews></Reviews>
            </PrivateRoute>
            <PrivateRoute path='/ManageOrders'>
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route path="/Register">
              <Register></Register>
            </Route>
            <Router path='*'>
              <NotFound></NotFound>
            </Router>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
