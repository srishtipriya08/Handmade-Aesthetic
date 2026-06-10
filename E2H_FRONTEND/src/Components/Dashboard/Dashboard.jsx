import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

export function Dashboard() {
  return (
    <>
    <div className="grid grid-cols-3 gap-6 mr-4 ">
      <Card className="mt-6 w-81">
        <CardBody>
          <Typography variant="h6" className="font-semibold mb-4">
            Total registered users
          </Typography>
          <Typography variant="h2" color="blue" className="mb-1">
            1940
          </Typography>
          <Typography>
            <span className="font-semibold">+2.9%</span> last 7 days
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-6 w-81">
        <CardBody>
          <Typography variant="h6" className="font-semibold mb-4">
            Total orders
          </Typography>
          <Typography variant="h2" color="blue" className="mb-1">
            140
          </Typography>
          <Typography>
            <span className="font-semibold">+1.8%</span> last 14 days
          </Typography>
        </CardBody>
      </Card>

      <Card className="mt-6 w-81">
        <CardBody>
          <Typography variant="h6" className="font-semibold mb-4">
            Total sells
          </Typography>
          <Typography variant="h2" color="blue" className="mb-1">
            40%
          </Typography>
          <Typography>
            <span className="font-semibold">+1.6%</span> last 7 days
          </Typography>
          
        </CardBody>
      </Card>
      </div>
    </>
  );
}

export default Dashboard;
