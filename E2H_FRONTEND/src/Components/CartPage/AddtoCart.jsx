import React, {useEffect, useState} from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { toast } from "react-toastify";

const TABLE_HEAD = [" ", "Product", "Price", "Quantity", "Subtotal"];

const AddtoCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState({});

  const onDelete = (itemId)=>{
    const updatedCart = cartItems.filter(item => item._id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item removed from cart!");
  }

  // Function to load cart from localStorage
  const loadCartFromStorage = () => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      
      // Initialize quantities from cartQuantity field
      const quantitiesMap = {};
      parsedCart.forEach(item => {
        quantitiesMap[item._id] = item.cartQuantity || 1;
      });
      setQuantities(quantitiesMap);
    }
  };

  useEffect(() => {
    // Initial load
    loadCartFromStorage();

    // Listen for custom cart update event
    const handleCartUpdate = () => {
      console.log('Cart updated event received');
      loadCartFromStorage();
    };
    
    window.addEventListener('cartUpdated', handleCartUpdate);

    // Also listen for storage events (from other tabs)
    const handleStorageChange = (e) => {
      if (e.key === 'cart') {
        console.log('Storage changed, reloading cart');
        loadCartFromStorage();
      }
    };
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // to increment quantity
  const Increment = (itemId) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: (prev[itemId] || 1) + 1
    }));
  };

  const Decrement = (itemId) => {
    setQuantities(prev => ({
      ...prev,
      [itemId]: prev[itemId] > 1 ? prev[itemId] - 1 : 1
    }));
  };


  return (
    <>
      <Header />
      <div className="heading">
        <div>
          <Typography
            variant="h4"
            className="text-[#7C7892] text-3xl font-semibold fontquicksand"
          >
            Shopping Cart
          </Typography>
        </div>
      </div>

      <div className="flex gap-20 pl-14">
        <table className="  w-3/5 min-w-max table-auto text-left ">
          <thead className="bg-[#8E83A9] fontquicksand">
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium text-md leading-none fontquicksand text-[#ffffff]"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cartItems.length > 0 ? (
              cartItems.map(({ _id, product_name, price, image }, index) => {
                const isLast = index === cartItems.length - 1;
                const classes = isLast
                  ? "p-2"
                  : "p-2 border-b border-blue-gray-50";
                const qty = quantities[_id] || 1;
                const subtotal = price * qty;

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <IconButton variant="text">
                        <TrashIcon className="h-4 w-4" onClick={() => onDelete(_id)}/>
                      </IconButton>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <img 
                          src={image ? `http://localhost:5000/uploads/${image}` : "https://via.placeholder.com/64"} 
                          alt={product_name} 
                          className="w-16 h-20" 
                        />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {product_name}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Rs. {price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="border-2 flex items-center gap-2">
                        <IconButton variant="text" size="sm" onClick={() => Decrement(_id)}>
                          <MinusIcon className="h-4 w-4" />
                        </IconButton>
                        <Typography className="px-2">{qty}</Typography>
                        <IconButton variant="text" size="sm" onClick={() => Increment(_id)}>
                          <PlusIcon className="h-4 w-4" />
                        </IconButton>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        Rs. {subtotal}
                      </Typography>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5" className="p-4 text-center">
                  <Typography className="fontquicksand">Your cart is empty</Typography>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="border-2 w-1/5">
          <div className="px-3 py-3">
            <Typography className="fontquicksand font-semibold">Order Summary</Typography><hr/>
            {cartItems.length > 0 && (
              <div className="grid grid-cols-2 justify-between pt-3 gap-2">
                <Typography className="fontquicksand">Items</Typography>
                <Typography className="fontquicksand">{cartItems.length}</Typography>
                <Typography className="fontquicksand">Sub total</Typography>
                <Typography className="fontquicksand">
                  Rs. {cartItems.reduce((sum, item) => sum + (item.price * (quantities[item._id] || 1)), 0)}
                </Typography>
                <Typography className="fontquicksand">Taxes</Typography>
                <Typography className="fontquicksand">Rs. 0</Typography>
                <Typography className="fontquicksand">Coupon Discount</Typography>
                <Typography className="fontquicksand">Rs. 0</Typography>
                <Typography className="fontquicksand font-semibold border-t border-gray-300">Total</Typography>
                <Typography className="fontquicksand font-semibold border-t border-gray-300">
                  Rs. {cartItems.reduce((sum, item) => sum + (item.price * (quantities[item._id] || 1)), 0)}
                </Typography>
              </div>
            )}
            <Button className="bg-[#8E83A9] font-medium w-full my-4 fontquicksand">Proceed to Checkout</Button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AddtoCart;
