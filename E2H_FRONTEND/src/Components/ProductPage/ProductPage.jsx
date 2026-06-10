import { Typography, Button } from "@material-tailwind/react";
import React, {useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import axios from "axios";
import { useParams, Link } from "react-router-dom";


const ProductPage = () => {

     const { id } = useParams();

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/categoryy/${id}`)
      .then((response) => {
        setProducts(response.data.products);
        setCategory(response.data.category_name);
      });
  }, [id]);


  return (
    <>
      <Header/>
      <div className="heading">
        <div>
          <Typography
            variant="h4"
            className="text-[#7C7892] text-3xl font-semibold fontquicksand"
          >
            {category}
          </Typography>
          <Typography className="text-[#7C7892] text-lg font-medium fontquicksand w-4/5 pt-10 ">
            Discover the timeless beauty of handwritten letters — crafted with
            care, intention, and a touch of romance. Each piece is a celebration
            of slow communication, where ink meets paper in a dance of elegance
            and emotion. Whether you're sending a heartfelt note, a poetic
            musing, or a love letter sealed with wax, our aesthetic handwritten
            letters offer a deeply personal experience in a digital world.
            <br />
            Perfect for: Special occasions, Romantic gestures, Keepsakes and
            journaling, Gifts that leave a lasting impression.

            <br/><br/><b>Write slower. Feel deeper. Share beautifully.</b>
          </Typography>
        </div>
      </div>

      <div className="flex justify-between px-14 pb-10">
      <div className="fontquicksand">
        <label>Sort by: </label>
      <select >
        <option value="name1">Alphabetically, A-Z</option>
        <option value="name2">Alphabetically, Z-A</option>
        <option value="price">Price, Low - High</option>
        <option value="price">Price, High - Low</option>
        <option value="date">Date, old to new</option>
        <option value="date">Date, new to old</option>
      </select>
      </div>
      <div><Typography className="fontquicksand">{products.length} Products</Typography></div>
      </div>

      <div className="grid grid-cols-4 justify-items-center">
        {products.length === 0 ? (
          <div className="col-span-4 flex justify-center items-center py-16">
            <Typography className="text-[#8E83A9] text-2xl font-medium fontquicksand">
              No product Available
            </Typography>
          </div>
        ) : (
          products.map((item) => (
            <Link
              to={`/productdetailpage/${item.id}`}
              key={item.id}
            >
          <div className="grid gap-2 justify-items-center border-2 rounded-md">
            <img src={`http://localhost:5000/uploads/${item.image}`} className="rounded-t-md" />
            <div className="flex flex-row gap-2 ">
            <Typography className="text-[#8E83A9] text-md font-medium fontquicksand ">
              {item.product_name}
            </Typography>
            <Typography className="text-[#8E83A9] font-medium fontquicksand ">
              Rs.{item.price}.00
            </Typography></div>
            <Button className="bg-[#8E83A9] font-medium w-5/6 my-4 fontquicksand ">
              Add to cart
            </Button>
          </div>
          </Link>
          ))
        )}
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
