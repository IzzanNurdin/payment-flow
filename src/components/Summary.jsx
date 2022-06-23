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

  h3 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
  }
`;

const Summary = ({ isDropshipper }) => {
  const cost = Number(localStorage.getItem("cost"));
  const costDropship = isDropshipper ? 5900 : 0;
  const total = cost + costDropship;
  return (
    <RightComponent>
      <RightHeader>
        <Heading3>Summary</Heading3>
        <Paragraph>10 items purchased</Paragraph>
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
          <Total>
            <h3>Total</h3> <h3>{formatNumber(total)}</h3>
          </Total>
        </PriceDetail>
      </DetailWrapper>
    </RightComponent>
  );
};

export default Summary;
