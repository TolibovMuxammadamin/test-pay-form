import React from "react";
import InputMask from "react-input-mask";
import { Input } from "antd";
import FormItem from "antd/lib/form/FormItem";

const MaskInput = (props) => {
  const { mask, label, rules, name, value, onChange, placeholder, type } =
    props;
  return (
    <FormItem label={label} rules={rules} name={name}>
      <InputMask mask={mask} value={value} onChange={onChange}>
        {() => <Input placeholder={placeholder} type={type} />}
      </InputMask>
    </FormItem>
  );
};

export default MaskInput;
