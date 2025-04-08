import { FormItemProps as AntdFormItemProps, Form as AntdForm } from 'antd';

import FormItemForRangePicker from './FormItemForRangePicker.tsx';

type FormItemType = 'RangePicker';

interface FormItemProps extends AntdFormItemProps {
  type?: FormItemType;
}

function FormItem(props: FormItemProps) {
  const originRules = props.rules ?? [];
  const rules = props.required
    ? [{ required: true }, ...originRules]
    : originRules;

  const otherProps = { ...props, rules };

  if (props.type === 'RangePicker') {
    return <FormItemForRangePicker {...otherProps} />;
  }
  return <AntdForm.Item {...otherProps} />;
}

export default FormItem;
