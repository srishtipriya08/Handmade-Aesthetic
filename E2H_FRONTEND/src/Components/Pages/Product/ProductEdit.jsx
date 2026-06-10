import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
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
const ProductEdit = () => {
  const location = useLocation();
  const [product, setProduct] = useState(location.state?.product || null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(product);
    try {
      const requestData = await axios.put(
        `http://localhost:5000/api/products/editProduct/${product.id}`,
        product
      );
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
                    name="product_category"
                    value={product.product_category}
                    onChange={(val) =>
                      setProduct((prev) => ({
                        ...prev,
                        product_category: val,
                      }))
                    }
                  >
                    <Option value="">None</Option>
                    <Option value="Handwritten Letters">
                                          Handwritten Letters
                                        </Option>
                                        <Option value="Photo Prints">
                                          Photo Prints
                                        </Option>
                                        <Option value="VintageFrames">
                                          VintageFrames
                                        </Option>
                                        <Option value="Handmade Bookmarks">
                                          Handmade Bookmarks
                                        </Option>
                                        <Option value="Thread Card">
                                          Thread Cards
                                        </Option>
                                        <Option value="DIY Cards">
                                          DIY Cards
                                        </Option>
                                        <Option value="Scrapbook">
                                          Scrapbook
                                        </Option>
                                        <Option value="Phone Cases">
                                          Phone Cases
                                        </Option>
                                        <Option value="Hampers">
                                          Hampers
                                        </Option>
                                        <Option value="Others">
                                          Others
                                        </Option>
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
                  type="text"
                  name="image"
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

export default ProductEdit;
