import React, { useEffect, useState } from "react";
import Meta from "../Components/Meta";
import BreadCrumb from "../Components/BreadCrumb";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../Components/Container";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAProductFromCart,
  getUserCart,
  updatedCartProduct,
} from "../features/users/userSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [updatedProductDetails, setUpdatedProductDetails] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);

  const userCartState = useSelector((state) => state?.auth?.cartProducts);
  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  useEffect(() => {
    if (updatedProductDetails !== null) {
      dispatch(
        updatedCartProduct({
          cartItemId: updatedProductDetails?.cartItemId,
          quantity: updatedProductDetails?.quantity,
        })
      );
      setTimeout(() => {
        dispatch(getUserCart());
      }, 200);
    }
  }, [updatedProductDetails]);

  const deleteACartProduct = async (id) => {
    await dispatch(deleteAProductFromCart(id));
    dispatch(getUserCart());
  };

  useEffect(() => {
    let sum = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      sum =
        sum +
        Number(userCartState[index]?.quantity) * userCartState[index]?.price;
      setTotalAmount(sum);
    }
  }, [userCartState]);

  return (
    <>
      <Meta title={"Cart"} />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="crat-col-4">Total</h4>
            </div>

            {userCartState &&
              userCartState?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center"
                  >
                    <div className="cart-col-1 gap-15 d-flex align-items-center">
                      <div className="w-25">
                        <img
                          src={item?.productId?.images[0]?.url}
                          className="img-fluid"
                          alt="watch"
                        ></img>
                      </div>
                      <div className="w-75">
                        <p>{item?.productId?.title}</p>
                        <p>Size</p>
                        <p className="d-flex gap-3">
                          Color:
                          <ul className="colors ps-0">
                            <li
                              style={{ backgroundColor: item?.color?.title }}
                            ></li>
                          </ul>
                        </p>
                      </div>
                    </div>
                    <div className="cart-col-2">
                      <h5 className="price">Ksh {item?.price}</h5>
                    </div>
                    <div className="cart-col-3 d-flex align-items-center gap-30">
                      <div>
                        <input
                          className="form-control"
                          type="number"
                          name="quantity"
                          id="quantity"
                          min={1}
                          max={10}
                          value={
                            updatedProductDetails?.quantity
                              ? updatedProductDetails?.quantity
                              : item?.quantity
                          }
                          onChange={(e) => {
                            setUpdatedProductDetails({
                              cartItemId: item?._id,
                              quantity: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div>
                        <button
                          className="ms-2 fs-5 text-danger bg-transparent border-0"
                          onClick={() => {
                            deleteACartProduct(item?._id);
                          }}
                        >
                          <AiFillDelete />
                        </button>
                      </div>
                    </div>
                    <div className="cart-col-4">
                      <h5 className="price">
                        Ksh {item?.price * item?.quantity}
                      </h5>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="col-12 py-2 mt-4">
            <div className="d-flext justify-content-between align-items-baseline">
              <Link to="/store" className="button">
                Continue Shopping
              </Link>
              <div className="d-flex flex-column align-items-end">
                <h5>SubTotal : Ksh {totalAmount}/-</h5>
                <p>Taxes and shipping calaculate at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
