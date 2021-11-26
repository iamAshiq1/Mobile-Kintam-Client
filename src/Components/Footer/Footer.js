import React from "react";

const Footer = () => {
  return (
    <div
      className="row justify-content-evenly text-light"
      style={{
        backgroundColor: "black",
        marginTop: "150px",
        marginLeft: "1px",
        marginRight: "1px",
      }}>
      <div className="col-lg-3 col-6 my-3 text-start">
        <h5 className="mb-3 fw-bold text-danger">
          <span className="text-primary">Mobile</span> Kintam
        </h5>
        <p>
          No 71 Adesuwa Road GRA, Benin City, <br />
          Edo State. <br />
          3rd floor, Novare Central offices, <br />
          Shoprite Wuse Zone 8
        </p>
      </div>
      <div className="col-lg-2 col-6 my-3 text-start">
        <h5 className="mb-3">Let Us Help You</h5>
        <p className="text-decoration-underline">
          Your Account <br /> Your Orders <br /> Manage Your Content and Devices{" "}
          <br /> Help{" "}
        </p>
      </div>
      <div className="col-lg-2 col-6 my-3 text-start">
        <h5 className="mb-3">Contact US</h5>
        <p>
          <i className="fas fa-envelope"> Example@email</i>
          <br />
          <i className="fas fa-phone-alt mt-3"> +123456789</i> <br />
          <i className="fas fa-map-marker-alt mt-3"> Eagan, United State
          </i>
        </p>
      </div>
      <div className="col-lg-2 col-6 my-3 text-start">
        <h5 className="mb-3">SOCIAL</h5>
        <p>
          Facebook | Twitter
          <br />
          Instagram | Youtube
        </p>
      </div>
      <p className='mb-1' style={{ borderTop: "1px solid #FF8C00" }}>
       © 2016-2021 Mobile-Kintam.Com
      </p>
    </div>
  );
};

export default Footer;
