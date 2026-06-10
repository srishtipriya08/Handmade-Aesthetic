import { Typography, Button } from "@material-tailwind/react";
import React from "react";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";

const HandwrittenLetters = () => {
  return (
    <>
      <Header />
      <div className="heading">
        <div>
          <Typography
            variant="h4"
            className="text-[#7C7892] text-3xl font-semibold fontquicksand"
          >
            Handwritten Letters
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
      <div><Typography className="fontquicksand">4 Products</Typography></div>
      </div>

      <div className="grid grid-cols-4 justify-items-center">
        <div className="grid gap-2 justify-items-center border-2 rounded-md">
          <img src="./src/assets/Letter.png" className="rounded-t-md" />
          <Typography className="text-[#8E83A9] text-lg font-medium fontquicksand ">
            Handwritten Letters
          </Typography>
          <Typography className="text-[#8E83A9] font-medium fontquicksand ">
            Rs. 120.00
          </Typography>
          <Button className="bg-[#8E83A9] font-medium w-40 my-4 fontquicksand ">
            Add to cart
          </Button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HandwrittenLetters;
