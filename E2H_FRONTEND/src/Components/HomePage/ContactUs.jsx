import React from "react";
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <Header />
      <div className=" pl-20 pt-14">
        <div>
          <Typography
            variant="h4"
            className="text-[#7C7892] text-3xl font-semibold fontquicksand "
          >
            Contact Us
          </Typography>
        </div>
      </div>

      <section className="px-8 py-8 lg:py-16">
        <div className="container mx-auto text-center">
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
            <form action="#" className="flex flex-col gap-4 lg:max-w-md ">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900 fontquicksand"
                >
                  Full Name
                </Typography>
                <Input
                  color="gray"
                  size="xl"
                  placeholder="Full Name"
                  name="full-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>

              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900 fontquicksand"
                >
                  Your Email
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="name@email.com"
                  name="email"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-2 text-left font-medium fontquicksand"
                >
                  Contact Number
                </Typography>
                <Input
                  maxLength={10}
                  pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
                  className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900 fontquicksand"
                >
                  Your Message
                </Typography>
                <Textarea
                  rows={6}
                  color="gray"
                  placeholder="Message"
                  name="message"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <Button className="w-44 fontquicksand bg-[#8E83A9]" color="gray">
                Send message
              </Button>
            </form>

            <div className="bg-[#D9D9D9]/[25%] text-[#8E83A9] w-4/6 ">
              <div className="m-10">
                <Typography className="text-left text-xl font-semibold fontquicksand pb-10">
                  Get in Touch with us
                </Typography>
                <div className="flex gap-3 items-center">
                  <MapPinIcon className="h-10 w-10 text-[#8E83A9]" />
                  <div>
                    <Typography className="font-medium text-xl fontquicksand">
                      Address
                    </Typography>
                  </div>
                </div>
                <Typography className="pl-14 font-medium text-md text-left fontquicksand text-[#8E83A9]/[60%]">
                  302, Harmu Road, Ranchi, Jharkhand
                </Typography>
              </div>
              <div className="m-10">
                <div className="flex gap-3 items-center">
                  <PhoneIcon className="h-10 w-10 text-[#8E83A9]" />
                  <div>
                    <Typography className="font-medium text-xl fontquicksand">
                      Phone Number
                    </Typography>
                  </div>
                </div>
                <Typography className="pl-14 font-medium text-md text-left fontquicksand text-[#8E83A9]/[60%]">
                  +91-7254983575
                </Typography>
              </div>
              <div className="m-10">
                <div className="flex gap-3 items-center">
                  <EnvelopeIcon className="h-10 w-10 text-[#8E83A9]" />
                  <div>
                    <Typography className="font-medium text-xl fontquicksand">
                      Email
                    </Typography>
                  </div>
                </div>
                <Typography className="pl-14 font-medium text-md text-left hover:underline fontquicksand text-[#8E83A9]/[60%]">
                  <a href="mailto:handmadeaesthetics@gmail.com">
                    handmadeaesthetics@gmail.com
                  </a>
                </Typography>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <img
              src="./src/assets/map.png"
              alt="map"
              className="w-full h-full lg:max-h-[510px]"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
