import { useRef } from 'react';

import { ModalHandler } from './Modal.tsx';

interface UseModalProps {
  onOpen?: () => void;
  onOpenWithState?: () => void;
  onClose?: () => void;
  onToggle?: () => void;
}

export function useModal<State>({
  onOpen,
  onOpenWithState,
  onClose,
  onToggle
}: UseModalProps = {}) {
  const modalRef = useRef<ModalHandler<State>>(null!);

  return Object.assign(modalRef, {
    open() {
      modalRef.current.open();
      onOpen?.();
    },
    openWithState(state: State) {
      modalRef.current.openWithState(state);
      onOpenWithState?.();
    },
    close() {
      modalRef.current.close();
      onClose?.();
    },
    toggle() {
      modalRef.current.toggle();
      onToggle?.();
    }
  });
}
