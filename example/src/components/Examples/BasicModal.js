import React from 'react';
import { Modal } from 'react-a11y-modal';
import { ReactComponent as Close } from '../../assets/icons/close.svg';

const BasicModal = ({ onAfterClose }) => (
  <Modal.Container className="BasicModal" onAfterClose={onAfterClose}>
    {({ actions }) => (
      <Modal.Body id="my-dialog">
        <h1 id="modal-aria-title" className="ModalHeader__title">
          Basic Modal
        </h1>
        <button onClick={actions.close} className="CloseButton">
          <Close className="ConfirmationModalClose__icon" />
        </button>
        <p>
          This is a very basic modal. You don't even need{' '}
          <code className="CodeHighlight">{`<Modal.Body />`}</code> here and
          could rather add some custom elements, but it's good to have something
          in place for you.
        </p>
      </Modal.Body>
    )}
  </Modal.Container>
);

export default BasicModal;
