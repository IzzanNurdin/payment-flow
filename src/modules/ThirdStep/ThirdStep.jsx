import React from "react";
import { BackTo, Summary } from "components";
import {
  LeftHeader,
  Heading1,
  LeftComponent,
  ThirdStepWrapper,
} from "./ThirdStep.style";
import { randomString } from "utils/format";

const ThirdStep = ({ handleChangeStep }) => {
  const [selectedShipment, setShipment] = React.useState({});
  const [selectedPayment, setPayment] = React.useState({});

  React.useEffect(() => {
    const shipment =
      localStorage.getItem("shipment") &&
      JSON.parse(localStorage.getItem("shipment"));
    const payment =
      localStorage.getItem("payment") &&
      JSON.parse(localStorage.getItem("payment"));
    if (shipment) {
      setShipment(shipment);
    }
    if (payment) {
      setPayment(payment);
    }
  }, []);

  return (
    <div>
      <ThirdStepWrapper>
        <LeftComponent>
          <LeftHeader>
            <Heading1>Thank you</Heading1>
            <p>Order ID: {randomString(5).toUpperCase()}</p>
            <span>
              Your order will be delivered today with {selectedShipment.name}
            </span>
            <BackTo
              destination="homepage"
              onClick={() => {
                handleChangeStep(1);
                localStorage.clear();
              }}
            />
          </LeftHeader>
        </LeftComponent>
        <Summary
          isDropshipper={localStorage.getItem("isDropshipper") === "true"}
          shipment={selectedShipment}
          payment={selectedPayment}
          step={3}
        />
      </ThirdStepWrapper>
    </div>
  );
};

export default ThirdStep;
