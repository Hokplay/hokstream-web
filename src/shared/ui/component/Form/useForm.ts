import { useState } from 'react';
import { Form as AntdForm, FormInstance as AntdFormInstance } from 'antd';

function useAntdFormInstance<Values>(): AntdFormInstance<Values> {
  // 從 context 取得 Antd form instance
  const formInstance = AntdForm.useFormInstance<Values>();
  if (formInstance) return formInstance;

  // 若沒有，就建立新的 Antd form instance
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [form] = AntdForm.useForm<Values>();
  return form;
}

type ValidateResult<Values> =
  | { valid: true; values: Values }
  | { valid: false; values: null };

export type ExecuteSubmitHandler<Values> = (
  values: Values,
  options: {
    resetForm: () => void;
  }
) => Promise<void> | void;

export function useForm<Values>() {
  const formInstance = useAntdFormInstance<Values>();
  const [isLoading, setIsLoading] = useState(false);

  async function validate(): Promise<ValidateResult<Values>> {
    try {
      const values: Values = await formInstance.validateFields();
      return { valid: true, values };
    } catch {
      return { valid: false, values: null };
    }
  }

  function handleSubmit(executeSubmit: ExecuteSubmitHandler<Values>) {
    return async () => {
      setIsLoading(true);

      const { valid, values } = await validate();

      if (valid) {
        await executeSubmit(values as Values, {
          resetForm() {
            formInstance.resetFields();
          }
        });
      }
      setIsLoading(false);
    };
  }

  return {
    form: formInstance,
    handleSubmit,
    isLoading,
    validate
  };
}
