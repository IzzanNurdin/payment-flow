import React from "react";
import styled from "styled-components";
import { formatNumber } from "utils/format";

const RightHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 20px;
  height: 500px;
`;

const Heading3 = styled.h3`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  margin: 5px 0px 0px 0px;
  color: #ff8a00;
`;

const Paragraph = styled.p`
  font-family: Inter;
  font-size: 14px;
  opacity: 0.6;
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: Inter;
  font-size: 14px;

  p {
    margin: 0;
    font-weight: 400;
  }

  span {
    margin: 0;
    font-weight: 700;
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ff8a00;
  font-family: Montserrat;
  margin-top: 24px;
  margin-bottom: 24px;

  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
  }
`;

const NextButton = styled.button`
  all: unset;
  font-size: 18px;
  cursor: pointer;
  padding: 20px 40px;
  background: #ff8a00;
  text-align: center;
  border-radius: 2px;
  color: #ffffff;

  &:disabled {
    background: #bcbcbc;
  }

  &:disabled&:hover {
    background: #bcbcbc;
  }

  &:hover {
    background: #ef8100;
  }
`;

const Expedition = styled.div`
  font-family: Inter;
  display: flex;
  flex-direction: column;
  gap: 4px;

  .border {
    border-top: 1px solid #d8d8d8;
    width: 15%;
    margin-top: 12px;
    margin-bottom: 8px;
  }

  p {
    margin: 0;
    font-size: 14px;
    font-weight: 400;
  }

  label {
    margin: 0;
    color: #1bd97b;
    font-size: 16px;
    font-weight: 500;
  }
`;

const Summary = ({
  isDropshipper,
  step,
  onNext,
  shipment,
  payment,
  validNext,
}) => {
  const cost = Number(localStorage.getItem("cost"));
  const costDropship = isDropshipper ? 5900 : 0;
  const costShipment = shipment ? shipment.price : 0;
  const total = cost + costDropship + costShipment;
  return (
    <RightComponent>
      <RightHeader>
        <Heading3>Summary</Heading3>
        <Paragraph>10 items purchased</Paragraph>
        {(step === 2 || step === 3) && shipment && (
          <Expedition>
            <div className="border"></div>
            <p>Delivery estimation</p>
            <label>
              {shipment.name === "GO-SEND"
                ? `Today by ${shipment.name}`
                : shipment.name === "JNE"
                ? `2 days by ${shipment.name}`
                : shipment.name === "Personal Courier"
                ? `1 day by ${shipment.name}`
                : ""}
            </label>
          </Expedition>
        )}
        {step === 3 && shipment && (
          <Expedition>
            <div className="border"></div>
            <p>Payment method</p>
            <label>{payment.name}</label>
          </Expedition>
        )}
      </RightHeader>
      <DetailWrapper>
        <PriceDetail>
          <Price>
            <p>Cost of goods</p>
            <span>{formatNumber(cost)}</span>
          </Price>
          {isDropshipper && (
            <Price>
              <p>Dropshipping Fee</p> <span>{formatNumber(costDropship)}</span>
            </Price>
          )}
          {(step === 2 || step === 3) && shipment && (
            <Price>
              <p>
                <b>{shipment.name}</b> shipment
              </p>{" "}
              <span>
                {shipment && shipment.price ? formatNumber(shipment.price) : 0}
              </span>
            </Price>
          )}
          <Total>
            <h3>Total</h3> <h3>{total ? formatNumber(total) : 0}</h3>
          </Total>
        </PriceDetail>
        {step !== 3 && (
          <NextButton disabled={!validNext} onClick={() => onNext(step + 1)}>
            {step === 1
              ? "Continue to Payment"
              : step === 2
              ? `Pay with ${payment.name ? payment.name : ""}`
              : ""}
          </NextButton>
        )}
      </DetailWrapper>
    </RightComponent>
  );
};

export default Summary;
