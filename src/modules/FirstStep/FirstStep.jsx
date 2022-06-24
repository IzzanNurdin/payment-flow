import React from "react";
import { BackTo, Summary } from "components";
import {
  FirstStepWrapper,
  LeftHeader,
  Heading1,
  LeftComponent,
  Form,
  FormContent,
} from "./FirstStep.style";
import { Checkbox, InputText, InputTextArea } from "components/Inputs";
import { useForm } from "react-hook-form";

const FirstStep = ({ handleChangeStep }) => {
  const [isDropshipper, setDropshipper] = React.useState(false);
  const {
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email:
        localStorage.getItem("email") === "null"
          ? ""
          : localStorage.getItem("email"),
      phone:
        localStorage.getItem("phone") === "null"
          ? ""
          : localStorage.getItem("phone"),
      address:
        localStorage.getItem("address") === "null"
          ? ""
          : localStorage.getItem("address"),
      dropshipperName:
        localStorage.getItem("dropshipperName") === "null"
          ? ""
          : localStorage.getItem("dropshipperName"),
      dropshipperPhone:
        localStorage.getItem("dropshipperPhone") === "null"
          ? ""
          : localStorage.getItem("dropshipperPhone"),
    },
  });

  React.useEffect(() => {
    localStorage.setItem("cost", 500000);
    const tmp = localStorage.getItem("isDropshipper");
    if (tmp === "false" || tmp === "true") {
      setDropshipper(tmp === "false" ? false : true);
    }
  }, []);

  const handleCheck = () => {
    setDropshipper(!isDropshipper);
    localStorage.setItem("isDropshipper", !isDropshipper);
  };

  return (
    <div>
      <BackTo destination="cart" />
      <FirstStepWrapper>
        <LeftComponent>
          <LeftHeader>
            <Heading1>Delivery Details</Heading1>
            <Checkbox
              checked={isDropshipper}
              onClick={handleCheck}
              text="Send as dropshipper"
            />
          </LeftHeader>
          <Form>
            <FormContent>
              <InputText
                name="email"
                label="email"
                placeholder="Email"
                watch={watch}
                register={register}
                error={errors}
                params={{
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                }}
              />
              <InputText
                name="phone"
                label="phone"
                placeholder="Phone number"
                watch={watch}
                register={register}
                params={{
                  required: "Required",
                }}
              />
              <InputTextArea
                name="address"
                label="address"
                placeholder="Address"
                watch={watch}
                register={register}
                required="required"
              />
            </FormContent>
            {isDropshipper && (
              <FormContent>
                <InputText
                  label="dropshipperName"
                  placeholder="Dropshipper name"
                  watch={watch}
                  register={register}
                />
                <InputText
                  label="dropshipperPhone"
                  placeholder="Dropshipper phone number"
                  watch={watch}
                  register={register}
                />
              </FormContent>
            )}
          </Form>
        </LeftComponent>
        <Summary
          isDropshipper={isDropshipper}
          step={1}
          onNext={handleChangeStep}
          validNext={true}
        />
      </FirstStepWrapper>
    </div>
  );
};

export default FirstStep;
