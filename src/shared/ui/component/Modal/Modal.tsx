import { useState, useImperativeHandle, ReactNode, ForwardedRef } from 'react';
import { Modal as AntdModal, ModalProps as AntdModalProps } from 'antd';

import { forwardRef } from '@/shared/ui/forwardRef.ts';

interface ModalProps<State> extends Omit<AntdModalProps, 'children'> {
  title?: string;
  children?: ReactNode | ((state: State) => ReactNode);
  closable?: boolean;
  onOpen?: () => void;
}

export interface ModalHandler<State = unknown> {
  open(): void;
  openWithState(state: State): void;
  close(): void;
  toggle(): void;
}

function Modal<State = unknown>(
  {
    title,
    children,
    closable = false,
    onOpen,
    ...restProps
  }: ModalProps<State>,
  ref: ForwardedRef<ModalHandler<State>>
) {
  const [isVisible, setIsVisible] = useState(false);
  const [modalState, setModalState] = useState<State>(null!);

  function clearModalState() {
    setModalState(null!);
  }

  useImperativeHandle(ref, () => ({
    open() {
      setIsVisible(true);
      onOpen?.();
    },
    openWithState(state: State) {
      setIsVisible(true);
      setModalState(state);
      onOpen?.();
    },
    close() {
      setIsVisible(false);
      clearModalState();
    },
    toggle() {
      setIsVisible(prev => !prev);
    }
  }));

  return (
    <AntdModal
      destroyOnClose
      open={isVisible}
      title={title}
      closable={closable}
      footer={null}
      {...restProps}
    >
      {typeof children === 'function' ? children(modalState) : children}
    </AntdModal>
  );
}

export default forwardRef(Modal);
