import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import './Details.css'



const Details = () => {
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductsReducer);
  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);
  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="details__image">
            <img src={product.image} alt="" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="details__name">{product.name}</div>
          <div>{product.author}</div>
          {product.ratting?.map((rate) => (
            <AiFillStar className="rated" />
          ))}
          <div className="details__prices">
            <span className="details__actaul">
              {currencyFormatter.format(product.price, { code: "USD" })}
            </span>
            <span className="details__discount">
              {currencyFormatter.format(product.discountPrice, { code: "USD" })}
            </span>
          </div>
          <div className="details__info">
            <div className="details__incDec">
              <span className="dec text-danger" onClick={decQuantity}>
                <BsDash />
              </span>
              <span className="quantity">{quantity}</span>
              <span className="inc text-success" onClick={() => setQuantity(quantity + 1)}>
                <BsPlus />
              </span>
              <button
                className="btn btn-success ml-2 px-4"
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: { product, quantity },
                  })
                }
              >
                ADD TO CART
              </button>
            </div>
          </div>
          <div className="details__p">
            <h4>Details</h4>
            {product.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
