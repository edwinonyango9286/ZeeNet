import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/products/productSlice";

const Store = () => {
  const [grid, setGrid] = useState(4);
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product.products);
  useEffect(() => {
    dispatch(getAllProducts())
  }, []);


  return (
    <>
      <Meta title={"Store"} />
      <BreadCrumb title="Store" />
      <Container class1="store-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12 d-flex gap-10">
            <div className="col-3 d-none d-md-block d-lg-block d-xl-block d-xxl-block">
              <div className="filter-card mb-3 ">
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
              <div className="filter-card mb-2">
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
                    <Colors />
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
              <div className="filter-card mb-2">
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

              <div className="filter-card mb-2">
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

            <div className=" col-12 col-lg-9 col-md-9 col-xl-9 col-xxl-9">
              <div className="filter-sort-grid mb-2 mt-2">
                <div className="d-flex justify-content-between align-items-center grid">
                  <div className="d-flex d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                    <div>
                      <p className="mb-0 d-block " style={{ width: "100px" }}>
                        Sort By:
                      </p>
                    </div>

                    <div>
                      <select
                        name=""
                        className="form-control form-select"
                        id=""
                      >
                        <option value="manual" className="sort-text">
                          featured
                        </option>
                        <option
                          value="best-selling"
                          defaultValue="best-selling"
                          className="sort-text"
                        >
                          Best Selling
                        </option>
                        <option value="title-ascending" className="sort-text">
                          Alphabetically,A-Z
                        </option>
                        <option value="title-descending" className="sort-text">
                          Alphabetically,Z-A
                        </option>
                        <option value="Price-ascending" className="sort-text">
                          Price, Low to High
                        </option>
                        <option value="price-descending" className="sort-text">
                          Price,High to Low
                        </option>
                        <option value="created-ascending" className="sort-text">
                          Date, Old to New
                        </option>
                        <option
                          value="created-descending"
                          className="sort-text"
                        >
                          Date,New to Old
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-75 gap-lg-10 gap-md-10 gap-lg-10 gap-xl-10 gap-xxl-10 ">
                    <span className="mb-0"> 21 Products</span>
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

              <div className="products-list pb-2">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard
                    data={productState ? productState : []}
                    grid={grid}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Store;
