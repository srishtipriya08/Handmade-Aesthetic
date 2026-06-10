/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  Select,
  Option,
  Card,
  CardBody,
  Input,
  Typography,
  Textarea,
  Button,
  CardHeader,
} from "@material-tailwind/react";

const ProductAdd = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    product_name: "",
    category_name: "",
    price: "",
    quantity: "",
    color: "",
    image: "",
    detail: "",
  });

  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);

  const getAllCategory = async () => {
    try {
      const categoryData = await axios
        .get("http://localhost:5000/api/categoryy/")
        .then((response) => {
          // console.log(response.data);
          setCategoryList(response.data);
        });
    } catch (err) {
      console.log("Category not found", err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Data = {
        product_name: product.product_name,
        product_category: product.category_name,
        price: product.price,
        quantity: product.quantity,
        color: product.color,
        image: product.image,
        detail: product.detail,
      };
      const requestData = await axios.post(
        "http://localhost:5000/api/products/addProduct",
        Data
      );
      toast.success(requestData.data.message);
      setTimeout(() => {
        navigate("/product");
      }, 3000);

      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      alert("Product data is not saved");
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
                Product Add Form
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Add all the details about the products
              </Typography>
            </CardHeader>

            <CardBody className="flex flex-col gap-4">
              <div className="grid grid-cols-3 gap-2">
                <Input
                  label="Product Name"
                  size="lg"
                  name="product_name"
                  type="text"
                  value={product.product_name}
                  onChange={handleChange}
                />

                <div>
                  <Select
                    label="Category"
                    size="lg"
                    name="category_name"
                    value={product.category_name}
                    onChange={(val) =>
                      setProduct((prev) => ({
                        ...prev,
                        category_name: val,
                      }))
                    }
                  >
                    <Option value="">None</Option>
                    {categoryList.map((category) => (
                      <Option key={category.id} value={category.category_name}>
                        {category.category_name}
                      </Option>
                    ))}
                  </Select>
                </div>

                <Input
                  label="Price"
                  size="lg"
                  name="price"
                  type="number"
                  value={product.price}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <Input
                  label="Quantity"
                  size="lg"
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
                />
                <div>
                  <Select
                    label="Select a color"
                    name="color"
                    size="lg"
                    value={product.color}
                    onChange={(val) =>
                      setProduct((prev) => ({
                        ...prev,
                        color: val,
                      }))
                    }
                  >
                    <Option value="-">None</Option>
                    <Option value="Red">
                      <span className="inline-block w-4 h-4 bg-red-500 rounded-full mr-2"></span>
                      Red
                    </Option>
                    <Option value="Green">
                      <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-2"></span>
                      Green
                    </Option>
                    <Option value="Blue">
                      <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
                      Blue
                    </Option>
                    <Option value="Yellow">
                      <span className="inline-block w-4 h-4 bg-yellow-400 rounded-full mr-2"></span>
                      Yellow
                    </Option>
                  </Select>
                </div>

                <Input
                  label="Image"
                  size="lg"
                  name="image"
                  type="text"
                  value={product.image}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-1 gap-2 ">
                <Textarea
                  label="Details"
                  size="lg"
                  name="detail"
                  type="text"
                  value={product.detail}
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
                    setProduct({
                      product_name: "",
                      product_category: "",
                      price: "",
                      quantity: "",
                      color: "",
                      detail: "",
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

export default ProductAdd;
