import React, { useState } from "react";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import {
  Card,
  CardBody,
  Input,
  Typography,
  Button,
  CardHeader,
} from "@material-tailwind/react";


const CategoryyAdd = () => {

const navigate = useNavigate();

  const [category, setCategory] = useState({
    category_name: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const requestData = await axios.post(
        "http://localhost:5000/api/categoryy/addCategory",
        category
      );
      toast.success(requestData.data.message);
    //   setTimeout(() => {
    //     navigate('/product');
    //   }, 3000);
    } catch (err) {
      toast.error("Category of the product data is not saved");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <Card className="h-dvh">
            <CardHeader
              floated={false}
              shadow={false}
              className="rounded-none ml-6"
            >
              <Typography variant="h5" color="blue">
                Product Category Form
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Add all the details about the product category
              </Typography>
            </CardHeader>

            <CardBody className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-2">
                <Input
                  label="Category Name"
                  size="lg"
                  name="category_name"
                  type="text"
                  value={category.category_name}
                  onChange={handleChange}
                />

                <Input
                  label="Price"
                  size="lg"
                  name="price"
                  type="number"
                  value={category.price}
                  onChange={handleChange}
                />

                <Input
                  label="Image"
                  size="lg"
                  name="image"
                  type="text"
                  value={category.image}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-3 gap-2 w-3/6 mt-3">
                <Button type="submit" variant="filled" color="blue">
                  Save
                </Button>
                <Button
                  type="reset"
                  variant="filled"
                  color="blue"
                  onClick={() =>
                    setCategory({
                      category_name: "",
                      price: "",
                      image: "",
                    })
                  }
                >
                  Reset
                </Button>
              </div>
            </CardBody>
          </Card>
        </form>
      </div>
    </>
  );
};

export default CategoryyAdd;
