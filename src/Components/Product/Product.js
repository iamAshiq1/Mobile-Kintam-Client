import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Product = (props) => {
  const { _id, name, img, price } = props.product;

  return (
    <>
      <Fade>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 my-4">
          <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Text style={{ color: "#404040", fontWeight: "bold" }}>
                {name}
              </Card.Text>
              <Card.Text
                className="text-decoration-underline fw-bold"
                style={{ color: "#F75904" }}
              >
                {price}
              </Card.Text>
              <Link to={`/Details/${_id}`}>
                <Button
                  className="btn py-1 px-2  btn-outline-primary"
                  variant="primary"
                >
                  Buy Now
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </div>
      </Fade>
    </>
  );
};

export default Product;
