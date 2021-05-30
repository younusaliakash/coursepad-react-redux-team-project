import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import './cart.css'

const Cart = () => {
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.CartReducer
  );
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <div className="container">
        <h3>Your cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="cart__heading">
                  <div className="row">
                    <div className="col-sm-2">Picture</div>
                    <div className="col-sm-2">Name</div>
                    <div className="col-sm-2">Price</div>
                    <div className="col-sm-2">Inc/Dec</div>
                    <div className="col-sm-2">Total Price</div>
                    <div className="col-sm-2">Remove</div>
                  </div>
                </div>
                {products.map((product) => (
                  <div className="row verticalAlign" key={product.id}>
                    <div className="col-2">
                      <div className="cart__image">
                        <img src={product.image} alt="" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__name">{product.name}</div>
                    </div>
                    <div className="col-2">
                      <div className="cart__price">
                        {currencyFormatter.format(product.discountPrice, {
                          code: "USD",
                        })}
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="details__info cart__incDec">
                        <div className="details__incDec">
                          <span
                            className="dec text-danger p-2"
                            onClick={() =>
                              dispatch({ type: "DEC", payload: product.id })
                            }
                          >
                            <BsDash />
                          </span>
                          <span className="quantity">{product.quantity}</span>
                          <span
                            className="inc text-success p-2"
                            onClick={() =>
                              dispatch({ type: "INC", payload: product.id })
                            }
                          >
                            <BsPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__total text-center">
                        {currencyFormatter.format(
                          product.discountPrice * product.quantity,
                          { code: "USD" }
                        )}
                      </div>
                    </div>
                    <div className="col-2">
                      <div
                        className="cart__remove text-danger"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: product.id })
                        }
                      >
                        <BsReverseBackspaceReverse />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-3 summary-col">
                <div className="summary">
                  <div className="summary__heading bg-warning">Summary</div>
                  <div className="summary__details">
                    <div className="row mb-2">
                      <div className="col-6">Total Items:</div>
                      <div className="col-6">{totalQuantities}</div>
                    </div>
                    <div className="row mb-2">
                      <div className="col-6">Total Price</div>
                      <div className="col-6">
                        {currencyFormatter.format(totalPrice, { code: "USD" })}
                      </div>
                    </div>
                    <button type="button" className="checkout btn btn-info">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Your cart is empty!"
        )}
      </div>
    </div>
  );
};

export default Cart;
