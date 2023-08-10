import React, { useState } from "react";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import watch1 from "../images/watch-1.avif";
import ReactStars from "react-rating-stars-component";
import gr1 from "../images/gr.svg";
import grid2 from "../images/gr2.svg";
import grid3 from "../images/gr3.svg";
import grid4 from "../images/gr4.svg";
import ProductCard from "../Components/ProductCard";
import Colors from "../Components/Colors";
import Container from "../Components/Container";
const Store = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Store"}/>
      <BreadCrumb title="Store"/>
      <Container class1="store-wrapper home-wrapper-2 ">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title"> Filter By</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label " htmlFor="">
                        In Stock (21)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label " htmlFor="">
                      
                        Out of Stock (1)
                      </label>
                    </div>
                  </div>

                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput"
                        placeholder="from"
                      />
                      <label htmlFor="floatingInput">From</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="to"
                      />
                      <label htmlFor="floatingInput1">To</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <Colors/>
                  </div>
                  <h5 className="sub-title">Size</h5>

                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label " htmlFor="">
                        S (10)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label " htmlFor="">
                        M (13)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label " htmlFor="">
                        L (10)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label " htmlFor="">
                        XL (5)
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label " htmlFor="">
                        XXL (5)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphones
                    </span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptops
                    </span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Oppo
                    </span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Speakers
                    </span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tablets
                    </span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Vivo
                    </span>

                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Wire
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div>
                  <div className="random-product mb-3 d-flex">
                    <div className="w-50">
                      <img src={watch1} className="img-fluid" alt="watch"></img>
                    </div>

                    <div className="w-50">
                      <h5>
                        Kids Headphones Bulk 10 Pack Multi Colored For Students
                      </h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>Ksh:1000/-</b>
                    </div>
                  </div>

                  <div className="random-product d-flex">
                    <div className="w-50">
                      <img src={watch1} className="img-fluid" alt="watch"></img>
                    </div>

                    <div className="w-50">
                      <h5>APPLE Watch Series 2 – 42 Mm Stainless Steel Case</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <b>Ksh:1000/-</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center grid">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block " style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">featured</option>
                      <option value="best-selling" defaultValue="best-selling">
                        Best Selling
                      </option>
                      <option value="title-ascending">
                        Alphabetically,A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically,Z-A
                      </option>
                      <option value="Price-ascending">
                        Price, Low to High
                      </option>
                      <option value="price-descending">
                        Price,High to Low
                      </option>
                      <option value="created-ascending">
                        Date, Old to New
                      </option>
                      <option value="created-descending">
                        Date,New to Old
                      </option>
                    </select>
                  </div>

                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0"> 21 Products</p>
                    <div className="d-flex gap-10 align-items-center">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src={grid4}
                        className="img-fluid"
                        alt="grid4"
                      ></img>
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src={grid3}
                        className="img-fluid"
                        alt="grid3"
                      ></img>
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src={grid2}
                        className="img-fluid"
                        alt="grid2"
                      ></img>
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src={gr1}
                        className="img-fluid"
                        alt="grid"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap" > 
                <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
      </Container>
    </>
  );
};

export default Store;
