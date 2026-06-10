import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@material-tailwind/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categoryy/")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <>
      <Header />

      <div className= "heading">
        <div>
          <Typography className="text-[#7C7892] text-lg font-medium fontquicksand">
            Collections
          </Typography>
        </div>
        <div>
          <Typography
            variant="h4"
            className="text-[#7C7892] text-3xl font-semibold fontquicksand"
          >
            Shop by Category
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-14 mb-20 mx-5">
        {products.map((product) => (
          <Link to={`/categorypage/${product.id}`} key={product.id}>
          <div key={product.id} className="grid gap-2 justify-items-center">
             <div className="w-60 h-72 overflow-hidden object-cover">
            <img src={`http://localhost:5000/uploads/${product.image}`} alt={product.category_name} />
            </div>
            <Typography className="text-[#967F71] text-lg font-semibold fontquicksand">
              {product.category_name}
            </Typography>
            <Typography className="text-[#8E83A9] text-md font-semibold fontquicksand">
              Starts from {product.price}.00
            </Typography>
          </div>
          </Link>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Product;
