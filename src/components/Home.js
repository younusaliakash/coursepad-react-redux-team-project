import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";


const Home = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-3" key={product.id}>
              <div className="product">
                <div className="product__img">
                  <Link to={`/details/${product.id}`}>
                    <img src={product.image} alt="image name" />
                  </Link>
                </div>
                <div className="product__name">{product.name}</div>
                <div>{product.author}</div>
                {product.ratting?.map(rate => <AiFillStar className="rated" />)}
                <div className="row">
                  <div className="col-6">
                    <div className="product__price">
                      <span className="actualPrice">
                        {currencyFormatter.format(product.price, {
                          code: "USD",
                        })}
                      </span>{" "}
                      <span className="discount">{product.discount}%</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="product__discount__price">
                      {currencyFormatter.format(product.discountPrice, {
                        code: "USD",
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
