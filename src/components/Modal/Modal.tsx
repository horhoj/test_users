import { FC, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Portal: FC = ({ children }) => createPortal(children, document.body);

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <Portal>
      <CSSTransition
        in={isOpen}
        nodeRef={ref}
        timeout={300}
        unmountOnExit
        classNames={{
          enter: styles.enter,
          enterActive: styles.enterActive,
          exit: styles.exit,
          exitActive: styles.exitActive,
        }}
      >
        <div className={styles.wrap} onClick={onClose} ref={ref}>
          {children}
        </div>
      </CSSTransition>
    </Portal>
  );
};
