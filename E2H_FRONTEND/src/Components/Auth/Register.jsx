import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const [formData, setFormData] = useState({
    first_name: null,
    last_name: null,
    email: null,
    phone_number: null,
    password: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const requestData = await axios.post(
        "http://localhost:5000/api/users/register",
        formData
      );
      alert("User registered: " + JSON.stringify(requestData.data));
    } catch (err) {
      alert("Error registering user");
    }
  };

  return (
    <section className="grid text-center h-screen justify-items-center items-center p-8">
      <div>
        <Card className="">
          <CardHeader className="grid h-20 bg-blue-500 place-items-center">
            <Typography variant="h3" color="white" className="reg">
              Register
            </Typography>
          </CardHeader>
          <CardBody>
            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-[28rem] text-left"
            >
              <div className="grid grid-cols-2 gap-2 ">
                <div className="mb-3">
                  <label htmlFor="first_name"></label>
                  <Input
                    id="first_name"
                    color="gray"
                    size="lg"
                    label="First Name"
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className=" placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="last_name"></label>
                  <Input
                    id="last_name"
                    color="gray"
                    size="lg"
                    label="Last Name"
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className=" placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email"></label>
                <Input
                  id="email"
                  color="gray"
                  size="lg"
                  type="email"
                  label="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone_number"></label>
                <Input
                  id="phone_number"
                  type="tel"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={10}
                  color="gray"
                  size="lg"
                  label="Phone Number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 "
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password"></label>
                <Input
                  size="lg"
                  id="password"
                  name="password"
                  label="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                  type={passwordShown ? "text" : "password"}
                  icon={
                    <i onClick={togglePasswordVisiblity}>
                      {passwordShown ? (
                        <EyeIcon className="h-5 w-5" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5" />
                      )}
                    </i>
                  }
                />
              </div>
              <Button
                type="submit"
                color="gray"
                size="md"
                className="mt-6"
                fullWidth
              >
                Create Account
              </Button>

              <div class="relative my-5">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-400"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500">Or </span>
                </div>
              </div>

              <Button
                variant="outlined"
                type="submit"
                size="md"
                className="mt-6 flex h-10 items-center justify-center gap-2 border-gray-400"
                fullWidth
              >
                <img
                  src={`https://www.material-tailwind.com/logos/logo-google.png`}
                  alt="google"
                  className="h-6 w-6"
                />{" "}
                sign in with google
              </Button>
              <Typography
                variant="small"
                color="gray"
                className="!mt-4 text-center font-normal"
              >
                Already an account?{" "}
                <a
                  href={"/login"}
                  className="font-medium text-gray-900 underline"
                >
                  Sign In
                </a>
              </Typography>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default Register;
