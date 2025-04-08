import {
  Button as AntdButton,
  Input as AntdInput,
  Form as AntdForm
} from 'antd';

import { useForm, type ExecuteSubmitHandler } from './useForm.ts';

type TextField = {
  name: string;
  label: string;
  errorMessage: string;
};

interface TestingDemoFormProps {
  textField: TextField;
  onSubmit: ExecuteSubmitHandler<unknown>;
}

function TestingDemoForm({ textField, onSubmit }: TestingDemoFormProps) {
  const { form, handleSubmit, isLoading } = useForm();

  return (
    <AntdForm form={form}>
      <AntdForm.Item
        name={textField.name}
        label={textField.label}
        rules={[{ required: true, message: textField.errorMessage }]}
      >
        <AntdInput />
      </AntdForm.Item>
      <AntdButton disabled={isLoading} onClick={handleSubmit(onSubmit)}>
        Submit
      </AntdButton>
    </AntdForm>
  );
}

export default TestingDemoForm;
