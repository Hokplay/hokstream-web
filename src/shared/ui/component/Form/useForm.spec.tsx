import {
  afterEach,
  describe,
  expect,
  test,
  vi,
  beforeEach,
  MockInstance
} from 'vitest';
import { renderHook, screen, waitFor, render } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';

import { useForm } from './useForm.ts';
import TestingDemoForm from './TestingDemoForm.tsx';

vi.mock('./useForm.ts', { spy: true });

describe('useForm', () => {
  const fakeField = {
    name: 'fakeField',
    label: 'Fake Field Label',
    errorMessage: 'Please enter Fake Field'
  };
  const fakeFieldValue = 'fake value';

  let user: UserEvent;
  let spyOnSubmit = vi.fn();

  beforeEach(() => {
    user = userEvent.setup();
    spyOnSubmit = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('未填寫必填欄位並送出表單，應顯示必填錯誤訊息', async () => {
    render(<TestingDemoForm textField={fakeField} onSubmit={spyOnSubmit} />);

    await whenSubmitForm();

    await shouldNotCallOnSubmit();
    await shouldShowErrorMessage(fakeField.errorMessage);
  });

  test('有填寫必填欄位並送出表單，不應顯示必填錯誤訊息', async () => {
    render(<TestingDemoForm textField={fakeField} onSubmit={spyOnSubmit} />);
    await givenTextFieldValue(fakeField.label, fakeFieldValue);

    await whenSubmitForm();

    await shouldCallOnSubmit({ [fakeField.name]: fakeFieldValue });
    await shouldNotShowAnyErrorMessages();
  });

  test('isLoading 初始狀態應為 false', () => {
    const { result } = renderHook(() => useForm());
    expect(result.current.isLoading).toBeFalse();
  });

  test('isLoading 初始狀態應為 false，submit 中的狀態應為 true，submit 後的狀態應為 false', async () => {
    render(<TestingDemoForm textField={fakeField} onSubmit={() => {}} />);
    await givenTextFieldValue(fakeField.label, fakeFieldValue);

    await whenSubmitForm();

    const spyUseForm = useForm as unknown as MockInstance<typeof useForm>;

    const [initialLoading, submittingLoading, submittedLoading] =
      spyUseForm.mock.results.map(result => result.value.isLoading);

    expect(initialLoading).toBeFalse();
    expect(submittingLoading).toBeTrue();
    expect(submittedLoading).toBeFalse();
  });

  test('呼叫 handleSubmit() 參數內的 resetForm() 應清空表單所有欄位', async () => {
    const spyOnSubmit = vi.fn((_values, { resetForm }) => {
      resetForm();
    });
    render(<TestingDemoForm textField={fakeField} onSubmit={spyOnSubmit} />);
    await givenTextFieldValue(fakeField.label, fakeFieldValue);

    await whenSubmitForm();

    await shouldClearFieldValue(fakeField.label);
  });

  async function givenTextFieldValue(fieldName: string, value: string) {
    const textField = screen.getByRole('textbox', {
      name: fieldName
    });
    await user.type(textField, value);
  }

  async function whenSubmitForm() {
    const submitButton = screen.getByRole('button', {
      name: 'Submit'
    });
    await user.click(submitButton);
  }

  async function shouldNotCallOnSubmit() {
    await waitFor(() => {
      expect(spyOnSubmit).not.toBeCalled();
    });
  }

  async function shouldCallOnSubmit(values: unknown) {
    await waitFor(() => {
      expect(spyOnSubmit).toBeCalledWith(values, {
        resetForm: expect.any(Function)
      });
    });
  }

  async function shouldShowErrorMessage(errorMessage: string) {
    const fieldErrorMessageElement = await screen.findByText(errorMessage);
    await waitFor(() => {
      expect(fieldErrorMessageElement).toHaveTextContent(errorMessage);
    });
  }

  async function shouldNotShowAnyErrorMessages() {
    await waitFor(() => {
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });
  }

  async function shouldClearFieldValue(fieldName: string) {
    await waitFor(() => {
      const textField = screen.getByRole('textbox', {
        name: fieldName
      });
      expect(textField).toHaveValue('');
    });
  }
});
