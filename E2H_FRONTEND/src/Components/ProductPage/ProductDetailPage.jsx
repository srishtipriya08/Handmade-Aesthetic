import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Button, Typography, IconButton } from "@material-tailwind/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   // Example: Save to localStorage or sync with an API
  //   localStorage.setItem("cartQuantity", quantity);
  // }, [quantity]);

  // to increment quantity
  const Increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const Decrement = () => {
    if (quantity > 1) setQuantity((prevQuantity) => prevQuantity - 1);
  };

  const addToCart = () => {
    // Get existing cart from localStorage
    const existingCart = localStorage.getItem("cart");
    let cart = existingCart ? JSON.parse(existingCart) : [];

    // Use the correct ID field - check both id and _id
    const productId = product._id || product.id;
    console.log('Product object:', product);
    console.log('Product ID being used:', productId);

    // Check if product already exists in cart
    const existingItem = cart.find(item => item._id === productId);
    console.log('Existing item found:', existingItem);

    if (existingItem) {
      // Update quantity if product already in cart
      existingItem.cartQuantity = (existingItem.cartQuantity || 1) + quantity;
      console.log('Updated existing item quantity to:', existingItem.cartQuantity);
    } else {
      // Add new product to cart
      cart.push({
        _id: productId,
        product_name: product.product_name,
        price: product.price,
        image: product.image,
        cartQuantity: quantity
      });
      console.log('Added new product to cart');
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log('Cart saved:', cart);
    
    // Dispatch custom event to notify other components
    const event = new Event('cartUpdated');
    window.dispatchEvent(event);
    console.log('cartUpdated event dispatched');
    
    toast.success(`${product.product_name} added to cart!`);
    
    // Reset quantity
    setQuantity(1);
  };

  useEffect(() => {
    if (!id) {
      setError("No product ID provided");
      return;
    }

    const url = `http://localhost:5000/api/products/${id}`;
    console.log("Fetching from:", url);

    axios
      .get(url)
      .then((response) => {
        console.log("Product fetched successfully:", response.data);
        setProduct(response.data);
      })
      .catch((err) => {
        console.error(
          "Error fetching product:",
          err.message,
          err.response?.status,
        );
        setError(
          `Failed to load product: ${err.response?.status || err.message}`,
        );
      });
  }, [id]);

  if (error) return <h1>{error}</h1>;
  if (!product) return <h1>Loading...</h1>;

  return (
    <>
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  justify-center p-4">
        <div className="flex w-full h-[400px] overflow-hidden justify-center">
          <img src={`http://localhost:5000/uploads/${product.image}`} />

          {/* <h1>{product.product_name}</h1>

      <p>{product.detail}</p>

      <p>Rs. {product.price}</p> */}
        </div>
        <div>
          <Typography className="text-[#8E83A9] text-[30px] font-medium fontquicksand ">
            {product.product_name}
          </Typography>
          <Typography className="text-[#8E83A9] font-medium fontquicksand ">
            Rs.{product.price}.00
          </Typography>
          <Typography className="text-[#8E83A9] text-sm font-small fontquicksand mt-4">
            Shipping Calculated at checkout.
          </Typography>
          {product.quantity > 0 ? (
            <Typography className="text-[#8E83A9] text-sm font-small fontquicksand mt-4">
              In Stock
            </Typography>
          ) : (
            <Typography className="text-[#8E83A9] text-sm font-small fontquicksand mt-4">
              Out of Stock
            </Typography>
          )}
          <Typography className="text-[#8E83A9] text-sm font-small fontquicksand mt-4">
            Quantity
          </Typography>
          <div className="border-2 w-1/4 h-[35px] flex items-center justify-center mt-1">
            <IconButton variant="text" className="ml-1" onClick={Decrement}>
              <MinusIcon className="h-4 w-4" />
            </IconButton>
            <Typography className="ml-1">{quantity}</Typography>
            <IconButton variant="text" className="ml-1" onClick={Increment}>
              <PlusIcon className="h-4 w-4" />
            </IconButton>
          </div>
          
          <Button className="bg-[#8E83A9] text-white px-4 py-2 rounded" onClick={addToCart}>
            Add to Cart
          </Button>
          <Button className="bg-[#8E83A9] text-white px-4 py-2 rounded">
            Buy Now
          </Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
