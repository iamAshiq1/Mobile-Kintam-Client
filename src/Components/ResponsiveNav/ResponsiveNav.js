import Button from "@restart/ui/esm/Button";
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./nav.css";
const ResponsiveNav = () => {
  const { logout, user, admin } = useAuth();

  return (
    <div style={{ backgroundColor: "rgb(220, 220, 220)" }}>
      <Navbar
        style={{ padding: "5px", borderBottom: "2px solid royalblue" }}
        collapseOnSelect
        expand="lg"
      >
        <Navbar.Brand style={{fontFamily: "cursive"}} className='fw-bolder p-0 '><span className='text-danger' >MOBILE</span>-<span className='text-primary'>KINTAM</span ></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-start me-2">
          <Nav.Link className="link" as={Link} to="/Home">
            Home
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Products">
            Products
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Reviews">
            Reviews
          </Nav.Link>
          <Nav.Link className="link" as={Link} to="/Order">
            My Orders
          </Nav.Link>
          {admin && (
            <>
              <Nav.Link className="link" as={Link} to="/ManageOrders">
                Manage Orders
              </Nav.Link>
              <Nav.Link className="link" as={Link} to="/ManageProducts">
                Manage Products
              </Nav.Link>

              <Nav.Link className="link" as={Link} to="/MakeAdmin">
                Make Admin
              </Nav.Link>
            </>
          )}
          {user?.email ? (
            <>


              <Button
                className="btn ms-1"
                style={{
                  backgroundColor: "#DC3545",
                  color: "white",
                  padding: "4px 8px",
                }}
                onClick={logout}
                variant="light"
              >
                Logout
              </Button> <br/>
              <span
                style={{
                  color: "#DC3545",
                  marginLeft: "8px",
                  fontWeight: "bolder",
                }}
              >
                {user.displayName ? "Hey:" : ""}{" "}
              </span>
              <h6 className="text-success text-decoration-underline fw-bold mt-2 ms-1">
                {user?.displayName}
              </h6>
            </>
          ) : (
            <Nav.Link
              as={Link}
              to="/Login"
              className="link ms-2 rounded"
              style={{ backgroundColor: "#404DB6", color: "white" }}
              variant="light"
            >
              Log in
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default ResponsiveNav;
