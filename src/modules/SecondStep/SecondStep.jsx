import React from "react";
import { BackTo, Summary } from "components";
import {
  LeftHeader,
  Heading1,
  LeftComponent,
  SecondStepWrapper,
  CardRow,
  Card,
} from "./SecondStep.style";
import shipment from "./shipment.json";
import payment from "./payment.json";
import { formatNumber } from "utils/format";

const SecondStep = ({ handleChangeStep }) => {
  const [selectedShipment, setShipment] = React.useState({});
  const [selectedPayment, setPayment] = React.useState({});

  const handleSelectShipment = (item) => {
    setShipment(item);
    localStorage.setItem("shipment", JSON.stringify(item));
  };

  const handleSelectPayment = (item) => {
    setPayment(item);
    localStorage.setItem("payment", JSON.stringify(item));
  };

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
      <BackTo destination="delivery" onClick={() => handleChangeStep(1)} />
      <SecondStepWrapper>
        <LeftComponent>
          <LeftHeader>
            <Heading1>Shipment</Heading1>
            <CardRow>
              {shipment.map((item) => {
                return (
                  <Card
                    key={item.name}
                    selected={item.name === selectedShipment.name}
                    onClick={() => handleSelectShipment(item)}
                  >
                    <p>{item.name}</p>
                    <span>{formatNumber(item.price)}</span>
                  </Card>
                );
              })}
            </CardRow>
          </LeftHeader>
          <LeftHeader>
            <Heading1>Payment</Heading1>
            <CardRow>
              {payment.map((item) => {
                return (
                  <Card
                    key={item.name}
                    selected={item.name === selectedPayment.name}
                    onClick={() => handleSelectPayment(item)}
                  >
                    <p>{item.name}</p>
                    {item.name === "e-Wallet" && (
                      <span>{`${formatNumber(item.balance)} left`}</span>
                    )}
                  </Card>
                );
              })}
            </CardRow>
          </LeftHeader>
        </LeftComponent>
        <Summary
          isDropshipper={localStorage.getItem("isDropshipper") === "true"}
          shipment={selectedShipment}
          payment={selectedPayment}
          step={2}
        />
      </SecondStepWrapper>
    </div>
  );
};

export default SecondStep;
