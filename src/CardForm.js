import { Form, Input, Button, Card } from "antd";
import "./CardForm.css";
import MaskInput from "./MaskInput";
import http from "./httpClient";

export const CardForm = () => {
  const onFinish = async (values) => {
    const res = await http.post("payments", values);
    console.log(res);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Card className="card-form">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <MaskInput
          label="Card Number"
          name="card number"
          mask="9999-9999-9999-9999"
          rules={[
            {
              required: true,
              message: "Please input your card number!",
            },
            {
              len: 19,
              message: "Card Number must be 16 characters",
            },
          ]}
          placeholder="0000-0000-0000-0000"
        />

        <MaskInput
          label="Expiration Date"
          name="expDate"
          mask="99/9999"
          rules={[
            {
              required: true,
              message: "Please input your expiration date!",
            },
            {
              len: 7,
              message: "Wrong date",
            },
          ]}
          placeholder="MM/YYYY"
        />

        <MaskInput
          label="CVV"
          name="cvv"
          mask="999"
          rules={[
            {
              required: true,
              message: "Please input your cvv!",
            },
            {
              len: 3,
              message: "Cvv must be 3 characters",
            },
          ]}
          placeholder="000"
        />

        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              required: true,
              message: "Please input your amount!",
            },
          ]}
        >
          <Input type={"number"} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};
