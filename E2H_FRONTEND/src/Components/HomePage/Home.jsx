import React from "react";
import Header from "../Header/Header";
import {
  Typography,
  Card,
  CardBody,
  CardHeader,
  Button,
  Carousel,
} from "@material-tailwind/react";
import {
  StarIcon,
} from "@heroicons/react/24/solid";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <div className=" bg-gray-600">
        <img
          src="./src/assets/banner.png"
          // className="h-2/6 w-2/6 "
        />
      </div>

      <div className="text-center py-8">
        <div>
          <Typography className="text-[#7C7892] text-lg font-medium fontquicksand">
            Our Products
          </Typography>
        </div>
        <div>
          <Typography
            variant="h4"
            className="text-[#7C7892] text-3xl font-semibold fontquicksand"
          >
            Shop By Category
          </Typography>
        </div>
      </div>

      <div className="p-6 grid grid-cols-4 justify-items-center">
        <Card className="w-48 bg-[#F7F1EF] rounded-none">
          <CardHeader floated={false} className="h-40 w-40 rounded-md">
            <img
              src="./src/assets/Handmade-card.jpg"
              className="h-40 w-40 "
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography className="font-semibold text-[#967F71] fontquicksand">
              Handmade Cards
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-48 bg-[#F7F1EF] rounded-none">
          <CardHeader floated={false} className="h-40 w-40 rounded-md">
            <img
              src="./src/assets/Phone-Case.jpg"
              className="h-40 w-40 object-cover object-center "
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography className="font-semibold text-[#967F71] fontquicksand">
              Aesthetic Case
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-48 bg-[#F7F1EF] rounded-none">
          <CardHeader floated={false} className="h-40 w-40 rounded-md ">
            <img
              src="./src/assets/dreamcatchers.webp"
              className="h-40 w-40 "
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography className="font-semibold text-[#967F71] fontquicksand">
              Dream Catcher
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-48 bg-[#F7F1EF] rounded-none">
          <CardHeader floated={false} className="h-40 w-40 rounded-md">
            <img
              src="./src/assets/Hamper.jpg"
              className="h-40 w-40 object-cover object-center "
              alt="profile-picture"
            />
          </CardHeader>
          <CardBody className="text-center">
            <Typography className="font-semibold text-[#967F71] fontquicksand">
              Hamper
            </Typography>
          </CardBody>
        </Card>
      </div>

      <div className="text-center">
        <Link to="/productpage">
          <Button className="bg-[#8E83A9] font-medium fontquicksand w-32 my-4 rounded-none">
            View All
          </Button>
        </Link>
      </div>
      <div className=" bg-gray-600">
        <img src="./src/assets/about-us.png" />
      </div>

      <div className=" pl-14 pb-14">
        <div>
          <Typography className="text-[#7C7892] text-lg font-medium fontquicksand">
            {" "}
            Products
          </Typography>
        </div>
        <div>
          <Typography
            variant="h4"
            className="text-[#7C7892] text-3xl font-semibold fontquicksand"
          >
            Our Best Sellers Product
          </Typography>
        </div>
      </div>

      <div className="grid grid-cols-4 justify-items-center">
        <div className="grid gap-2 justify-items-center ">
          <img src="./src/assets/Letter.png" />
          <Typography className="text-[#967F71] text-lg font-semibold fontquicksand">
            Handwritten Letters
          </Typography>
          <Typography className="text-[#8E83A9] font-semibold fontquicksand">
            Rs. 120.00
          </Typography>
          <Button className="bg-[#8E83A9] font-medium w-28 my-4 fontquicksand">Buy Now</Button>
        </div>
        <div className="grid gap-2 justify-items-center ">
          <img src="./src/assets/polaroid.png" />
          <Typography className="text-[#967F71] text-lg font-semibold fontquicksand">
            Polaroid Photos
          </Typography>
          <Typography className="text-[#8E83A9] font-semibold fontquicksand">
            Rs. 50.00
          </Typography>
          <Button className="bg-[#8E83A9] font-medium w-28 my-4 fontquicksand">Buy Now</Button>
        </div>
        <div className="grid gap-2 justify-items-center ">
          <img src="./src/assets/vintageframe.png" />
          <Typography className="text-[#967F71] text-lg font-semibold fontquicksand">
            Vintage Frame
          </Typography>
          <Typography className="text-[#8E83A9] font-semibold fontquicksand">
            Rs. 199.00
          </Typography>
          <Button className="bg-[#8E83A9] font-medium w-28 my-4 fontquicksand">Buy Now</Button>
        </div>
        <div className="grid gap-2 justify-items-center ">
          <img src="./src/assets/bookmarks.png" />
          <Typography className="text-[#967F71] text-lg font-semibold fontquicksand">
            Bookmarks
          </Typography>
          <Typography className="text-[#8E83A9] font-semibold fontquicksand">
            Rs. 80.00
          </Typography>
          <Button className="bg-[#8E83A9] font-medium w-28 my-4 fontquicksand">Buy Now</Button>
        </div>
      </div>

      <div className="text-center mt-6 py-8">
        <div>
          <Typography
            variant="h4"
            className="text-[#7C7892] text-3xl font-semibold fontquicksand"
          >
            Reviews
          </Typography>
        </div>
        <div>
          <Typography className="text-[#7C7892] text-lg pt-2 font-medium fontquicksand">
            Our Customers love us !
          </Typography>

          <div className="place-items-center my-8">
            <Carousel transition={{ duration: 1 }} className="rounded-md bg-[#F4F0E7] w-2/6 h-60 shadow-md">
              <div className="grid gap-6 my-6">
                <div className="flex gap-1 justify-center">
                  <StarIcon className="h-6 w-6 text-[#8E83A9]" />
                  <StarIcon className="h-6 w-6 text-[#8E83A9]" />
                  <StarIcon className="h-6 w-6 text-[#8E83A9]" />
                  <StarIcon className="h-6 w-6 text-[#8E83A9]" />
                  <StarIcon className="h-6 w-6 text-[#8E83A9] " />
                </div>
                <Typography className="fontquicksand font-medium text-md text-[#967F71]">My Friend Just loved the Hamper :) He felt so nice seeing the personalised products.. so Thank you so much</Typography>
                <Typography className="fontquicksand font-bold text-2xl text-[#8E83A9] ">Srishti</Typography>
              </div>
              <div className="grid gap-6 my-6">
                <div className="flex gap-1 justify-center">
                  <StarIcon className="h-6 w-6 text-[#8E83A9]" />
                  <StarIcon className="h-6 w-6 text-[#8E83A9]" />
                  <StarIcon className="h-6 w-6 text-[#8E83A9]" />
                  <StarIcon className="h-6 w-6 text-[#8E83A9]" />
                  <StarIcon className="h-6 w-6 text-[#8E83A9] " />
                </div>
                <Typography className="fontquicksand font-medium text-md text-[#967F71]">My Friend Just loved the Hamper :) He felt so nice seeing the personalised products.. so Thank you so much</Typography>
                <Typography className="fontquicksand font-bold text-2xl text-[#8E83A9] ">Srishti</Typography>
              </div>
              
            </Carousel>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
