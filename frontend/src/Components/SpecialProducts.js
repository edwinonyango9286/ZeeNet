import React from "react";
import ReactStars from "react-rating-stars-component";
import watchImage from "../images/watch.jpg";
import{Link} from "react-router-dom"


const SpecialProducts = (props) => {
  
  
  return (
 
    
<div className={`col-lg-12 col-md-3 col-sm-12`} style={{
  paddingBottom:"5const { grid } = props;%",
}}>
  <div className="special-product-card">
    <div className="d-flex justify-content-between">
      <div className="mb-2">
        <img src={watchImage} className="img-fluid" alt="watch" />
      </div>
      <div className="special-product-content px-2">
        <h5 className="brand mb-1">Havels</h5>
        <h6 className="title">Heavenly Horizons: A Celestial Timepiece</h6>
        <ReactStars
          count={5}
          size={20}
          value={4}
          edit={false}
          activeColor="#ffd700"
        />
        <p className="price">
          <span className="red-price">Ksh:1000/-</span>&nbsp;
          <strike>Ksh:1400/-</strike>
        </p>
        <div className="discount-till d-flex align-items-center gap-2">
          <p className="mb-0">
            <b>5</b> days
          </p>
          <div className="d-flex gap-2">
            <span className="badge rounded-circle p-2 bg-danger">1</span>:
            <span className="badge rounded-circle p-2 bg-danger">1</span>:
            <span className="badge rounded-circle p-2 bg-danger">1</span>
          </div>
        </div>
        <div className="prod-count my-2">
          <p className="mb-1">Products: 5</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "25%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <Link to="" className="button">Add To Cart</Link>
      </div>
    </div>
  </div>
</div>

  );
};

export default SpecialProducts;
