import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Typography,
  Input,
  Button,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

export function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

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
        "http://localhost:5000/api/users/login",
        formData
      );
      console.log(requestData.data.token);
      localStorage.setItem("token", requestData.data.token);
      navigate("/dashboard");
    } catch (err) {
      alert("User not registered");
    }
  };

  return (
    <section className="grid text-center h-screen justify-items-center items-center p-8">
      <div>
        <Card className="w-96">
          <CardHeader className="grid h-20 bg-blue-500 place-items-center">
            <Typography variant="h3" color="white" className="login">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="cardbody">
            <form
              onSubmit={handleSubmit}
              className="mx-auto max-w-[24rem] text-left"
            >
              <div className="mb-6">
                <label htmlFor="email"></label>
                <Input
                  id="email"
                  color="gray"
                  size="lg"
                  label="Your Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-200"
                />
              </div>
              <div className="mb-2">
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

              <div className="mt-1 flex justify-end underline">
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  variant="small"
                  className="font-medium"
                >
                  Forgot your password?
                </Typography>
              </div>

              <Button
                type="submit"
                color="blue"
                size="md"
                className="mt-6"
                fullWidth
              >
                sign in
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
                className="mt-6 flex h-10 items-center justify-center gap-2"
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
                Not registered?{" "}
                <a
                  href={"/register"}
                  className="font-medium text-gray-900 underline"
                >
                  Create an account
                </a>
              </Typography>
            </form>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Login;
