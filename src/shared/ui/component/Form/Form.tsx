import { Form as AntdForm, FormProps as AntdFormProps } from 'antd';
import { ReactNode } from 'react';

import FormItem from './FormItem.tsx';

interface FormProps extends AntdFormProps {
  children: ReactNode;
}

function Form({ children, ...restProps }: FormProps) {
  return (
    <AntdForm layout="vertical" validateTrigger="onBlur" {...restProps}>
      {children}
    </AntdForm>
  );
}

Form.Item = FormItem;

export default Form;
