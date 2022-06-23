import React from "react";
import { BackTo, Layout } from "components";
import {
  FirstStepWrapper,
  Header,
  Heading1,
  LeftComponent,
} from "./FirstStep.style";
import Checkbox from "components/Inputs/Checkbox";

const FirstStep = () => {
  const [checked, setChecked] = React.useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <Layout>
      <BackTo destination="cart" />
      <FirstStepWrapper>
        <LeftComponent>
          <Header>
            <Heading1>Delivery Details</Heading1>
            <Checkbox
              checked={checked}
              onClick={handleCheck}
              text="Send as dropshipper"
            />
          </Header>
        </LeftComponent>
      </FirstStepWrapper>
    </Layout>
  );
};

export default FirstStep;
